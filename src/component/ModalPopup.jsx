import React, { Component, createRef } from 'react'
import { Box, Button, Grid, InputAdornment, Modal, TextField, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
// import PhoneInput from 'react-phone-number-input';

export default class ModalPopup extends Component {
  constructor() {
    super();
    this.state = {
      videoOpen: false,
      isSecondPopupOpen: false,
      isPlaying: false,
      isUpload: false,
      source: null,
    }
    this.inputRef = createRef();
  }
  handleVideoOpen = () => {
    this.setState({
      videoOpen: true
    })
  }
  handleVideoClose = () => {
    this.setState({
      videoOpen: false
    })
  }
  handleOpenVideoNow = () => {
    this.inputRef.current?.click();
  }
  handleCloseVideoNow = () => {
    this.setState({
      isSecondPopupOpen: false,
      videoOpen: false
    })
    // console.warn("second popup close", this.state.isSecondPopupOpen);
  }
  handleUploadVideo = () => {
    this.setState({
      isUpload: true
    })
  }
  handleVideoUpload = (event) => {
    const file = event.target.files[0];
    // console.warn("target file", file.name);
    if (file) {
      const source = URL.createObjectURL(file);
      this.setState({
        source: source,
        isSecondPopupOpen: true,
      });
    }
  };
  togglePlayPause = () => {
    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }), () => {
      const video = document.getElementById('player');
      if (this.state.isPlaying) {
        video?.play();
      } else {
        video?.pause();
      }
    });
  };

  render() {
    const { isPlaying, isUpload, source } = this.state;
    return (
      <>
        <div style={{ marginTop: "50px", marginLeft: "200px" }}>
          <InputAdornment position="start" >
            <PhoneInput country={'in'} placeholder='phone number' inputProps={{ require: true, autoFocus: true }} disableCountryGuess />
          </InputAdornment>
        </div>

        <Button variant='outlined' onClick={this.handleVideoOpen} style={{ marginTop: '150px' }} > Modal Popup</Button >
        <Box style={{ paddingTop: "50px" }}>
          <Modal open={this.state.videoOpen} style={webStyle.popupDialog}>
            <Box>
              <Grid container style={webStyle.gridDialog}>
                <Grid item xs={5} md={5} lg={5}></Grid>
                <Grid item xs={7} md={7} lg={7}>
                  <Box style={webStyle.gridBox}>
                    <Typography style={webStyle.gridBoxTitle}>Upload Video</Typography>
                    <Button data-testid="videoClose" onClick={this.handleVideoClose}>
                      <CloseIcon style={webStyle.gridBoxCloseIcon} />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Box style={webStyle.video_div}>
                <Box style={webStyle.dialogContent}>
                  <Box style={webStyle.dialogContentText} >
                    <Typography style={webStyle.dialogContentTextTypo}>Upload Video</Typography>
                    <p style={webStyle.dialogContentTextPara}>
                      To provide the best possible experience for our Zilion members,
                      creators must upload a video that outlines the goals of the community.<br /><br />
                      Furthermore, communities that do not have a video uploaded will not be
                      visible to Zilion members.
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box style={webStyle.dialogActions}>
                <Button onClick={this.handleOpenVideoNow} style={webStyle.dialogActionsButton} data-testid='btn-test'>
                  <TextField
                    ref={this.inputRef}
                    type="file"
                    accept=".mov,.mp4"
                    onChange={this.handleVideoUpload}
                    id="file-input"
                    style={{ display: "none" }}
                  />
                  <label id="file-input-label" htmlFor="file-input">
                    Upload Video Now
                  </label>
                </Button>
              </Box>
              <Box>
                <Typography style={webStyle.uploadLatter}>I’ll upload later</Typography>
              </Box>
            </Box>
          </Modal>
        </Box>

        {/* .......................second popup........................ */}

        {
          this.state.isSecondPopupOpen && (
            <Modal open={this.state.isSecondPopupOpen} style={webStyle.secondPopupDialog}>
              <Box>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box style={webStyle.secondGridBox}>
                      <Typography style={webStyle.secondGridBoxTitle}>Upload your community video to show to your members</Typography>
                      <Button data-testidd="closeVideoNow" onClick={this.handleCloseVideoNow}>
                        <CloseIcon style={webStyle.secondGridBoxCloseIcon} />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Box style={webStyle.secondDialogContent}>
                  <video muted loop style={webStyle.secondVideoTag} id='player' onClick={this.togglePlayPause}>
                    <source
                      // src='https://assets.codepen.io/6093409/river.mp4'
                      src={source}
                      type='video/mp4'
                    >
                    </source>
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
                </Box>
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
                    <Button onClick={this.handleCloseVideoNow} style={webStyle.dialogCancleBtn}>
                      Cancle
                    </Button>
                  ) : (
                    <>
                      <Button data-testUv='uploadVideo' onClick={this.handleUploadVideo} style={webStyle.dialogUploadBtn}>
                        Upload Video Now
                      </Button>
                      <Typography style={webStyle.uploadLater}>I’ll upload later</Typography>
                    </>
                  )}
                </Box>
              </Box>
            </Modal>
          )
        }
      </>
    )
  }
}

const webStyle = {
  popupDialog: {
    alignSelf: "center",
    textAlign: "center",
    width: "1021px",
    height: "690px",
    borderRadius: "10px ",
    backgroundColor: "#383838",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
    justifyContent: "center",
    marginTop: "24.91px",

  },
  dialogContentText: {
    marginLeft: "32.8px",
    marginRight: "25.7px",
    marginTop: "32px",
    marginBottom: "69px",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "left",
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
  video_div: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  // .......................second popup css........................ 

  secondPopupDialog: {
    width: "1021px",
    height: "993px",
    textAlign: "center",
    borderRadius: "16px",
    backgroundColor: "#383838",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
  },
}
