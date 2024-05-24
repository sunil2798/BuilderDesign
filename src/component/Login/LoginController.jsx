import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { Message } from "../../../framework/src/Message";
import { setStorageData } from "../../../framework/src/Utilities";

// Customizable Area Start
interface LogInResponse {
  meta: {
    token: string;
  };
  data: {
    attributes: { type: string ,is_profile_complete:boolean};
    id: string;
  };
  errors?:
  | {
    failed_login?: string;
  }[]
  | { password_confirmation?: string[]; failed_login?: string };
}
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  id: string;
}

export interface S {
  // Customizable Area Start
  password: string;
  showPassword: boolean;
  isCheckboxChecked: boolean;
  email: string;
  apiErrorLogIn: string;
  flash: boolean;
  flashSlackPo: boolean;
  flashEmailSlack:boolean;
  fromShoppingCart:boolean;
  // Customizable Area End
}

export interface SS {
  // Customizable Area Start
  id: string;
  // Customizable Area End
}

export default class LogInPetOwnerController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  loginCallId: string = "";

  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      // Customizable Area Start
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionResponseMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
      // Customizable Area End
    ];
    this.receive = this.receive.bind(this);

    runEngine.attachBuildingBlock(this, this.subScribedMessages);

    this.state = {
      // Customizable Area Start

      password: "",
      showPassword: false,
      isCheckboxChecked: false,
      email: "",
      apiErrorLogIn: "",
      flash: false,
      flashSlackPo: false,
      flashEmailSlack:false,
      fromShoppingCart:false
      // Customizable Area End
    };

    // Customizable Area Start
    // Customizable Area End
  }
  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (message.id === getName(MessageEnum.NavigationPayLoadMessage)) {

      const sessionData = message.getData(getName(MessageEnum.SessionResponseData));
      
      
        
      if (sessionData) {
        
        
        this.setState({ flashEmailSlack: sessionData?.flashSlack,fromShoppingCart:sessionData.fromreservation })
      }

      return;
    }
    // Customizable Area End
    if (getName(MessageEnum.RestAPIResponceMessage) !== message.id) {
    // Customizable Area Start
    
    // Customizable Area End
      return;
    }
    // Customizable Area Start

  


    const apiRequestCallId = message.getData(
      getName(MessageEnum.RestAPIResponceDataMessage)
    );
    const responseJson = message.getData(
      getName(MessageEnum.RestAPIResponceSuccessMessage)
    );
    if (apiRequestCallId === this.loginCallId) {
      this.handleResForSignUp(responseJson);
    }

    // Customizable Area End
  }
  // Customizable Area Start

  async componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const flashValue = urlParams.get("flash");
    if (flashValue) {
      this.setState({ flash: true });
    }

   
  
  }


  handleResForSignUp = (responseJson: LogInResponse) => {
    if (responseJson.meta) {
      this.handleSuccessfulLogin(responseJson);
    } else if (Array.isArray(responseJson.errors)) {
      if (responseJson.errors[0].failed_login) {
        this.setState({ apiErrorLogIn: responseJson.errors[0].failed_login });
      }
    }
  };
  
  handleSuccessfulLogin = (responseJson: LogInResponse) => {
    const { data } = responseJson;
    const { attributes } = data;
  
    if (attributes.type === "pet_owner") {
      localStorage.setItem("authToken", responseJson.meta.token);
      sessionStorage.setItem("profileIdPo", data.id);
      localStorage.setItem("userType", "PO");
      this.setState({ apiErrorLogIn: "", flashSlackPo: true });
      this.setState({ email: "", password: "" });
  
      setStorageData('accountDetails', JSON.stringify(attributes));
  
      if (this.state.fromShoppingCart) {
        this.onShoppingCart()
      } else {
        this.redirectUser(attributes.is_profile_complete);
      }
    } else {
      this.setState({ apiErrorLogIn: "Email is Invalid" });
    }
  };
  
  redirectUser = (isProfileComplete: boolean) => {
    const redirectPath = isProfileComplete ? "/LandingPagePO" : "/contentManagement";
    setTimeout(() => {
      window.location.href = redirectPath;
    }, 1000);
  };
  
  
  

  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    this.setState({ email });
  };

  handlePasswordToggle = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      isCheckboxChecked: !prevState.isCheckboxChecked,
    }));
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };
  handleClose = () => {
    this.setState({ flash: false,flashEmailSlack:false });
  };
  callApiForPoLogIn = (event: any) => {
    event.preventDefault();
    const loginHeader = {
      "Content-Type": "application/json",
    };

    const loginRequestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    loginRequestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `bx_block_login/logins`
    );

    loginRequestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(loginHeader)
    );

    loginRequestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify({
        data: {
          attributes: {
            email: this.state.email,
            password: this.state.password,
          },
          type: "pet_owner",
        },
      })
    );

    loginRequestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "POST"
    );
    this.loginCallId = loginRequestMessage.messageId;
    runEngine.sendMessage(loginRequestMessage.id, loginRequestMessage);
  };

  onShoppingCart=()=>{
    const message1: Message = new Message(getName(MessageEnum.NavigationMessage));
    message1.addData(getName(MessageEnum.NavigationTargetMessage), 'ShoppingCartOrders');
    message1.addData(getName(MessageEnum.NavigationPropsMessage), this.props);


    const raiseMessage1: Message = new Message(getName(MessageEnum.NavigationPayLoadMessage));
    raiseMessage1.addData(getName(MessageEnum.SessionResponseData), { orderID: "", fromReservation: false });
    message1.addData(getName(MessageEnum.NavigationRaiseMessage), raiseMessage1);

    this.send(message1);
  }
  // Customizable Area End
}
