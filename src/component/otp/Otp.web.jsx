import React from "react";

// Customizable Area Start
import { Box, Button, Typography, TextField } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { edit_icon, otpLogo, poster_1, poster_2, poster_3 } from "./assets";
import OTPInputAuthController, { Props } from "./OTPInputAuthController";
import "./OTPInputAuth.css";
import { Formik } from "formik";
import { getStorageData } from "framework/src/Utilities";
// Customizable Area End


const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff",
    },
  },
});

export default class OTPInputAuth extends OTPInputAuthController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  // Customizable Area Start

renderError = (error:string) => {
 return error?
  <Typography style={webStyle.errorss}>{this.state.errors?.message}</Typography>
  :
  <Typography style={webStyle.timer}>{`00:${this.state.timer < 10 ? '0' : ''}${this.state.timer}`}
  </Typography>
}

renderErrorfive = (error:string) => {
  
   return error
      ?
      <Typography style={webStyle.errorF}>{this.state.errorsFive?.message}</Typography>
      :
      null
  
}

  // Customizable Area End
  render() {
    return (
      // Customizable Area Start
      // Required for all blocks
      <ThemeProvider theme={theme}>
        <Box style={webStyle.mainDiv}>
          <Box style={webStyle.leftDiv} className="LeftBox">
            <div style={webStyle.titleDiv}>
              <Typography style={webStyle.title}>"Seize the moment,<br /> Join <span style={{ color: "#F37D77" }}>Time is Everything</span>"</Typography>
              <Typography style={webStyle.titleDescrip}> Our platform brings together the moments that matter most, from unforgettable events to essential reminders. Join us and make every moment count.</Typography>
            </div>
            <Box style={{ marginTop: "100px", }}>
              <Box style={webStyle.leftImgDiv}>
                <img src={poster_2} alt="Poster 1" />
                <img src={poster_3} alt="Poster 3" />
                <Box style={webStyle.topImgDiv}>
                  <img style={{ alignSelf: "center" }} src={poster_1} alt="Poster 2" />
                </Box>
              </Box>
            </Box>
          </Box>

          <Formik 
           initialValues={{
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
            otp5: '',
            otp6: '',
           }}
            validate={this.custumValidate}
            onSubmit={this.submitOtp}
             >
            {({
              handleChange,
              handleSubmit,
              touched,
              values
            }) => (
              <>
                <Box className="rightBox" style={webStyle.rightDiv}>
                  <Box style={{ maxWidth: "424px" }}>
                    <Box style={webStyle.logoDiv} >
                      <img alt="" src={otpLogo} style={webStyle.logoImg} />
                    </Box>
                  </Box>

                  <div style={webStyle.otpDiv} >
                    <Typography style={webStyle.otpVeri} >OTP Verification</Typography>
                    <div style={webStyle.numbDiv} >

                      <label style={webStyle.enterOtp} >Enter the OTP sent to</label>

                      <label style={webStyle.mobNumb}>
                      {this.state.loginPayloadData?.phoneNumber}
                      </label>


                      <div style={webStyle.editIconDiv} >

                        <img alt="edit" style={{ cursor: "pointer" }} src={edit_icon} onClick={this.handleNavigateMobileRegister} />

                      </div>

                    </div>

                  </div>
                  <Box style={webStyle.inputOuterDiv}>
                    <div style={webStyle.inputBox}>
                      <TextField
                        data-test-id="otp1"
                        placeholder='-'
                        variant="outlined"
                        autoFocus={true}
                        type="number"
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                          event.target.value = this.sliceInputValue(event);
                        }}
                        name="otp_code"
                        value={this.state.otp1}
                        onPaste={(event) => this.onPasteTextField(event)}
                        inputRef={this.otp1Ref}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChangeTextField(event, 'otp1', 'otp2')
                        
                        }
                        InputProps={{
                          style: {
                            width: "44px",
                            height: "44px",
                            borderRadius: "8px",
                            color: "#FFFFFF",
                            border: "1px",
                          },
                          inputProps: {
                            style: {
                              "appearance": "textfield",
                              "-moz-appearance": "textfield",
                            }
                          } as any
                        }}
                      />
                      <TextField
                        id="standard-basic"
                        data-test-id="otp2"
                        type="number"
                        variant="outlined"
                        placeholder='-'
                        value={this.state.otp2}
                        onPaste={(event) => this.onPasteTextField(event)}
                        name="otp2"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChangeTextField(event, 'otp2', 'otp3')}
                        onKeyDown={(event: any) => this.onTextFieldKeyDown(event, 'otp1', this.state.otp2)}
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                          event.target.value = this.sliceInputValue(event)
                        }}
                        inputRef={this.otp2Ref}
                        InputProps={{
                          style: {
                            border: "1px",
                            width: "44px",
                            height: "44px",
                            color: "#FFFFFF",
                            borderRadius: "8px",
                          },
                          inputProps: {
                            style: {
                              "-moz-appearance": "textfield",
                              "appearance": "textfield",
                            }
                          } as any
                        }}
                      />

                      <TextField
                        style={webStyle.input}
                        data-test-id="otp3"
                        id="standard-basic"
                        variant="outlined"
                        type="number"
                        name="otp3"
                        placeholder='-'
                        value={this.state.otp3}
                        onPaste={(event) => this.onPasteTextField(event)}
                        onKeyDown={(event: any) =>
                          this.onTextFieldKeyDown(event, 'otp2', this.state.otp3)}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChangeTextField(event, 'otp3', 'otp4')}
                        InputProps={{
                          style: {
                            height: "44px",
                            border: "1px",
                            width: "44px",
                            borderRadius: "8px",
                            color: "#FFFFFF",
                          },
                          inputProps: {
                            style: {
                              "-moz-appearance": "textfield",
                              "appearance": "textfield",
                            }
                          } as any
                        }}
                        inputRef={this.otp3Ref}
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                          event.target.value = this.sliceInputValue(event);
                        }}

                      />

                      <TextField
                        data-test-id="otp4"
                        style={webStyle.input}
                        id="standard-basic"
                        type="number"
                        variant="outlined"
                        name="otp4"
                        placeholder='-'
                        onPaste={(event) => this.onPasteTextField(event)}
                        value={this.state.otp4}
                        onKeyDown={(event: any) => this.onTextFieldKeyDown(event, 'otp3', this.state.otp4)}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChangeTextField(event, 'otp4', 'otp5')}
                        InputProps={{
                          style: {
                            borderRadius: "8px",
                            height: '44px',
                            width: "44px",
                            border: "1px",
                            color: "#FFFFFF",
                          },
                          inputProps: {
                            style: {
                              "-moz-appearance": "textfield",
                              "appearance": "textfield",
                            }
                          } as any
                        }}
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                          event.target.value = this.sliceInputValue(event);
                        }}
                        inputRef={this.otp4Ref}
                      />

                      <TextField
                        data-test-id="otp5"
                        id="standard-basic"
                        style={webStyle.input}
                        placeholder='-'
                        type="number"
                        variant="outlined"
                        value={this.state.otp5}
                        name="otp5"
                        onPaste={(event) => this.onPasteTextField(event)}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChangeTextField(event, 'otp5', 'otp6')}
                        onKeyDown={(event: any) => this.onTextFieldKeyDown(event, 'otp4', this.state.otp5)}
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                          event.target.value = this.sliceInputValue(event);
                        }}
                        inputRef={this.otp5Ref}
                        InputProps={{
                          inputProps: {
                            style: {
                              "-moz-appearance": "textfield",
                              "appearance": "textfield",
                            }
                          } as any,
                          style: {
                            border: "1px",
                            height: "44px",
                            borderRadius: "8px",
                            color: "#FFFFFF",
                            width: "44px",
                          },
                        }}
                      />
                      <TextField
                        style={webStyle.input}
                        data-test-id="otp6"
                        id="standard-basic"
                        variant="outlined"
                        name="otp6"
                        type="number"
                        inputMode="numeric"
                        placeholder='-'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.setStateForOtpField(event, 'otp6')}
                        onPaste={(event) => this.onPasteTextField(event)}
                        value={this.state.otp6}
                        onKeyDown={(event: any) => this.onTextFieldKeyDown(event, 'otp5', this.state.otp6)}
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                          event.target.value = this.sliceInputValue(event);
                        }}
                        InputProps={{
                          style: {
                            height: "44px",
                            width: "44px",
                            border: "1px",
                            borderRadius: "8px",
                            color: "#FFFFFF"
                          } as any,
                          inputProps: {
                            style: {
                              "-moz-appearance": "textfield",
                              "appearance": "textfield",
                            }
                          } as any

                        }}
                        inputRef={this.otp6Ref}
                      />
                    </div>



                     {this.renderError(this.state.errors.message)}
                     {this.renderErrorfive(this.state.errorsFive)}
                    
                    

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }} >
                      <label style={webStyle.didnotRecieve} > Didn't receive OTP? </label>
                      <Typography
                        style={webStyle.sendOtp}
                        dataTest-id="resetButton"
                        onClick={this.handlSendOtp}
                      >
                        Send otp
                      </Typography>
                    </div>
                    <div style={webStyle.submitButtonDiv} >
                      <Button dataTest-id="submitBu"
                        className="submitButton" 
                        disabled={this.state.submitDisabled}
                        style={{ opacity: this.handleDisable() }}
                        onClick={() => handleSubmit()} >Submit</Button>
                    </div>
                  </Box>
                </Box>
              </>
            )}

          </Formik>
        </Box>
      </ThemeProvider>

      // Customizable Area End
    );
  }
}

