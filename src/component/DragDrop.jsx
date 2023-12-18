import React, { Component } from 'react';
// import { styled } from '@mui/material/styles';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloseIcon from '@material-ui/icons/Close';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default class InputFileUpload extends Component {
  constructor() {
    super()
    //  this.fileInputRef = React.useRef(null);
    this.fileInputRef = React.createRef();
    this.state = {
      isDragOver: "",
      dataFile: {},
      imageUrl: ""
    }
  }

  handleDragEnter = (e) => {
    e.preventDefault();
    this.setState({
      isDragOver: true
    })
  };
  handleDragLeave = (e) => {
    e.preventDefault();
    this.setState({
      isDragOver: false
    })
  };
  handleDragOver = (e) => {
    e.preventDefault();
    this.setState({
      isDragOver: true
    })
  };
  handleDrop = (e) => {
    e.preventDefault();
    this.setState({
      isDragOver: false
    })
    const droppedFiles = e.dataTransfer.files;
    this.handleFiles(droppedFiles);
    this.makeRadableFile(droppedFiles[0])
  };
  makeRadableFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }
  handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const selectedFiles = e.target.files;
    this.handleFiles(selectedFiles);
    this.makeRadableFile(file)
  };
  handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log('Selected File:', file);
      this.setState({
        dataFile: file,
        files: URL.createObjectURL(file)
      })
    }
  };
  handleUploadButtonClick = () => {
    if (this.fileInputRef.current) {
      this.fileInputRef.current.click();
    }
  };
  handleClose = () => {
    this.setState({
      imageUrl: "",
      dataFile: {},
    });
  }
  render() {
    let { isDragOver, imageUrl, dataFile } = this.state
    return (
      <>
        <div
          onDragEnter={this.handleDragEnter}
          onDragLeave={this.handleDragLeave}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
          style={{ textAlign: "center" }}
          className={imageUrl ? "disp-none" : 'div-Align'}
        >
          <Button
            onClick={this.handleUploadButtonClick}
            style={{ backgroundColor: isDragOver ? '#ccc' : 'inherit' }}
          >
            <CloudUploadIcon />
          </Button><br />
          <span> {dataFile.name} Upload file </span>
          <VisuallyHiddenInput
            type="file"
            onChange={this.handleFileInputChange}
            ref={this.fileInputRef}
          />
        </div>
        {imageUrl && <div className="div-img">
          <CloseIcon onClick={this.handleClose} style={{ position: "absolute", right: "10%" }} />
          <img src={imageUrl} alt="file" style={{ height: "200px", width: "200px", borderRadius: "10px" }} />
        </div>}
      </>
    );
  }
}