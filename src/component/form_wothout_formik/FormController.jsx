import { IBlock } from "../../../framework/src/IBlock";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import { Message } from "../../../framework/src/Message";

// Customizable Area Start
import {
  setStorageData,
  getStorageData,
} from "../../../framework/src/Utilities";

export interface Representative {
  representativeGender: string;
  representativeFirstName: string;
  representativeSurname: string;
  representativePhCountry: string;
  representativePhNumber: string
}
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  // Customizable Area Start
  id: string;
  navigation: any;
  // Customizable Area End
}

interface S {
  // Customizable Area StartactiveStep: number;
  addminusdogs: number;
  activeStep: number;
  addminuscats: number;
  addRoomDog: number;
  addRoomCat: number;
  firstPlace: boolean;
  secondPlace: boolean;
  thirdPlace: boolean;
  fourthPlace: boolean;
  form4: boolean;
  form3: boolean;
  propertyName: string;
  licenseNumber: string;
  country: string;
  streetAddressFirst: string;
  streetAddressSecond: string;
  suite: string;
  city: string;
  postcode: string;
  phNoCountry: string;
  countryCode: string;
  phoneNumber: any;
  email: string;
  checkboxChecked: boolean;
  error: {
    [key: string]: string;
  };
  pet_type: string;
  service_type: string;
  MesErrFormFirst: typeof configJSON.MesErrFormFirst;
  MesErrFormSecond: typeof configJSON.MesErrFormSecond;
  accountData: any;
  modelOpen: boolean;
  saveDraftWarn: boolean;
  saveDraftWarnSec: boolean;
  saveDraftWarnThird: boolean;
  saveDraftWarnFour: boolean;
  emailError: boolean;
  emailErrorText: string;
  selectedServices: any[];
  copyDataChecked: boolean;
  anchorEl: null | EventTarget;
  phAnchorEl: null | EventTarget;
  repoAnchorEl: null | EventTarget;
  businessName: string;
  legalBusinessName: string;
  vatRegistration: string;
  vatNumber: any;
  vatNumberError: string;
  representativeGender: string;
  representativeFirstName: string;
  representativeSurname: string;
  representativePhCode: string;
  representativePhCountry: string;
  representativePhNumber: number | null;
  representativeAddressOne: string;
  representativeAddressTwo: string;
  representativeCity: string;
  representativeCounty: string;
  representativePostCode: string;
  representativeCountryRegion: string;
  yourCounty: string;
  anchorElgender: any;
  representativeDetails: Representative[];
  anchorElSalutations: (HTMLElement | null)[];
  repErrors: Representative[];
  hotelId: string;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  // Customizable Area End
}

