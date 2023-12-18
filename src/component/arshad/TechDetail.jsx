import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class TechDetail extends Component {
  render() {
    return (
      <>
        <Box style={{ marginTop: "30px", marginLeft: "40px" }}>
          <Grid container>
            <Grid
              item
              md={10}
              sm={10}
              xs={10}
              style={{
                boxShadow: "0px 2px 10px 0px",
                borderRadius: "10px",
                height: "50%",
                width: "90%",
                padding: "10px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography style={{ fontWeight: 700, fontSize: "20px" }}>
                  [Technician Name] [Asset Type]
                </Typography>
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "#FFF",
                    borderRadius: "10px",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  Edit Assat Types
                </Button>
              </Box>
            </Grid>
          </Grid>


          <Grid container>
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              style={{
                boxShadow: "0px 0px 2px 0px",
                borderRadius: "5px",
                marginTop: "20px",
                padding: "10px",
              }}
            >
              <Box>
                {/* <a href="http://">Vertical</a> */}
                <Typography style={{ color: "blue", fontWeight: 600 }}>Vertical</Typography>
              </Box>
            </Grid>
            {/* --------------------- */}
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              style={{
                boxShadow: "0px 0px 2px 0px",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "2px"
              }}
            >
              <Box>
                <Typography style={{fontWeight: 400}}>[Asset Type]</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={10}
              sm={10}
              md={10} 
              style={{
                boxShadow: "0px 0px 2px 0px",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "2px"
              }}
            >
              <Box>
                <Typography style={{fontWeight: 400}}>[Asset Type]</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              style={{
                boxShadow: "0px 0px 2px 0px",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "2px"
              }}
            >
              <Box>
                <Typography style={{fontWeight: 400}}>[Asset Type]</Typography>
              </Box>
            </Grid>


          </Grid>
        </Box>
      </>
    );
  }
}
