import React, { Component } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";



// interface iState {
//   isOpen: boolean;
//   loginData: any[];
//   initialvalues: {
//     email: string,
//     password: string,
//   };
// }

class Formikk extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      loginData: [],
      initialvalues: {
        email: "",
        password: "",
      },
    };
  }

  handleClick = (values) => {
    console.log("values", values);
    // this.setState({ loginData: [...this.state.loginData, values] });
    // resetForm();
  };

  // handleReset = (resetForm: any) => {
  //   console.log("initialvalues", this.state.initialvalues)
  //   if (this.state.initialvalues.email && this.state.initialvalues.password) {
  //     console.log("true")
  //     resetForm()
  //     this.setState({
  //       initialvalues: {
  //         email: "",
  //         password: ""
  //       }
  //     })
  //   }
  // }
  render() {
    console.log("loginData", this.state.loginData);
    return (
      <>
        <Formik
          initialValues={{
            email: this.state.initialvalues.email || "",
            password: this.state.initialvalues.password || "",
          }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email("please enter valid email")
              .required("please enter email"),
            password: yup.string().required("please enter password"),
          })}
          data-testid="formikTest"
          // onSubmit={this.handleClick}
          onClick ={this.handleClick}
        >
          {/* {({ resetForm }) => ( */}
          <Form>
            <Box
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Typography sx={{ textAlign: "center" }}>Login form</Typography>
              <Box
                justifyContent="center"
                alignItems="center"
                sx={{ my: 3 }}
                direction="row"
              >
                <label htmlFor="email" id="email-label">
                  Email:
                </label>
                <Field name="email" id="input-email" type="email" />
                <ErrorMessage name="email" id="email-error" component="div" />
              </Box>
              <Box
                justifyContent="center"
                alignItems="center"
                sx={{ my: 3 }}
                direction="row"
              >
                <label htmlFor="password" id="password-label">
                  password:
                </label>
                <Field name="password" id="input-password" type="password" />
                <ErrorMessage
                  name="password"
                  id="password-error"
                  component="div"
                />
              </Box>
              <Button
                id="submiStackt"
                type="submit"
                variant="contained"
                color="primary" 
              >
                Save
              </Button>
            </Box>
          </Form>
        </Formik>


        {/* {this.state.loginData.length > 0 ? (
          this.state.loginData.map((login) => (
            <Box justifyContent="center" alignItems="center" sx={{ m: 5 }}>
              <Typography>{login.email}</Typography>
              <Typography>{login.password}</Typography>
            </Box>
          ))
        ) : (
          <Typography>there is no data </Typography>
        )} */}
        
      </>
    );
  }
}
export default Formikk;
