// App.js - WEB
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-firebase';

import WebRoutesGenerator from '../../components/src/NativeWebRouteWrapper';
import { ModalContainer } from 'react-router-modal';
import HomeScreen from '../../components/src/HomeScreen';
import TopNav from '../../components/src/TopNav';

import InfoPage from '../../blocks/info-page/src/InfoPageBlock';
import AlertBlock from '../../blocks/alert/src/AlertBlock.web';
import Reservations from '../../blocks/reservations/src/Reservations.web';
import ReservationHistory from '../../blocks/reservations/src/ReservationHistory.web';
import Productdescription3 from '../../blocks/productdescription3/src/Productdescription3';
import OrderManagement from '../../blocks/ordermanagement/src/OrderManagement';
import ShoppingCartOrders, { Shopping } from '../../blocks/shoppingcart/src/ShoppingCartOrders.web';
import AddShoppingCartOrderItem from '../../blocks/shoppingcart/src/AddShoppingCartOrderItem';
import NavigationMenu from '../../blocks/navigationmenu/src/NavigationMenu';
import EducationalUserProfile from '../../blocks/educational-user-profile/src/EducationalUserProfile';
import AdvancedSearch from '../../blocks/advancedsearch/src/AdvancedSearch';
import Emailnotifications2 from '../../blocks/emailnotifications2/src/Emailnotifications2';
import OTPInputAuth from '../../blocks/otp-input-confirmation/src/OTPInputAuth';
import Documentstorage from '../../blocks/documentstorage/src/Documentstorage';
import Collecttransactionfees from '../../blocks/collecttransactionfees/src/Collecttransactionfees';
import Adminconsole2 from '../../blocks/adminconsole2/src/Adminconsole2';
import Zipcodessearch from '../../blocks/zipcodessearch/src/Zipcodessearch';
import CountryCodeSelector from '../../blocks/country-code-selector/src/CountryCodeSelector';
import Catalogue from '../../blocks/catalogue/src/Catalogue';
import UserProfileBasicBlock from '../../blocks/user-profile-basic/src/UserProfileBasicBlock';
import Scheduling from '../../blocks/scheduling/src/Scheduling';
import ContactUsHelp from '../../blocks/contactus/src/ContactUsHelp.web';
import AddContactus from '../../blocks/contactus/src/AddContactus';
import Settings2 from '../../blocks/settings2/src/Settings2';
import Settings2BO from '../../blocks/settings2/src/Settings2BO.web';
import Rolesandpermissions from '../../blocks/rolesandpermissions/src/Rolesandpermissions';
import Sorting from '../../blocks/sorting/src/Sorting';
import SocialMediaAccountLoginScreen from '../../blocks/social-media-account-login/src/SocialMediaAccountLoginScreen';
import Reviews from '../../blocks/reviews/src/Reviews';
import AddReview from '../../blocks/reviews/src/AddReview.web';
import SocialMediaAccountRegistrationScreen from '../../blocks/social-media-account-registration/src/SocialMediaAccountRegistrationScreen';
import EmailAccountLoginBlock from '../../blocks/email-account-login/src/EmailAccountLoginBlock';
import Ordercreation2 from '../../blocks/ordercreation2/src/Ordercreation2';
import ForgotPassword from '../../blocks/forgot-password/src/ForgotPassword';
import ForgotPasswordOTP from '../../blocks/forgot-password/src/ForgotPasswordOTP';
import NewPassword from '../../blocks/forgot-password/src/NewPassword';
import BuyNowPayLaterView from '../../blocks/buynowpaylaterstripe/src/BuyNowPayLater';
import TermsConditions from '../../blocks/termsconditions/src/TermsConditions.web';
import TermsConditionsDetail from '../../blocks/termsconditions/src/TermsConditionsDetail';
import TermsConditionsUsers from '../../blocks/termsconditions/src/TermsConditionsUsers';
import BulkUploading from '../../blocks/bulkuploading/src/BulkUploading';
import LandingPage from '../../blocks/landingpage/src/LandingPage';
import Categoriessubcategories from '../../blocks/categoriessubcategories/src/Categoriessubcategories';
import Maps from '../../blocks/maps/src/Maps';
import EmailAccountRegistrationBusinessOwner from '../../blocks/email-account-registration/src/EmailAccountRegistrationBusinessOwner.web';
import EmailAccountRegistrationWeb from '../../blocks/email-account-registration/src/EmailAccountRegistration.web';
import LogInPetOwner from '../../blocks/email-account-login/src/LogInPetOwner.web';
import LogInBusinessOwner from '../../blocks/email-account-login/src/LogInBusinessOwner.web';
import ResetPasswordPo from '../../blocks/forgot-password/src/ResetPasswordPo.web';
import ResetPasswordBo from '../../blocks/forgot-password/src/ResetPasswordBo.web';
import ForgotPasswordBusinessOwner from '../../blocks/forgot-password/src/ForgotPasswordBusinessOwner.web';
import ForgotPasswordPetOwner from '../../blocks/forgot-password/src/ForgotPasswordPetOwner.web';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPagePO from '../../blocks/landingpage/src/LandingPagePO.web';
// import Navbar from '../../components/src/Navbar';
import AboutUs from '../../blocks/contentmanagement/src/AboutUs.web';
import PetDetailsPage from '../../blocks/catalogue/src/PetDetailsPage.web';
import AllPhotos from '../../blocks/catalogue/src/AllPhotos.web';
import ContentManagement from '../../blocks/contentmanagement/src/ContentManagement.web';
import AddPetDetails from '../../blocks/contentmanagement/src/AddPetDetails.web';
import EditPetDetails from '../../blocks/contentmanagement/src/EditPetDetails.web';
import ContentManagementBo from '../../blocks/contentmanagement/src/ContentManagementBo.web';
import HotelsCatalogue from '../../blocks/catalogue/src/HotelsCatalogue.web';
import BownerDetaild from '../../blocks/user-profile-basic/src/BOwnerDetails.web';
import BussinessOwnerDetailsFirst from '../../blocks/user-profile-basic/src/BussinessOwnerDetailsFirst.web';
import BussinessOwnerDetailsSecond from '../../blocks/user-profile-basic/src/BussinessOwnerDetailsSecond.web';
import BussinessOwnerDetailsThird from '../../blocks/user-profile-basic/src/BussinessOwnerDetailsThird.web';
import CancellationPolicyFirst from '../../blocks/user-profile-basic/src/CancellationPolicyFirst.web';
import PropertyDetails from '../../blocks/dashboard/src/PropertyDetails.web'
import StripeAccountDetails from '../../blocks/user-profile-basic/src/StripeAccountDetails.web';
import SingleProperty from '../../blocks/dashboard/src/SinglePropertiesDetails.web';
import ReservationsBusinessOwner from '../../blocks/reservations/src/ReservationBusinessOwner.web'
import Faqs from '../../blocks/contentmanagement/src/Faqs.web'

