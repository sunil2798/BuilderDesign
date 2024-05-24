import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import React from "react";
import LogInBusinessOwner from "../../src/LogInBusinessOwner.web";
import { runEngine } from "../../../../framework/src/RunEngine";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { Message } from "../../../../framework/src/Message";

const navigation = require("react-navigation");

const screenProps = {
  navigation: {
    navigate:jest.fn()
  },
  id: "email-account-registration-scenario",
  event:{
    preventDefault:jest.fn()
  }
};

const feature = loadFeature(
  "./__tests__/features/log-in-business-owner-web-scenario.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });
  afterEach(() => {
    jest.runOnlyPendingTimers(); // Ensure that all timers are cleared after each test
    jest.useRealTimers(); // Restore real timers after each test
  });

  test("Register for signup with Email Account", ({ given, when, then }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let logInBusiness: LogInBusinessOwner;

    given(
      "I am a User attempting to Register a account after confirming OTP",
      () => {
        emailAccountRegistrationWrapperRegistration = shallow(
          <LogInBusinessOwner {...screenProps} />
        );
      }
    );

    when(
      "I navigate to the Registration Screen when signup is complete",
      () => {
        logInBusiness = emailAccountRegistrationWrapperRegistration
          .setState({ email: "asd" })
          .instance() as LogInBusinessOwner;
      }
    );

    then("I can Enter Email", () => {
      const sessionData = { flashSlack: true };
      const msgNavigation = new Message(
        getName(MessageEnum.NavigationPayLoadMessage)
      );
      msgNavigation.addData(
        getName(MessageEnum.SessionResponseData),
        sessionData
      );
      runEngine.sendMessage("Unit Test", msgNavigation);
      let textInputComponent4 = emailAccountRegistrationWrapperRegistration.findWhere(
        (node) => node.prop("data-test-id") === "getEmail"
      );
      const event4 = {
        target: { value: "asd" },
      };
      textInputComponent4.simulate("change", event4);
    });

    then("I can enter the Your Password", () => {
      let textInputComponent2 = emailAccountRegistrationWrapperRegistration.findWhere(
        (node) => node.prop("data-test-id") === "password_change"
      );
      const event2 = {
        target: { value: "1345" },
      };
      textInputComponent2.simulate("change", event2);
    });

    then(
      "I can enter a first name without errors in signup screen checkbox",
      () => {
        let textInputComponent4 = emailAccountRegistrationWrapperRegistration.findWhere(
          (node) => node.prop("data-test-id") === "checkBoxCheck"
        );
        const event4 = {
          target: { value: false },
        };
        textInputComponent4.simulate("change", event4);
      }
    );

    then(
      "It is the togglePassword onclick event showYourPassword true/false",
      () => {
        emailAccountRegistrationWrapperRegistration.setState({
          showYourPassword: true,
        });
        emailAccountRegistrationWrapperRegistration.setState({
          showYourPassword: false,
        });
      }
    );

    then(
      "It is the togglePassword onclick event showPassword true/false",
      () => {
        emailAccountRegistrationWrapperRegistration.setState({
          showPassword: false,
        });
        emailAccountRegistrationWrapperRegistration.setState({
          showPassword: true,
        });
      }
    );

    then(
      "I can enter a first name without errors in signup screen onclick event",
      () => {
        emailAccountRegistrationWrapperRegistration.setState({
          isCheckboxChecked: true,
        });
        const event={
          preventDefault:jest.fn()
        }
        let textInputComponent5 = emailAccountRegistrationWrapperRegistration.findWhere(
          (node) => node.prop("data-test-id") === "handle_continue_click"
        );
        textInputComponent5.simulate("click",event);
      }
    );

    then("I can enter flash Bo", () => {
      emailAccountRegistrationWrapperRegistration.setState({
        flashBo: true,
      });
      emailAccountRegistrationWrapperRegistration.setState({
        flashSlack: true,
      });
      let textInputComponent5 = emailAccountRegistrationWrapperRegistration.findWhere(
        (node) => node.prop("data-test-id") === "flash_open"
      );
      // textInputComponent5.simulate("close");
    });

    then(
      "It is the togglePassword onclick event isCheckboxChecked true/false",
      () => {
        emailAccountRegistrationWrapperRegistration.setState({
          isCheckboxChecked: true,
        });
        emailAccountRegistrationWrapperRegistration.setState({
          isCheckboxChecked: false,
        });
      }
    );
    then("It is the togglePassword onclick event toggle password", () => {
      logInBusiness.handlePasswordToggle();
      logInBusiness.receive("", {} as Message);
    });

    then("Log In BO Api Call", () => {
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        dummyData
      );
      logInBusiness.loginCallId = msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);

      const msgLogInSucessRestAPI1 = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI1.messageId
      );
      msgLogInSucessRestAPI1.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        dummyData2
      );
      logInBusiness.loginCallId = msgLogInSucessRestAPI1.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI1);

      jest.useFakeTimers();
      jest.advanceTimersByTime(1000);
    });

    then("Log In BO Api Call With Password More Then seven Words Error", () => {
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          errors: [
            {
              failed_login:
                "No account registered for this email, or not activated",
            },
          ],
        }
      );
      logInBusiness.loginCallId = msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);
    });

    then("Log In Up BO Api Call With Error", () => {
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          errors: [
            {
              failed_login: "Please enter correct email or password.",
            },
          ],
        }
      );
      logInBusiness.loginCallId = msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);
    });
    then("Log In Up BO Api Call With Error Business Owner", () => {
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          errors: [
            {
              failed_login: "Please enter correct email or password.",
            },
          ],
        }
      );
      logInBusiness.loginCallId = msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);
    });
    then("Log In Up BO Api Email is invalid", () => {
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        petData
      );
      logInBusiness.loginCallId = msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);
    });
    then("Log In BO Get Api Call", () => {
      const msgLogInSucessRestAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgLogInSucessRestAPI.messageId
      );
      msgLogInSucessRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        getData
      );
      logInBusiness.profileId = msgLogInSucessRestAPI.messageId;
      runEngine.sendMessage("Unit Test", msgLogInSucessRestAPI);
    });
  });
});

