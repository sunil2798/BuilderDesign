import React from "react";
// Customizable Area Start
import {
  Container,
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  Grid
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close"
import "../assets/style.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff"
    }
  }
});
// Customizable Area End
import Checkbox from '@material-ui/core/Checkbox';
import TechnicianController, {
  configJSON,
  Props
} from "./TechnicianController";
export default class TechnicianUpdate extends TechnicianController {
  constructor(props: any) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  // Customizable Area Start
  // Customizable Area End
  render() {
    // Customizable Area Start
    console.log("start", this.state.checkedList)
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <div >
            <Box style={{
              width: "100%", height: "100%", display: "flex", flexDirection: "column",
              alignItems: "center", background: "#F1EFEF"
            }} >
              <Box style={{
                width: "90%", height: "5rem", display: "flex", justifyContent: "space-
between", alignItems: "center" }}>
                  <Typography style = {{ width: "100%", display: "flex", justifyContent: "center" }}>Select
              Assest Select Assest</Typography>
            <Box style={{ width: "100%", display: "flex", justifyContent: "end" }}>
              <Button onClick={this.closeManageAssetsModal} style={{
                width: "12rem",
                background: "red", color: "#FFF", display: "flex", borderRadius: "4px", fontSize: "12px",
                whiteSpace: "nowrap"
              }} >Back To Create User</Button>
            </Box>
          </Box>
          {this.state.getAssests && this.state.getAssests.map((assest: any) => (
            <>
              <Box style={{
                width: "80%", display: "flex", justifyContent: "space-between",
                alignItems: "center", padding: "5px"
              }}>
                <Typography>{assest.attributes.name}</Typography>
                {/* <Typography style={{ color: "red" }}>Select All</Typography> */}
              </Box>
              {assest.attributes.sub_categories?.map((subcategory: any, index: number) => (
                <><Box style={{
                  width: "70%", height: "2.5rem", display: "flex", justifyContent:
                    "space-between", alignItems: "center", background: "#FFF", borderRadius: "5px", boxShadow: "0 0
4px 0 ", marginTop: "4px", marginBottom: "4px", padding: "5px" }}>
                    <Typography> { subcategory.name } </Typography >
                    {/* <Checkbox
                        checked={this.state.checkedList.some((value: any)=>{value.id === 
subcategory.id})}
                        onChange={(e) => this.handleCheckboxChange(e, subcategory.name, 
subcategory.id, assest.attributes.name, assest.attributes.id)}
                        inputProps={{ 'aria-label': 'primary checkbox' }} /> */}
              < Checkbox
                        checked = { this.state.checkedList.some((item: any) => item.id === subcategory.id) }
                        onChange = {(e) =>
              this.handleCheckboxChange(
              e,
              subcategory.name,
              subcategory.id,
              assest.attributes.name,
              assest.attributes.id
              )
                        }
              inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
            </Box ></>
        ))
                  }
      </>
    ))
  }
            </Box>
          </div >
        </Container >
      </ThemeProvider >
    );
    // Customizable Area End
  }
}
// Customizable Area Start
const webStyle = {
  boxWithCopyBackOffice: {
    display: "flex",
    margin: "10px 0",
    justifyContent: "space-between"
  },
  btnCloseBackOffice: {
    cursor: "pointer",
    padding: "5px",
    background: "fff",
    color: "#000"
  },
  doneBtnBackOffice: {
    fontSize: "15px",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "10px 20px",
    border: "none",
    margin: "5px 22px",
    textTransform: 'capitalize' as 'capitalize',
    background: "rgb(215 31 31 / 84%)",
    color: "#fff",
    marginLeft: '2rem',
    marginRight: '2rem'
  },
  boxModalh4BoxBackOffice: {
    fontSize: "18px",
    fontWeight: 600
  },
  boxModalpBoxBackOffice: {
    fontSize: "15px"
  },
  doneBtnBoxBackOffice: {
    borderTop: "1px #0003 solid"
  },
  backOfficeModal: {
    width: "500px",
    height: "350px",
    borderRadius: "5px 5px 30px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
  },
  backOfficeModalContent: {
    fontSize: "20px",
    fontWeight: 500
  },
  modalCopyBtnRedBackO: {
    fontSize: "15px",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "10px",
    border: "none",
    margin: "5px 10px",
    background: "rgb(215 31 31 / 84%)",
    color: "#fff"
  },
};
// Customizable Area End