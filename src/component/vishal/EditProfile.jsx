import React, { Component } from "react";
import "./editProfile.css";
import profileImg from "../../img/profileImg.png";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
// import OutlinedInput from '@mui/material/OutlinedInput';

export default class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      editProfileOpen: false,
      country: "",
      town: "",
      seniority: "",
      names: [
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Bradley Wilkerson",
        "Kelly Snyder",
      ],
    };
  }

  handleEditProfileOpen = () => {
    this.setState({
      editProfileOpen: true,
    });
  };

  handleTownChange = (event) => {
    this.setState({
      town: event.target.value,
    });
  };

  handleCountryChange = (event) => {
    this.setState({
      country: event.target.value,
    });
  };

  handleSeniorityChange = (event) => {
    this.setState({
      seniority: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div style={webStyle.outerMostContainer}>
          {this.state.editProfileOpen ? (
            <>
              <div style={experienceStyle.experienceDiv}>
                <div style={experienceStyle.experienceInnerDiv}>
                  <Typography style={experienceStyle.expeTitle}>
                    Edit Profile
                  </Typography>
                  <AddIcon style={experienceStyle.addIconEdit} />
                </div>
                <Grid
                  container
                  style={webStyle.editFormParentContainer}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    style={webStyle.outerGrid}
                  >
                    <Box
                      style={webStyle.mainEditForm}
                    >
                      <img
                        src={profileImg}
                        alt="uploadimg"
                        style={webStyle.profileImage}
                      />
                      <Typography
                        style={webStyle.profileImageCaption}
                      >
                        Upload Profile Picture
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid
                    gap={4}
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    style={webStyle.inputBoxPadding}
                  >
                    <Typography style={experienceStyle.iputHeadingText}>
                      First Name
                    </Typography>
                    <TextField
                      variant="outlined"
                      style={experienceStyle.inputFieldTwo}
                    />
                  </Grid>
                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    style={webStyle.inputBoxPadding}
                  >
                    <Typography style={experienceStyle.iputHeadingText}>
                      Last Name
                    </Typography>
                    <TextField
                      variant="outlined"
                      style={experienceStyle.inputFieldTwo}
                    />
                  </Grid>

                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    style={webStyle.inputBoxPadding}
                  >
                    <Typography style={experienceStyle.iputHeadingText}>
                      Profesion
                    </Typography>
                    <TextField
                      variant="outlined"
                      style={experienceStyle.inputFieldTwo}
                    />
                  </Grid>
                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    style={webStyle.inputBoxPadding}
                  >
                    <Typography style={experienceStyle.iputHeadingText}>
                      Seniority
                    </Typography>
                    <Select
                      style={experienceStyle.inputFieldSeniority}
                      variant="outlined"
                      value={this.state.seniority}
                      label="Seniority"
                      onChange={this.handleSeniorityChange}
                      // inputProps={{ "aria-label": "Without label" }}
                    >
                      {this.state.names.map((name, id) => (
                        <MenuItem
                          key={id}
                          value={name}
                          style={webStyle.inputBackground}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>

                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    style={webStyle.inputBoxPadding}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography style={experienceStyle.iputHeadingText}>
                        Headline
                      </Typography>
                      <Typography>0/60</Typography>
                    </Box>
                    <TextField
                      variant="outlined"
                      style={experienceStyle.inputFieldOne}
                    />
                  </Grid>

                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    style={webStyle.inputBoxPadding}
                  >
                    <Typography style={experienceStyle.iputHeadingText}>
                      Country
                    </Typography>
                    <Select
                      style={experienceStyle.dropDownInput}
                      variant="outlined"
                      value={this.state.country}
                      label="Country"
                      onChange={this.handleCountryChange}
                      inputProps={{ "aria-label": "Without label" }}
                      // input={<OutlinedInput />}
                    >
                      {this.state.names.map((name, id) => (
                        <MenuItem
                          key={id}
                          value={name}
                          style={{ backgroundColor: "#FFF" }}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    style={webStyle.inputBoxPadding}
                  >
                    <Typography style={experienceStyle.iputHeadingText}>
                      Country
                    </Typography>
                    <Select
                      style={experienceStyle.dropDownInput}
                      variant="outlined"
                      value={this.state.country}
                      label="Country"
                      onChange={this.handleCountryChange}
                      inputProps={{ "aria-label": "Without label" }}
                      // input={<OutlinedInput />}
                    >
                      {this.state.names.map((name, id) => (
                        <MenuItem
                          key={id}
                          value={name}
                          style={webStyle.inputBackground}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    style={webStyle.inputBoxPadding}
                  >
                    <Typography style={experienceStyle.iputHeadingText}>
                      Town
                    </Typography>
                    <Select
                      style={experienceStyle.dropDownInput}
                      variant="outlined"
                      value={this.state.town}
                      label="Town"
                      onChange={this.handleTownChange}
                      inputProps={{ "aria-label": "Without label" }}
                      // input={<OutlinedInput />}
                    >
                      {this.state.names.map((name, id) => (
                        <MenuItem
                          key={id}
                          value={name}
                          style={webStyle.inputName}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>

                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    style={webStyle.inputBoxPadding}
                  >
                    <Typography style={experienceStyle.iputHeadingText}>
                      Preferred Type of work
                    </Typography>
                    <TextField
                      variant="outlined"
                      style={experienceStyle.inputFieldOne}
                    />
                  </Grid>

                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    style={webStyle.buttons}
                  >
                    <Button
                      variant="outlined"
                      style={webStyle.deleteButton}
                    >
                      Delete
                    </Button>

                    <Button
                      style={webStyle.saveButton}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </>
          ) : (
            <>
              <div style={webStyle.profileinfoDiv}>
                <div style={webStyle.profileimgDiv}>
                  <img
                    src={profileImg}
                    alt="profileImage"
                    style={webStyle.profileImg}
                  />
                </div>
                <div>
                  <div style={webStyle.userNameDiv}>
                    <Typography style={webStyle.userName}>John Doe</Typography>
                    <EditIcon
                      style={webStyle.editIcon}
                      onClick={this.handleEditProfileOpen}
                    ></EditIcon>
                  </div>
                  <Typography style={webStyle.describtion}>
                    Experienced automotive interior designer Living in London.
                  </Typography>

                  <div style={webStyle.borderDiv}>
                    <Typography style={webStyle.borderBottom} />
                  </div>

                  <div style={webStyle.levelOuterDiv}>
                    <div style={webStyle.levelDiv}>
                      <Typography style={webStyle.level}>Level:</Typography>
                      <Typography style={webStyle.levelPosition}>
                        Senior
                      </Typography>
                    </div>
                    <div style={webStyle.locationDiv}>
                      <Typography style={webStyle.location}>
                        Location:
                      </Typography>
                      <LocationOnIcon style={webStyle.locationIcon} />
                      <Typography style={webStyle.locationName}>
                        Coventry, UK
                      </Typography>
                    </div>
                  </div>

                  <div style={webStyle.borderDiv}>
                    <Typography style={webStyle.borderBottom} />
                  </div>

                  <div style={webStyle.typeOuterDiv}>
                    <div style={webStyle.typeDiv}>
                      <Typography style={webStyle.type}>Type:</Typography>
                      <Typography style={webStyle.workingType}>
                        Full Time | Remote
                      </Typography>
                    </div>
                    <div style={webStyle.professionDiv}>
                      <Typography style={webStyle.profession}>
                        Profession:
                      </Typography>
                      <Typography style={webStyle.professionType}>
                        Interior Design | UI/UX Design | Visualisation
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

const webStyle = {
  // profile section start
  profileinfoDiv: {
    height: "189px",
    width: "1093px",
    display: "flex",
    gap: "47px",
    margin: "auto",
  },
  profileimgDiv: {
    width: "189px",
  },
  profileImg: {
    borderRadius: "189px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  userNameDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: "26px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "normal",
    fontStyle: "normal",
  },
  editIcon: {
    height: "24px",
    width: "24px",
    flexShrink: "0",
    color: "#DFDFDF",
  },
  describtion: {
    fontSize: "14px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    marginTop: "18px",
  },
  borderDiv: {
    marginTop: "28px",
  },
  borderBottom: {
    borderBottom: "1px solid",
    color: "#DFDFDF",
    width: "836px",
  },
  levelOuterDiv: {
    display: "flex",
    marginTop: "14px",
    marginLeft: "50px",
  },
  levelDiv: {
    display: "flex",
    width: "50%",
  },
  level: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    color: "#9B9B9D",
    alignSelf: "center",
  },
  levelPosition: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: "13px",
  },
  locationDiv: {
    display: "flex",
    width: "50%",
  },
  location: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    color: "#9B9B9D",
    alignSelf: "center",
  },
  locationIcon: {
    height: "20px",
    width: "20px",
    flexShrink: "0",
    marginLeft: "7px",
    marginRight: "4px",
  },
  locationName: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: "13px",
  },
  typeOuterDiv: {
    display: "flex",
    marginTop: "14px",
    marginLeft: "50px",
  },
  typeDiv: {
    display: "flex",
    width: "50%",
  },
  type: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    color: "#9B9B9D",
    alignSelf: "center",
  },
  workingType: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: "13px",
  },
  professionDiv: {
    display: "flex",
    width: "50%",
  },
  profession: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    color: "#9B9B9D",
    alignSelf: "center",
  },
  professionType: {
    fontSize: "12px",
    fontFamily: "Silka",
    fontWeight: "500",
    lineHeight: "140.625%",
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: "13px",
  },
};

const experienceStyle = {
  outerMostContainer: { 
    height: "100%", 
    width: "100%", 
    overflow: "hidden" 
  },
  editFormParentContainer: {
    marginTop: "35px",
    marginBottom: "35px",
    padding: "20px",
    flexGrow: "1",
  },
  outerGrid: {
    display: "grid",
    justifyContent: "center",
    marginBottom: "56px",
  },
  mainEditForm: {
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    height: "108px",
    width: "179px",
  },
  profileImage: {
    height: "72px",
    width: "70px",
    borderRadius: "50px",
    alignSelf: "center",
  },
  profileImageCaption: {
    fontStyle: "Silka",
    fontWeight: 500,
    fontSizeSize: "16px",
    lineHeight: "19.3px",
    textAlign: "Center",
    marginTop: "20px",
  },
  inputBoxPadding: { 
    padding: "10px 8px" 
  },
  inputName: { 
    backgroundColor: "#FFF",
    position: "relative",
    left: "0px", 
    top:"1px",
    bottom: "1px" 
  },
  deleteButton: {
    height: "48px",
    width: "104px",
    color: "#000",
    background: "#FFF",
    borderRadius: "2px",
    border: "1px solid #000",
    marginRight: "16px",
  },
  buttons: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "end",
  },
  saveButton: {
    height: "48px",
    width: "104px",
    color: "#FFF",
    background: "#DFDFDF",
  },
  inputBackground: { 
    backgroundColor: "#FFF" 
  },
  experienceDiv: {
    width: "1195px",
    // height: "825px",
    margin: "auto",
    marginTop: "35px",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #DFDFDF",
    borderRadius: "4px",
  },
  experienceInnerDiv: {
    display: "flex",
    justifyContent: "space-between",
    width: "1195px",
    height: "61px",
    background: "#000",
    padding: "20px",
    borderRadius: "4px, 4px, 0px, 0px",
  },
  expeTitle: {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Silka",
    lineHeight: "19.3px",
    color: "#FFF",
  },
  tvr: {
    color: "#000",
    fontFamily: "Silka",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "-0.15px",
  },
  addIconEdit: {
    color: "#FFF",
    height: "24px",
    width: "24px",
    flexShrink: "0",
  },
  iputHeadingText: {
    fontStyle: "Silka",
    fontWeight: "500",
    fontSizeSize: "16px",
    lineHeight: "19.3px",
  },
  inputFieldTwo: {
    // height: "48px",
    width: "547px",
    gap: "8px",
    marginTop: "4px",
  },
  inputFieldOne: {
    height: "48px",
    width: "100%",
    gap: "8px",
    marginTop: "4px",
  },
  inputFieldSeniority: {
    padding: "15px 8px",
    alignItems: "flex-end",
    height: "48px",
    width: "547px",
    gap: "8px",
    marginTop: "4px",
  },
  dropDownInput: {
    height: "48px",
    width: "358px",
    gap: "8px",
    padding: "15px 8px",
    alignItems: "flex-end",
  },
};
