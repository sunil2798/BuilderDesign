import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import React from "react";
import BussinessOwnerDetailsFirst from "../../src/BussinessOwnerDetailsFirst.web";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

const screenProps = {
  id: "id",
  navigation: {
    navigate: jest.fn()
  }
};

const feature = loadFeature(
  "./__tests__/features/BussinessOwnerDetailsFirstweb-scenario.web.feature"
);

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to BussinessOwnerDetailsFirstweb", ({
    given,
    when,
    then
  }) => {
    let wrrapper: ShallowWrapper;
    let bissinessOwnerInst: BussinessOwnerDetailsFirst;

    given("I am a User loading BussinessOwnerDetailsFirstweb", () => {
      wrrapper = shallow(<BussinessOwnerDetailsFirst {...screenProps} />);
    });

    when("user loading componentdidmount", () => {
      bissinessOwnerInst = wrrapper.instance() as BussinessOwnerDetailsFirst;
    });

    then("It is the toggleform true/false", () => {

      const sessionData = {
        activeStep:2,
        hotelId:"789879"
      }

      const msgNavigation = new Message(
        getName(MessageEnum.NavigationPayLoadMessage)
        );
      msgNavigation.addData(
        getName(MessageEnum.HotelDetails),
        sessionData
      );
      runEngine.sendMessage("Unit Test", msgNavigation);

      wrrapper.setState({
        activeStep: 1
      })
      let textInputComponent5 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleFirstClick"
      );
      textInputComponent5.simulate("click");
      wrrapper.setState({
        firstFormFourData:"true"
      })
      
      bissinessOwnerInst.allDataRestore();

      wrrapper.setState({
        saveDraftWarnFour: false,
        activeStep: 1
      });
      bissinessOwnerInst.restoreSaveDraftWarnSec({
        service_type: "",
        fourthPlace: false,
        fifthPlace: false,
        sixPlace: false
      })

      bissinessOwnerInst.restoreSaveDraftWarn({
        pet_type: "",
        firstPlace: false,
        secondPlace: false,
        thirdPlace: false,
        fourthPlace: false
      })

      let handleFirstSecondClick = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleFirstSecondClick"
      );
      handleFirstSecondClick.simulate("click");

      wrrapper.setState({
        saveDraftWarnThird: false
      });
      bissinessOwnerInst.restoreSaveDraftWarnThird({
        propertyName: "",
        licenseNumber: "",
        country: "",
        streetAddressFirst: "",
        suite: "",
        city: "",
        postcode: "",
        vatNumber: "",
        vatRegistration: "",
        businessName: "",
        yourCounty: "",
        streetAddressSecond: ""
      });

      let handleFirstThirdClick = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleFirstThirdClick"
      );
      handleFirstThirdClick.simulate("click");

      let handleFirstForthClick = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleFirstForthClick"
      );
      handleFirstForthClick.simulate("click");


      bissinessOwnerInst.setStoragAllData();
      // bissinessOwnerInst.restoreSaveDraftWarnFour({
      //   phNoCountry: "",
      //   phoneNumber: null,
      //   email: "",
      //   copyDataChecked: false,
      //   representativeSurname: "",
      //   representativePhCountry: "",
      //   representativePhNumber: null,
      //   representativeCounty: "",
      //   representativeCountryRegion: "",
      //   representativePostCode: "",
      //   representativeCity: "",
      //   representativeAddressTwo: "",
      //   representativeAddressOne: "",
      //   representativePhCode: "",
      //   representativeFirstName: "",
      //   representativeGender: "",
      //   countryCode: "",
       
      // });

      
    });


    

    then("I can can click on handleSecondClick", () => {

      bissinessOwnerInst.createInitial()

      bissinessOwnerInst.setState({saveDraftWarnSec:false,saveDraftWarnThird:true}) 


      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        getApi
      );
      bissinessOwnerInst.updateHotelCallId =
        msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);


      bissinessOwnerInst.updateInitial()


     

      bissinessOwnerInst.setState({activeStep: 3,representativeDetails:[{representativeGender:"Male",representativeFirstName:"abc", representativeSurname:"pqe", representativePhCountry:"(+44) United kingdom", representativePhNumber:"8798798798"}]})
      bissinessOwnerInst.updateInitial()


      wrrapper.setState({ activeStep: 2 });

      bissinessOwnerInst.updateInitial()
      
      expect(wrrapper.state("activeStep")).toEqual(2);

    });

    then("user can click on handleBack and handleNext", () => {

      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        getApi
      );
      bissinessOwnerInst.addHotelCallId =
        msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);


      wrrapper.setState({ activeStep: 3 });
      let handleNext = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleNext"
      );
      handleNext.simulate("click");

      wrrapper.setState({ hasErrorSecPO: false });
      let handleNexts = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleNext"
      );
      handleNexts.simulate("click");

      wrrapper.setState({ hasErrorPO: false });

      let handleNextNot = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleNext"
      );
      handleNextNot.simulate("click");

      
    });

    then("user can open third step", () => {
      wrrapper.setState({ activeStep: 2 });
      wrrapper.setState(validStateAndNul);
      let textInputComponent8 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleChangeThirdForm"
      ).first();
      const event = {
        target: { value: "hdsf" }
      };
      textInputComponent8.simulate("change", event);

      let handleChangeThirdForms = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleChangeThirdForms"
      );
      const event2 = {
        target: { value: "hdsf" }
      };
      handleChangeThirdForms.simulate("change", event2);

      let handleRadioChangeDogs = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleRadioChangeDogs"
      );
      handleRadioChangeDogs.simulate("change", event2);

      let handleRadioChangeCats = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleRadioChangeCats"
      );
      handleRadioChangeCats.simulate("change", event2);
      

      bissinessOwnerInst.setState({
        vatRegistration: "No",
        vatNumber: "56",
        vatNumberError:"I am Error"
      })

      // bissinessOwnerInst.handleGenderopen({target:{currentTarget:"asdf"}} as any)
      bissinessOwnerInst.handleGenderClose("Mr.")

      bissinessOwnerInst.setState({
        anchorElgender:"asdf"
      })

   

    


      expect(wrrapper.state("activeStep")).toEqual(2);
    });

    then("user can open third step and slect country", () => {
      wrrapper.setState({ activeStep: 2 });
      wrrapper.setState(validStateAndNul);
      const event = {
        target: { value: "hdsf" }
      };

      bissinessOwnerInst.handleCountryClose(event);
      bissinessOwnerInst.handelPhCountryCloses(event);
      bissinessOwnerInst.handelRepoPhCountryCloses(event);
      
    });
    then("user can change forth form", () => {
      wrrapper.setState({ activeStep: 3,  accountData: {
        attributes:{
          id:"jhvhjv"
        }
      }});
      // wrrapper.find("#handlegenderchange").simulate("close")
      // wrrapper.find("#handlegenderchange").simulate("change")
      // let copyData = wrrapper.findWhere(
      //   node => node.prop("data-test-id") === "copyData"
      // );
      // const event1 = {
      //   target: { checked: true }
      // };
      // copyData.simulate("change", event1);

      // const eventSec = {
      //   target: { value: "hdsf" }
      // } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

      // const event3 = {
      //   target: { name:"email",value: "test@gmail.com" }
      // } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

      // const event4 = {
      //   target: { name:"email",value: "3216413687781" }
      // } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

      // bissinessOwnerInst.handleChangeSelect(eventSec);
      // bissinessOwnerInst.handleChangeInput(eventSec);
      // bissinessOwnerInst.handleChangeInput(event3);
      // bissinessOwnerInst.handleChangeInput(event4);

      let handleSelectoptions = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleSelectoptions"
      ).first();
      
      // handleSelectoptions.simulate("close");

      const event = { currentTarget: {} } as React.MouseEvent<HTMLDivElement>;

      bissinessOwnerInst.handelCountryOpen(event);
      
     

      wrrapper.setState({  accountData: {
      }});

      let copyData1 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "copyData"
      ).dive().dive();
      const event2 = {
        target: { checked: true }
      };
      copyData1.simulate("change", event2);

      wrrapper.setState(validStateAndNul);
    });
    then("user can click handleBack", () => {
      wrrapper.setState({ activeStep: 1 });
      let textInputComponent8 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleBack"
      );
      // textInputComponent8.simulate("click");
      const event = { currentTarget: {} } as React.MouseEvent<HTMLDivElement>;
      bissinessOwnerInst.handelRepoCountryOpen(event);

      // expect(textInputComponent8.prop("data-test-id")).toBe("handleBack");
    });

    then("user can click accountDataGet", () => {
      bissinessOwnerInst.accountDataGet();
    });
    then("user can add email", () => {
      wrrapper.setState({ activeStep: 4 });

      let textInputComponenthandleBack = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleBack"
      );
      textInputComponenthandleBack.simulate("click");
      const event = { currentTarget: {} } as React.MouseEvent<HTMLDivElement>;
      bissinessOwnerInst.handelCountryOpens(event)
      expect(textInputComponenthandleBack.prop("data-test-id")).toBe(
        "handleBack"
      );
    });
    then("user can click on next", () => {
      wrrapper.setState({ activeStep: 3,validState });
      wrrapper.setState({ hasErrorPO: false });

      let textInputComponent8 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleNext"
      );
      textInputComponent8.simulate("click");

      const event = {
        target: { value: "hdsf" }
      };

      bissinessOwnerInst.handelCountry(event)

      wrrapper.setState({ activeStep: 4, hasErrorSecPO: false, validState });

bissinessOwnerInst.handleNext()
      let handleNext = wrrapper.findWhere(
        node => node.prop("data-test-id") === "handleNext"
      );
      handleNext.simulate("click");

      expect(textInputComponent8.prop("data-test-id")).toBe("handleNext");
    });

    then("user can click savedraft and save data in draft", () => {
      wrrapper.setState({ activeStep: 1 });
      let textInputComponent8 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "saveDraftData"
      );
      textInputComponent8.simulate("click");

      wrrapper.setState({ activeStep: 2 });
      let textInputComponent = wrrapper.findWhere(
        node => node.prop("data-test-id") === "saveDraftData"
      );
      textInputComponent.simulate("click");

      wrrapper.setState({ activeStep: 3 });
      let textInputComponent9 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "saveDraftData"
      );
      textInputComponent9.simulate("click");

      expect(textInputComponent8.prop("data-test-id")).toBe("saveDraftData");
    });

    then("user can click savedraft and save data in draft four", () => {
     
      wrrapper.setState({ activeStep: 4 });
      let textInputComponent9 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "saveDraftData"
      );
      textInputComponent9.simulate("click");

      wrrapper.setState({ activeStep: 5 });
      let textInputComponent = wrrapper.findWhere(
        node => node.prop("data-test-id") === "saveDraftData"
      );
      textInputComponent.simulate("click");

      bissinessOwnerInst.toggleService("india");


      expect(textInputComponent9.prop("data-test-id")).toBe("saveDraftData");
    });

    then("additional_serviceDataId additional serviceData Api Call", () => {
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        getApi
      );
      bissinessOwnerInst.accountDataGetId =
        msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);
    });

    then("user can click savedraft and saveDraftModel Open", () => {
     
      let textInputComponent9 = wrrapper.findWhere(
        node => node.prop("data-test-id") === "saveDraftModelOpen"
      );
      textInputComponent9.simulate("click");

      
      expect(textInputComponent9.prop("data-test-id")).toBe("saveDraftModelOpen");


      bissinessOwnerInst.receive("",{ } as Message);
    });

    then("we dont can go to next page", () => {

      wrrapper.setState({
        activeStep: 1,
        firstPlace: false,
        secondPlace : false ,
      thirdPlace :false
      })
     
      bissinessOwnerInst.handleFirstClick("kdjsf")

      wrrapper.setState({
        activeStep: 2,
        fourthPlace: false,
      fifthPlace: false,
      sixPlace : false})
    });

    then("we dont can go to second next page", () => {

      wrrapper.setState({
        activeStep: 2,
        })
      bissinessOwnerInst.handleNext()
    });
  });
  test("User navigates to 3rd page", ({ given, when, then }) => {
    let form3Wrapper: ShallowWrapper;
    let instance: BussinessOwnerDetailsFirst;

    given("I am a User loading with representative details", () => {
      form3Wrapper = shallow(<BussinessOwnerDetailsFirst {...screenProps} />);
    });

    when("user loading  with representative details", () => {
      instance = form3Wrapper.instance() as BussinessOwnerDetailsFirst;
      form3Wrapper.setState({activeStep:3})
      let openMenu = form3Wrapper.findWhere(node => node.prop("data-test-id") === "openMenu");
      openMenu.simulate('click',{currentTarget:'ABC'})
      let salutation = form3Wrapper.findWhere(node => node.prop("data-test-id") === "mrvalue");
      salutation.at(0).simulate('click')

    });
    then('then the form will load with out errors',()=>{
      expect(instance.state.representativeDetails[0].representativeGender).toBe('Mr.')

    })
    when('if the input fields are empty then it will show th error messages',()=>{
      let firstName = form3Wrapper.findWhere(node => node.prop("data-test-id") === "first_name");
      firstName.at(0).simulate('change',{target:{value:"@@@@"}},'representativeFirstName')
      let surname = form3Wrapper.findWhere(node => node.prop("data-test-id") === "surname");
      surname.at(0).simulate('change',{target:{value:""}},'representativeSurname')
      let salutation = form3Wrapper.findWhere(node => node.prop("data-test-id") === "phone_number");
      salutation.at(0).simulate('change',{target:{value:""}},'representativePhNumber')
      // handleNext
      let NextBtn = form3Wrapper.findWhere(node => node.prop("data-test-id") === "handleNext");
      NextBtn.simulate('click',)
    })
    when('user can enter the values in the input fields',()=>{
      let firstName = form3Wrapper.findWhere(node => node.prop("data-test-id") === "first_name");
      firstName.at(0).simulate('change',{target:{value:"first name"}},'representativeFirstName')
      let surname = form3Wrapper.findWhere(node => node.prop("data-test-id") === "surname");
      surname.at(0).simulate('change',{target:{value:"surname"}},'representativeSurname')
      let salutation = form3Wrapper.findWhere(node => node.prop("data-test-id") === "phone_number");
      salutation.at(0).simulate('change',{target:{value:"9876543210"}},'representativePhNumber')
      let NextBtn = form3Wrapper.findWhere(node => node.prop("data-test-id") === "handleNext");
      NextBtn.simulate('click',)
    })
    then('the entered values can be stored in the input fields',()=>{
      // expect(instance.state.representativeDetails[0].representativeFirstName).toBe('first name')
    })
    when('user can select the country',()=>{
      let openMenu = form3Wrapper.findWhere(node => node.prop("data-test-id") === "select_country");
      openMenu.simulate('change',{target:{value:"India"}})

    })
    then('the selected country shown in the field',()=>{
      expect(instance.state.representativeDetails[0].representativePhCountry).toBe('India')

    })
    when('user click on the add the new contact will be contact will be added',()=>{
      let openMenu = form3Wrapper.findWhere(node => node.prop("data-test-id") === "add_row");
      openMenu.simulate('click')

    })
    then('after dding the contact the the contacts will be shown',()=>{
      expect(instance.state.representativeDetails.length).toBe(2)

    })
    when('user click on the remove the  contact will be contact will be removed',()=>{
      let openMenu = form3Wrapper.findWhere(node => node.prop("data-test-id") === "remove_row");
      openMenu.at(1).simulate('click')

    })
    then('after removing the contact the the contacts will be shown with updated length',()=>{
      expect(instance.state.representativeDetails.length).toBe(1)

    })

  })
 



});