const routeMapAppPO = {
  Faqs: {
    component: Faqs,
    path: '/Faqs'
  },
  EmailAccountRegistrationWeb: {
    component: EmailAccountRegistrationWeb,
    path: '/EmailAccountRegistrationWeb'
  },
  Reservations: {
    component: Reservations,
    path: '/Reservations'
  },
  ReservationHistory: {
    component: ReservationHistory,
    path: '/ReservationHistory'
  },
  LandingPage: {
    component: LandingPagePO,
    path: '/LandingPagePO',
    exact: true
  },
  Productdescription3: {
    component: Productdescription3,
    path: '/Productdescription3'
  },
  OrderManagement: {
    component: OrderManagement,
    path: '/OrderManagement'
  },
  ShoppingCartOrders: {
    component: Shopping,
    path: '/ShoppingCartOrders'
  },
  AddShoppingCartOrderItem: {
    component: AddShoppingCartOrderItem,
    path: '/AddShoppingCartOrderItem'
  },
  NavigationMenu: {
    component: NavigationMenu,
    path: '/NavigationMenu'
  },
  EducationalUserProfile: {
    component: EducationalUserProfile,
    path: '/EducationalUserProfile'
  },
  AdvancedSearch: {
    component: AdvancedSearch,
    path: '/AdvancedSearch'
  },
  Emailnotifications2: {
    component: Emailnotifications2,
    path: '/Emailnotifications2'
  },
  OTPInputAuth: {
    component: OTPInputAuth,
    path: '/OTPInputAuth'
  },
  Documentstorage: {
    component: Documentstorage,
    path: '/Documentstorage'
  },
  Collecttransactionfees: {
    component: Collecttransactionfees,
    path: '/Collecttransactionfees'
  },
  Adminconsole2: {
    component: Adminconsole2,
    path: '/Adminconsole2'
  },
  Zipcodessearch: {
    component: Zipcodessearch,
    path: '/Zipcodessearch'
  },
  CountryCodeSelector: {
    component: CountryCodeSelector,
    path: '/CountryCodeSelector'
  },
  Catalogue: {
    component: Catalogue,
    path: '/Catalogue'
  },
  UserProfileBasicBlock: {
    component: UserProfileBasicBlock,
    path: '/UserProfileBasicBlock'
  },
  Scheduling: {
    component: Scheduling,
    path: '/Scheduling'
  },
  Contactus: {
    component: ContactUsHelp,
    path: '/Contactus'
  },
  AddContactus: {
    component: AddContactus,
    path: '/AddContactus'
  },
  Settings2: {
    component: Settings2,
    path: '/Settings2'
  },
  Settings2BO: {
    component: Settings2BO,
    path: '/Settings2BO'
  },
  Rolesandpermissions: {
    component: Rolesandpermissions,
    path: '/Rolesandpermissions'
  },
  Sorting: {
    component: Sorting,
    path: '/Sorting'
  },
  SocialMediaAccountLoginScreen: {
    component: SocialMediaAccountLoginScreen,
    path: '/SocialMediaAccountLoginScreen'
  },
  Reviews: {
    component: Reviews,
    path: '/Reviews'
  },
  AddReview: {
    component: AddReview,
    path: '/AddReview'
  },
  SocialMediaAccountRegistrationScreen: {
    component: SocialMediaAccountRegistrationScreen,
    path: '/SocialMediaAccountRegistrationScreen'
  },
  EmailAccountLoginBlock: {
    component: EmailAccountLoginBlock,
    path: '/EmailAccountLoginBlock'
  },
  Ordercreation2: {
    component: Ordercreation2,
    path: '/Ordercreation2'
  },
  ForgotPassword: {
    component: ForgotPassword,
    path: '/ForgotPassword'
  },
  ForgotPasswordOTP: {
    component: ForgotPasswordOTP,
    path: '/ForgotPasswordOTP'
  },
  NewPassword: {
    component: NewPassword,
    path: '/NewPassword'
  },
  BuyNowPayLaterView: {
    component: BuyNowPayLaterView,
    path: '/BuyNowPayLaterView'
  },
  TermsConditionsDetail: {
    component: TermsConditionsDetail,
    path: '/TermsConditionsDetail'
  },
  TermsConditionsUsers: {
    component: TermsConditionsUsers,
    path: '/TermsConditionsUsers'
  },
  BulkUploading: {
    component: BulkUploading,
    path: '/BulkUploading'
  },
  ContentManagement: {
    component: ContentManagement,
    path: '/ContentManagement'
  },
  AddPetDetails: {
    component: AddPetDetails,
    path: '/AddPetDetails'
  },
  EditPetDetails: {
    component: EditPetDetails,
    path: '/EditPetDetails'
  },
  PetDetailsPage: {
    component: PetDetailsPage,
    path: '/PetDetailsPage'
  },
  LogInPetOwner: {
    component: LogInPetOwner,
    path: '/LogInPetOwner'
  },
  HotelsCatalogue: {
    component: HotelsCatalogue,
    path: '/HotelsCatalogue'
  },
  AllPhotos: {
    component: AllPhotos,
    path: '/AllPhotos'
  },
  PrivacyPolicy: {
    component: TermsConditions,
    path: '/PrivacyPolicy'
  },
  TermsConditions: {
    component: TermsConditions,
    path: '/TermsConditions'
  },
  EmailAccountRegistrationBusinessOwner: {
    component: EmailAccountRegistrationBusinessOwner,
    path: '/EmailAccountRegistrationBusinessOwner'
  },

  LogInBusinessOwner: {
    component: LogInBusinessOwner,
    path: '/LogInBusinessOwner'
  },

  ResetPasswordPo: {
    component: ResetPasswordPo,
    path: '/ResetPasswordPo'
  },
  ResetPasswordBo: {
    component: ResetPasswordBo,
    path: '/ResetPasswordBo'
  },
  AboutUs: {
    component: AboutUs,
    path: '/AboutUs'
  },
};

