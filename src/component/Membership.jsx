import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import AddIcon from '@material-ui/icons/Add'
import LockIcon from '@material-ui/icons/Lock'
import React, { Component } from 'react'

export default class Membership extends Component {
  render() {
    return (
      <Grid container style={webStyle.container}>
        <Grid lg={6} style={webStyle.title}>
          <Box style={webStyle.mainbox}>
            <Box style={webStyle.Box}>
              <div style={webStyle.avatarTitleDiv}>
                <Avatar alt=">" src="/static/images/avatar/1.jpg" style={webStyle.avatarTitle} />
              </div>
              <div>
                <Typography style={webStyle.influncer}>Influncer</Typography>
                <hr style={webStyle.hr} />
                <div style={webStyle.hostedby}>
                  <Typography style={webStyle.influncer}>Hosted by you</Typography>
                  <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={webStyle.avatar} />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" style={webStyle.avatar} />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={webStyle.avatar} />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" style={webStyle.avatar} />
                  </AvatarGroup>
                </div>
                <Box style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
                  <LockIcon style={webStyle.lockIcon} />
                  <Typography style={webStyle.memberShipJoin}>Members with membership can join</Typography>
                </Box>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid lg={6} style={{ margin: "auto" }}>
          <Box style={webStyle.boxTwoDiv}>
            <div style={{ textAlign: 'left' }}>
              <Typography style={webStyle.membershipTitle}> Membership plans </Typography>
              <p style={webStyle.membershipTitleDesc}>2 more plans can be created</p>
            </div>
            <Grid container justifyContent="space-around " >
              <Grid sm={5} style={webStyle.gridBoxOne} marginRight="20px" marginBottom="20px">
                <div style={{alignSelf: "center"}}>
                  <Typography>Basic</Typography>
                  <Typography>$5/M/Y</Typography>
                </div>
              </Grid>
              <Grid sm={5} style={webStyle.gridBox} margin="auto">
                <Typography>Elite</Typography>
                <Typography>$8/M/Y</Typography>
              </Grid>
              <Grid sm={5} style={webStyle.gridBoxThree} margin="auto">
                <Typography>Preminum</Typography>
                <Typography>$10/M/Y</Typography>
              </Grid>
              <Grid sm={5} textAlign="center" style={webStyle.gridBoxAdd} >
                <Box margin="auto" justifyContent="center">
                  <AddIcon style={webStyle.addIcon} />
                </Box>
              </Grid>
            </Grid>
            <div style={{ textAlign: 'left', marginTop: "40px" }}>
              <Button style={webStyle.nextB} endIcon={<Avatar alt=">" src="/" style={webStyle.buttonAvatar} />}>
                Next
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    )
  }
}

const webStyle = {
  container: {
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    backgroundColor: "#000"
  },
  title: {
    textAlign: "center"
  },
  mainbox: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",

  },
  Box: {
    padding: "20px",
    margin: "auto",
    textAlign: "center",
    alignItem: "center",
    height: "486px",
    width: "620px",
    backgroundColor: "#B50B8F",
    color: "#E8E8E8",
    borderRadius: "45px",
  },
  hostedby: {
    display: "flex",
    justifyContent: "space-between",
  },
  lockIcon: {
    width: "18px",
    height: "17px",
    alignSelf: "center"
  },
  memberShipJoin: {
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#E0E0E0",
    marginLeft: "10px",
  },
  avatar: {
    height: "59px",
    width: "59px",
  },
  influncer: {
    fontWeight: "500",
    fontSize: "32px",
    lineHeight: "30px",
    color: "#E8E8E8",

  },
  hr: {
    border: "1px solid #B594AE",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  avatarTitleDiv: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "60px",
    marginTop: "-60px"

  },
  avatarTitle: {
    height: "106px",
    width: "106px",
    textAlign: "center",
    justifyContent: "center",
  },
  boxTwoDiv: {
    display: "grid",
    margin: "auto",
    padding: "20px",
  },
  membershipTitle: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "38.73px",
  },
  membershipTitleDesc: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21.78px",
    opacity: "50%",


  },
  gridBox: {
    height: "238px",
    width: "150px",
    color: "#FFF",
    backgroundColor: "#2D0185",
    borderRadius: "10px",
  },
  gridBoxOne: {
    height: "238px",
    width: "150px",
    color: "#FFF",
    backgroundColor: "#2D0185",
    radius: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
  },
  gridBoxThree: {
    height: "238px",
    width: "150px",
    color: "#FFF",
    backgroundColor: "#2D0185",
    radius: "20px",
    marginRight: "20px",
    borderRadius: "10px",
  },
  gridBoxAdd: {
    backgroundColor: "#E8E8E8",
    height: "238px",
    width: "150px",
    borderRadius: "10px",
  },
  addIcon: {
    color: "#2D0185",
    height: '24px',
    width: "24px",

  },
  nextB: {
    color: "#FFF",
    backgroundColor: "#3618B1",
    width: "240px",
    height: "64px",
    display: "flex",
    radius: "10px",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "25px",
    textTransform: "none",
  },
  buttonAvatar: {
    background: "#FFF",
    color: "#3618B1",
    height: "32px",
    width: "32px",

  },
}
