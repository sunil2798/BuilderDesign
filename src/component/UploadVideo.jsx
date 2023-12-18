import React, { Component } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from "@material-ui/core";

export default class UploadVideo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.state = {
      source: null,
      open: false,
    };
    this.handleOpenVideo = this.handleOpenVideo.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpenVideo() {
    this.setState({
      open: true
    })
  }
  handleClose() {
    this.state({
      open: false
    })
  }
  handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    this.setState({ source: url });
  };
  handleChoose = (event) => {
    this.inputRef.current.click();
  };

  render() {
    // const { height } = this.props;
    // const { source } = this.state;

    return (
      <>
        <Button variant='outlined' onClick={this.handleOpenVideo}>Popup</Button>
        {/* <div className="VideoInput">
          <input
            ref={this.inputRef}
            className="VideoInput_input"
            type="file"
            onChange={this.handleFileChange}
            accept=".mov,.mp4"
          />
          {!source && <button onClick={this.handleChoose}>Choose</button>}
          {source && (
            <video
              className="VideoInput_video"
              width="100%"
              height={height}
              controls
              src={source}
            />
          )}
          <div className="VideoInput_footer">{source || "Nothing selected"}</div>

          
        </div> */}

        <Dialog open={this.state.open}>

          <DialogTitle style={{width: "100%" , display: "flex", justifyContent: "space-between", textAlign: "center" }} >
            <Box>
              <Typography>Upload your community video to show to your members</Typography>
            </Box>
            <Box>
              <Button onClick={this.handleClose}>
                <CloseIcon />
              </Button>
            </Box>
          </DialogTitle>
          <DialogContent>
            {/* <Card>
              <CardMedia> */}
            <video controls muted style={{ height: "250px", width: " 500px" }}>
              <source src='https://assets.codepen.io/6093409/river.mp4' type='video/mp4'></source>
            </video>
            {/* </CardMedia>
            </Card> */}
            <DialogContentText>Content Text</DialogContentText>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