const validStateAndNul = {
  propertyName: "",
  licenseNumber: "",
  country: "United Kingdom",
  streetAddress: "",
  city: "",
  postcode: "",
  error: {
    propertyName: "",
    licenseNumber: "",
    country: "United Kingdom",
    streetAddress: "",
    city: "",
    postcode: ""
  },
  MesErrFormFirst: {
    propertyName: "Please enter hotel name.",
    licenseNumber: "Please enter license number.",
    country: "Please select your country.",
    streetAddress: "Please enter the street address.",
    city: "Please enter your city.",
    postcode: "Please enter your post code."
  }
};

const validState = {
  propertyName: "Lion",
  licenseNumber: 3467,
  country: "United Kingdom",
  streetAddress: "Jay jagnath",
  city: "Surat",
  postcode: 350450,
  error: {
    propertyName: "",
    licenseNumber: "",
    country: "",
    streetAddress: "",
    city: "",
    postcode: ""
  },
  MesErrFormFirst: {
    propertyName: "Please enter hotel name.",
    licenseNumber: "Please enter license number.",
    country: "Please select your country.",
    streetAddress: "Please enter the street address.",
    city: "Please enter your city.",
    postcode: "Please enter your post code."
  }
};


const getApi ={"hotels":{"data":[{"id":"212","type":"hotel","attributes":{"id":212,"name":"Cozy Cat Inn","description":"A cozy and welcoming name that conveys a sense of comfort and care.","address":"1 E 2nd St, New York","account_id":20,"pet_type":"Cat","location":null,"hotel_type":"Dog Daycare","phone_number":1234567888,"latitude":40.7254565,"longitude":-73.9918633,"property_name":null,"license_number":"098765","country_region":"USA","street_address":"25EX New York","flat_suite":"1","city_town":"NY","postcode":"452011","email":"Usertest1@gmail.com","title":null,"budget_per_day":10,"daycare_price_for_dog":0.0,"daycare_price_for_cat":0.0,"rating":1,"hotel_additional_services":[],"images":[{"id":925,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDBEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d317a63ed91a780d14d65babffdf8e6c6930009f/Screenshot_1.png"}],"documents":[{"id":924,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHdEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--40aac719b9369aeda189e84b6208b52f7bb685de/sample.pdf","filename":"sample.pdf","content_type":"application/pdf"}]}},{"id":"198","type":"hotel","attributes":{"id":198,"name":"Paws Inn","description":"A cozy and welcoming name that conveys a sense of comfort and care.","address":"1 E 2nd St, New York","account_id":20,"pet_type":"Dog","location":null,"hotel_type":"Dog Daycare","phone_number":1234567888,"latitude":40.7254565,"longitude":-73.9918633,"property_name":null,"license_number":"098765","country_region":"USA","street_address":"25EX New York","flat_suite":"1","city_town":"NY","postcode":"452011","email":"Usertest1@gmail.com","title":"The pet hotel","budget_per_day":10,"daycare_price_for_dog":0.0,"daycare_price_for_cat":0.0,"rating":4,"hotel_additional_services":[],"images":[{"id":903,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2NEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a9da8522579a3ab1a3bef554c70658e133a02f6e/royal_hotel_logo_template_by_thiepart_dalxspi-fullview.jpg"}],"documents":[{"id":902,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--26f195ef002e11204b469735bb25d419be2a5eaa/sample.pdf","filename":"sample.pdf","content_type":"application/pdf"}]}},{"id":"214","type":"hotel","attributes":{"id":214,"name":"Cat Inn","description":"A cozy and welcoming name that conveys a sense of comfort and care.","address":"1 E 2nd St, New York","account_id":20,"pet_type":"Cat ","location":null,"hotel_type":"Cat Hotel","phone_number":1234567888,"latitude":40.7254565,"longitude":-73.9918633,"property_name":null,"license_number":"098765","country_region":"USA","street_address":"25EX New York","flat_suite":"1","city_town":"NY","postcode":"452011","email":"Usertest1@gmail.com","title":null,"budget_per_day":10,"daycare_price_for_dog":0.0,"daycare_price_for_cat":0.0,"rating":1,"hotel_additional_services":[],"images":[{"id":927,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDhEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0b515af04ff1abb9fd3f3bd1a91b52d420fde7d6/image_Sampe-03%202.png"}],"documents":[{"id":926,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDREIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f790f95e5c1a2d78b616877c59a30694ee46a363/sample.pdf","filename":"sample.pdf","content_type":"application/pdf"}]}},{"id":"346","type":"hotel","attributes":{"id":346,"name":"Test cat hotel","description":null,"address":"Test address","account_id":322,"pet_type":"Cat","location":null,"hotel_type":"Cat Visitor","phone_number":785694,"latitude":null,"longitude":null,"property_name":null,"license_number":null,"country_region":null,"street_address":null,"flat_suite":null,"city_town":"NY","postcode":"45893","email":null,"title":null,"budget_per_day":10,"daycare_price_for_dog":0.0,"daycare_price_for_cat":0.0,"rating":2,"hotel_additional_services":[],"images":[{"id":980,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdFFEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--485d2adc817a7b66b887282998f7dade6c7eac29/hotel%203.jpg"}],"documents":[]}},{"id":"345","type":"hotel","attributes":{"id":345,"name":"Test cat hotel","description":null,"address":"Test address","account_id":322,"pet_type":"Cat","location":null,"hotel_type":"Cat Visitor","phone_number":785694,"latitude":null,"longitude":null,"property_name":null,"license_number":null,"country_region":null,"street_address":null,"flat_suite":null,"city_town":"NY","postcode":"45893","email":null,"title":null,"budget_per_day":10,"daycare_price_for_dog":0.0,"daycare_price_for_cat":0.0,"rating":2,"hotel_additional_services":[],"images":[{"id":981,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdFVEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--64dd588b92c0306f1a31e0b26a539d24da2479f3/hotel%201.jpg"}],"documents":[]}},{"id":"222","type":"hotel","attributes":{"id":222,"name":"Test1 Hotel","description":null,"address":"Nanda Nagar, indore, india","account_id":20,"pet_type":"Cat","location":null,"hotel_type":"Dog Daycare","phone_number":1234567888,"latitude":22.7481044,"longitude":75.8781052,"property_name":null,"license_number":null,"country_region":"India","street_address":null,"flat_suite":null,"city_town":"Bhopal","postcode":"452011","email":"Usertest1@gmail.com","title":null,"budget_per_day":null,"daycare_price_for_dog":0.0,"daycare_price_for_cat":0.0,"rating":5,"hotel_additional_services":[],"images":[{"id":982,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdFlEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--89eb8fd7c61af082f6d05a7d27e761697b96fbe3/dog%20hotel.jpg"}],"documents":[{"id":938,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcW9EIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ff6ab9205a372ecfc09203dcfb550d9e70326a5e/index.pdf","filename":"index.pdf","content_type":"application/pdf"}]}},{"id":"217","type":"hotel","attributes":{"id":217,"name":"Hotel Moon","description":"After years of research in Australia and the USA, The Pets Hotel is custom designed for your pet’s health, safety and comfort, all in a fun-filled environment - which exceeds the industry Code of Practice.","address":"Nanda Nagar, indore, india","account_id":20,"pet_type":"Cat","location":null,"hotel_type":"Dog Daycare","phone_number":1234567888,"latitude":22.7481044,"longitude":75.8781052,"property_name":null,"license_number":"098765","country_region":"India","street_address":"123 bhopal","flat_suite":"1","city_town":"Bhopal","postcode":"452011","email":"Usertest1@gmail.com","title":"The pet hotel","budget_per_day":200,"daycare_price_for_dog":0.0,"daycare_price_for_cat":0.0,"rating":5,"hotel_additional_services":[{"id":14,"name":"Specify the Service","price":150.0,"hotel_id":217,"additional_service_id":8},{"id":15,"name":"Training Programs","price":200.0,"hotel_id":217,"additional_service_id":5}],"images":[{"id":983,"url":"https://bcfortanya-343504-ruby.b343504.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGNEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ee8e82d992d68517e5d311a1e3e55c1d92c66de7/hotel%201.jpg"}],"documents":[]}},{"id":"351","type":"hotel","attributes":{"id":351,"name":"test","description":null,"address":"","account_id":485,"pet_type":"Cat","location":null,"hotel_type":"Dog Daycare","phone_number":null,"latitude":null,"longitude":null,"property_name":null,"license_number":null,"country_region":null,"street_address":null,"flat_suite":null,"city_town":"","postcode":"","email":null,"title":null,"budget_per_day":null,"daycare_price_for_dog":0.0,"daycare_price_for_cat":0.0,"rating":null,"hotel_additional_services":[],"images":[],"documents":[]}}]},"current_page":1,"total_page":5}
