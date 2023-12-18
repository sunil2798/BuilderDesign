import React, { Component, InputHTMLAttributes } from 'react'
import './popup.css';
import { Box, Button, Dialog, DialogContent, DialogContentText, Grid, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';



export default class Popup extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      isSecondPopupOpen: false,

    }
    this.phoneInputRef = React.createRef();

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      open: true
    })
  }
  handleClose() {
    this.setState({
      open: false
    })
  }
  handleOpenVideoNow() {
    this.setState({
      isSecondPopupOpen: true
    })
  }


  render() {
    return (
      <>
        <Button variant='outlined' onClick={this.handleOpen}>Popup</Button>
        <Dialog open={this.state.open} style={webStyle.popupDialog}>
          <Grid container style={webStyle.gridDialog}>
            <Grid item xs={5} md={5} lg={5}></Grid>
            <Grid item xs={7} md={7} lg={7}>
              <Box style={webStyle.gridBox}>
                <Typography style={webStyle.gridBoxTitle}>Upload Video</Typography>
                <Button onClick={this.handleClose}>
                  <CloseIcon style={webStyle.gridBoxCloseIcon} />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <DialogContent style={webStyle.dialogContent}>
            <DialogContentText style={webStyle.dialogContentText} >
              <Typography style={webStyle.dialogContentTextTypo}>Upload Video</Typography>
              <p style={webStyle.dialogContentTextPara}>
                To provide the best possible experience for our Zilion members,
                creators must upload a video that outlines the goals of the community.<br /><br />
                Furthermore, communities that do not have a video uploaded will not be
                visible to Zilion members.
              </p>
            </DialogContentText>
          </DialogContent>
          <Box style={webStyle.dialogActions}>
            <Button onClick={this.handleOpenVideoNow} style={webStyle.dialogActionsButton}>
              Upload Video Now
            </Button>
          </Box>
          <Box>
            <Typography style={webStyle.uploadLatter}>I’ll upload later</Typography>
          </Box>
        </Dialog>
      </>
    )
  }
}

const webStyle = {
  popupDialog: {
    textAlign: "center",
  },
  gridBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",

  },
  gridBoxTitle: {
    color: "#FFF",
    fontSize: "32px",
    fontWeight: "500",
    lineHeight: "38.73px",
    fontFamily: "Inter",
    marginTop: "48px",
  },
  gridBoxCloseIcon: {
    color: "#FFF",
    height: "40px",
    width: "40px",
    marginRight: "33px",
  },
  dialogContent: {
    height: "300px",
    width: "662px",
    background: "#B50B8F",
    borderRadius: "24px",
    alignSelf: "center",
    textAlign: "left",
    marginTop: "24.91px",

  },
  dialogContentText: {
    justifyContent: "center",
    marginLeft: "32.8px",
    marginRight: "25.7px",
    marginTop: "32px",
    marginBottom: "69px",

  },
  dialogContentTextTypo: {
    width: "408.29px",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "24px",
    fontFamily: "Inter",
    color: "#FFF",

  },
  dialogContentTextPara: {
    fontFamily: "Inter",
    width: "603px",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: " 0.12px",
    color: "#FFF",
  },
  dialogActions: {
    justifyContent: "center",
  },
  dialogActionsButton: {
    width: "439px",
    height: "64px",
    color: "#FFF",
    borderRadius: "10px",
    background: "#3E01B9",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "25.2px",
    textAlign: "center",
    marginTop: "72px",


  },
  uploadLatter: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: '18px',
    lineHeight: "20px",
    letterSpacing: "0.12px",
    marginBottom: "48px",
    marginTop: "32px",
    textAlign: "center",
    fontFamily: "Inter",
  },

  // -----------------------------------------------------------------

}