const routeMapAppBO = {
  Faqs: {
    component: Faqs,
    path: '/Faqs'
  },
  Settings2BO: {
    component: Settings2BO,
    path: '/Settings2BO'
  },
  TermsConditions: {
    component: TermsConditions,
    path: '/TermsConditions'
  },
  PrivacyPolicy: {
    component: TermsConditions,
    path: '/PrivacyPolicy'
  },
  LandingPage: {
    component: LandingPagePO,
    path: '/LandingPagePO',
    exact: true
  },
  Settings2: {
    component: Settings2,
    path: '/Settings2'
  },
  ShoppingCartOrders: {
    component: Shopping,
    path: '/ShoppingCartOrders'
  },
  Categoriessubcategories: {
    component: Categoriessubcategories,
    path: '/Categoriessubcategories'
  },
  Maps: {
    component: Maps,
    path: '/Maps'
  },

  InfoPage: {
    component: InfoPage,
    path: '/InfoPage'
  },

  AlertWeb: {
    component: AlertBlock,
    path: '*/AlertWeb',
    modal: true
  },
  Home: {
    component: NavigationMenu,
    path: '/',
    exact: true
  },
  ContentManagementBo: {
    component: ContentManagementBo,
    path: '/ContentManagementBo'
  },
  BownerDetaild: {
    component: BownerDetaild,
    path: '/BownerDetaild'
  }, BussinessOwnerDetailsFirst: {
    component: BussinessOwnerDetailsFirst,
    path: '/BussinessOwnerDetailsFirst'
  }, BussinessOwnerDetailsSecond: {
    component: BussinessOwnerDetailsSecond,
    path: '/BussinessOwnerDetailsSecond'
  }, BussinessOwnerDetailsThird: {
    component: BussinessOwnerDetailsThird,
    path: '/BussinessOwnerDetailsThird'
  },
  EmailAccountRegistrationBusinessOwner: {
    component: EmailAccountRegistrationBusinessOwner,
    path: '/EmailAccountRegistrationBusinessOwner'
  },
  LogInBusinessOwner: {
    component: LogInBusinessOwner,
    path: '/LogInBusinessOwner'
  },
  EmailAccountRegistrationWeb: {
    component: EmailAccountRegistrationWeb,
    path: '/EmailAccountRegistrationWeb'
  },
  LogInPetOwner: {
    component: LogInPetOwner,
    path: '/LogInPetOwner'
  }, ResetPasswordPo: {
    component: ResetPasswordPo,
    path: '/ResetPasswordPo'
  },
  ResetPasswordBo: {
    component: ResetPasswordBo,
    path: '/ResetPasswordBo'
  },
  CancellationPolicyFirst: {
    component: CancellationPolicyFirst,
    path: '/CancellationPolicyFirst'
  },
  PropertyDetails:{
    component:PropertyDetails,
    path:"/PropertyDetails"
  },
  StripeAccountDetails:{
    component:StripeAccountDetails,
    path:"/StripeAccountDetails"
  },
  SingleProperty:{
    component:SingleProperty,
    path:"/SingleProperty"
  },
  ReservationsBusinessOwner:{
    component:ReservationsBusinessOwner,
    path:'/ReservationsList'
  },
  AboutUs: {
    component: AboutUs,
    path: '/AboutUs'
  },

};

