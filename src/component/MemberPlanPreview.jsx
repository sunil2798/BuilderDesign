import React, { Component } from "react";
import "./memberplanpreview.css";
import {
  // Customizable Area Start
  Box, Button, Modal, Typography
  // Customizable Area End
} from "@material-ui/core";
// Customizable Area Start

import CloseIcon from '@material-ui/icons/Close';
// import MemberPreview from "../assets/memberPreview.png"
export default class MemberPlanPreview extends Component {
  constructor() {
    super();
    // Customizable Area Start

    this.state = {
      close: false,
      openMemberModal: false,
      checked: true,

    }
    // Customizable Area End
  }
  // Customizable Area Start
  handleClose = () => {
    this.setState({
      close: false
    })
  }
  handleOpen = () => {
    this.setState({
      close: true
    })
  }
  handleChange = (event) => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };

  // Customizable Area End
  render() {
    console.log("this.props.openMemberModal", this.props)
    return (
      <div >
        <Button onClick={this.handleOpen}>Membership</Button>
        <Modal style={webStyle.memberModal}
          open={this.state.close}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Box style={webStyle.memberModalbody}>
            <Box style={webStyle.memberPreviewHeading}>
              <Typography style={webStyle.memberPreviewHeading_content} >Membership Preview</Typography>
              <Box style={webStyle.memberPreviewImgBox}>
                <CloseIcon style={{ color: "white" }} onClick={this.handleClose} />
              </Box>
            </Box>
            <Box style={webStyle.toggleDiv}>
              <Box style={{ marginRight: "18px" }}>
                <Typography style={webStyle.toggleBilledRight}>Billed</Typography>
                <Typography style={webStyle.tooggleMonthAnnually}>Monthly</Typography>
              </Box>
              <Box>
                <label class="switch">
                  <input type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChange} />
                  <span class="slider round"></span>
                </label>
              </Box>
              <Box style={{ marginLeft: "18px", }}>
                <Typography style={webStyle.toggleBilledLeft}>Billed</Typography>
                <Typography style={webStyle.tooggleMonthAnnually}>Annually</Typography>
              </Box>
            </Box>
            <Box style={webStyle.memberImgBox}>
              <img
                // src={MemberPreview}
                src="/"
                alt="member preview" />
              <Box style={webStyle.memberImgBox_contenet}>
                <Typography style={webStyle.memberImgBox_price}>$8</Typography>
                <Typography style={webStyle.memberImgBox_perMonth}>Per month</Typography>
              </Box>
            </Box>
            <Box style={webStyle.memberPreContent}>
              <Typography style={webStyle.memberPreContent_one}>Elite membership</Typography>
              <Typography style={webStyle.memberPreContent_two}>We have been solving a lot of recurrences by the “guess and check” method.</Typography>
              <Typography style={webStyle.memberPreContent_three}>Features</Typography>
              <Typography style={webStyle.memberPreContent_Four}>Exclusive Videos, Free Ebooks and audios, Access to 50+ resources.</Typography>
              <button style={webStyle.memberPre_button}>Done</button>
            </Box>
            {/* <Box style={webStyle.memberPre_buttonBox}> */}
            {/* </Box> */}
          </Box>
        </Modal>
      </div>
    );
  }
}
// Customizable Area Start
const webStyle = {
  memberModal: {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  memberModalbody: {
    background: "#383838",
    width: "1000px",
    height: "786px",
    borderRadius: "10px",
    margin: "193px 209px",
  },
  memberPreviewHeading: {
    marginBottom: "24px",
    marginTop: "54px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: "27%"
  },
  memberPreviewHeading_content: {
    color: "#FFF",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    width: "338px",
    height: "45.377px"
  },
  memberPreviewImgBox: {
    marginRight: "22px"
  },
  memberImgBox: {

    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: "24px"
  },
  memberImgBox_contenet: {
    display: "flex",
    width: "211px",
    height: "129px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flexShrink: "0",
    borderRadius: "10px",
    background: "#3E01B9",
    position: "absolute",
    right: "182px",
    bottom: "20px"
  },
  memberImgBox_price: {
    width: "137px",
    color: "#FFF",
    textAlign: "center",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "40px",
    letterSpacing: "0.123px",
    textTransform: "capitalize",
  },
  memberImgBox_perMonth: {
    color: "#FFF",
    textAlign: "center",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px",
    letterSpacing: "0.123px",
  },
  memberPreContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  memberPreContent_one: {
    width: "275px",
    color: "#FFF",
    textAlign: "center",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "24px",
    letterSpacing: "0.123px",
    textTransform: "capitalize",
    marginBottom: "14px"
  },
  memberPreContent_two: {
    width: "388px",
    color: "#FFF",
    textAlign: "center",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.123px",
    marginBottom: "42px"
  },
  memberPreContent_three: {
    width: "117px",
    color: "#FFF",
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "24px",
    letterSpacing: "0.123px",
    textTransform: "capitalize",
    marginBottom: "6px"
  },
  memberPreContent_Four: {
    width: "388px",
    color: "#FFF",
    textAlign: "center",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.123px",
    marginBottom: "72px"
  },
  memberPre_button: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "140%",
    display: "flex",
    width: "540px",
    height: "59px",
    padding: "16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flexShrink: 0,
    borderRadius: "10px",
    background: "#3E01B9",
    marginBottom: "48px",
    border: "none"
  },
  toggleDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "35.62px",
    marginBottom: "27px",
  },
  toggleBilledRight: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    letterApacing: "0.12px",
    textAlign: "right",
    color: "#FFF",
  },
  toggleBilledLeft: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    letterApacing: "0.12px",
    textAlign: "left",
    color: "#FFF",
  },
  tooggleMonthAnnually: {
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "20px",
    letterApacing: "0.12 px",
    color: "#FFF",
  }
};
