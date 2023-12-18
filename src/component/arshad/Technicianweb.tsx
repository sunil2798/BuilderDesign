// import React from "react";
// // Customizable Area Start
// import {
//   Container,
//   TableCell,
//   Table,
//   Box,
//   Button,
//   Select,
//   TableContainer,
//   TableHead,
//   Paper,
//   TableRow,
//   TableBody,
//   Grid,
//   Typography,
//   FormControl,
//   TextField,
//   Checkbox,
// } from "@material-ui/core";
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// // import { imgLogo } from "./assets";
// import "../assets/style.css";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ControlPointIcon from "@material-ui/icons/ControlPoint";
// import * as Yup from 'yup';
// import CloseIcon from '@material-ui/icons/Close';
// // import HeaderNavigation from "../../../components/src/HeaderNavigation";
// import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
// const optionsArrayTech: any = [
//   { value: '1:00', label: '1:00' },
//   { value: '1:30', label: '1:30' },
//   { value: '2:00', label: '2:00' },
//   { value: '2:30', label: '2:30' },
//   { value: '3:00', label: '3:00' },
//   { value: '3:30', label: '3:30' },
//   { value: '4:00', label: '4:00' },
//   { value: '4:30', label: '4:30' },
//   { value: '5:00', label: '5:00' },
//   { value: '5:30', label: '5:30' },
//   { value: '6:00', label: '6:00' },
//   { value: '6:30', label: '6:30' },
//   { value: '7:00', label: '7:00' },
//   { value: '7:30', label: '7:30' },
//   { value: '8:00', label: '8:00' },
//   { value: '8:30', label: '8:30' },
//   { value: '9:00', label: '9:00' },
//   { value: '9:30', label: '9:30' },
//   { value: '10:00', label: '10:00' },
//   { value: '10:30', label: '10:30' },
//   { value: '11:00', label: '11:00' },
//   { value: '11:30', label: '11:30' },
//   { value: '12:00', label: '12:00' },
//   { value: '12:30', label: '12:30' },
//   { value: '13:00', label: '13:00' },
//   { value: '13:30', label: '13:30' },
//   { value: '14:00', label: '14:00' },
//   { value: '14:30', label: '14:30' },
//   { value: '15:00', label: '15:00' },
//   { value: '15:30', label: '15:30' },
//   { value: '16:00', label: '16:00' },
//   { value: '16:30', label: '16:30' },
//   { value: '17:00', label: '17:00' },
//   { value: '17:30', label: '17:30' },
//   { value: '18:00', label: '18:00' },
//   { value: '18:30', label: '18:30' },
//   { value: '19:00', label: '19:00' },
//   { value: '19:30', label: '19:30' },
//   { value: '20:00', label: '20:00' },
//   { value: '20:30', label: '20:30' },
//   { value: '21:00', label: '21:00' },
//   { value: '21:30', label: '21:30' },
//   { value: '22:00', label: '22:00' },
//   { value: '22:30', label: '22:30' },
//   { value: '23:00', label: '23:00' },
//   { value: '23:30', label: '23:30' },
//   { value: '24:00', label: '24:00' }
// ];
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#0000ff",
//       contrastText: "#fff"
//     }
//   }
// });
// let validationSchema: any = Yup.object().shape({
//   fullName: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   address: Yup.string().required('Address is required'),
//   phoneNo: Yup.string()
//     .matches(/^\d{10}$/, 'Phone number must be 10 digits')
//     .required('Phone number is required'),
//   workHoursFromSelect: Yup.string().required('Select At least One Value'),
//   workHoursToSelect: Yup.string().required('Select At least One Value'),
// });
// // Customizable Area End
// import TechnicianController, {
//   configJSON,
//   Props
// } from "./TechnicianController";
// // import { CheckBox } from "@material-ui/icons";
// import TechnicianUpdate from "./TechnicianUpdate.web";
// import { Formik } from "formik";
// // import DialogMessage from "../../../components/src/DialogMessage";
// export default class Technician extends TechnicianController {
//   constructor(props: Props) {
//     super(props);
//     // Customizable Area Start
//     // Customizable Area End
//   }
//   // Customizable Area Start
//   // Customizable Area End
//   render() {
//     // console.log("web", this.state.checkedList, this.state.checkedList, this.state.manageAssetsOpen)
//     // Customizable Area Start
//     return (
//       <ThemeProvider theme={theme}>
//         <Container style={webStylesTech.backGdBoxBackO} maxWidth="lg">
//           <Box>
//             <Box sx={{ display: "flex" }}>
//               <Box sx={webStylesTech.headerSidBarBackO}>
//                 <Box sx={webStylesTech.width100}>
//                   <img src={imgLogo} width="60" />
//                 </Box>
//               </Box>
//               {/* {console.log(this.state.manageAssetsOpen,"plplp")} */}
//               {
//                 this.state.manageAssetsOpen === true ?
//                   <TechnicianUpdate navigation={""} id={""}
//                     closeManageAssetsModal={this.closeManageAssetsModal}
//                     handleCheckboxChange={this.handleCheckboxChange} />
//                   :
//                   <Box sx={webStylesTech.technicianBoxBackO}>
//                     <Grid container>
//                       <Grid item xs={12}>
//                         <Typography
//                           variant="h2"
//                           style={webStylesTech.technicianTypoBackO}
//                         >
//                           {" "}
//                           <ChevronRightIcon
//                             style={webStylesTech.technicianLeftICon}
//                           />{" "}
//                           &nbsp; Create new user
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                     <Grid container>
//                       <Grid item xs={3} sm={3} md={3} lg={3} />
//                       <Grid item xs={12} sm={12} md={12} lg={6}>
//                         <Box>
//                           <Typography
//                             variant="h2"
//                             style={{
//                               ...webStylesTech.technicianTypoBoxBackO,
//                               ...webStylesTech.technicianTypoBackO
//                             }}
//                           >
//                             {" "}
//                             Select User Type
//                           </Typography>
//                         </Box>
//                         <HeaderNavigation
//                           state={this.state}
//                           goToDisPatcher={this.goToDisPatcher}
//                           goToBackOffice={this.goToBackOffice}
//                           goToTechnician={this.goToTechnician}
//                         />.
//                         <Box
//                           className="dispatchFormBox"
//                           style={webStylesTech.technicianFormBoxBackO}
//                         >
//                           <Formik
//                             initialValues={{
//                               fullName: this.state.techUserInfo.fullName,
//                               email: this.state.techUserInfo.email,
//                               id: this.state.techUserInfo.tech_id,
//                               address: this.state.techUserInfo.address,
//                               phoneNo: this.state.techUserInfo.phoneNo,
//                               workHoursFromSelect: this.state.techUserInfo.workHoursFromSelect,
//                               workHoursToSelect: this.state.techUserInfo.workHoursToSelect,
//                               breakStartSelect: this.state.techUserInfo.breakStartSelect,
//                               breakEndSelect: this.state.techUserInfo.breakEndSelect,
//                             }}
//                             validationSchema={validationSchema}
//                             data-test-id="dummydd"
//                             onSubmit={
//                               this.handleSubmit
//                             }
//                           >
//                             {({ values,
//                               errors,
//                               setFieldTouched,
//                               setFieldValue,
//                               touched, handleSubmit, setErrors, resetForm }) => (
//                               <form
//                                 // noValidate
//                                 autoComplete="off"
//                                 style={webStylesTech.marginTop15Back}
//                                 onSubmit={
//                                   handleSubmit
//                                 }
//                               >
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.fullName}
//                                   </p>
//                                   <TextField
//                                     fullWidth
//                                     name="fullName"
//                                     data-test-id={"txtFirstName"}
//                                     placeholder={configJSON.fullName}
//                                     variant="outlined"
//                                     inputProps={{ maxLength: 20 }}
//                                     value={this.state.techUserInfo.fullName}
//                                     onChange={(event: any) => {
//                                       setFieldValue("fullName", event.target.value)
//                                       this.setState({
//                                         techUserInfo: {
//                                           ...this.state.techUserInfo,
//                                           fullName: event.target.value,
//                                         }
//                                       })
//                                     }}
//                                   />
//                                   <FieldError
//                                     error={errors.fullName}
//                                     touched={touched.fullName}
//                                   />
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.email}
//                                   </p>
//                                   <TextField
//                                     fullWidth
//                                     placeholder={configJSON.email}
//                                     name="email"
//                                     data-test-id="textEmail"
//                                     variant="outlined"
//                                     value={this.state.techUserInfo.email}
//                                     onChange={(event: any) => {
//                                       setFieldValue("email", event.target.value)
//                                       this.setState({
//                                         techUserInfo: {
//                                           ...this.state.techUserInfo,
//                                           email: event.target.value,
//                                         }
//                                       })
//                                     }}
//                                   />
//                                   <FieldError
//                                     error={errors.email}
//                                     touched={touched.email}
//                                   />
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.id}
//                                   </p>
//                                   <TextField
//                                     fullWidth
//                                     id="id"
//                                     name="id" // Add this line
//                                     data-test-id="textID"
//                                     placeholder={configJSON.id}
//                                     variant="outlined"
//                                     value={this.state.techUserInfo.tech_id}
//                                     onChange={(event) => {
//                                       setFieldValue("id", event.target.value);
//                                       this.setState({
//                                         techUserInfo: {
//                                           ...this.state.techUserInfo,
//                                           tech_id: event.target.value,
//                                         },
//                                       });
//                                     }}
//                                   />
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.address}
//                                   </p>
//                                   <TextField
//                                     fullWidth
//                                     id="textInput"
//                                     placeholder={configJSON.address}
//                                     variant="outlined"
//                                     data-test-id="textAddress"
//                                     value={this.state.techUserInfo.address}
//                                     onChange={(event: any) => {
//                                       setFieldValue("address", event.target.value)
//                                       this.setState({
//                                         techUserInfo: {
//                                           ...this.state.techUserInfo,
//                                           address: event.target.value,
//                                         }
//                                       })
//                                     }}
//                                   />
//                                   <FieldError
//                                     error={errors.address}
//                                     touched={touched.address}
//                                   />
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.phoneNo}
//                                   </p>
//                                   <TextField
//                                     fullWidth
//                                     id="textInput"
//                                     name="phoneNo"
//                                     placeholder={configJSON.phoneNo}
//                                     data-test-id="textPhoneNo"
//                                     variant="outlined"
//                                     value={this.state.techUserInfo.phoneNo}
//                                     onChange={(event: any) => {
//                                       setFieldValue("phoneNo", event.target.value)
//                                       this.setState({
//                                         techUserInfo: {
//                                           ...this.state.techUserInfo,
//                                           phoneNo: event.target.value,
//                                         }
//                                       })
//                                     }}
//                                   />
//                                   <FieldError
//                                     error={errors.phoneNo}
//                                     touched={touched.phoneNo}
//                                   />
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.jobType}
//                                   </p>
//                                   <FormControl fullWidth variant="outlined">
//                                     <Select
//                                       value={this.state.jobTypeSelect}
//                                       onChange={event =>
//                                         this.setState({
//                                           jobTypeSelect: event.target.value
//                                         })
//                                       }
//                                       fullWidth
//                                       data-test-id="textJobType"
//                                       labelId="demo-simple-select-label"
//                                       id="demo-simple-select"
//                                       placeholder={configJSON.jobType}
//                                       inputProps={{
//                                         sx: {
//                                           color: "#84989F",
//                                           borderRadius: "5px",
//                                           backgroundColor: "#fff"
//                                         }
//                                       }}
//                                     >
//                                       <option value={"Install"}> Install</option>
//                                       <option value={"Repair"}>Repair</option>
//                                       <option value={"Substitute"}>Substitute</option>
//                                       <option value={"Commissioning"}>Commissioning</option>
//                                       <option value={"Survey"}>Survey</option>
//                                       <option value={"Call-out"}>Call-out</option>
//                                       <option value={"Quarterly Maintenance"}>Quarterly
//                                         Maintenance</option>
//                                       Technician.web          <option value={"Yearly Maintenance"}> Yearly Maintenance </option>
//                                       <option value={"Custom Maintenance"}> Custom Maintenance </option>
//                                       <option value={"Recharge"}> Recharge </option>
//                                       <option value={"Others"}>Others</option>
//                                     </Select>
//                                   </FormControl>
//                                 </Box>
//                                 <Box className="viewSlectionBox">
//                                   <Button
//                                     id="btnExample"
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={this.manageAssetsHandle}
//                                     style={webStylesTech.technicianBtnRedBackO}
//                                   >
//                                     Manage Assets
//                                   </Button>
//                                   <Button
//                                     id="btnExample"
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={this.manageViewHandle}
//                                     className="viewSelectionBtn"
//                                   >
//                                     View Selection
//                                   </Button>
//                                 </Box>
//                                 {this.state.manageViewOpen &&
//                                   <Box>
//                                     <Box>
//                                       <Paper
//                                         style={{
//                                           width: "100%",
//                                           position: 'relative',
//                                           zIndex: 99999,
//                                         }}
//                                       >
//                                         <Box
//                                           style={{
//                                             display: "flex",
//                                             padding: "1rem",
//                                             justifyContent: "space-between",
//                                           }}
//                                         >
//                                           <Typography variant="h6" style={{ fontWeight: "bold" }}>
//                                             Selected Assets
//                                           </Typography>
//                                           <CloseIcon onClick={this.handleCloseDialog} />
//                                         </Box>
//                                         <TableContainer style={{ height: '20rem' }}>
//                                           <Table stickyHeader aria-label="sticky table">
//                                             <TableHead style={{ position: "sticky" }}>
//                                               <TableRow>
//                                                 <TableCell>Asset Type</TableCell>
//                                                 <TableCell>Asset ID</TableCell>
//                                                 <TableCell>Vertical</TableCell>
//                                                 <TableCell>Location</TableCell>
//                                               </TableRow>
//                                             </TableHead>
//                                             <TableBody style={{ overflowX: 'hidden', overflowY: 'scroll', }}>
//                                               <TableRow tabIndex={-1}>
//                                                 <TableCell colSpan={4}>
//                                                   <Checkbox
//                                                     style={{
//                                                       width: "100%",
//                                                       display: "flex",
//                                                       justifyContent: "center",
//                                                     }}
//                                                     inputProps={{ 'aria-label': 'primary checkbox' }}
//                                                   />
//                                                 </TableCell>
//                                               </TableRow>
//                                               {this.state.checkedList.map((item: any, index: any) => {
//                                                 // console.log("hellosss", this.state.checkedList)
//                                                 return (
//                                                   < TableRow key={index} tabIndex={- 1}>
//                                                     <TableCell>{item.name}
//                                                     </TableCell>
//                                                     <TableCell>{item.id}</TableCell>
//                                                     {/* <TableCell>{item.}</TableCell> */}
//                                                     {/* <TableCell>{item.value}</TableCell> */}
//                                                   </TableRow>
//                                                 )
//                                               })}
//                                             </TableBody>
//                                           </Table>
//                                         </TableContainer>
//                                       </Paper>
//                                     </Box>
//                                   </Box>
//                                 }
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.workHoursFrom}
//                                   </p>
//                                   <FormControl fullWidth variant="outlined">
//                                     <Select
//                                       value={this.state.techUserInfo.workHoursFromSelect}
//                                       data-test-id="textWorkHoursFrom"
//                                       onChange={(event: any) => {
//                                         setFieldValue("workHoursFromSelect", event.target.value)
//                                         this.setState({
//                                           techUserInfo: {
//                                             ...this.state.techUserInfo,
//                                             workHoursFromSelect: event.target.value, breakStartSelect: "",
//                                             breakEndSelect: "", workHoursToSelect: ""
//                                           }
//                                         })
//                                       }
//                                       }
//                                       fullWidth
//                                       labelId="demo-simple-select-label"
//                                       id="demo-simple-select"
//                                       placeholder={configJSON.workHoursFrom}
//                                       inputProps={{
//                                         sx: {
//                                           color: "#84989F",
//                                           borderRadius: "5px",
//                                           backgroundColor: "#fff"
//                                         }
//                                       }}
//                                     >
//                                       {optionsArrayTech.map((optionTech: any) => (
//                                         <option key={optionTech.value} value={optionTech.value}>
//                                           {optionTech.label}
//                                         </option>
//                                       ))}
//                                     </Select>
//                                     <FieldError
//                                       error={errors.workHoursFromSelect}
//                                       touched={touched.workHoursFromSelect}
//                                     />
//                                   </FormControl>
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.workHoursTo}
//                                   </p>
//                                   <FormControl fullWidth
//                                     variant="outlined">
//                                     <Select
//                                       data-test-id="textWorkHoursTo"
//                                       onChange={(event: any) => {
//                                         setFieldValue("workHoursToSelect", event.target.value)
//                                         this.setState({
//                                           techUserInfo: {
//                                             ...this.state.techUserInfo,
//                                             workHoursToSelect: event.target.value
//                                           },
//                                         })
//                                       }
//                                       }
//                                       fullWidth={true}
//                                       value={this.state.techUserInfo.workHoursToSelect}
//                                       labelId="demo-simple-select-label"
//                                       id="demo-simple-select"
//                                       placeholder={configJSON.workHoursTo}
//                                       inputProps={{
//                                         sx: {
//                                           color: "#84989F",
//                                           backgroundColor: "#fff",
//                                           borderRadius: "5px",
//                                         }
//                                       }}
//                                     >
//                                       {optionsArrayTech.map((optionTechItem: any) => (
//                                         <option key={optionTechItem.value} value={optionTechItem.value}>
//                                           {optionTechItem.label}
//                                         </option>
//                                       ))}
//                                     </Select>
//                                     <FieldError
//                                       error={errors.workHoursToSelect}
//                                       touched={touched.workHoursToSelect}
//                                     />
//                                   </FormControl>
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   {this.state.showAcordianBox ? (
//                                     <>
//                                       <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                         <p
//                                           style={
//                                             webStylesTech.technicianInputBoxBackOLabel
//                                           }
//                                         >
//                                           {configJSON.breakStart}
//                                         </p>
//                                         <FormControl fullWidth variant="outlined">
//                                           <Select
//                                             fullWidth={true}
//                                             data-test-id="textBreakStart"
//                                             onChange={(event: any) => {
//                                               setFieldValue("breakStartSelect", event.target.value)
//                                               this.setState({
//                                                 techUserInfo: {
//                                                   ...this.state.techUserInfo,
//                                                   breakStartSelect: event.target.value
//                                                 },
//                                               })
//                                             }
//                                             }
//                                             placeholder={configJSON.breakStart}
//                                             value={this.state.techUserInfo.breakStartSelect}
//                                             id="demo-simple-select"
//                                             labelId="demo-simple-select-label"
//                                             inputProps={{
//                                               sx: {
//                                                 backgroundColor: "#fff",
//                                                 borderRadius: "5px",
//                                                 color: "#84989F",
//                                               }
//                                             }}
//                                           >
//                                             {
//                                               this.getStartingBreakTimeTech(optionsArrayTech,
//                                                 this.state.techUserInfo.workHoursFromSelect,
//                                                 this.state.techUserInfo.workHoursToSelect).map((option: any) => <option key={option.value}
//                                                   value={option.value}>
//                                                   {option.label}
//                                                 </option>)
//                                             }
//                                           </Select>
//                                         </FormControl>
//                                       </Box>
//                                       <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                         <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                           {configJSON.workHoursTo}
//                                         </p>
//                                         <FormControl variant="outlined" fullWidth>
//                                           <Select
//                                             data-test-id="textBreakEnd"
//                                             onChange={(event: any) => {
//                                               setFieldValue("breakEndSelect", event.target.value)
//                                               this.setState({
//                                                 techUserInfo: {
//                                                   ...this.state.techUserInfo,
//                                                   breakEndSelect: event.target.value
//                                                 },
//                                               })
//                                             }
//                                             }
//                                             fullWidth={true}
//                                             value={this.state.techUserInfo.breakEndSelect}
//                                             labelId="demo-simple-select-label"
//                                             placeholder={configJSON.breakEnd}
//                                             id="demo-simple-select"
//                                             inputProps={{
//                                               sx: {
//                                                 borderRadius: "5px",
//                                                 backgroundColor: "#fff",
//                                                 color: "#84989F",
//                                               }
//                                             }}
//                                           >
//                                             {this.getBreakEndTimeTech(optionsArrayTech,
//                                               this.state.techUserInfo.breakStartSelect, this.state.techUserInfo.workHoursToSelect)
//                                               .map((itemKeys: any) => (
//                                                 <option key={itemKeys.value} value={itemKeys.value}>
//                                                   {itemKeys.label}
//                                                 </option>
//                                               ))}
//                                           </Select>
//                                         </FormControl>
//                                       </Box>
//                                     </>
//                                   ) : (
//                                     ""
//                                   )}
//                                   <Typography
//                                     onClick={this.clickAcordianBtn}
//                                     data-test-id="clickAcordianBtn"
//                                     style={webStylesTech.technicianBackOAccor}
//                                     variant="body1"
//                                   >
//                                     {this.state.showAcordianBox ? (
//                                       <>
//                                         <RemoveCircleOutlineIcon />{" "}
//                                         <p>Remove Break Timing</p>
//                                       </>
//                                     ) : (
//                                       <>
//                                         <ControlPointIcon /> <p>Add Break Timing</p>
//                                       </>
//                                     )}
//                                   </Typography>
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.salary}
//                                   </p>
//                                   <TextField
//                                     fullWidth
//                                     id="textInput"
//                                     placeholder={configJSON.salary}
//                                     variant="outlined"
//                                     data-test-id="textSalary"
//                                     value={this.state.techUserInfo.salary}
//                                     onChange={(event: any) => {
//                                       setFieldValue("salary", event.target.value)
//                                       this.setState({
//                                         techUserInfo: {
//                                           ...this.state.techUserInfo,
//                                           salary: event.target.value,
//                                         }
//                                       })
//                                     }}
//                                   />
//                                 </Box>
//                                 <Box sx={webStylesTech.technicianInputBoxBackO}>
//                                   <p style={webStylesTech.technicianInputBoxBackOLabel}>
//                                     {configJSON.SocialSuqNo}
//                                   </p>
//                                   <TextField
//                                     fullWidth
//                                     data-test-id="textSocialSuqNo"
//                                     placeholder={configJSON.SocialSuqNo}
//                                     variant="outlined"
//                                     value={this.state.techUserInfo.SocialSuqNo}
//                                     onChange={(event: any) => {
//                                       setFieldValue("SocialSuqNo", event.target.value)
//                                       this.setState({
//                                         techUserInfo: {
//                                           ...this.state.techUserInfo,
//                                           SocialSuqNo: event.target.value,
//                                         }
//                                       })
//                                     }}
//                                   />
//                                 </Box>
//                                 <Typography
//                                   style={{ fontSize: '14px', color: 'red', }}
//                                   variant="h6"
//                                 >
//                                   {this.state.errorEmailExistTech}
//                                 </Typography>
//                                 <Box
//                                   sx={{
//                                     ...webStylesTech.technicianInputBoxBackO,
//                                     ...webStylesTech.technicianBoxButton
//                                   }}
//                                 >
//                                   <Button
//                                     id="btnExample"
//                                     variant="contained"
//                                     color="primary"
//                                     style={webStylesTech.technicianBtnWhiteBackO}
//                                   >
//                                     Back To List
//                                   </Button>
//                                   <Button
//                                     id="btnExample"
//                                     variant="contained"
//                                     color="primary"
//                                     style={webStylesTech.technicianBtnRedBackO}
//                                     type="submit"
//                                     data-test-id="textBtnSubmitback"
//                                   >
//                                     Create User
//                                   </Button>
//                                 </Box>
//                               </form>
//                             )}
//                           </Formik>
//                         </Box>
//                       </Grid>
//                       <Grid item xs={3} sm={3} md={3} lg={3} />
//                     </Grid>
//                   </Box>}
//             </Box>
//           </Box>
//           <DialogMessage showModal={this.state.showModal} closeModal={this.closeModal}
//             modalEmail={this.state.modalEmail} modalPassword={this.state.modalPasswordTech} />
//         </Container>
//       </ThemeProvider >
//     );
//     // Customizable Area End
//   }
// }
// // Customizable Area Start
// const webStylesTech = {
//   backGdBoxBackO: {
//     background: "rgba(227, 190, 190, 0.28) none repeat scroll 0% 0%"
//   },
//   width100: {
//     width: "100%"
//   },
//   headerSidBarBackO: {
//     paddingTop: "10px",
//     background: "#fff",
//     height: "100vh",
//     textAlign: "center",
//     width: "18vw",
//     zIndex: "9",
//     position: "fixed",
//     bottom: "0px",
//     top: "0px",
//     left: "0",
//     borderRight: "1px solid rgba(0, 0, 0, 0.18)"
//   },
//   technicianBoxBackO: {
//     height: "100%",
//     width: "83vw",
//     display: "flex",
//     flexDirection: "column",
//     flexGrow: "1",
//     marginLeft: "18vw"
//   },
//   technicianTypoBackO: {
//     fontSize: "20px",
//     lineHeight: "45px",
//     display: "flex"
//   },
//   technicianTypoBoxBackO: {
//     borderRadius: "5px 5px 30px 5px",
//     padding: "15px 15px 15px 35px",
//     background: "#fff"
//   },
//   technicianTabButton: {
//     display: "flex",
//     textAlign: "center",
//     padding: "10px",
//     margin: "20px 0px",
//     borderRadius: "10px",
//     background: "rgba(208, 51, 51, 0.1) none repeat scroll 0% 0%",
//     justifyContent: "center"
//   },
//   technicianBackOAccor: {
//     display: "flex",
//     alignItems: "center",
//     cursor: "pointer"
//   },
//   marginTop15Back: {
//     marginTop: "15px"
//   },
//   technicianFormBoxBackO: {
//     borderRadius: "10px",
//     padding: "15px",
//     background: "#fff",
//     marginBottom: "20px"
//   },
//   technicianLeftICon: {
//     marginTop: "10px"
//   },
//   technicianInputBoxBackO: {
//     margin: "10px 0"
//   },
//   technicianInputBoxBackOLabel: {
//     margin: "5px 0",
//     display: "block"
//   },
//   technicianBtnWhiteBackO: {
//     fontSize: "15px",
//     cursor: "pointer",
//     borderRadius: "10px",
//     padding: "10px 20px",
//     border: "none",
//     margin: "15px 10px 10px 0px",
//     color: "rgb(215 31 31 / 84%)",
//     background: "rgba(208, 51, 51, 0.1) none repeat scroll 0% 0%"
//   },
//   technicianBtnRedBackO: {
//     fontSize: "15px",
//     cursor: "pointer",
//     borderRadius: "10px",
//     padding: "10px 20px",
//     border: "none",
//     margin: "15px 10px 10px 0px",
//     background: "rgb(215 31 31 / 84%)",
//     color: "#fff"
//   },
//   technicianBoxButton: {
//     textTransform: "capitalize",
//     marginTop: "20px",
//     borderTop: "1px #bbb8b8 solid"
//   }
// };
// //@ts-ignore 
// function FieldError({ error, touched }) {
//   return error && touched ? (
//     <div style={{ color: "#e65e52" }}>{error}</div>
//   ) : null;
// }
