// import { IBlock } from "../../../framework/src/IBlock";
// import { Message } from "../../../framework/src/Message";
// import { BlockComponent } from "../../../framework/src/BlockComponent";
// import MessageEnum, {
//   getName
// } from "../../../framework/src/Messages/MessageEnum";
// import { runEngine } from "../../../framework/src/RunEngine";
// // Customizable Area Start
// // Customizable Area End
// export const configJSON = require("./config");
// export interface Props {
//   navigation: any;
//   id: string;
//   closeManageAssetsModal: any;
//   handleCheckboxChange: any;
//   // Customizable Area Start
//   // Customizable Area End
// }
// export interface S {
//   // Customizable Area Start
//   backOffice: boolean;
//   dispatcher: boolean;
//   technician: boolean;
//   jobTypeSelect: any;
//   showAcordianBox: boolean;
//   assetsTypeSelect: any;
//   manageViewOpen: boolean;
//   manageAssetsOpen: boolean;
//   isOpenDialogBox: boolean,
//   showModal: any;
//   openAssest: any,
//   errorEmailExistTech: string;
//   techUserInfo: {
//     fullName: string;
//     email: any;
//     address: string;
//     phoneNo: any;
//     salary: any;
//     SocialSuqNo: any;
//     tech_id: any;
//     workHoursFromSelect: any;
//     workHoursToSelect: any;
//     breakEndSelect: any;
//     breakStartSelect: any;
//   }
//   modalEmail: string,
//   modalPasswordTech: string,
//   getAssests: any;
//   checkedList: any;
//   checkedListArr:any[];
//   // Customizable Area End
// }
// export interface SS {
//   id: string;
//   // Customizable Area Start
//   // Customizable Area End
// }
// export default class TechnicianController extends BlockComponent<Props, S, SS> {
//   // Customizable Area Start
//   getGroupsApiCallId = "";
//   getAccountsApiCallId = "";
//   postGroupApiCallId = "";
//   putGroupApiCallId = "";
//   deleteGroupApiCallId = "";
//   postAddAccountsApiCallId = "";
//   postRemoveAccountsApiCallId = "";
//   createTechApiCallId: string = "";
//   getManageAssestApiCallId: string = "";
//   // Customizable Area End
//   constructor(props: Props) {
//     super(props);
//     this.receive = this.receive.bind(this);
//     this.subScribedMessages = [
//       // Customizable Area Start
//       getName(MessageEnum.RestAPIResponceMessage),
//       getName(MessageEnum.SessionResponseMessage)
//       // Customizable Area End
//     ];
//     this.state = {
//       // Customizable Area Start
//       jobTypeSelect: "",
//       assetsTypeSelect: "",
//       showModal: false,
//       manageAssetsOpen: false,
//       manageViewOpen: false,
//       isOpenDialogBox: false,
//       openAssest: false,
//       backOffice: false,
//       dispatcher: false,
//       technician: true,
//       showAcordianBox: false,
//       errorEmailExistTech: '',
//       techUserInfo: {
//         fullName: "",
//         email: "",
//         address: "",
//         phoneNo: "",
//         salary: "",
//         SocialSuqNo: "",
//         tech_id: "",
//         workHoursFromSelect: "",
//         workHoursToSelect: "",
//         breakEndSelect: "",
//         breakStartSelect: "",
//       },
//       modalEmail: '',
//       modalPasswordTech: '',
//       getAssests: [],
//       checkedList: [],
//       checkedListArr:[],
//       // Customizable Area End
//     };
//     runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
//     // Customizable Area Start
//     // Customizable Area End
//   }
//   // Customizable Area Start
//   async componentDidMount() {
//     super.componentDidMount();
//     this.handleManageAssests()
    
//   }
  
