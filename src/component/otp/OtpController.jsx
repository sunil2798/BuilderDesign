import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";

// Customizable Area Start
import React, { createRef } from 'react';

interface PayloadObject{
  token: string,
  phoneNumber:string,
  otpPin:number,
}

// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

export interface S {
  // Customizable Area Start
  otp: string;
  otpAuthToken: string;
  userAccountID: string;
  labelInfo: string;
  toMessage: string;
  isFromForgotPassword: boolean;
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
  otp6: string;
  timer:number;
  fiveMinuteTimer:number;
  apiResponseError:string;
  errors: any;
  errorsFive:any;
  isTimerActive: boolean;
  sendOtpClickCount:any;
  isFiveMinuteTimerActive:any
  isResendDisabled:boolean;
  submitDisabled:boolean;
  loginPayloadData: PayloadObject | null
  // Customizable Area End
}

export interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class OTPInputAuthController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  otpAuthApiCallId: any;
  btnTxtSubmitOtp: string;
  placeHolderOtp: string;
  labelInfo: string = "";
  submitButtonColor: any = configJSON.submitButtonColor;
  timerId:any;
  otp1Ref: any;
  otp2Ref: any;
  otp3Ref: any;
  otp4Ref: any;
  otp5Ref: any;
  otp6Ref: any;
  timerInterval: NodeJS.Timeout | null = null;
  fiveMinuteTimerInterval:NodeJS.Timeout | null = null;
  otpApiCallId:string = "";

  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
      // Customizable Area End
    ];

    this.receive = this.receive.bind(this);

    runEngine.attachBuildingBlock(this, this.subScribedMessages);

    // Customizable Area Start
    this.state = {
      otp: "",
      otpAuthToken: "",
      userAccountID: "",
      labelInfo: configJSON.labelInfo,
      toMessage: "",
      isFromForgotPassword: false,
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
      timer:0,
      fiveMinuteTimer:0,
      apiResponseError:"",
      errors: {},
      errorsFive:{},
      isTimerActive: false,
      sendOtpClickCount:"",
      isFiveMinuteTimerActive:"",
      isResendDisabled:false,
      submitDisabled:false,
      loginPayloadData: null
    };
    this.timerId = null;
    this.btnTxtSubmitOtp = configJSON.btnTxtSubmitOtp;
    this.placeHolderOtp = configJSON.placeHolderOtp;
    this.submitOtp = this.submitOtp.bind(this);
    this.otp1Ref = createRef();
    this.otp2Ref = createRef();
    this.otp3Ref = createRef();
    this.otp4Ref = createRef();
    this.otp5Ref = createRef();
    this.otp6Ref = createRef();
    // Customizable Area End
  }

  async receive(from: String, message: Message) {
    // Customizable Area Start
      if (getName(MessageEnum.NavigationPayLoadMessage) === message.id) {

      const payLoadData = message.getData(
        getName(MessageEnum.NavigationPayLoadMessage)
      );

      this.setState({
        loginPayloadData: payLoadData
      })

      
    }else if(getName(MessageEnum.RestAPIResponceMessage) === message.id &&
    this.otpApiCallId != null &&
    this.otpApiCallId ===
    message.getData(getName(MessageEnum.RestAPIResponceDataMessage))){
      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
    }
    // Customizable Area End
  }

  // Customizable Area Start

  async submitOtp() {
    let isFieldValidate = this.custumValidate();
  if (isFieldValidate) {
    this.setState({
      submitDisabled: false
    })

    const header = {
      "Content-Type": "application/json",
      token: this.state.loginPayloadData?.token
    };
    const bodyData = {
      full_phone_number: this.state.loginPayloadData?.phoneNumber,
      pin: this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4 +this.state.otp5 + this.state.otp6
    }
    
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.otpApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "account_block/accounts/sms_confirmations"
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(bodyData)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "POST"
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true; 
  }  
  else {
    this.setState({
      submitDisabled: true
    })
  }
  }

handlSendOtp = () => {
 return !this.state.isTimerActive ? this.handleResendOtp : () => { }
}

