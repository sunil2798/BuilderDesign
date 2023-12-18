import {
  Box,
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./info.css";
import { orange, red } from "@material-ui/core/colors";


const theme = createTheme({
  typo: {
    color: red,
    fontSize: 50,
    backgroundColor: orange,
  },
});


export default class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      options: [],
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = (value) => {
    if (value === "") {
      this.setState({ options: [] });
      return;
    }

    const filteredOptions = topFilms.filter((film) =>
      film.title.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ options: filteredOptions });
  };

  render() {
    const { open, options } = this.state;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Typography>
            hello this is theme provider
          </Typography>
        </ThemeProvider>
        <Box>
          <Grid container style={{ marginTop: "30px", marginLeft: "40px" }}>
            <Grid
              item
              md={10}
              sm={10}
              xs={10}
              style={{
                height: "20%",
                boxShadow: "0px 2px 10px 0px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ArrowBackIosIcon />
                <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                  CSV import
                </Typography>
              </Box>
              <Box>
                <Button style={{ color: "#FFF", backgroundColor: "grey" }}>
                  Import CSV
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              md={10}
              sm={10}
              xs={10}
              style={{
                marginTop: "15px",
                height: "30%",
                width: "100%",
                boxShadow: "0px 2px 10px 0px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <Box>
                <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                  FieldName
                </Typography>
                <Typography style={{ fontSize: "14px", color: "#9EB8D9" }}>
                  (E.g Candy Store)
                </Typography>
              </Box>
              <Box style={{ width: "50%", position: "relative" }}>
                <Autocomplete
                  style={{ backgroundColor: "white" }}
                  id="asynchronous-demo"
                  open={open}
                  onOpen={this.handleOpen}
                  onClose={this.handleClose}
                  isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                  }
                  getOptionLabel={(option) => option.title}
                  options={topFilms}
                  onInputChange={(event, value) =>
                    this.handleInputChange(value)
                  }
                  renderInput={(params) => (
                    <div>
                      <SearchIcon
                        style={{
                          position: "absolute",
                          left: "13px",
                          top: "12px",
                          height: "30px",
                          width: "30px",
                        }}
                      />
                      <TextField
                        variant="outlined"
                        {...params}
                        placeholder="Please select system field"
                        InputProps={{
                          ...params.InputProps,
                        }}
                      />
                    </div>
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

const topFilms = [
  { title: "Dont map this field" },
  { title: "[Field]" },
  { title: "[Field]" },
  { title: "[Field]" },
];