//   async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<S>) {
//     if (prevState.checkedList != this.state.checkedList) {
//       console.log("checking d", this.state.checkedList)
//       console.log("prev checking", prevState.checkedList)
//       this.setState({checkedList: this.state.checkedList})
//     }
//     console.log('this.state.checkedList',this.state.checkedList);
//   }
//   receive = async (from: string, message: Message) => {
//     runEngine.debugLog("Message Received", message);
//     // Condition for fetching group list.
//     if (this.createTechApiCallId === 
// message.getData(getName(MessageEnum.RestAPIResponceDataMessage))) {
//       const responseJson = message.getData(
//         getName(MessageEnum.RestAPIResponceSuccessMessage)
//       );
//       if (responseJson.message) {
//         this.setState({
//           showModal: true,
//           modalEmail: responseJson.data.data.attributes.email,
//           modalPasswordTech: responseJson.data.data.attributes.user_password,
//           techUserInfo: { address: '', email: '', fullName: '', phoneNo: '', salary: '', SocialSuqNo: '', 
// tech_id: '', workHoursFromSelect: '', workHoursToSelect: '', breakEndSelect: '', breakStartSelect: 
// '', },
//           errorEmailExistTech: "",
//           jobTypeSelect: "",
//         });
//       }
//       else if (responseJson.error) {
//         this.setState({ errorEmailExistTech: responseJson?.error })
//       }
//     }
//     if (this.getManageAssestApiCallId === 
// message.getData(getName(MessageEnum.RestAPIResponceDataMessage))) {
//       const responseJson = message.getData(
//         getName(MessageEnum.RestAPIResponceSuccessMessage)
//       );
//       if (responseJson) {
//         this.setState({
//           ...this.state,
//           getAssests: responseJson.data,
//         });
//       }
//       else if (responseJson.error) {
//       }
//     }
//   };
//   goToDisPatcher = () => {
//     this.props.navigation.navigate("DispatchUser");
//   };
//   closeModal = () => {
//     this.setState({ showModal: false });
//   };
//   handleOpenDialog = () => {
//     this.setState({ openAssest: true });
//   };
//   handleCloseDialog = () => {
//     this.setState({ manageViewOpen: false });
//   };
//   goToBackOffice = () => {
//     this.props.navigation.navigate("BackOfficeUser");
//   };
//   goToTechnician = () => {
//     this.props.navigation.navigate("TechnicianUser");
//   };
//   clickAcordianBtn = () => {
//     this.setState({
//       showAcordianBox: !this.state.showAcordianBox
//     });
//   };
//   manageViewHandle = () => {
//     this.setState({ manageViewOpen: true });
//   };
//   manageAssetsHandle = () => {
//     this.setState({ manageAssetsOpen: true, });
//   };
//   closeManageAssetsModal = () => {
    
//     console.log("checkkkkk", this.state.checkedList)
//     this.setState({ manageAssetsOpen: !this.state.manageAssetsOpen});
//   }
//   openModalDialog = () => {
//     this.setState({ isOpenDialogBox: true })
//   }
//   closeModalDialog = () => {
//     this.setState({ isOpenDialogBox: false })
//   }
//   // handleCheckboxChange = (e: any, subCategoryName: string, subcategoryId: number, 
// parentName: string, parentId: number) => {
//   //   const { checkedList } = this.state;
//   //   const { checked } = e.target;
//   //   this.setState((prevState) => {
//   //     const test = [...prevState.checkedList];
//   //     if (test.some((item) => item.id === subcategoryId)) {
//   //       const filteredResult = test.filter((testId) => testId.id !== subcategoryId);
//   //       return { checkedList: filteredResult }; // Updating the checkedList in the state
//   //     } else {
//   //       return {
//   //         checkedList: [
//   //           ...test,
//   //           {
//   //             id: subcategoryId,
//   //             name: subCategoryName,
//   //             parentName: parentName,
//   //             parentId: parentId,
//   //           },
//   //         ],
//   //       };
//   //     }
//   //   });
//   // };
//   handleCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>, subCategoryName: 
// string, subcategoryId: number, parentName: string, parentId: number) => {
//     const { checkedList } = this.state;
//     const isChecked = e.target.checked;
  
//     if (isChecked) {
//       this.setState((prevState) => ({
//         checkedList: [
//           ...prevState.checkedList,
//           {
//             id: subcategoryId,
//             name: subCategoryName,
//             parentName: parentName,
//             parentId: parentId,
//           },
//         ],
//       }));
//     } else {
//       this.setState((prevState) => ({
//         checkedList: prevState.checkedList.filter((item: any) => item.id !== subcategoryId),
//       }));
//     }
//   };
  
