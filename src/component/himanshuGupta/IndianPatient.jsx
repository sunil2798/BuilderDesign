import { Box, Button, Grid, Modal, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class IndianPatient extends Component {
  constructor() {
    super();
    this.state = {
      searchPatentModel: false,
    };
  }

  handleCloseModalPatent = () => {
    this.setState({
      searchPatentModel: false,
    });
  };

  handleOpenModalPatent = () => {
    this.setState({
      searchPatentModel: true,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleOpenModalPatent}>click here</Button>
        <Modal
          BackdropProps={{
            invisible: true,
            style: webStyles.modalBackDropStyle,
          }}
          open={this.state.searchPatentModel}
          onClose={this.handleCloseModalPatent}
        >
          <Box style={webStyles.searchModalViewContainer}>
            <Box style={webStyles.searchModalViewSubContainer}>
              <Box>
                <Box style={webStyles.crossImgStyle}>
                  <img src="/" alt="CloseImg" style={webStyles.closeImgStyle} />
                </Box>
                <Box marginTop={"35px"} marginLeft={"16px"}>
                  <img
                    src="/"
                    alt="BarCodeImg"
                    style={webStyles.headerLeftStyle}
                  />
                </Box>
              </Box>
              <Grid container>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent="space-evenly"
                  paddingLeft="20px"
                  paddingTop={"30px"}
                >
                  <Typography>(12)</Typography>
                  <Typography style={webStyles.governTypography}>
                    Government of India Patent
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  style={{ paddingLeft: "134px" }}
                >
                  <Typography style={webStyles.paddingLeft16}>(10)</Typography>
                  <Typography style={webStyles.typography18px}>
                    Patent No:
                  </Typography>
                  <Typography style={webStyles.patentNoStyle}>
                    IN-1023948
                  </Typography>
                </Box>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  mt={"12px"}
                >
                  <Box display={"flex"} alignItems="center" marginLeft={"55px"}>
                    <Typography style={webStyles.typography18px}>
                      Mrs. Ritu Desai
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems="center">
                    <Typography style={webStyles.paddingLeft16}>
                      (45)
                    </Typography>
                    <Typography style={webStyles.typography18px}>
                      Date of Patent:
                    </Typography>
                    <Typography style={webStyles.datePatentStyle}>
                      Apr 28, 2020
                    </Typography>
                  </Box>
                </Box>
                <hr style={webStyles.horizontalRule} />
              </Grid>
              {/* -------------------------------------------------------------------------------------------------------------- */}
              <Grid
                container
                rowSpacing={2}
                columnSpacing={2}
                style={{ width: "95%", margin: "auto", marginTop: "10px" }}
              >
                <Grid xs={12} sm={10} md={6} lg={6} style={{ display: "grid" }}>
                  <Box style={{ width: "90%", display: "grid" }}>
                    <div style={{ display: "flex" }}>
                      <Typography>(51)</Typography>
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "18px",
                          marginLeft: "10px",
                        }}
                      >
                        Remote vital signs monitoring via smartphone
                        integrationodi.
                      </Typography>
                    </div>
                    {/* --- */}
                    <div style={{ display: "flex" }}>
                      <Typography>(52)</Typography>
                      <div>
                        <Typography
                          style={{ fontWeight: "400", marginLeft: "10px" }}
                        >
                          Applicant: <span> Mrs Yukita Desai, </span>New Delhi
                          (IND)
                        </Typography>
                      </div>
                    </div>

                    <div style={{ display: "flex" }}>
                      <Typography>(54)</Typography>
                      <div>
                        <Typography
                          style={{ fontWeight: "400", marginLeft: "10px" }}
                        >
                          Inventor: <span> Mrs Ritu Desai, </span>New Delhi
                          (IND)
                        </Typography>
                      </div>
                    </div>

                    <div style={{ display: "flex" }}>
                      <Typography>(55)</Typography>
                      <div>
                        <Typography
                          style={{ fontWeight: "500", marginLeft: "10px" }}
                        >
                          Appl.No: <span> 21/007,698 </span>
                        </Typography>
                      </div>
                    </div>

                    <div style={{ display: "flex" }}>
                      <Typography>(56)</Typography>
                      <div>
                        <Typography
                          style={{ fontWeight: "500", marginLeft: "10px" }}
                        >
                          Filed: <span> Dec 19, 2017 </span>
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </Grid>

                <Grid xs={12} sm={10} md={6} lg={6}>
                  <div style={{ display: "flex" }}>
                    <Typography>(58)</Typography>
                    <Typography
                      style={{
                        fontWeight: "600",
                        fontSize: "18px",
                        marginLeft: "100px",
                      }}
                    >
                      ABSTRACT
                    </Typography>
                  </div>
                  <Typography style={{ padding: "10px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book It has survived not only five centuries but
                    also the leap into electronic typesetting remaining
                    essentially unchanged It was popularised in the with the
                    release of Letraset sheets containing Lorem Ipsum passages
                    and more recently
                  </Typography>
                </Grid>
              </Grid>
              {/* img start */}
              <Grid container style={{ marginTop: "50px" }}>
                <Grid sm={2} md={2} lg={2}></Grid>
                <Grid sm={6} md={6} lg={8}>
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      border: "1px solid #D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="" alt="design" />
                  </div>
                </Grid>
                <Grid sm={2} md={2} lg={2}></Grid>
              </Grid>
              {/* img end*/}
              <Grid
                container
                style={{ width: "95%", margin: "auto", marginTop: "50px" }}
              >
                <Grid xs={6} sm={6} md={6} lg={6}>
                  <Typography>
                    Date:
                    <span style={{ fontWeight: "600" }}>June 29, 2020</span>
                  </Typography>
                  <Typography>
                    Place: <span style={{ fontWeight: "600" }}>New Delhi</span>
                  </Typography>
                </Grid>
                <Grid xs={6} sm={6} md={6} lg={6} style={{ textAlign: "end" }}>
                  <img
                    src="/"
                    alt="SignatureImg"
                    style={{
                      height: "30px",
                      width: "30px",
                      border: "1px solid #D9D9D9",
                    }}
                  />
                  <Typography style={{ fontWeight: "600" }}>
                    Registrar Signature
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }
}

const webStyles = {
  application: {
    padding: "40px",
    height: "353px",
    width: "100%",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    padding: "10px",
    borderRadius: "8px",
    background:
      "linear-gradient(136.2deg, rgb(205, 211, 219) -6.59%, rgb(202, 214, 217) 105.03%)",
    marginTop: "10px",
    marginLeft: "10px",
  },
  bannerImgForm: {
    position: "relative",
    height: "100%",
    flex: "0.5",
  },
  overlay: {
    backgroundColor:
      "linear-gradient(13deg,rgb(255 255 255) 18%,rgb(255 255 255 / 78%) 29%,#ffffff00 50%)",
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "100%",
    width: "100%",
    zIndex: "4",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "3fr 7fr",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    width: "32rem",
    padding: "0.5rem 1rem",
    minHeight: "12rem",
    gap: "2rem",
  },
  handleHeader: {},
  bannerStyle: {
    margin: "2%",
  },
  select: {
    border: "1px solid #979797",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    borderRadius: "4px",
    padding: "4px",

    " &.MuiSvgIcon-root-393": {
      visibility: "hidden",
    },
  },
  select_label: {
    fontSize: "1.1rem",
    fontWeight: 590,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "10px",
    marginBottom: "10px",
  },
  details: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    color: "#0b336a",
    marginTop: "10px",
    textAlign: "left",
  },
  sub_details: {
    fontSize: "1.1rem",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "0em",
    color: "#0b336a",
    marginTop: "10px",
    textAlign: "left",
  },
  submit: {
    marginTop: "20px",
    borderRadius: "4px",
    width: "200px",
    fontSize: "1rem",
    fontWeight: 600,
    background: `linear-gradient(to bottom, #002E6A, #708990)`,
    color: "#fff",
    textTransform: "capitalize",
  },
  btndiv: {
    textAlign: "center",
    marginTop: "20px",
  },
  form_title: {
    fontSize: "2rem",
    color: "#000",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "0px",
    textAlign: "left",
    textDecortaion: "underline",
  },
  totalCandidates: {
    display: "grid",
    gridTemplateRows: "3fr 7fr",
    alignItems: "start",
    justifyContent: "center",
    justifyItems: "center",
    color: "black",
    margin: "1rem 0rem",
  },
  candidatesFontSize: {
    fontSize: "1rem",
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: "0",
    marginTop: "0.5rem",
    padding: "0.125rem",
  },
  fontSizeForType: { fontSize: "1 rem" },
  mediumFontSizeForType: { fontSize: "3rem" },
  itemStyle: { margin: "1rem 0rem" },
  type: { fontSize: "0.8rem", textTransform: "capitalize" },
  titletext: {
    color: "grey",
    fontWeight: "lighter",
    fontSize: "3rem",
  },
  typeText: { fontSize: "0.8rem", textTransform: "capitalize" },
  handleBanner: {
    backgroundImage: "linear-gradient(to bottom, #F5F7F9, #275080)",
    minHeight: "100vh",
    height: "auto !important",
  },
  handleFormLauout: {
    display: "flex",
    flexDirection: "row",
    margin: "2%",
    marginTop: "20px",
    "@media (max-width: 965px)": {
      flexDirection: "column",
    },
  },
  dashboardFormLayoutMainDiv: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    paddingLeft: "0px",
    "@media (max-width: 965px)": {
      padding: "0.5rem 0px 0px 0px",
    },
  },
  nameBreadcrumbDiv: {
    display: "flex",
    flexDirection: "column",
    color: "#275080",
    gap: "8px",
    minHeight: "40px",
  },
  mainFormSelectBannerShow: {
    display: "flex",
    alignItems: "flex-start",
    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },
  formSelectBannerShow: {
    display: "flex",
    alignItems: "center",
  },
  bannerImgHide: {
    width: "100%",
    height: "100%",
  },

  activeBreadcrumbSpan: {
    fontWeight: 600,
    color: "#073366",
    fontSize: "1.125rem",
  },
  dashbordFormLowerDiv: {
    display: "flex",
    gap: "25px",
  },
  dashbordFormLowerLeftDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    width: "100%",
    borderRadius: "4px",
  },
  dashboardApplicationWrapperDiv: {
    borderRadius: "4px",
    overflow: "hidden",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    "& .MuiAccordion-rounded": {
      borderRadius: "4px",
    },
    "@media (max-width:965px)": {
      width: "100%",
      maxWidth: "893px",
    },
  },
  expandMoreIcon: {
    color: "#FFF",
    height: "25px",
    width: "25px",
  },
  accordionSummaryStyle: {
    backgroundColor: "#07336c",
    borderRadius: "4px",
    color: "#FFF",
    margin: "0px 0px",
    "@media (max-width:965px)": {
      width: "100%",
      maxWidth: "750px",
    },
  },
  formUnderFormSelect: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  formBorder: {
    borderBottom: "1px solid #979797",
    width: "auto",
    cursor: "pointer",
  },
  footer: {
    padding: "2%",
  },
  searchFormContainer: {
    width: "78%",
    height: "318px",
    borderRadius: "8px",
    background: "linear-gradient(to bottom, #70899054, #70899054)",
    marginTop: "7px",
    marginLeft: "24px",
  },
  searchFormSubContainer: {
    width: "auto",
    height: "298px",
    borderRadius: "8px",
    border: "1px solid #D7D7D7",
    background: "#FFF",
    margin: "10px",
  },
  searchFormHeading: {
    color: "#073366",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px",
    marginLeft: "24px",
    marginTop: "32px",
  },
  searchFormHeadingResult2: {
    color: "#000",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    marginLeft: "16px",
    marginTop: "32px",
  },
  searchRadioGroup: {
    display: "flex",
    flexDirection: "row",
    marginTop: "6px",
    marginLeft: "24px",
  },
  searchWithTitle: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "capitalize",
    marginLeft: "24px",
    marginTop: "20px",
  },
  searchItemSelect: {
    borderRadius: "4px",
    border: "1px solid #979797",
    padding: "5px 11px",
  },
  searchRadiolabel: {
    fontSize: "18px",
    fontWeight: 400,
  },
  searchBoxInput: {
    width: "100%",
    height: "44px",
    fill: "#FFF",
    strokeWidth: "1px",
    stroke: "#979797",
  },
  searchIcon: {
    display: "flex",
    width: "44px",
    height: "44px",
    padding: "10px",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "4px",
    background:
      "var(--Gradient, linear-gradient(136deg, #002E6A -6.59%, #708990 105.03%))",
    marginTop: "5px",
    marginLeft: "16px",
    cursor: "pointer",
  },
  searchInputBoxContainer: {
    display: "flex",
    marginTop: "35px",
    marginLeft: "24px",
    marginRight: "16px",
  },
  buttonBack: {
    width: "172px",
    padding: "13px 0px 12px 0px",
    borderRadius: "4px",
    border: "1px solid var(--Primary-Normal, #0B336A)",
    background: "#F5F7FA",
    fontSize: "16px",
    fontWeight: 700,
    color: "#0B336A",
  },
  radioBtnColor: {
    color: "#0B336A",
  },
  leftArrow: {
    width: "55px",
    marginRight: "0px",
    marginTop: "20px",
    marginLeft: "10px",
    height: "51px",
    zIndex: 9999999,
    cursor: "pointer",
  },
  btnViewPatent: {
    borderRadius: "4px",
    border: "1px solid #979797",
    width: "56px",
    height: "32px",
  },
  paginationStyle: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    marginTop: "24px",
    marginBottom: "32px",
    paddingRight: "24px",
  },
  searchResultContainer: {
    width: "78%",
    height: "100%",
    borderRadius: "8px",
    background: "linear-gradient(to bottom, #70899054, #70899054)",
    marginTop: "7px",
    marginLeft: "24px",
  },
  searchResultSubContainer: {
    width: "auto",
    height: "auto",
    borderRadius: "8px",
    border: "1px solid #D7D7D7",
    background: "#FFF",
    margin: "10px",
  },
  searchResultMenuItem: {
    paddingTop: "4px",
    paddingRight: "11px",
    paddingLeft: "4px",
    paddingBottom: "4px",
  },
  searchButtonBack: {
    width: "172px",
    padding: "13px 0px 12px 0px",
    borderRadius: "4px",
    border: "1px solid var(--Primary-Normal, #0B336A)",
    background: "#F5F7FA",
    fontSize: "16px",
    fontWeight: 700,
    color: "#0B336A",
  },
  crossImgStyle: {
    display: "flex",
    width: "44px",
    height: "44px",
    padding: "8px",
    justifyContent: "end",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "2px",
    border: "2px solid #808080",
    marginLeft: "auto",
    marginRight: "24px",
    position: "relative",
    top: "16px",
  },
  searchModalViewContainer: {
    width: "1008px",
    height: "1202px",
    borderRadius: "8px",
    background: "linear-gradient(to bottom, #70899054, #70899054)",
    padding: "10px",
  },
  searchModalViewSubContainer: {
    width: "988px",
    height: "1177px",
    backgroundColor: "#FFF",
    boxSizing: "border-box",
    margin: "1px 0px",
    borderRadius: "8px",
  },
  searchModalTransparent: {
    width: "1441px",
    height: "1714px",
    flexShrink: 0,
    background:
      "linear-gradient(180deg, #275080 1.98%, rgba(245, 247, 249, 0.71) 100%)",
    position: "absolute",
    top: "0px",
    left: "0px",
    bottom: "0px",
    right: "0px",
  },
  modalBackDropStyle: {
    background:
      "linear-gradient(0deg, #275080 1.98%, rgba(245, 247, 249, 0.71) 100%)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  closeImgStyle: {
    width: "24px",
    height: "24px",
  },
  headerLeftStyle: {
    width: "310px",
    height: "56.137px",
  },
  governTypography: {
    fontSize: "24px",
    fontWeight: 600,
    paddingRight: "24px",
  },
  typography18px: {
    fontSize: "18px",
    fontWeight: 600,
    paddingRight: "16px",
  },
  paddingLeft16: { paddingRight: "16px" },
  datePatentStyle: {
    fontSize: "18px",
    fontWeight: 600,
    paddingRight: "39.2px",
  },
  patentNoStyle: {
    fontSize: "18px",
    fontWeight: 600,
    paddingRight: "66px",
  },
  horizontalRule: {
    width: "940px",
    height: "1px",
    background: "#979797",
    paddinnTop: "30px",
    marginLeft: "22px",
  },
};