// Customizable Area Start

const webStyle = {
  errorF: {
    color: "#FFFFFF",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    fontFamiliy: "Poppins",
  },
  errorss: {
    color: "#FF2F3F",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    fontFamiliy: "Poppins",
  },
  mainDiv: {
    width: "100%",
    height: "100%",
    background: "#0F2631",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row" as "row",
  },
  leftDiv: {
    background: "linear-gradient(#23404B, #19282F)",
    height: "772px", width: "50%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-around",
    alignItems: "center" as "center",
    backgroundColor: "linear-gradient( #1C969A , #19B5B9 )",
    borderImageSlice: 1
  },
  titleDiv: {
    maxWidth: "587px",
    textAlign: "center" as "center",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: "60px",
    color: "#FFFFFF"
  },
  titleDescrip: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#FFFFFF"
  },
  leftImgDiv: {
    display: "flex",
    gap: "80px",
    maxWidth: "630px",
    position: "relative" as "relative"
  },
  topImgDiv: {
    display: "flex",
    position: "absolute" as "absolute",
    top: "-7rem",
    left: "10rem"
  },
  rightDiv: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center" as "center",
    alignItems: "center" as "center"
  },
  logoDiv: {
    height: "154px", width: "154px"
  },
  logoImg: {
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" as "cover"
  },
  otpDiv: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "20px",
    alignItems: "center"
  },
  otpVeri: {
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "poppins",
    lineHeight: "30px",
    color: "#FFFFFF"
  },
  numbDiv: {
    display: "flex",
    flexDirection: "row" as "row",
    color: "#FFFFFF",
    gap: "2px",
    alignItems: "center"
  },
  enterOtp: {
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "poppins",
    lineHeight: "21px",
    color: "#FFFFFF",
  },
  mobNumb: {
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: 500,
    lineHeight: "21px",
    color: "#FFFFFF",
  },
  editIconDiv: {
    width: "16px", height: "16px"
  },
  inputOuterDiv: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    gap: "30px",
    marginTop: "25px"
  },
  inputBox: {
    maxWidth: '456px',
    display: 'flex',
    justifyContent: 'start' as 'start',
    gap: "10px"
  },
  timer: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    alignSelf: "center",
    color: "#FFFFFF"
  },
  didnotRecieve: {
    fontSize: "12px", fontWeight: 400,
    color: "#FFFFFF", lineHeight: "18px"
  },
  sendOtp: {
    fontSize: "14px", lineHeight: "21px",
    fontWeight: 400, color: "#F37F78",
    cursor: "pointer"
  },
  submitButtonDiv: {
    width: "343px", height: "48px",
  },
  input: {
  },


};

// Customizable Area End
