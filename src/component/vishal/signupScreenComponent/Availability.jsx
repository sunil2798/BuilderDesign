import React, { Component } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./availability.css";
import "react-phone-input-2/lib/style.css";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("First Name is required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Last Name is required"),
});
function FieldError({ error, touched }) {
  return error && touched ? <div style={webStyle.error}>{error}</div> : null;
}

export default class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleToggleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  componentDidMount() {
    // const dateControl = document.querySelector('input[type="date"]');
    // dateControl.value = "2";
    // console.log(dateControl.value);
    // console.log(dateControl.valueAsNumber);
    // document.querySelector('input[type="date"]').innerHTML = "";
    // document.querySelector('input[type="date"]').value.replace("yyyy/mm/dd", "");
  }

  render() {
    return (
      <>
        <Formik
          // initialValues={{
          //   firstName: this.state.firstName,
          //   lastName: this.state.lastName,
          //   countryFirst: this.state.countryFirst,
          //   countrySecond: this.state.countrySecond,
          //   townn: this.state.townn,
          // }}
          // validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            errors,
            resetForm,
            setFieldTouched,
            setFieldValue,
            touched,
            handleSubmit,
            setErrors,
          }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div
                style={{
                  // maxWidth: "672px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Silka",
                    color: "#0D0C22",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "28.96px",
                  }}
                >
                  Availability
                </Typography>

                <Box
                  style={{
                    // maxWidth: "672px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    marginTop: "46px",
                    marginBottom: "46px",
                  }}
                >
                  <Box style={{ display: "flex", gap: "24px" }}>
                    <Typography
                      style={{
                        color: "#9B9B9D",
                        fontWeight: 200,
                        fontFamily: "Silka",
                        fontSize: "14px",
                        lineHeight: "16.8px",
                        letterSpacing: "-0.15px",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 500,
                          color: "#0D0C22",
                          fontFamily: "Silka",
                          fontSize: "16px",
                          lineHeight: "19.3px",
                          letterSpacing: "-0.15px",
                        }}
                      >
                        Open for opportunities.
                      </span>
                      Are you interested in work either now or in the future?
                    </Typography>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleToggleChange}
                      />
                      <span className="slider round"></span>
                    </label>
                  </Box>
                  {this.state.checked ? (
                    <>
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
                        Unavailability :
                      </Typography>
                      <Box
                        style={{
                          maxWidth: "672px",
                          display: "flex",
                          gap: "24px",
                          borderBottom: "1px solid #D9D9D9",
                          borderTop: "1px solid #D9D9D9",
                          paddingBottom: "24px",
                          paddingTop: "24px",
                        }}
                      >
                        <Box
                        style={{ maxWidth: "326px" }}
                        >
                          <TextField
                            type="date"
                            name="date"
                            variant="outlined"
                            // style={{ height: "48px", width: "100%" }}
                            placeholder="Unavailable form"
                          />
                        </Box>
                        <Box
                        style={{ maxWidth: "326px" }}
                        >
                          <TextField
                            type="date"
                            name="date"
                            variant="outlined"
                            // style={{ height: "48px", width: "100%" }}
                            placeholder="Unavailable form"
                          />
                        </Box>
                      </Box>
                      <Box
                        style={{
                          borderBottom: "1px solid #D9D9D9",
                          paddingBottom: "24px",
                          textAlign: "left",
                        }}
                      >
                        <AddIcon style={{ height: "36px", width: "36px" }} />
                      </Box>
                      <Box>
                        <Typography
                          style={{
                            fontFamily: "Silka",
                            fontWeight: 200,
                            fontSize: "16px",
                            lineHeight: "19.29px",
                            letterSpacing: "-0.15px",
                            color: "#000",
                          }}
                        >
                          Everyone can see this. You can change this later at
                          any time
                        </Typography>
                      </Box>
                    </>
                  ) : (
                    ""
                  )}

                  <Box style={{ textAlign: "end", marginTop: "100px" }}>
                    <Button
                      variant="outlined"
                      type="submit"
                      style={{
                        backgroundColor: "#9B9B9D",
                        color: "#FFF",
                        width: "129px",
                        textWrap: "nowrap",
                        whiteSpace: "nowrap",
                        textTransform: "capitalize",
                        fontFamily: "Silka",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "19.3px",
                        letterSpacing: "-0.15px",
                        textAlign: "center",
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </div>
            </form>
          )}
        </Formik>
      </>
    );
  }
}

const webStyle = {
  error: {
    color: "#D80032",
  },
};