//   handleSubmit = (values: any, { resetForm }: any) => {
//     resetForm({
//       values: {
//         fullName: this.state.techUserInfo.fullName,
//         email: values.email, // Keep the email value
//         id: this.state.techUserInfo.tech_id,
//         address: this.state.techUserInfo.address,
//         phoneNo: this.state.techUserInfo.phoneNo,
//         workHoursFromSelect: this.state.techUserInfo.workHoursFromSelect,
//         workHoursToSelect: this.state.techUserInfo.workHoursToSelect,
//         breakStartSelect: this.state.techUserInfo.breakStartSelect,
//         breakEndSelect: this.state.techUserInfo.breakEndSelect,
//         salary: this.state.techUserInfo.salary,
//         SocialSuqNo: this.state.techUserInfo.SocialSuqNo,
//       },
//     });
//     this.handlePostTech()
//   };
//   handlePostTech = () => {
//     let headers = {
//       "Content-Type": "application/json",
//     }
//     const httpBody = {
//       "user_type": "technician",
//       "account": {
//         "first_name": this.state.techUserInfo.fullName,
//         "technician_id": this.state.techUserInfo.tech_id,
//         "last_name": "",
//         "email": this.state.techUserInfo.email,
//         "address": this.state.techUserInfo.address,
//         "full_phone_number": this.state.techUserInfo.phoneNo,
//         "work_hours_from": this.state.techUserInfo.workHoursFromSelect,
//         "work_hours_to": this.state.techUserInfo.workHoursToSelect,
//         "break_start": this.state.techUserInfo.breakStartSelect,
//         "break_end": this.state.techUserInfo.breakEndSelect,
//         "salary": this.state.techUserInfo.salary,
//         "social_security_number": this.state.techUserInfo.SocialSuqNo,
//       }
//     }
//     const requestMessage = new Message(
//       getName(MessageEnum.RestAPIRequestMessage)
//     );
//     this.createTechApiCallId = requestMessage.messageId;
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIResponceEndPointMessage),
//       configJSON.accountsAPiEndPointCreateAccount
//     );
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestHeaderMessage),
//       JSON.stringify(headers)
//     );
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestBodyMessage),
//       JSON.stringify(httpBody)
//     );
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestMethodMessage),
//       configJSON.apiMethodTypeTechDetail
//     );
//     runEngine.sendMessage(requestMessage.id, requestMessage);
//   }
//   handleManageAssests = () => {
//     let token = "";
//     if (typeof window !== "undefined") {
//       token = localStorage.getItem("token") || ""
//     }
//     const headers = {
//       "Token": localStorage.getItem("token"),
//     };
//     const requestMessage = new Message(
//       getName(MessageEnum.RestAPIRequestMessage)
//     );
//     this.getManageAssestApiCallId = requestMessage.messageId;
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIResponceEndPointMessage),
//       configJSON.accountsAPiEndPointManageAssests
//     );
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestHeaderMessage),
//       JSON.stringify(headers)
//     );
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestMethodMessage),
//       configJSON.apiMethodTypeManageAssestsDetail
//     );
//     runEngine.sendMessage(requestMessage.id, requestMessage);
//     return true;
//   };
//   getStartingBreakTimeTech = (timelist: any, startWork: any, endWork: any) => {
//     let timeOptions = []
//     timeOptions =
//       timelist.slice(timelist.findIndex((item: any) => item.value === startWork), 
// timelist.findIndex((item: any) => item.value === endWork)).slice(1)
//     return timeOptions;
//   }
//   getBreakEndTimeTech = (timelist: any, startBreakTime: any, endWorkTime: any) => {
//     let timeOptions = []
//     timeOptions =
//       timelist.slice((timelist.findIndex((item: any) => item.value === startBreakTime) + 1), 
// timelist.findIndex((item: any) => item.value === endWorkTime))
//     return timeOptions;
//   }
//   // Customizable Area End
// }