import React, { Component } from "react";
import { Box, Button, Modal, Typography, styled } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./tAndc.css";

const LeftsideAlltracksbox = styled(Box)({
  height: "304px",
  overflowY: "scroll",
  "&::-webkit-scrollbar-thumb": {
    background: "#9B9B9D",
    borderRadius: "4px",
    height:"10px",
  },
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track" :{
    background:"#DFDFDF",
    borderRadius: "4px",
    // boxShadow: "inset 0 0 5px grey"
  }
});

export default class TermsAndCondition extends Component {
  constructor() {
    super();
    this.state = {
      popup: false,
      close: true,
    };
  }

  handlePopupOpen = () => {
    this.setState({
      popup: !this.state.popup,
    });
  };

  handleClose = () => {
    this.setState({
      close: !this.state.close,
      popup: !this.state.popup,
    });
  };
  
  render() {
    console.log("modal open...", this.state.popup);
    return (
      <>
        <Button
          onClick={this.handlePopupOpen}
          style={{ backgroundColor: "#DFDFDF", color: "#FFF", width: "24px" }}
        >
          T&C
        </Button>
        <Modal
          open={this.state.popup}
          onClose={this.handleClose}
          style={{
            width: "591px",
            height: "469px",
            margin: "auto",
            boxShadow: "0px 10px 25px 2px",
            backgroundColor: "#FFF",
            color: "#000",
            display: "flex",
            borderRadius: "4px",
            position: "absolute",
            inset: "0",
            zIndex:"none",
          }}
        >
          <Box style={{ padding: "28px 40px", gap: "16px", width: "100%" }}>
            <Box style={{ textAlign: "end" }}>
              <CloseIcon onClick={this.handleClose} />
            </Box>

            <Box style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Silka",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "-0.12px",
                }}
              >
                Terms and Conditions
              </Typography>
            </Box>
            <LeftsideAlltracksbox >
              <Box style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Typography>General Site Usage</Typography>
                <Typography>Last revised: December 2022</Typography>
              </Box>
              <Box style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus.
                </Typography>
                <ol>
                  <li><Typography> Your Agreement</Typography></li>
                  <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Integer id
                  erat auctor,
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus.
                </Typography>

                </ol>                
                <Typography> Your Agreement</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Integer id
                  erat auctor,
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus.
                </Typography>
                <Typography> Your Agreement</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Integer id
                  erat auctor,
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus.
                </Typography>
                <Typography> Your Agreement</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Integer id
                  erat auctor,
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus.
                </Typography>
                <Typography> Your Agreement</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Integer id
                  erat auctor,
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus.
                </Typography>
                <Typography> Your Agreement</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Integer id
                  erat auctor,
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus.
                </Typography>
                <Typography> Your Agreement</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Integer id
                  erat auctor,
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus.
                </Typography>
                <Typography> Your Agreement</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id erat auctor, rutrum ex id, tincidunt tellus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Integer id
                  erat auctor,
                </Typography>
              </Box>
            </LeftsideAlltracksbox>
          </Box>
        </Modal>

      </>
    );
  }
}

