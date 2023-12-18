import React, { Component } from 'react'
import { Avatar, Box, Button, Grid, Radio, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import "../component/onbording.css";

//Onboarding 1.5


export default class OnBordeing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'free',

    };
  }
  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };
  render() {
    return (
      <div>
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
                </div>

              </Box>
            </Box>
          </Grid>
          <Grid lg={6} style={{ margin: "auto" }}>
            <div style={webStyle.boxTwoDiv}>
              <Box style={webStyle.boxTwo}>
                <div style={{ textAlign: 'left' }}>
                  <Typography style={webStyle.priceTitle}>Add Pricing</Typography>
                  <p style={webStyle.priceDesc}>Choose how members access your community</p>
                </div>
                <div style={this.state.selectedOption === 'free' ? webStyle.activeRadio : webStyle.subscribeFree }  id="free-div">
                  <div>
                    <Typography style={webStyle.freeTitle}>Free</Typography>
                    <p style={webStyle.freeDesc}>Anyone can join for free and access content</p>
                  </div>
                  <div>
                    <Radio
                      style={webStyle.freeRadio}
                      name='price'
                      value="free"
                      checked={this.state.selectedOption === 'free' }
                      onChange={this.handleOptionChange}
                    />
                  </div>
                </div>
                <div style={this.state.selectedOption === 'paid' ? webStyle.activeRadio : webStyle.subscribePaid} id="paid-div">
                    <div>
                      <Typography style={webStyle.subscribeTitle} >Paid</Typography>
                      <p style={webStyle.subscribeTitleDesc}>Anyone can join for free and access content.</p>
                    </div>
                    <div>
                      <Radio
                        style={webStyle.paidRadio}
                        name='price'
                        value='paid'
                        checked={this.state.selectedOption === 'paid'}
                        onChange={this.handleOptionChange}
                      />
                    </div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <Button style={webStyle.nextB} endIcon={<Avatar alt=">" src="/" style={webStyle.buttonAvatar} />}>
                    Next
                  </Button>
                </div>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
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
  avatar: {
    height: "59px",
    width: "59px",
  },
  influncer :{
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
  },
  boxTwo: {
    color: '#FFF',
    margin: "auto",
    justifyContent: "start",

  },
  priceTitle: {
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "38.73px",
    color: "#FFFFFF",

  },
  priceDesc: {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21.78px",
    color: "#FFFFFF",
    opacity: "50%",


  },
  activeRadio: {
     background: "blue",
     color: "#FFF",
     width: "576px",
     height: "135px",
     textAlign: 'left',
     padding: "10px",
     display: "flex",
     justifyContent: 'space-between',
     marginBottom: "1rem",
     alignItems: 'center',
  },
  subscribeFree: {
    width: "576px",
    height: "135px",
    textAlign: 'left',
    background: "#FFF",
    color: "#000",
    padding: "10px",
    display: "flex",
    justifyContent: 'space-between',
    marginBottom: "1rem",
    alignItems: 'center',
  },
  freeTitle: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "24.2px",
  },
  freeDesc: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
  },
  freeRadio: {
    width: "24px",
    height: "24px",
  },
  subscribePaid: {
    width: "576px",
    height: "135px",
    textAlign: 'left',
    background: "#FFFFFF",
    color: "#000000",
    padding: "10px",
    display: "flex",
    justifyContent: 'space-between',
    marginBottom: "1rem",
    alignItems: "center",
  },
  subscribeTitle: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "24.2px",
  },
  subscribeTitleDesc: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",

  },
  paidRadio: {
    width: "24px",
    height: "24px",
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
