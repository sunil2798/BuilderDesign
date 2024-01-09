import React, { Component } from "react";
import "./profileInfo.css";
import profileImg from "../../img/profileImg.png";
import { Grid, TextField, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

export default class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      editProfileOpen: false,
    };
  }

  handleEditProfileOpen = () => {
    this.setState({
      editProfileOpen: true,
    });
  };

  render() {
    return (
      <>
        <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
          {this.state.editProfileOpen ? (
            <>
              <div style={experienceStyle.experienceDiv}>
                <div style={experienceStyle.experienceInnerDiv}>
                  <Typography style={experienceStyle.expeTitle}>
                    Edit Profile
                  </Typography>
                  <AddIcon
                    style={experienceStyle.addIconEdit}
                  />
                </div>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <img src="/" alt="uploadimg" style={{height: "72px", width: "70px"}}/>
                  </Grid>

                  <Grid xs={6} sm={6} md={6} lg={6}>
                    <Typography>First Name</Typography>
                    <TextField variant="outlined" />
                  </Grid>
                  <Grid xs={6} sm={6} md={6} lg={6}>
                  <Typography>Last Name</Typography>
                    <TextField  variant="outlined"/>
                  </Grid>

                  <Grid xs={6} sm={6} md={6} lg={6}>
                  <Typography>Profesion</Typography>
                    <TextField variant="outlined" />
                  </Grid>
                  <Grid xs={6} sm={6} md={6} lg={6}>
                  <Typography>Seniority</Typography>
                    <TextField variant="outlined" />
                  </Grid>

                  <Grid xs={12} sm={12} md={12} lg={12}>
                  <Typography>Headline</Typography>
                    <TextField variant="outlined" />
                  </Grid>

                  <Grid xs={4} sm={4} md={4} lg={4}>
                  <Typography>Country</Typography>
                    <TextField variant="outlined"/>
                  </Grid>
                  <Grid xs={4} sm={4} md={4} lg={4}>
                  <Typography>Country</Typography>
                    <TextField variant="outlined"/>
                  </Grid>
                  <Grid xs={4} sm={4} md={4} lg={4}>
                  <Typography>Town</Typography>
                    <TextField variant="outlined"/>
                  </Grid>

                  <Grid xs={12} sm={12} md={12} lg={12}>
                  <Typography>Preferred Type of work</Typography>
                    <TextField variant="outlined"/>
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
  experienceDiv: {
    width: "1195px",
    height: "825px",
    margin: "auto",
    marginTop: "50px",
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

  },
};
