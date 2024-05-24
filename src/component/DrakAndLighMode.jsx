import React, { Component } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DeleteIcon from "@material-ui/icons/Delete";

export default class DrakAndLighMode extends Component {
  constructor(props){
    super(props);
    this.state = {
      dark:{
      color:"white",
      background:"black",
      },
      btnTextChange:"Enable",
    }
  }

  handleChange = () => {
    const { dark } = this.state;
    if (dark.color === 'white') {
      this.setState({
        dark: {
          color: "black",
          background: "white",
          margin: "auto",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 0 10px 2px",
        },
        btnTextChange: "Disable",
      });
    } else {
      this.setState({
        dark: {
          color: "white",
          background: "black",
          margin: "auto",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 0 10px 2px",
        },
        btnTextChange: "Enable",
      });
    }
  };

  
  render() {
  console.log("dark state check", this.state.dark);
    const darkLight = {
      color:"black",
      background:"white",
      margin: "auto",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 0 10px 2px",
    }
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Grid
          container
          style={darkLight}
        >
          <Grid
            md={12}
            xs={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography style={{ fontWeight: "bold", fontSize: "26px" }}>
              John Smith
            </Typography>
            <Button style={{ color: "red", background: "yellow" }}>
              <EditIcon /> Edit User Profile
            </Button>
          </Grid>
          <Grid
            md={12}
            xs={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Box
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <AssignmentIndRoundedIcon />
                <Typography>Technician</Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <CallIcon />
                <Typography>0123456789</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <MailIcon />
                <Typography>johnsmith@gmail.com</Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <ScheduleIcon />
                <Typography>09:00-12:00 | 13:00-17:00</Typography>
              </Box>
            </Box>
            <Button
              style={{
                height: "42px",
                background: "red",
                color: "#FFF",
                alignSelf: "center",
              }}
            >
              <DeleteIcon />
              Delete User Profile
            </Button>
          </Grid>
          <Grid
            md={12}
            xs={12}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <Typography style={{ fontWeight: "bold" }}>ID</Typography>
            <Typography>789465</Typography>
          </Grid>
          <Grid
            md={12}
            xs={12}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <Typography style={{ fontWeight: "bold" }}>ADDRESS</Typography>
            <Typography>Malvi Nagar, Jaipur(RJ)</Typography>
          </Grid>

          <Grid
            md={12}
            xs={12}
            style={{ marginTop: "5px", marginBottom: "5px" }}
          >
            <Typography style={{ fontWeight: "bold" }}>JOB TYPE(S)</Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography style={{ alignSelf: "end" }}>Maintenance</Typography>
              <a
                href="http://"
                style={{
                  color: "red",
                  textDecoration: "none",
                  alignSelf: "end",
                }}
              >
                view asset type
              </a>
            </Box>
            <hr style={{ backgroundColor: "#000", height: "1px" }} />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>Survey</Typography>
              <a
                href="http://"
                style={{
                  color: "red",
                  textDecoration: "none",
                  alignSelf: "end",
                }}
              >
                view asset type
              </a>
            </Box>
            <hr style={{ backgroundColor: "#000", height: "1px" }} />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>Installation</Typography>
              <a
                href="http://"
                style={{
                  color: "red",
                  textDecoration: "none",
                  alignSelf: "end",
                }}
              >
                view asset type
              </a>
            </Box>
            <hr style={{ backgroundColor: "#000", height: "1px" }} />
          </Grid>

          <Grid
            md={12}
            xs={12}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <Typography style={{ fontWeight: "bold" }}>SALARY</Typography>
            <Typography>Lorem ipsum</Typography>
          </Grid>
          <Grid
            md={12}
            xs={12}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              SOCIAL SECURITY NUMBER
            </Typography>
            <Typography>Lorem ipsums</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          style={{
            margin: "auto",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 0 10px 2px",
          }}
        >
          <Typography>second grid</Typography>
          <Button onClick={this.handleChange} style={{height:"50px",width:"200px",color:"#FFFFFF", background:"red"}}>{this.state.btnTextChange}</Button>
        </Grid>
      </div>
    );
  }
}
