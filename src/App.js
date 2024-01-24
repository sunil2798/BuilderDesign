import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import OnBording from './component/OnBording';
import Membership from './component/Membership';
import DragAndDrop from './component/DragAndDrop'
import UploadVideo from './component/UploadVideo';
import Popup from './component/Popup';
import PopupTwo from './component/PopupTwo';
import ModalPopup from './component/ModalPopup';
import MemberPlanPreview from './component/MemberPlanPreview';
import ArshandTable from './component/ArshandTable';
import DragDrop from './component/DragDrop';
import MaskImg from './component/css/MaskImg';
import MultiSelect from './component/css/MultiSelect';
import PhoneNumber from './component/PhoneNumber';
import ArshadEmp from './component/ArshadEmp';
import Info from './component/arshad/Info';
import TechDetail from './component/arshad/TechDetail';
import Formikk from './component/arshad/Formikk';
import Port from './component/Gupta/Port';
import ProfileInfo from './component/vishal/ProfileInfo';
import IndianPatient from './component/himanshuGupta/IndianPatient';
import EditProfile from './component/vishal/EditProfile';
import Header from './component/vishal/Header';
import LogIn from './component/vishal/byVishal/logIn/LogIn';
import LoginFormik from './component/vishal/LoginFormik';
import LogInFormWithFormik from './component/vishal/LogInFormWithFormik';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OnBording />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/draganddrop' element={<DragAndDrop />} />
        <Route path='/uploadvideo' element={<UploadVideo />} />
        <Route path='/popup' element={<Popup />} />
        <Route path='/popuptwo' element={<PopupTwo />} />
        <Route path='/modalpopup' element={<ModalPopup />} />
        <Route path='/memberplanpreview' element={<MemberPlanPreview />} />
        <Route path='/arshadtable' element={<ArshandTable />} />
        <Route path='/dragdrop' element={<DragDrop />} />
        <Route path='/maskimg' element={<MaskImg />} />
        <Route path='/multiselect' element={<MultiSelect />} />
        <Route path='/phonenumber' element={<PhoneNumber />} />
        <Route path='/arshademp' element={<ArshadEmp />} />
        <Route path='/info' element={<Info />} />
        <Route path='/tech' element={<TechDetail />} />
        <Route path='/formik' element={<Formikk />} />
        <Route path='/port' element={<Port />} />
        <Route path='/profileinfo' element={<ProfileInfo />} />
        <Route path='/indianpatient' element={<IndianPatient />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/header' element={<Header />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/loginformik' element={<LoginFormik />} />
        <Route path='/loginform' element={<LogInFormWithFormik />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
