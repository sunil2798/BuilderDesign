import React, { Component } from "react";
import "./profileInfo.css";
import profileImg from "../../img/profileImg.png";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from "react-router-dom";

export default class ProfileInfo extends Component {
  constructor() {
    super();
    this.state = {
      close: false,
      checked: true,
      selectedOption: 'info',
      editProfile : false,
    }

  }

  editProfileOpen = () => {
    this.setState({
      editProfile: true,

    })
    console.log("edit profile", this.state.editProfile);
  }

  handleChange = (event) => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };
  handleClose = () => {
    this.setState({close: false});
    console.log("handle Close", this.state.close);
  }
  handleOpen = () => {
    this.setState({
      close: true
    });
    console.log("handle open", this.state.close);
  }
  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
    console.log("option change ", event);
  };

  render() {
    console.log("selected option ", this.state.selectedOption);

    // console.log("handle Close", this.state.close);
    return (
      <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
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
              <EditIcon style={webStyle.editIcon} onClick={this.editProfileOpen} ><Link to={"/editprofile"}></Link></EditIcon>
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
                <Typography style={webStyle.levelPosition}>Senior</Typography>
              </div>
              <div style={webStyle.locationDiv}>
                <Typography style={webStyle.location}>Location:</Typography>
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
                <Typography style={webStyle.profession}>Profession:</Typography>
                <Typography style={webStyle.professionType}>
                  Interior Design | UI/UX Design | Visualisation
                </Typography>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------- */}
        <div style={webStyle.worlInfoDiv}>
          <div style={this.state.selectedOption === 'info' ? webStyle.infoDivActive : webStyle.workDivNotActive} id="info-div">
            <Typography style={webStyle.info}
             name='change'
             value='info'
             checked={this.state.selectedOption === 'info'}
             onChange={this.handleOptionChange}
             >Info</Typography>
          </div>
          <div style={this.state.selectedOption === 'work' ? webStyle.infoDivActive : webStyle.workDivNotActive} id="work-div">
            <Typography style={webStyle.info}
             name='chnage'
             value='work'
             checked={this.state.selectedOption === 'work'}
             onChange={this.handleOptionChange}
             
             >Work</Typography>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div style={webStyle.userDescDiv}>
          <div style={webStyle.userDescInnerDiv}>
            <Typography style={webStyle.userDescName}>John Doe</Typography>
            <EditIcon style={webStyle.editIcon} />
          </div>
          <div style={webStyle.descDiv}>
            <Typography vaariant="body1" style={webStyle.describation}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              id erat auctor, rutrum ex id, tincidunt tellus. Duis id nunc in
              neque maximus interdum. Nunc viverra vestibulum neque et mollis.
              Sed a odio condimentum, volutpat ex eu, volutpat tortor. Duis
              imperdiet urna eget lacus sollicitudin, non accumsan lorem
              posuere. In hac habitasse platea dictumst. Ut tempus et justo ac
              facilisis. Aliquam vitae faucibus nisi. Vivamus fermentum tortor
              in massa eleifend imperdiet.
              <br />
              <br /> Vestibulum magna leo, hendrerit vitae odio eu, egestas
              tincidunt ligula. Integer sodales ac purus sit amet imperdiet.
              Vivamus fringilla suscipit erat sit amet euismod. Cras tristique
              ipsum quis lacinia varius. Nam ante ante, auctor ut consectetur
              eget, tincidunt et metus. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Sed ipsum
              felis, ullamcorper quis lorem nec, ultricies egestas neque. Mauris
              erat neque, pulvinar non consectetur sit amet, molestie in ex.
            </Typography>
          </div>

          <div style={{ marginTop: "80px" }}>
            <Typography
              style={{ borderBottom: "1px solid #D9D9D9", width: "1107px" }}
            />
          </div>
          <div>
            <Typography style={webStyle.skills}>Skills</Typography>
            <div style={webStyle.buttonDiv}>
              <Button variant="outlined" style={webStyle.skillsButtons}>
                Photoshop
              </Button>
              <Button variant="outlined" style={webStyle.skillsButtons}>
                Autodesk Allos
              </Button>
              <Button variant="outlined" style={webStyle.skillsButtons}>
                Blender
              </Button>
              <Button variant="outlined" style={webStyle.skillsButtons}>
                Sketching
              </Button>
              <Button variant="outlined" style={webStyle.skillsButtons}>
                UI/UX Design
              </Button>
              <Button variant="outlined" style={webStyle.skillsButtons}>
                Visualisation
              </Button>
            </div>
          </div>
        </div>
        {/* -------------------Availability start--------------------------------- */}
        <div style={webStyle.availabilityDiv}>
          <div style={webStyle.availabilityInnerDiv}>
            <Typography style={webStyle.availability}>Availability</Typography>
            <Typography style={webStyle.everyoneCanSee}>
              Everyone can see this.
              <a href="http://" style={webStyle.changeHyperLink}>
                Change
              </a>
            </Typography>
          </div>
          <div style={{ width: "1112px", margin: "auto" }}>
            <div style={webStyle.userDescOppDiv}>
              <div style={{ display: "flex" }}>
                <Typography style={webStyle.userDescOppName}>
                  Open for opportunities.
                </Typography>
                <Typography style={webStyle.userDescSubName}>
                  Are you interested in work either now or in the future?
                </Typography>
              </div>
              {/* <EditIcon style={webStyle.editIcon} /> */}
              <Box>
                <label class="switch">
                  <input type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                     />
                  <span class="slider round"></span>
                </label>
              </Box>
            </div>

            <div style={{ marginTop: "28px", marginBottom: "28px" }}>
              <Typography
                style={{ borderBottom: "1px solid #D9D9D9", width: "1107px" }}
              />
            </div>
            <div>
              <Typography style={webStyle.unavailability}>
                Unavailability:
              </Typography>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  style={{ borderBottom: "1px solid #D9D9D9", width: "1107px" }}
                />
              </div>
              <div style={{ display: "inline-flex", width: "100%" }}>
                <div style={{ width: "70%" }}>
                  <TextField
                    variant="outlined"
                    placeholder="Unavailabile Form"
                    style={{
                      height: "33px",
                      width: "360px",
                      padding: "4px 8px 5px 8px",
                      alignItems: "center",
                      flexShrink: "0",
                      borderRadius: "2px",
                      boxSizing: "none",
                    }}
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Unavailabile Form"
                    style={{
                      padding: "4px 8px 5px 8px",
                      alignItems: "center",
                      flexShrink: "0",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "30%",
                  }}
                >
                  <CloseIcon
                  onClick= {this.handleOpen}
                    style={{
                      height: "24px",
                      width: "24px",
                      flexShrink: "0",
                      color: "#9B9B9D",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "12px" }}>
                <Typography
                  style={{ borderBottom: "1px solid #D9D9D9", width: "1107px" }}
                />
              </div>
              <div style={{ marginTop: "12px", marginBottom: "12px" }}>
                <AddIcon style={{ height: "36px", width: "36px" }} />
              </div>
              <div>
                <Typography
                  style={{ borderBottom: "1px solid #D9D9D9", width: "1107px" }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "32px",
              padding: "16px 40px 27px 0px",
              alignItems: "center",
              width: "100%",
              gap: "16px",
            }}
          >
            <Button
              style={{
                height: "48px",
                width: "104px",
                color: "#FFF",
                background: "#DFDFDF",
              }}
            >
              Save
            </Button>
          </div>
        </div>
        {/* -------------------Availability end--------------------------------- */}

        {/* --------------------Experience start-------------------------------- */}
        <div style={experienceStyle.experienceDiv}>
          <div style={experienceStyle.experienceInnerDiv}>
            <Typography style={experienceStyle.expeTitle}>
              Experience
            </Typography>
            <AddIcon style={{ color: "#FFF", height: "30px", width: "30px" }} />
          </div>
          <div>
            <div
              style={{
                height: "260px",
                width: "1093px",
                display: "flex",
                gap: "75px",
                margin: "auto",
                marginTop: "50px",
              }}
            >
              <div>
                <img
                  src={profileImg}
                  alt="profileImage"
                  style={{ height: "75px", width: "75px", fill: "#D9D9D9" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <div style={experienceStyle.expeNameDiv}>
                  <Typography style={experienceStyle.tvr}>TVR</Typography>
                  <EditIcon style={experienceStyle.expeEditIcon} />
                </div>
                <div>
                  <Typography style={experienceStyle.profileTitle}>
                    Exterior Designer
                  </Typography>

                  <div
                    style={{
                      color: "#9B9B9D",
                      display: "flex",
                      fontFamily: "Silka",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "19.364px",
                    }}
                  >
                    <Typography>Jan 2022 - Jan 2023 | 6 months</Typography>
                    <LocationOnIcon
                      style={{ marginLeft: "12px", marginRight: "5px" }}
                    />
                    <Typography>Coventry, UK</Typography>
                  </div>
                  <div
                    style={{
                      width: "651px",
                      marginTop: "16px",
                      marginBottom: "28px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "#000",
                        fontFamily: "Silka",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "200",
                        lineHeight: "normal",
                        marginBottom: "28px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer id erat auctor, rutrum ex id, tincidunt tellus.
                      Duis id nunc in neque maximus interdum. Nunc viverra
                      vestibulum neque et mollis. Sed a odio condimentum,
                      volutpat ex eu, volutpat tortor. Duis imperdiet urna eget
                      lacus sollicitudin, non accumsan lorem posuere. In hac
                      habitasse platea dictumst. Ut tempus et justo ac
                      facilisis.
                    </Typography>
                    <div>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Sketching
                      </Button>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Blender
                      </Button>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Photoshop
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                height: "260px",
                width: "1093px",
                display: "flex",
                gap: "75px",
                margin: "auto",
                marginTop: "50px",
              }}
            >
              <div>
                <img
                  src={profileImg}
                  alt="profileImage"
                  style={{ height: "75px", width: "75px", fill: "#D9D9D9" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <div style={experienceStyle.expeNameDiv}>
                  <Typography style={experienceStyle.tvr}>
                    Mercedes Benz{" "}
                  </Typography>
                  <EditIcon style={experienceStyle.expeEditIcon} />
                </div>
                <div>
                  <Typography style={experienceStyle.profileTitle}>
                    Exterior Designer
                  </Typography>

                  <div
                    style={{
                      color: "#9B9B9D",
                      display: "flex",
                      fontFamily: "Silka",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "19.364px",
                    }}
                  >
                    <Typography>Jan 2022 - Jan 2023 | 6 months</Typography>
                    <LocationOnIcon
                      style={{ marginLeft: "12px", marginRight: "5px" }}
                    />
                    <Typography>Coventry, UK</Typography>
                  </div>
                  <div
                    style={{
                      width: "651px",
                      marginTop: "16px",
                      marginBottom: "28px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "#000",
                        fontFamily: "Silka",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "200",
                        lineHeight: "normal",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer id erat auctor, rutrum ex id, tincidunt tellus.
                      Duis id nunc in neque maximus interdum. Nunc viverra
                      vestibulum neque et mollis. Sed a odio condimentum,
                      volutpat ex eu, volutpat tortor. Duis imperdiet urna eget
                      lacus sollicitudin, non accumsan lorem posuere. In hac
                      habitasse platea dictumst. Ut tempus et justo ac
                      facilisis.
                    </Typography>
                    <div>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Sketching
                      </Button>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Blender
                      </Button>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Photoshop
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------Experience end-------------------------------- */}

        {/* -----------------------Education start--------------------------------------------- */}
        <div style={experienceStyle.experienceDiv}>
          <div style={experienceStyle.experienceInnerDiv}>
            <Typography style={experienceStyle.expeTitle}>Education</Typography>
            <AddIcon style={{ color: "#FFF", height: "30px", width: "30px" }} />
          </div>
          <div>
            <div
              style={{
                height: "260px",
                width: "1093px",
                display: "flex",
                gap: "75px",
                margin: "auto",
                marginTop: "50px",
              }}
            >
              <div>
                <img
                  src={profileImg}
                  alt="profileImage"
                  style={{ height: "75px", width: "75px", fill: "#D9D9D9" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <div style={experienceStyle.expeNameDiv}>
                  <Typography style={experienceStyle.tvr}>
                    Royal College of Art
                  </Typography>
                  <EditIcon style={experienceStyle.expeEditIcon} />
                </div>
                <div>
                  <Typography style={experienceStyle.profileTitle}>
                    MA Vehicle Design
                  </Typography>

                  <div
                    style={{
                      color: "#9B9B9D",
                      display: "flex",
                      fontFamily: "Silka",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "19.364px",
                    }}
                  >
                    <Typography>Jan 2022 - Jan 2023 | 6 months</Typography>
                    <LocationOnIcon
                      style={{ marginLeft: "12px", marginRight: "5px" }}
                    />
                    <Typography>Coventry, UK</Typography>
                  </div>
                  <div
                    style={{
                      width: "651px",
                      marginTop: "16px",
                      marginBottom: "28px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "#000",
                        fontFamily: "Silka",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "200",
                        lineHeight: "normal",
                        marginBottom: "28px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer id erat auctor, rutrum ex id, tincidunt tellus.
                      Duis id nunc in neque maximus interdum. Nunc viverra
                      vestibulum neque et mollis. Sed a odio condimentum,
                      volutpat ex eu, volutpat tortor. Duis imperdiet urna eget
                      lacus sollicitudin, non accumsan lorem posuere. In hac
                      habitasse platea dictumst. Ut tempus et justo ac
                      facilisis.
                    </Typography>
                    <div>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Sketching
                      </Button>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Blender
                      </Button>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Photoshop
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                height: "260px",
                width: "1093px",
                display: "flex",
                gap: "75px",
                margin: "auto",
                marginTop: "50px",
              }}
            >
              <div>
                <img
                  src={profileImg}
                  alt="profileImage"
                  style={{ height: "75px", width: "75px", fill: "#D9D9D9" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <div style={experienceStyle.expeNameDiv}>
                  <Typography style={experienceStyle.tvr}>
                    Coventry University{" "}
                  </Typography>
                  <EditIcon style={experienceStyle.expeEditIcon} />
                </div>
                <div>
                  <Typography style={experienceStyle.profileTitle}>
                    BA Hons Automotive Design
                  </Typography>

                  <div
                    style={{
                      color: "#9B9B9D",
                      display: "flex",
                      fontFamily: "Silka",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "19.364px",
                    }}
                  >
                    <Typography>Jan 2022 - Jan 2023 | 6 months</Typography>
                    <LocationOnIcon
                      style={{ marginLeft: "12px", marginRight: "5px" }}
                    />
                    <Typography>Coventry, UK</Typography>
                  </div>
                  <div
                    style={{
                      width: "651px",
                      marginTop: "16px",
                      marginBottom: "28px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "#000",
                        fontFamily: "Silka",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "200",
                        lineHeight: "normal",
                        marginBottom: "28px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer id erat auctor, rutrum ex id, tincidunt tellus.
                      Duis id nunc in neque maximus interdum. Nunc viverra
                      vestibulum neque et mollis. Sed a odio condimentum,
                      volutpat ex eu, volutpat tortor. Duis imperdiet urna eget
                      lacus sollicitudin, non accumsan lorem posuere. In hac
                      habitasse platea dictumst. Ut tempus et justo ac
                      facilisis.
                    </Typography>
                    <div>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Sketching
                      </Button>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Blender
                      </Button>
                      <Button variant="outlined" style={webStyle.skillsButtons}>
                        Photoshop
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------Education end-------------------------------------------- */}

        {/* -----------------------------Socials start --------------------------------------------------- */}
        <div style={{height: "174px", width: "1195px",margin: "auto",justifyContent: "center", alignItems: "center", border: "1px solid #D9D9D9",borderRadius: "4px",marginTop: "20px"}}>
          <div style={experienceStyle.experienceInnerDiv}>
            <Typography style={experienceStyle.expeTitle}>Socials</Typography>
            <AddIcon style={{ color: "#FFF", height: "30px", width: "30px" }} />
          </div>
          <div style={{display: "flex", justifyContent: "space-between",padding: '20px', alignSelf: "center", marginTop: "20px"}}>
            <div style={{ display: "flex", gap: '10px'}}>
              <InstagramIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
            <EditIcon />
          </div>
        </div>

        {/* ------------------------------Socials end--------------------------------------------------- */}
        <div style={{height: "30px"}}></div>
      </div>
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
  // profile section end

  // info and work section start
  worlInfoDiv: {
    width: "1195px",
    margin: "auto",
    marginTop: "100px",
    // other Div css
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoDivActive: {
    width: "50%",
    alignItems: "center",
    borderBottom: "2px solid #000",
  },
  info: {
    textAlign: "center",
    fontFamily: "Silka",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "40px",
    letterSpacing: "-0.15px",
  },
  workDivNotActive: {
    width: "50%",
    alignSelf: "center",
    borderBottom: "2px solid #DFDFDF",
  },
  skills: {
    fontFamily: "Silka",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "24px",
  },
  buttonDiv: {
    display: "flex",
    gap: "8px",
    marginTop: "19px",
  },
  skillsButtons: {
    height: "33px",
    width: "134px",
    fontFamily: "Silka",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "14.48px",
    textAlign: "center",
    borderRadius: "2px",
    color: "#000",
    flexShrink: "0",
    whiteSpace: "nowrap",
    textTransform: "none",
  },
  // info and work section end
  // user info section start
  userDescDiv: {
    width: "1195px",
    height: "503px",
    margin: "auto",
    marginTop: "100px",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #D9D9D9",
    borderRadius: "4px",
    padding: "20px",
    display: "grid",
  },
  userDescInnerDiv: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  userDescName: {
    fontSize: "20px",
    fontWeight: "500",
    fontFamily: "Silka",
    lineHeight: "24.13px",
    letterSpacing: "-0.15px",
  },
  descDiv: {
    width: "1093px",
    marginTop: "13px",
    alignSelf: "center",
  },
  describation: {
    fontSize: "16px",
    fontFamily: "Silka",
    fontWeight: "200",
    lineHeight: "19.29px",
  },
  // user info section end

  // Availability section start
  availabilityDiv: {
    width: "1195px",
    height: "503px",
    margin: "auto",
    marginTop: "50px",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #D9D9D9",
    borderRadius: "4px",
  },
  availabilityInnerDiv: {
    display: "flex",
    justifyContent: "space-between",
    width: "1195px",
    height: "61px",
    background: "#000",
    padding: "20px",
    borderRadius: "4px, 4px, 0px, 0px",
  },
  availability: {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Silka",
    lineHeight: "19.3px",
    color: "#FFF",
  },
  everyoneCanSee: {
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "Silka",
    lineHeight: "14.48px",
    color: "#FFF",
  },
  changeHyperLink: {
    color: "#FFF",
    fontWeight: "500",
    fontFamily: "Silka",
    fontSize: "12px",
  },
  userDescOppDiv: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    // paddingLeft: "20px",
    // paddingRight: "20px",
    marginTop: "32.99px",
  },
  userDescOppName: {
    fontSize: "20px",
    fontWeight: "500",
    fontFamily: "Silka",
    lineHeight: "24.13px",
    letterSpacing: "-0.15px",
  },
  userDescSubName: {
    fontSize: "16px",
    fontWeight: "300",
    fontFamily: "Silka",
    lineHeight: "normal",
    letterSpacing: "-0.15px",
    alignSelf: "self-end",
    marginLeft: "8px",
  },
  unavailability: {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Silka",
    lineHeight: "normal",
    letterSpacing: "-0.15px",
  },
  // Availability section end
};

const experienceStyle = {
  experienceDiv: {
    width: "1195px",
    height: "741px",
    margin: "auto",
    marginTop: "50px",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #D9D9D9",
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
  expeEditIcon: {
    width: "24px",
    height: "24px",
    flexShrink: "0",
    color: "#9B9B9D",
  },
  expeNameDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  profileTitle: {
    color: "#000",
    fontFamily: "Silka",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "-0.15px",
    marginTop: "12px",
  },
};
