import React, { Component } from 'react'
import './popupTwo.css';
import { Box, Button, Dialog, DialogContent, Grid, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';


export default class Popup extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      isPlaying: false,
      isUpload: false,
    }

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
  togglePlayPause = () => {
    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }), () => {
      const video = document.getElementById('player');
      if (this.state.isPlaying) {
        video.play();
        console.log("play", this.state.isPlaying);
      } else {
        video.pause();
        console.log("pause", this.state.isPlaying);
      }
    });
  };
  handleUploadVideo = () => {
    this.setState({
      isUpload: true
    })
  }
  handleCloseUploadVideo = () => {
    this.setState({
      isUpload: false
    })
  }

  render() {
    const { isPlaying, isUpload } = this.state;
    return (
      <>
        <Button variant='outlined' onClick={this.handleOpen}>Popup</Button>
        <Dialog open={this.state.open} style={webStyle.secondPopupDialog}>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Box style={webStyle.secondGridBox}>
                <Typography style={webStyle.secondGridBoxTitle}>Upload your community video to show to your members</Typography>
                <Button onClick={this.handleClose}>
                  <CloseIcon style={webStyle.secondGridBoxCloseIcon} />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <DialogContent style={webStyle.secondDialogContent}>
            <video muted loop style={webStyle.secondVideoTag} id='player' onClick={this.togglePlayPause}>
              <source src='https://assets.codepen.io/6093409/river.mp4' type='video/mp4'></source>
            </video>
            <div
              style={webStyle.playPauseButton}
              className="play-pause-button"
              onClick={this.togglePlayPause}
            >
              {isPlaying ? (
                <PauseCircleFilledIcon style={webStyle.playPauseIcon} />
              ) : (
                <PlayCircleFilledWhiteIcon style={webStyle.playPauseIcon} />
              )}
            </div>
          </DialogContent>
          <Box style={webStyle.descriptionDiv}>
            <p style={webStyle.descriptionParag}>
              Video with community goals needed for Zilion member experience.
              Video with community goals needed for Zilion member experience.<br />
              Video with community goals needed for Zilion member experience.
              Video with community goals needed for Zilion member experience.
              Learn more
            </p>
          </Box>
          <Box style={webStyle.secondDialogActions}>
            {isUpload ? (
              <Button style={webStyle.dialogCancleBtn}>
                Cancle
              </Button>
            ) : (
              <>
                <Button onClick={this.handleUploadVideo} style={webStyle.dialogUploadBtn}>
                  Upload Video Now
                </Button>
                <Typography style={webStyle.uploadLater}>I’ll upload later</Typography>
              </>
            )}
          </Box>
        </Dialog >
      </>
    )
  }
}

const webStyle = {
  secondPopupDialog: {
    textAlign: "center",
    justifyContent: "center"
  },
  secondGridBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondGridBoxTitle: {
    color: "#FFF",
    fontSize: "24px",
    fontWeight: "500",
    width: "503px",
    textAlign: "left",
    marginLeft: "37px",
    marginTop: "43px",
  },
  secondGridBoxCloseIcon: {
    color: "#FFF",
    height: "40px",
    width: "40px",
    marginRight: "33.36px",
  },
  secondDialogContent: {
    height: "480px",
    width: "946px",
    alignSelf: "left",
    marginLeft: "37px",
    marginTop: "33px",
  },
  secondVideoTag: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",

  },
  dialogContentText: {
    color: "#FFF",
    justifyContent: "center",

  },
  descriptionDiv: {
    justifyContent: "center",
    width: "939px",
    marginLeft: "37px",
    marginTop: "23px",

  },
  descriptionParag: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: " 1.3px",
    textAlign: "left",
    color: "#E8E8E8",
    padding: "0",
    margin: "0",
  },
  secondDialogActions: {
    justifyContent: "center",
  },
  dialogUploadBtn: {
    width: "439px",
    height: "64px",
    color: "#FFF",
    borderRadius: "10px",
    background: "#3E01B9",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "25.2px",
    marginTop: "92px",
  },
  dialogCancleBtn: {
    width: "439px",
    height: "64px",
    color: "#FFF",
    borderRadius: "10px",
    background: "#3E01B9",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "25.2px",
    marginTop: "73px",
    marginBottom: "48px",

  },
  uploadLater: {
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
  playPauseButton: {
    position: "absolute",
    top: "35%",
    left: "48%",
    transform: " translate(-25 %, -25 %)",
    cursor: "pointer",
    color: "#fff",
    fontSize: "80px",
    zIndex: "1",
    margin: "0 auto",
  },
  playPauseIcon: {
    height: "64px",
    width: "64px",
  }
}
