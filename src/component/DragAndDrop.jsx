import React, { Component } from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: props.image?.url,
      labelText: props?.hoverLabel,
      isDragOver: false,
      isMouseOver: false,
      selectedFile: null,
    }
  }
  onFileChange = (event) => {
    const selectedFile = event.target?.files[0];
    this.setState({ selectedFile, imageUrl: URL.createObjectURL(selectedFile) });
    console.log("image url", selectedFile);
  };

  handleChange = (event) => {
    if (this.props?.imageButton && event.target?.files[0]) {
      this.setState({ imageUrl: URL.createObjectURL(event.target?.files[0]) });
    }
    this.props.onChange(event);
  };

  stopDefaults = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  onMouseEnter = (e) => {
     e.preventDefault();
    this.setState({ isMouseOver: true });
  }
  onMouseLeave = () => {
    this.setState({ isMouseOver: false });
  }
  onDragEnter = (e) => {
    this.stopDefaults(e);
    this.setState({ isDragOver: true, labelText: this.props?.dropLabel });
    console.log("onDragENTER", this.state.isDragOver);
  }
  onDragLeave = (e) => {
    // this.stopDefaults(e);
    e.preventDefault();
    this.setState({ isDragOver: false, labelText: this.props?.hoverLabel });
    console.log("onDragLeave", this.state.isDragOver);
  }
  onDragOver = (e) => {
     // this.stopDefaults(e);
    e.preventDefault();
    // this.setState({ isDragOver: true });
    this.setState({ isDragOver: true, labelText: this.props?.dropLabel });
    console.log("is drag over", this.state.isDragOver);
    console.log("isDragOver labelText", this.state.labelText);

  }
  onDrop = (e) => {
    this.stopDefaults(e);
    this.setState({ isDragOver: false, labelText: this.props?.hoverLabel });
    if (this.props?.imageButton && e.dataTransfer?.files[0]) {
      this.setState({ imageUrl: URL.createObjectURL(e.dataTransfer?.files[0]) });
      console.log("image url..", this.state.imageUrl)
     }
    this.props.onDrop(e);
  }

  render() {
    return (
      <div onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDragEnter={this.onDragEnter}>
        <TextField id="file-upload" type="file" style={{ display: "none" }} onChange={this.onFileChange} />
        <label htmlFor="file-upload" >
          <Box>
             <Box position="absolute">
              <img alt="file upload" src={this.state?.imageUrl} style={{ height: "250px", width: "250px" }} />
            </Box>
            {(!this.state.imageButton || this.state.isDragOver || this.state.isMouseOver) && (
              <Box>
                <CloudUploadIcon fontSize="large" />
                <Typography>
                  {this.state?.selectedFile
                    ? `Selected Image: ${this.state.selectedFile?.name}`
                    : this.state.labelText}
                </Typography>
              </Box>
            )}
          </Box>
        </label>
      </div>
     )
  }
}



// ........................Video Upload start ....................................
// import React, { Component, createRef } from "react";
// export default class DragAndDrop extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       source: null,
//     };
//     this.inputRef = createRef();
//   }
  
//   handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const source = URL.createObjectURL(file);
//       this.setState({ source });
//     }
//   }
//   handleChoose = (event) => {
//     this.inputRef.current.click();
//   }

//   render() {
//     const { source } = this.state;
     
//     return (
//       <>
//         <div className="VideoInput">
//           <input
//             ref={this.inputRef}
//             className="VideoInput_input"
//             style={{ display: "none" }}
//             type="file"
//             onChange={this.handleFileChange}
//             accept=".mov,.mp4"
//           />
//           {!source && <button onClick={this.handleChoose}>Upload Video Now</button>}
//           {source && (
//             <video
//               className="VideoInput_video"
//               width="100%"
//               height="100%"
//               controls
//               src={source}
//             />
//           )}
          
//           {/* <div className="VideoInput_footer">{source || "Nothing selectd"}</div> */}
//         </div>
//       </>
//      )
//   }
// }
// ................Video Upload end

 