export default class BussinessOwnerDetailsFirst extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  addHotelCallId: string = "";
  accountDataGetId: string = "";
  profileId: string = ";";
  updateHotelCallId: string = "";
  apiCallIdUpdateDeleteReservationDetails: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    // Customizable Area End
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      // Customizable Area Start
      getName(MessageEnum.SessionResponseMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      activeStep: 1,
      addminusdogs: 0,
      addminuscats: 0,
      addRoomDog: 0,
      addRoomCat: 0,
      firstPlace: false,
      secondPlace: false,
      thirdPlace: false,
      fourthPlace: false,
      form4: false,
      form3: false,
      propertyName: "",
      licenseNumber: "",
      country: "United Kingdom",
      streetAddressFirst: "",
      streetAddressSecond: "",
      suite: "",
      city: "",
      postcode: "",
      phNoCountry: "United Kingdom (+44)",
      countryCode: "",
      phoneNumber: null,
      email: "",
      error: {},
      checkboxChecked: false,
      pet_type: "",
      service_type: "",
      MesErrFormFirst: configJSON.MesErrFormFirst,
      MesErrFormSecond: configJSON.MesErrFormSecond,
      accountData: {},
      modelOpen: false,
      saveDraftWarn: false,
      saveDraftWarnSec: false,
      saveDraftWarnThird: false,
      saveDraftWarnFour: false,
      emailError: false,
      emailErrorText: "",
      selectedServices: [],
      copyDataChecked: false,
      anchorEl: null,
      phAnchorEl: null,
      repoAnchorEl: null,
      businessName: "",
      legalBusinessName: "",
      vatRegistration: "Yes",
      vatNumber: "",
      vatNumberError: "",
      representativeGender: "Mr.",
      representativeFirstName: "",
      representativeSurname: "",
      representativePhCode: "(+44)",
      representativePhCountry: "United Kingdom (+44)",
      representativePhNumber: null,
      representativeAddressOne: "",
      representativeAddressTwo: "",
      representativeCity: "",
      representativeCounty: "",
      representativePostCode: "",
      representativeCountryRegion: "United Kingdom",
      yourCounty: "",
      anchorElgender: null,
      representativeDetails: [
        {

          representativeGender: "Mr.",
          representativeFirstName: "",
          representativeSurname: '',
          representativePhCountry: 'United Kingdom (+44)',
          representativePhNumber: ""
        }

      ],
      anchorElSalutations: [null],
      repErrors: [],
      hotelId: ""
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (message.id === getName(MessageEnum.NavigationPayLoadMessage)) {
      const sessionData = message.getData(getName(MessageEnum.HotelDetails));
      if (sessionData) {
        this.setState({ activeStep: sessionData.activeStep, hotelId: sessionData.hotelId }, () => {

          setStorageData("hotelId", sessionData.hotelId)
        })
      }

    }
    const apiRequestCallId = message.getData(
      getName(MessageEnum.RestAPIResponceDataMessage)
    );
    const responseJson = message.getData(
      getName(MessageEnum.RestAPIResponceSuccessMessage)
    );
    if (apiRequestCallId === this.accountDataGetId) {
      this.setState({
        accountData: responseJson.data,
      });
    }

    if (apiRequestCallId === this.addHotelCallId) {
      if (responseJson) {
        this.setState({
          hotelId: responseJson.data.id
        }, () => setStorageData("hotelId", responseJson.data.id))
        if (this.state.saveDraftWarn) {
          this.props.navigation.navigate("PropertyDetails")
        }
      }
    }

    // updateHotelCallId

    if (apiRequestCallId === this.updateHotelCallId) {
      this.updateHotelResponse(responseJson)
    }


    // Customizable Area End
  }

  // Customizable Area Start

  updateHotelResponse = (responseJson: any) => {
    if (responseJson) {

      if (this.state.saveDraftWarnSec || this.state.saveDraftWarnThird) {
        this.props.navigation.navigate("PropertyDetails")
      }
    }
  }

  async componentDidMount() {
    this.setState({
      activeStep: 1,
    });
    const BussinessOwnerDetailsSecondBack = JSON.parse(
      await getStorageData("BussinessOwnerDetailsSecondBack")
    );

    this.accountDataGet();
    await this.firstFormThirdData();
    await this.petTypes();

    if (BussinessOwnerDetailsSecondBack == "true") {
      await this.allDataRestore();
    }
  }

  firstFormFourData = async () => {
    const firstFormFourData = JSON.parse(
      await getStorageData("firstFormFourData")
    );

    firstFormFourData &&
      this.setState({
        phNoCountry: firstFormFourData.phNoCountry,
        countryCode: firstFormFourData.countryCode,
        phoneNumber: firstFormFourData.phoneNumber || null,
        email: firstFormFourData.email || "",
        copyDataChecked: firstFormFourData.copyDataChecked,
        representativeGender: firstFormFourData.representativeGender,
        representativeFirstName: firstFormFourData.representativeFirstName,
        representativeSurname: firstFormFourData.representativeSurname,
        representativePhCode: firstFormFourData.representativePhCode,
        representativePhCountry: firstFormFourData.representativePhCountry,
        representativePhNumber: firstFormFourData.representativePhNumber,
        representativeAddressOne: firstFormFourData.representativeAddressOne,
        representativeAddressTwo: firstFormFourData.representativeAddressTwo,
        representativeCity: firstFormFourData.representativeCity,
        representativeCounty: firstFormFourData.representativeCounty,
        representativePostCode: firstFormFourData.representativePostCode,
        representativeCountryRegion:
          firstFormFourData.representativeCountryRegion,
       
      });
  };

  petTypes = async () => {
    const pet_types = JSON.parse(await getStorageData("pet_type"));

    pet_types &&
      this.setState({
        pet_type: pet_types.pet_type || "",
        firstPlace: pet_types.firstPlace || false,
        secondPlace: pet_types.secondPlace || false,
        thirdPlace: pet_types.thirdPlace || false,
        fourthPlace: pet_types.fourthPlace || false,

      });
  };

  firstFormThirdData = async () => {
    const firstFormThirdData = JSON.parse(
      await getStorageData("firstFormThirdData")
    );
    firstFormThirdData &&
      this.setState({
        propertyName: firstFormThirdData.propertyName || "",
        licenseNumber: firstFormThirdData.licenseNumber || null,
        country: firstFormThirdData.country || "United Kingdom",
        streetAddressFirst: firstFormThirdData.streetAddressFirst || "",
        suite: firstFormThirdData.suite || "",
        city: firstFormThirdData.city || "",
        postcode: firstFormThirdData.postcode || "",
        streetAddressSecond: firstFormThirdData.streetAddressSecond,
        yourCounty: firstFormThirdData.yourCounty,
        businessName: firstFormThirdData.businessName,
        legalBusinessName: firstFormThirdData.legalBusinessName,
        vatRegistration: firstFormThirdData.vatRegistration,
        vatNumber: firstFormThirdData.vatNumber,

      });
  };

  allDataRestore = async () => {
    const { saveDraftWarn, saveDraftWarnSec, saveDraftWarnThird } = this.state;
    const allData = JSON.parse(await getStorageData("allDataBoFirstStep"));
    const BussinessOwnerDetailsSecondBack = "";
    setStorageData(
      "BussinessOwnerDetailsSecondBack",
      JSON.stringify(BussinessOwnerDetailsSecondBack)
    );

    this.setState({
      activeStep: allData.activeStep,
    });

    if (saveDraftWarn === false) {
      this.restoreSaveDraftWarn(allData);
    }
    if (saveDraftWarnSec === false) {
      this.restoreSaveDraftWarnThird(allData);
    }
    if (saveDraftWarnThird === false) {
      this.restoreSaveDraftWarnFour(allData);
    }
  };

  restoreSaveDraftWarnSec = (allData: {
    service_type: string;
    fourthPlace: boolean;
    fifthPlace: boolean;
    sixPlace: boolean;
  }) => {
    this.setState({
      service_type: allData.service_type || "",
      fourthPlace: allData.fourthPlace || false,
    });
  };

  restoreSaveDraftWarn = (allData: {
    fourthPlace: boolean;
    pet_type: string;
    firstPlace: boolean;
    secondPlace: boolean;
    thirdPlace: boolean;
  }) => {
    this.setState({
      pet_type: allData.pet_type || "",
      firstPlace: allData.firstPlace || false,
      secondPlace: allData.secondPlace || false,
      thirdPlace: allData.thirdPlace || false,
      fourthPlace: allData.fourthPlace || false,
    });
  };

  restoreSaveDraftWarnThird = (allData: {
    vatNumber: any;
    vatRegistration: string;
    businessName: string;
    yourCounty: string;
    streetAddressSecond: string;
    propertyName: string;
    licenseNumber: string;
    country: string;
    streetAddressFirst: string;
    suite: string;
    city: string;
    postcode: string;
  }) => {
    this.setState({
      propertyName: allData.propertyName || "",
      licenseNumber: allData.licenseNumber,
      country: allData.country,
      streetAddressFirst: allData.streetAddressFirst,
      suite: allData.suite,
      city: allData.city,
      postcode: allData.postcode,
      streetAddressSecond: allData.streetAddressSecond,
      yourCounty: allData.yourCounty,
      businessName: allData.businessName,
      legalBusinessName: allData.businessName,
      vatRegistration: allData.vatRegistration,
      vatNumber: allData.vatNumber,
    });
  };

  restoreSaveDraftWarnFour = (allData: {
    representativeSurname: string;
    representativePhCountry: string;
    representativePhNumber: number | null;
    representativeCounty: string;
    representativeCountryRegion: string;
    representativePostCode: string;
    representativeCity: string;
    representativeAddressTwo: string;
    representativeAddressOne: string;
    representativePhCode: string;
    representativeFirstName: string;
    representativeGender: string;
    phNoCountry: string;
    countryCode: string;
    phoneNumber: number;
    email: string;
    copyDataChecked: boolean;
    
  }) => {
    this.setState({
      phNoCountry: allData.phNoCountry,
      countryCode: allData.countryCode,
      phoneNumber: allData.phoneNumber,
      email: allData.email,
      copyDataChecked: allData.copyDataChecked,
      representativeGender: allData.representativeGender,
      representativeFirstName: allData.representativeFirstName,
      representativeSurname: allData.representativeSurname,
      representativePhCode: allData.representativePhCode,
      representativePhCountry: allData.representativePhCountry,
      representativePhNumber: allData.representativePhNumber,
      representativeAddressOne: allData.representativeAddressOne,
      representativeAddressTwo: allData.representativeAddressTwo,
      representativeCity: allData.representativeCity,
      representativeCounty: allData.representativeCounty,
      representativePostCode: allData.representativePostCode,
      representativeCountryRegion: allData.representativeCountryRegion,
      
    });
  };

  handelCountryOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCountryClose = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    const value = event.target.value
      ? (event.target.value as string)
      : "United Kingdom";
    this.setState({
      country: value,
    });
  };

  handelCountry = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    const values = event.target.value
      ? (event.target.value as string)
      : "United Kingdom";
    this.setState({
      representativeCountryRegion: values,
    });
  };

  handleRadioChanges = (value: string) => {
    if (value == "No") {
      this.setState({
        vatRegistration: value,
        vatNumberError: "",
        vatNumber: null,
      });
    } else {
      this.setState({
        vatRegistration: value,
        vatNumberError: "",
      });
    }
  };

  handelRepoCountryOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ repoAnchorEl: event.currentTarget });
  };

  handelCountryOpens = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ phAnchorEl: event.currentTarget });
  };

  handelPhCountryCloses = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    const value = event.target.value
      ? (event.target.value as string)
      : "United Kingdom (+44)";
    this.setState({
      phNoCountry: value,
    });
  };

  handelRepoPhCountryCloses = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    const values = event.target.value
      ? (event.target.value as string)
      : "United Kingdom (+44)";
    this.setState({
      representativePhCountry: values,
    });
  };

  setStoragAllData = () => {
    const allDataBoFirstStep = {
      firstPlace: this.state.firstPlace,
      secondPlace: this.state.secondPlace,
      thirdPlace: this.state.thirdPlace,
      pet_type: this.state.pet_type,
      fourthPlace: this.state.fourthPlace,
      service_type: this.state.service_type,
      propertyName: this.state.propertyName,
      licenseNumber: this.state.licenseNumber,
      country: this.state.country,
      streetAddressFirst: this.state.streetAddressFirst,
      suite: this.state.suite,
      city: this.state.city,
      postcode: this.state.postcode,
      phNoCountry: this.state.phNoCountry,
      countryCode: this.state.countryCode,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      activeStep: this.state.activeStep,
      copyDataChecked: this.state.copyDataChecked,
      streetAddressSecond: this.state.streetAddressSecond,
      yourCounty: this.state.yourCounty,
      businessName: this.state.businessName,
      legalBusinessName: this.state.legalBusinessName,
      vatRegistration: this.state.vatRegistration,
      vatNumber: this.state.vatNumber,
     
    };
    setStorageData("allDataBoFirstStep", JSON.stringify(allDataBoFirstStep));
    const BussinessOwnerDetailsSecondBack = "";
    setStorageData(
      "BussinessOwnerDetailsSecondBack",
      JSON.stringify(BussinessOwnerDetailsSecondBack)
    );
    this.props.navigation.navigate("BussinessOwnerDetailsSecond");
  };



  saveDraftData = () => {
    if (this.state.activeStep === 1) {
      const pet_type = {
        firstPlace: this.state.firstPlace,
        secondPlace: this.state.secondPlace,
        thirdPlace: this.state.thirdPlace,
        fourthPlace: this.state.fourthPlace,
        pet_type: this.state.pet_type,
      };

      this.setState({
        saveDraftWarn: true,
      }, () => { this.createInitial() });

      setStorageData("pet_type", JSON.stringify(pet_type));
      this.handleModelClose();
    } else if (this.state.activeStep === 2) {

      this.updateInitial()

      const firstFormThirdData = {
        propertyName: this.state.propertyName,
        licenseNumber: this.state.licenseNumber,
        country: this.state.country,
        streetAddressFirst: this.state.streetAddressFirst,
        suite: this.state.suite,
        city: this.state.city,
        postcode: this.state.postcode,
        streetAddressSecond: this.state.streetAddressSecond,
        yourCounty: this.state.yourCounty,
        businessName: this.state.businessName,
        legalBusinessName: this.state.legalBusinessName,
        vatRegistration: this.state.vatRegistration,
        vatNumber: this.state.vatNumber,
        saveDraftWarnThird: true,
        
      };

      this.setState({
        saveDraftWarnSec: true,
      });

      setStorageData("firstFormThirdData", JSON.stringify(firstFormThirdData));
      this.handleModelClose();
    } else if (this.state.activeStep === 3) {

      this.updateInitial()

      const firstFormFourData = {
        phNoCountry: this.state.phNoCountry,
        countryCode: this.state.countryCode,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        copyDataChecked: this.state.copyDataChecked,
      };

      this.setState({
        saveDraftWarnThird: true,
      });

      setStorageData("firstFormFourData", JSON.stringify(firstFormFourData));
      this.handleModelClose();
    } else {
      this.handleModelClose();
    }
  };

  saveDraftModelOpen = () => {
    this.setState({
      modelOpen: true,
    });
  };
  handleModelClose = () => {
    this.setState({
      modelOpen: false,
    });
  };

  copyData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { accountData } = this.state;

    if (event.target.checked && accountData && accountData.attributes) {
      this.setState({
        phoneNumber: accountData.attributes.full_phone_number || null,
        email: String(accountData.attributes.email),
        phNoCountry:
          accountData.attributes.phone_number_country_code ||
          "United Kingdom (+44)",
        copyDataChecked: true,
        error: {},
        emailError: false,
        emailErrorText: "",
      });
    } else {
      this.setState({
        phoneNumber: null,
        email: "",
        copyDataChecked: false,
        phNoCountry: "United Kingdom (+44)",
      });
    }
  };

  handleFirstClick(value: string) {
    const { firstPlace, secondPlace, thirdPlace } = this.state;

    if (value === "dog_hotel") {
      this.setState({
        firstPlace: !this.state.firstPlace,
        secondPlace: false,
        thirdPlace: false,
        fourthPlace: false,
        pet_type: value,
      });
    } else if (value === "cat_hotel") {
      this.setState({
        secondPlace: !this.state.secondPlace,
        firstPlace: false,
        thirdPlace: false,
        fourthPlace: false,
        pet_type: value,
      });
    } else if (value === "dog_cat_hotel") {
      this.setState({
        thirdPlace: !this.state.thirdPlace,
        firstPlace: false,
        secondPlace: false,
        fourthPlace: false,
        pet_type: value,
      });
    } else if (value === "daycare_services") {
      this.setState({
        thirdPlace: false,
        firstPlace: false,
        secondPlace: false,
        fourthPlace: !this.state.fourthPlace,
        pet_type: value,
      });
    } else if (
      firstPlace === false &&
      secondPlace === false &&
      thirdPlace === false
    ) {
      this.setState({
        thirdPlace: false,
        firstPlace: false,
        secondPlace: false,
        fourthPlace: false,
        pet_type: value,
      });
    }
  }

  toggleService = (value: string) => {
    const { selectedServices } = this.state;
    const index = selectedServices.indexOf(value);

    if (index === -1) {
      return [...selectedServices, value];
    } else {
      return selectedServices.filter((service) => service !== value);
    }
  };

  handleBack = () => {
    if (this.state.activeStep === 1) {
      const BussinessOwnerDetailsSecondBack = "";
      setStorageData(
        "BussinessOwnerDetailsSecondBack",
        JSON.stringify(BussinessOwnerDetailsSecondBack)
      );
      this.props.navigation.navigate("BownerDetaild");
    } else {
      this.setState({ activeStep: this.state.activeStep - 1 });
    }
  };

  handleChangeThirdForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    let error = "";
    if (name === "vatNumber" && value !== "" && isNaN(Number(value))) {
      error = "Please enter a valid number";
    } else if (name === "vatNumber") {
      this.setState({
        vatNumberError: "",
      });
    }

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      error: {
        ...prevState.error,
        [`${name}Error`]: error,
      },
    }));
  };

  handleChangeSelect = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target as HTMLSelectElement;
    let error = "";
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      error: {
        ...prevState.error,
        [`${name}Error`]: error,
      },
    }));
  };



  handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;


    let error = ""
    if (name === "email") {
      const emailType = configJSON.emailType;


      if (!emailType.test(value)) {
        this.setState((prevState) => ({
          ...prevState,

          [`${name}Error`]: true,

        }));

      } else {
        this.setState({
          emailError: false,
          emailErrorText: "",
        });
      }
    }

    if (name === "representativeCounty" || name === "yourCounty") {
      const alphabeticCharactersRegex = /^[a-zA-Z]*$/;

      if (!alphabeticCharactersRegex.test(value)) {
        this.setState((prevState) => ({
          ...prevState,
          [`${name}Error`]: "Invalid characters. Only alphabetic characters are allowed.",
        }));

        return;
      }
    }
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      error: {
        ...prevState.error,
        [`${name}Error`]: error,
      },
    }));


  };

  checkAllFieldValidate = (field: keyof S): boolean => {
    const activeStep = this.state.activeStep;
    const MesErrForm =
      activeStep === 2
        ? configJSON.MesErrFormFirst
        : configJSON.MesErrFormSecond;

    if (!this.state[field]) {
      this.setState((prevState) => ({
        error: {
          ...prevState.error,
          [`${field}Error`]: MesErrForm[field]
            ? MesErrForm[field]
            : `${field} is required.`,
        },
      }));
      return false;
    } else {
      this.setState((prevState) => ({
        error: {
          ...prevState.error,
          [`${field}Error`]: "",
        },
      }));
      return true;
    }
  };

  handleNext = () => {
    const { activeStep } = this.state;

    if (activeStep === 1) {
      this.createInitial()
    }

    if (activeStep === 2) {
      this.handleStep3();
    } else if (activeStep === 3) {
      this.handleStep4();
    } else {
      this.moveToNextStep();
    }
  };


  handleStep3 = () => {
    if (
      (this.state.vatRegistration === "No" && this.state.vatNumber == null) ||
      !this.state.vatNumber
    ) {
      this.setState({
        vatNumberError: "Please select your vat number.",
      });
    }
    const fields: (keyof S)[] = [
      "businessName",
      "licenseNumber",
      "streetAddressFirst",
      "city",
      "postcode",
    ];
    if (this.validateFields(fields)) {
      this.updateInitial()
      this.moveToNextStep();
    }
  };

  moveToNextStep = () => {
    window.scrollTo(0, 0);
    this.setState({ activeStep: this.state.activeStep + 1 })


  };

  validateFields = (fields: (keyof S)[]): boolean => {
    let hasError = false;
    fields.forEach((field) => {
      if (!this.checkAllFieldValidate(field)) {
        hasError = true;
        // this.validaterepresentativeFields()
      }
    });
    return !hasError;
  };



  handleStep4 = () => {
    const fields: (keyof S)[] = [
      "phoneNumber",
      "email"
    ];
    const representativeFieldsValid = this.validaterepresentativeFields();
    if (!representativeFieldsValid) {
      this.setState({ activeStep: 3 });
      return;
    }
    this.validaterepresentativeFields();
    if (this.state.emailError === true) {
      this.setState({
        emailErrorText: "Please enter a valid email",
      });
    } else if (this.validateFields(fields) && representativeFieldsValid) {
      this.updateInitial()
      const {
        businessName,
        legalBusinessName,
        licenseNumber,
        yourCounty,
        country,
        city,
        postcode,
        phoneNumber,
        pet_type,
        service_type,
        email,
        phNoCountry,
        selectedServices,
        vatNumber,
        streetAddressFirst,
        streetAddressSecond,
       
      } = this.state;

      const firstFormData = {
        pet_type,
        businessName,
        legalBusinessName,
        licenseNumber,
        vatNumber,
        yourCounty,
        country,
        streetAddressFirst,
        city,
        postcode,
        phoneNumber,
        service_type,
        email,
        selectedServices,
        streetAddressSecond,
        phNoCountry,
        
      };

      sessionStorage.setItem("firstFormData", JSON.stringify(firstFormData));
      this.setStoragAllData();

    }
  };


  accountDataGet = () => {
    let tokenValue = localStorage.getItem("authToken");

    const headers = {
      token: tokenValue,
    };

    const loginRequestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.profileId = loginRequestMessage.messageId;
    loginRequestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `account_block/account_details`
    );

    loginRequestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headers)
    );

    loginRequestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "GET"
    );
    this.accountDataGetId = loginRequestMessage.messageId;
    runEngine.sendMessage(loginRequestMessage.id, loginRequestMessage);
  };

  handleGenderopen = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const newAnchorElgenders = [...this.state.anchorElSalutations];
    newAnchorElgenders[index] = event.currentTarget; // Set the anchorEl for the clicked object
    this.setState({ anchorElSalutations: newAnchorElgenders });
  }

  handleGenderClose = (value: string) => {
    this.setState({
      representativeGender: value ? value : "Mr.",
      anchorElgender: null
    })
  }

  addMoreRepresentativeDetails = () => {
    this.setState(prevState => ({
      representativeDetails: [
        ...prevState.representativeDetails,
        {
          representativeGender: "Mr.",
          representativeFirstName: "",
          representativeSurname: '',
          representativePhCountry: 'United Kingdom (+44)',
          representativePhNumber: ""
        }
      ]
    }));

  }

  handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>, key: keyof Representative) => {
    const { value } = event.target;
    const updatedObjects = [...this.state.representativeDetails];
    updatedObjects[index][key] = value;
    let updatedErrors = [...this.state.repErrors];
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d+$/;
    let errors: Representative = {
      representativeGender: "",
      representativeFirstName: "",
      representativeSurname: "",
      representativePhCountry: "",
      representativePhNumber: ""
    };

    if (key === 'representativeFirstName' || key === 'representativeSurname') {
      if (!value) {
        errors[key] = key === 'representativeFirstName' ? "First name is required" : "Surname is required";

      } else if (!value.match(nameRegex)) {
        errors[key] = "Please enter alphabetical only";
      }
    } else if (key === 'representativePhNumber') {
      if (!value) {
        errors[key] = "Phone number is required"

      } else if (!value.match(phoneRegex)) {

        errors[key] = "Please enter a valid phone number contains numbers";
      }
    }

    updatedErrors[index] = errors;




    this.setState({ representativeDetails: updatedObjects, repErrors: updatedErrors });
  };

  handleMenuClose = (gender: string, index: number) => {
    const updatedObjects = [...this.state.representativeDetails];
    updatedObjects[index]['representativeGender'] = gender;
    const newAnchorElgenders = [...this.state.anchorElSalutations];
    newAnchorElgenders[index] = null;
    this.setState({ representativeDetails: updatedObjects, anchorElSalutations: newAnchorElgenders });
  };
  handleSelectCountryChange = (index: number, event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    const updatedObjects = [...this.state.representativeDetails];
    updatedObjects[index]['representativePhCountry'] = value as string;
    this.setState({ representativeDetails: updatedObjects })
  };
  handleRemoveContact = (index: number) => {
    const updatedObjects = [...this.state.representativeDetails];
    updatedObjects.splice(index, 1);
    this.setState({ representativeDetails: updatedObjects })

  }

  validaterepresentativeFields = () => {
    const { representativeDetails } = this.state;
    const newErrors: any = [];
    let hasEmptyRepresentative = false;
    representativeDetails.forEach((rep: Representative, index) => {
      const errorsForRep: Representative = {
        representativeGender: "",
        representativeFirstName: "",
        representativeSurname: "",
        representativePhCountry: "",
        representativePhNumber: ""
      };
      if (!rep.representativeFirstName.trim()) {
        errorsForRep.representativeFirstName = 'First name is required';
        hasEmptyRepresentative = true
      }
      if (!rep.representativeSurname.trim()) {
        errorsForRep.representativeSurname = 'Surname is required';
        hasEmptyRepresentative = true

      }
      if (!rep.representativePhNumber.trim()) {
        errorsForRep.representativePhNumber = 'Phone number is required';
        hasEmptyRepresentative = true

      }
      newErrors[index] = errorsForRep;
    });
    this.setState({ repErrors: newErrors });
    return !hasEmptyRepresentative;
  }

  createInitial = async () => {

    const formData = new FormData();


    formData.append("hotel[pet_type]", this.state.pet_type);
    formData.append("account_id", this.state.accountData.id);

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_hotel/hotels"
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify({})
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "POST"
    );


    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      formData
    );


    this.addHotelCallId = requestMessage.messageId;
    runEngine.sendMessage(requestMessage.id, requestMessage);

  };


  updateInitial = () => {

    const headers = {
      token: localStorage.getItem("authToken")
    };



    const formData = this.state.activeStep == 2 ? this.steptwoData() : this.stepThreedata()

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `bx_block_hotel/hotels/${this.state.hotelId}`
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headers)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage), "PUT"
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      formData
    );
    this.updateHotelCallId = requestMessage.messageId;
    runEngine.sendMessage(requestMessage.id, requestMessage);


  };


  steptwoData = () => {

    const formData = new FormData();

    formData.append("hotel[name]", this.state.businessName);
    formData.append("hotel[legal_business_name]", this.state.legalBusinessName);
    formData.append("hotel[license_number]", this.state.licenseNumber);
    formData.append("hotel[vat_number]", this.state.vatNumber.toString());
    formData.append("hotel[hotel_address_line_1]", this.state.streetAddressFirst);
    formData.append("hotel[hotel_address_line_2]", this.state.streetAddressSecond);
    formData.append("hotel[hotel_city]", this.state.city);
    formData.append("hotel[hotel_country]", this.state.yourCounty);
    formData.append("hotel[hotel_postcode]", this.state.postcode);
    formData.append("hotel[hotel_country_region]", this.state.country);

    return formData
  }


  stepThreedata = () => {
    const formData = new FormData();

    formData.append("hotel[phone_number_country_code]", this.state.phNoCountry);
    formData.append("hotel[phone_number]", this.state.phoneNumber);
    formData.append("hotel[email]", this.state.email);

    {
      this.state.representativeDetails.forEach((contact: Representative) => {
        this.saveRepresentativeDetails(contact)
      });
    }

    return formData;

  }

  saveRepresentativeDetails = async (repDetails: Representative,) => {
    let tokenValue = await getStorageData("authToken");

    const header = {
      "content-type": configJSON.contentTypeApiUpdateUser,
      token: tokenValue
    }
    const repBody = {
      "data": {
        "first_name": repDetails.representativeFirstName, 
        "surname": repDetails.representativeSurname,
        "reprsentive_phone_number": repDetails.representativePhNumber,
        "representive_country_code": repDetails.representativePhCountry,
        "representative_contact_title": repDetails.representativeGender,
        'hotel_id': this.state.hotelId
      }
    }
    
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    let endPoint = 'bx_block_custom_form/seller_accounts/representative_details'
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage), endPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      'POST'
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(repBody)
    );

    this.apiCallIdUpdateDeleteReservationDetails = requestMessage.messageId;
    runEngine.sendMessage(requestMessage.id, requestMessage);

  };


  // Customizable Area End
}