const routeMapAuth = {
  Faqs: {
    component: Faqs,
    path: '/Faqs'
  },
  Reservations: {
    component: Reservations,
    path: '/Reservations'
  },
  ReservationHistory: {
    component: ReservationHistory,
    path: '/ReservationHistory'
  },
  Settings2BO: {
    component: Settings2BO,
    path: '/Settings2BO'
  },

  LogInBusinessOwner: {
    component: LogInBusinessOwner,
    path: '/LogInBusinessOwner'
  },
  Settings2: {
    component: Settings2,
    path: '/Settings2'
  },
  ShoppingCartOrders: {
    component: Shopping,
    path: '/ShoppingCartOrders'
  },
  TermsConditions: {
    component: TermsConditions,
    path: '/TermsConditions'
  },
  EmailAccountRegistrationBusinessOwner: {
    component: EmailAccountRegistrationBusinessOwner,
    path: '/EmailAccountRegistrationBusinessOwner'
  },
  EmailAccountRegistrationWeb: {
    component: EmailAccountRegistrationWeb,
    path: '/EmailAccountRegistrationWeb'
  },
  LogInPetOwner: {
    component: LogInPetOwner,
    path: '/LogInPetOwner'
  },
  ResetPasswordPo: {
    component: ResetPasswordPo,
    path: '/ResetPasswordPo'
  },
  ResetPasswordBo: {
    component: ResetPasswordBo,
    path: '/ResetPasswordBo'
  },
  ForgotPasswordBusinessOwner: {
    component: ForgotPasswordBusinessOwner,
    path: '/ForgotPasswordBusinessOwner'
  },
  ForgotPasswordPetOwner: {
    component: ForgotPasswordPetOwner,
    path: '/ForgotPasswordPetOwner'
  },
  PrivacyPolicy: {
    component: TermsConditions,
    path: '/PrivacyPolicy'
  },
  LandingPage: {
    component: LandingPagePO,
    path: '/LandingPagePO',
    exact: true
  },
  AboutUs: {
    component: AboutUs,
    path: '/AboutUs'
  },
  WhyRegister: {
    component: AboutUs,
    path: '/WhyRegister'
  },
  PetDetailsPage: {
    component: PetDetailsPage,
    path: '/PetDetailsPage'
  },
  AllPhotos: {
    component: AllPhotos,
    path: '/AllPhotos'
  },
  ContentManagement: {
    component: ContentManagement,
    path: '/ContentManagement'
  },
  AddPetDetails: {
    component: AddPetDetails,
    path: '/AddPetDetails'
  },
  EditPetDetails: {
    component: EditPetDetails,
    path: '/EditPetDetails'
  },
  ContentManagementBo: {
    component: ContentManagementBo,
    path: '/ContentManagementBo'
  },
  HotelsCatalogue: {
    component: HotelsCatalogue,
    path: '/HotelsCatalogue'
  },
  BownerDetaild: {
    component: BownerDetaild,
    path: '/BownerDetaild'
  }, BussinessOwnerDetailsFirst: {
    component: BussinessOwnerDetailsFirst,
    path: '/BussinessOwnerDetailsFirst'
  }, BussinessOwnerDetailsSecond: {
    component: BussinessOwnerDetailsSecond,
    path: '/BussinessOwnerDetailsSecond'
  }, BussinessOwnerDetailsThird: {
    component: BussinessOwnerDetailsThird,
    path: '/BussinessOwnerDetailsThird'
  },
  Contactus: {
    component: ContactUsHelp,
    path: '/Contactus'
  },
  AddReview: {
    component: AddReview,
    path: '/AddReview'
  },
  CancellationPolicyFirst: {
    component: CancellationPolicyFirst,
    path: '/CancellationPolicyFirst'
  },
  PropertyDetails:{
    component:PropertyDetails,
    path:"/PropertyDetails"
  },
  StripeAccountDetails:{
    component:StripeAccountDetails,
    path:"/StripeAccountDetails"
  },
  SingleProperty:{
    component:SingleProperty,
    path:"/SingleProperty"
  },
  ReservationsBusinessOwner:{
    component:ReservationsBusinessOwner,
    path:'/ReservationsList'
  }
};