const getData = {
  "data": {
      "id": "633",
      "type": "account",
      "attributes": {
          "activated": false,
          "is_accepted_terms_and_conditions": true,
          "full_name": null,
          "email": "test115@yopmail.com",
          "full_phone_number": "",
          "type": "business_owner",
          "city": null,
          "country": null,
          "flat_number": null,
          "address": null,
          "postcode": null,
          "created_at": "2024-01-22T11:51:18.699Z",
          "updated_at": "2024-01-22T11:51:18.699Z",
          "device_id": null,
          "unique_auth_id": null,
          "photo": null
      }
  }
}

const dummyData = {
  data: {
    id: "118",
    type: "account",
    attributes: {
      activated: true,
      is_accepted_terms_and_conditions: true,
      full_name: null,
      email: "test1324@yopmail.com",
      full_phone_number: "",
      type: "business_owner",
      city: null,
      country: null,
      flat_number: null,
      address: null,
      postcode: null,
      created_at: "2023-09-06T09:24:11.902Z",
      updated_at: "2023-09-06T09:24:11.902Z",
      device_id: null,
      unique_auth_id: null,
      photo: null,
      is_hotel_created:true
    },
  },
  meta: {
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTE4LCJleHAiOjE2OTQwNzg5MjYsInRva2VuX3R5cGUiOiJsb2dpbiJ9.4YDvSUneo-MsqoEBbOffRzsgkDWUGpxcgdOnmHKBmI1srbfAkuVUoJ0qYtYJ0s-DatCnhXb74rUesFpv-k41Iw",
    id: 118,
  },
};

const dummyData2 = {
  data: {
    id: "118",
    type: "account",
    attributes: {
      activated: true,
      is_accepted_terms_and_conditions: true,
      full_name: null,
      email: "test1324@yopmail.com",
      full_phone_number: "",
      type: "business_owner",
      city: null,
      country: null,
      flat_number: null,
      address: null,
      postcode: null,
      created_at: "2023-09-06T09:24:11.902Z",
      updated_at: "2023-09-06T09:24:11.902Z",
      device_id: null,
      unique_auth_id: null,
      photo: null,
      is_hotel_created:false
    },
  },
  meta: {
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTE4LCJleHAiOjE2OTQwNzg5MjYsInRva2VuX3R5cGUiOiJsb2dpbiJ9.4YDvSUneo-MsqoEBbOffRzsgkDWUGpxcgdOnmHKBmI1srbfAkuVUoJ0qYtYJ0s-DatCnhXb74rUesFpv-k41Iw",
    id: 118,
  },
};

const petData = {
  data: {
    id: "118",
    type: "account",
    attributes: {
      activated: true,
      is_accepted_terms_and_conditions: true,
      full_name: null,
      email: "test007@yopmail.com",
      full_phone_number: "",
      type: "pet_owner",
      city: null,
      country: null,
      flat_number: null,
      address: null,
      postcode: null,
      created_at: "2023-09-06T09:24:11.902Z",
      updated_at: "2023-09-06T09:24:11.902Z",
      device_id: null,
      unique_auth_id: null,
      photo: null,
      is_hotel_created:true
    },
  },
  meta: {
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTE4LCJleHAiOjE2OTQwNzg5MjYsInRva2VuX3R5cGUiOiJsb2dpbiJ9.4YDvSUneo-MsqoEBbOffRzsgkDWUGpxcgdOnmHKBmI1srbfAkuVUoJ0qYtYJ0s-DatCnhXb74rUesFpv-k41Iw",
    id: 118,
  },
};
