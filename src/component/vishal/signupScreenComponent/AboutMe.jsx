import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import upload from "../../../img/upload.png";
import "./aboutMe.css";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      personName: [],
    };
  }

  dropDownHandle = (event) => {
    this.setState({
      age: event.target.values,
    });
  };

  render() {
    return (
      <div
        style={{ maxWidth: "672px", display: "flex", flexDirection: "column" }}
      >
        <Typography
          style={{
            fontFamily: "Silka",
            color: "#0D0C22",
            fontSize: "24px",
            fontWeight: 500,
            fontStyle: "normal",
            lineHeight: "-0.15px",
          }}
        >
          About Me
        </Typography>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
            paddingBottom: "64px",
            borderBottom: "1px solid #DFDFDF",
          }}
        >
          <Box
            style={{
              Height: "72px",
              width: "72px",
              borderRadius: "60px",
              backgroundColor: "#F2F3EE",
              padding: "16px",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "36px", height: "36px" }}
              src={upload}
              alt="profileImg"
            />
          </Box>
          <Box>
            <Typography
              style={{
                fontFamily: "Silka",
                color: "#9B9B9D",
                fontSize: "14px",
                fontWeight: 500,
                fontStyle: "normal",
                lineHeight: "19.36px",
              }}
            >
              Upload Profile Picture
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            maxWidth: "672px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box style={{ maxWidth: "672px", display: "flex", gap: "24px" }}>
            <TextField
              variant="outlined"
              placeholder="First Name"
              style={{ height: "48px", Width: "50%" }}
            />
            <TextField
              variant="outlined"
              placeholder="Last Name"
              style={{ height: "48px", Width: "50%" }}
            />
          </Box>
          {/* =================== */}
          <Box style={{ width: "100%", display: "flex", gap: "24px" }}>
            <Box style={{ position: "relative" }}>
              <Select
                className="aboutMe"
                variant="outlined"
                style={{ height: "48px", width: "324px" }}
                value={this.state.age}
                onChange={this.dropDownHandle}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Mobile Number</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>

            <Box style={{ position: "relative" }}>
              <Select
                variant="outlined"
                className="aboutMe"
                style={{ height: "48px", width: "324px" }}
                placeholder="Country"
                value={this.state.age}
                onChange={this.dropDownHandle}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Country</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </Box>
          {/* ------------------------ */}
          <Box style={{ width: "100%", display: "flex", gap: "24px" }}>
            <Box style={{ position: "relative" }}>
              <Select
                className="aboutMe"
                variant="outlined"
                style={{ height: "48px", width: "324px" }}
                value={this.state.age}
                onChange={this.dropDownHandle}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Contact Number</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>

            <Box style={{ position: "relative" }}>
              <Select
                variant="outlined"
                className="aboutMe"
                style={{ height: "48px", width: "324px" }}
                placeholder="Country"
                value={this.state.age}
                onChange={this.dropDownHandle}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Town</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box style={{ display: "flex", gap: "24px" }}>
            <Typography>Trading via limited/umbrella company</Typography>
            <label class="switch">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChange}
              />
              <span class="slider round"></span>
            </label>
          </Box>
          <Box style={{textAlign:"end"}}>
            <Button variant="outlined" style={{backgroundColor:"#9B9B9D",color:"#FFF",width:"129px",textWrap:"nowrap", whiteSpace:"nowrap",}}>Next</Button>
          </Box>
        </Box>
      </div>
    );
  }
}