handleDisable = () => {
  return this.state.submitDisabled ? 0.4 : 1
}

  btnSubmitOTPProps = {
    onPress: () => this.submitOtp(),
  };

  txtMobilePhoneOTPWebProps = {
    onChangeText: (text: string) => this.setState({ otp: text }),
  };

  txtMobilePhoneOTPMobileProps = {
    ...this.txtMobilePhoneOTPWebProps,
    keyboardType: "numeric",
  };

  txtMobilePhoneOTPProps = this.isPlatformWeb()
    ? this.txtMobilePhoneOTPWebProps
    : this.txtMobilePhoneOTPMobileProps;


    onPasteTextField = (event: any) => {
      const otp = event.clipboardData.getData('text');
      if (otp && otp.length >= 6) {
        this.setState({
          otp1: otp.charAt(0),
          otp2: otp.charAt(1),
          otp3: otp.charAt(2),
          otp4: otp.charAt(3),
          otp5: otp.charAt(4),
          otp6: otp.charAt(5),
        });
      }
    }
    onChangeTextField = (event: any, stateName: any, nextField: any) => {
      this.setStateForOtpField(event, stateName);
      if (event.target.value.length === 1) {
        const nextfield = this.getInputRef(nextField);
        if (nextfield.current) {
          nextfield.current.focus();
        }
      }
    }
    onTextFieldKeyDown = (event: any, prevField: any, currentOtpState: string) => {
      let prevfield = this.getInputRef(prevField);
      if (event.key === 'Backspace') {
        if (currentOtpState.length == 0 && prevfield.current) {
          prevfield.current.focus();
        }
      }
    }
    setStateForOtpField = (event: React.ChangeEvent<HTMLInputElement>, stateName: 'otp1' | 'otp2' | 'otp3' | 'otp4' | 'otp5' | 'otp6') => {
      const setStateFn = {
        otp1: () => this.setState({ otp1: event.target.value }),
        otp2: () => this.setState({ otp2: event.target.value }),
        otp3: () => this.setState({ otp3: event.target.value }),
        otp4: () => this.setState({ otp4: event.target.value }),
        otp5: () => this.setState({ otp5: event.target.value }),
        otp6: () => this.setState({ otp6: event.target.value }),
      }
      setStateFn[stateName]();
    }
    sliceInputValue = (event: any) => {
      return Math.max(0, parseInt(event.target.value)).toString().slice(0, 1);
    }
    getInputRef = (refName: 'otp1' | 'otp2' | 'otp3' | 'otp4' | 'otp5' | 'otp6') => {
      
      const otpInputRef = {
        otp1: () => this.otp1Ref,
        otp2: () => this.otp2Ref,
        otp3: () => this.otp3Ref,
        otp4: () => this.otp4Ref,
        otp5: () => this.otp5Ref,
        otp6: () => this.otp6Ref,
      }
      return otpInputRef[refName]();
    }
  
    startFiveMinuteTimer = () => {
      const fiveMinuteLimit = 300;
      this.setState({ fiveMinuteTimer: fiveMinuteLimit, isFiveMinuteTimerActive: true });
      this.fiveMinuteTimerInterval = setInterval(() => {
        const { fiveMinuteTimer } = this.state;
        if (fiveMinuteTimer > 0) {
          this.setState({ fiveMinuteTimer: fiveMinuteTimer - 1 });
        } else {
          if (this.fiveMinuteTimerInterval !== null) {
            clearInterval(this.fiveMinuteTimerInterval);
          }
          this.setState({ isFiveMinuteTimerActive: false });
        }
      }, 1000);
    };

    startTimer = () => {
      const timerLimit = 20;
      this.setState({ timer: timerLimit ,isTimerActive:false });
      this.timerInterval = setInterval(() => {
        const { timer } = this.state;
        if (timer > 0) {
          this.setState({ timer: timer - 1, isTimerActive:true });
        } else {
          if (this.timerInterval !== null) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
            this.setState({isTimerActive:false})
          }
        }
      }, 1000); 
    };

    handleResendOtp = () => {
      if (this.state.sendOtpClickCount >= 3 && !this.state.isFiveMinuteTimerActive) {
        this.setState({
          errorsFive: {
            message: "Try after 5 minutes.",
          },
        });
        this.startFiveMinuteTimer();
        return;
      }
      setTimeout(() => {
        this.setState({
          isResendDisabled: false,
          sendOtpClickCount: this.state.sendOtpClickCount + 1,
          errors: {}, 
        });
        this.startTimer();
      }, 500); 

      this.setState({ timer: 20 });
      this.startTimer(); 
    };

    handleNavigateMobileRegister = () => {
     this.props.navigation.navigate("EmailAccountLoginBlock")
    }

    custumValidate = () => {
    const otp = this.state.otp1.concat(this.state.otp2, this.state.otp3, this.state.otp4, this.state.otp5, this.state.otp6);
    if (otp == '') {
      this.setState({
        errors: {
          message: "Please Provide Valid Otp"
        }
      })
    } else if (otp.length < 6) {
      this.setState({
        errors: {
          message: "Enter Valid OTP"
        }
      })
    } else {
      this.setState({
        errors: {}
      })
    }
    return this.state.errors;
  }

  // Customizable Area End
}
