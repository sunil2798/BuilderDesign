import React, { Component } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
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
                  maxWidth: "672px",
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
                    fontStyle: "normal",
                    lineHeight: "-0.15px",
                  }}
                >
                  Availability
                </Typography>

                <Box
                  style={{
                    maxWidth: "672px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    marginTop: "36px",
                  }}
                >
                  <Box style={{ display: "flex", gap: "24px" }}>
                    <Typography style={{ color: "#9B9B9D" }}>
                      <span style={{ fontWeight: 600, color: "#0D0C22" }}>
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
                        Unavailability
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
                        <Box style={{ maxWidth: "326px" }}>
                          <TextField
                            variant="outlined"
                            style={{ height: "48px", width: "100%" }}
                            name="firstname"
                          />
                        </Box>
                        <Box style={{ maxWidth: "326px" }}>
                          <TextField
                            variant="outlined"
                            style={{ height: "48px", width: "100%" }}
                            name="lastname"
                          />
                        </Box>
                      </Box>
                    </>
                  ) : (
                    ""
                  )}

                  <Box></Box>
                  <Box style={{ textAlign: "end" }}>
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