const firebaseAPI = firebase.initializeApp({
  apiKey: 'AIzaSyDgl9aTbKMdRZ9-ijSZRionh3V591gMJl4',
  authDomain: 'rnmasterapp-c11e9.firebaseapp.com',
  databaseURL: 'https://rnmasterapp-c11e9.firebaseio.com',
  projectId: 'rnmasterapp-c11e9',
  storageBucket: 'rnmasterapp-c11e9.appspot.com',
  messagingSenderId: '649592030497',
  appId: '1:649592030497:web:7728bee3f2baef208daa60',
  measurementId: 'G-FYBCF3Z2W3'
});

const AuthLayout = (props) => {
  const ContentManagement = window.location.pathname === '/ContentManagement';


  return (
    <>
      {ContentManagement ? (
        <div style={{ display: "flex" }}>

          <div style={{ backgroundColor: "rgb(224, 244, 252)", width: "100%" }}>
            <Switch>
              {WebRoutesGenerator({ routeMap: routeMapAuth })}
              <Route render={() => <Redirect to="/LandingPagePO" />} />
            </Switch>

            <ModalContainer />
          </div>
        </div>
      ) : (
        <>
          <Switch>
            {WebRoutesGenerator({ routeMap: routeMapAuth })}
            <Route render={() => <Redirect to="/LandingPagePO" />} />
          </Switch>
          <ModalContainer />
        </>
      )}

    </>
  );
};

const AppLayout = () => {
  const userType = localStorage.getItem('userType');

  return (
    <>
      <Switch>
        {WebRoutesGenerator({
          routeMap: userType === 'PO' ? routeMapAppPO : routeMapAppBO
        })}
        <Route render={() => <Redirect to="/LandingPagePO" />} />
      </Switch>
      <ModalContainer />

    </>
  );
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      token: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const defaultAnalytics = firebaseAPI.analytics();
    defaultAnalytics.logEvent('APP_Loaded');
    const loggedin = localStorage.getItem('authToken');
    return <View>
      {loggedin ? AppLayout() : AuthLayout()}
    </View>;
  }
}

export default App;