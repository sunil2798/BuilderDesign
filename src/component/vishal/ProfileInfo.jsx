import React, { Component } from "react";
import profileImg from "../../img/profileImg.png";
import { Button, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";

export default class ProfileInfo extends Component {
  render() {
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
              <EditIcon style={webStyle.editIcon} />
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
          <div style={webStyle.infoDiv}>
            <Typography style={webStyle.info}>Info</Typography>
          </div>
          <div style={webStyle.workDiv}>
            <Typography style={webStyle.info}>Work</Typography>
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
        {/* ---------------------------------------------------- */}
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
          <div style={webStyle.userDescInnerDiv}>
            <Typography style={webStyle.userDescName}>
              Open for opportunities.
            </Typography>
            <EditIcon style={webStyle.editIcon} />
          </div>

          <div style={{ marginTop: "80px" }}>
            <Typography
              style={{ borderBottom: "1px solid #D9D9D9", width: "1107px" }}
            />
          </div>
        </div>
        {/* ---------------------------------------------------- */}
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
  infoDiv: {
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
  workDiv: {
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

  // Availability section end
};
