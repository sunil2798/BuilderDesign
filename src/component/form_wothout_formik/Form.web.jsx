import React from "react";
// Customizable Area Start
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Checkbox,
  CheckboxProps,
  Dialog,
  DialogContent,
  Divider,
  Menu,
  MenuItem,
  Radio,
  RadioProps,
  Select,
  Typography,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Switch from "@material-ui/core/Switch";
import { styled, withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  DogImg,
  CatImg,
  Daycare,
  map,
  dog_cat_Image,
} from "../src/assets";
import ClearIcon from "@material-ui/icons/Clear";
import Footer from "../../../components/src/Footer.web";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import BussinessOwnerSideBar from "../../../components/src/SideBar";

// Customizable Area End

import BussinessOwnerDetailsFirstController, {
  Props,
  Representative,
  configJSON,
} from "./BussinessOwnerDetailsFirstController.web";
import { colors, theme } from "../../../components/src/theme";
import { CustomCheckboxSecondary } from "../../../components/src/CustomizedComponents.web";
import { addPlus } from "../../dashboard/src/assets";
// Customizable Area Start
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 33,
    padding: 2,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(28px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#CCEDFA",
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 25,
    height: 26,
    boxShadow: "none",
    margin: 1.5,
  },
  track: {
    border: `none`,
    borderRadius: "20px",
    opacity: 1,
    backgroundColor: "#CCEDFA",
  },
  checked: {},
}))(Switch);

interface CustomRadioProp extends RadioProps {
  "data-test-id": string;
}

const CustomRadio = withStyles(() => ({
  root: {
    marginRight: "8px",
    padding: "0px",
    "&$checked": {
      color: "red",
    },
    color: "default",
  },
  checked: {},
}))((props: CustomRadioProp) => (
  <Radio
    disableRipple
    color="default"
    checkedIcon={
      <span
        style={{
          backgroundColor: "white",
          display: "inline-block",
          borderRadius: "50%",
          height: 7,
          border: "6px solid #EA0C78",
          width: 7,
        }}
      />
    }
    icon={
      <span
        style={{
          display: "inline-block",
          border: "1px solid #224350",
          width: 16,
          height: 16,
          borderRadius: "50%",
        }}
      />
    }
    {...props}
  />
));

const CustomSelect = styled(Box)({
  "& .MuiInputBase-root, .MuiOutlinedInput-root": {
    height: "45px",
    width: "100%",
    background: "#E0F4FC",
    border: "1px solid #B2E4F8",
    borderRadius: "8px",
    marginTop: "1.5%",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-input": {
    padding: "10.5px 14px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiSelect-select:focus": {
    background: "transparent",
  },
});

const CustomSelectSec = styled(Box)({
  "& .MuiInputBase-root, .MuiOutlinedInput-root": {
    width: "100%",
    height: "45px",
    background: "#E0F4FC",
    borderRadius: "8px 0px 0px 8px",
    border: "1px solid #B2E4F8",
    minWidth: "250px",
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-input": {
    padding: "10.5px 14px",
  },
  "& .MuiSelect-select:focus": {
    background: "transparent",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
});

const CustomMenuItem = withStyles((theme) => ({
  root: {
    fontSize: "16px",
    height: "55px",
    borderBottom: "1px solid #CCEDFA",
    "&:hover": {
      background: "transparent",
    },
    "& .MuiListItem-root .MuiListItem-gutters": {
      paddingLeft: "0px",
    },
    "&.Mui-selected": {
      background: "transparent",
      "&:hover": {
        background: "transparent",
      },
    },
    "& .MuiTouchRipple-root": {
      background: "transparent",
    },
  },
}))(MenuItem);

const CustomMenuItemSec = withStyles((theme) => ({
  root: {
    fontSize: "14px",
    height: "40px",
    // borderBottom: "1px solid #CCEDFA",
    "&:hover": {
      background: "transparent",
    },
    "&.Mui-selected": {
      background: "transparent",
      "&:hover": {
        background: "transparent",
      },
    },
    "& .MuiTouchRipple-root": {
      background: "transparent",
    },
    "& .MuiListItem-root .MuiListItem-gutters": {
      paddingLeft: "0px",
    },
  },
}))(MenuItem);

// Customizable Area End

export default class BussinessOwnerDetailsFirst extends BussinessOwnerDetailsFirstController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start

  openModel = () => {
    const isPlacesSelected =
      (this.state.activeStep === 1 &&
        (this.state.firstPlace ||
          this.state.secondPlace ||
          this.state.thirdPlace ||
          this.state.fourthPlace)) ||
      this.state.activeStep === 2 ||
      this.state.activeStep === 3;

    const isButtonActive = isPlacesSelected;
    return (
      <>
        <Dialog
          open={this.state.modelOpen}
          onClose={this.handleModelClose}
          data-test-id="handleModelClose"
          maxWidth="lg"
        >
          <DialogContent
            style={{ width: "450px", padding: "30px", borderRadius: "15px" }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <ClearIcon onClick={this.handleModelClose} />
            </div>
            <div
              style={
                { padding: "5%", margin: "20px 0px" } as React.CSSProperties
              }
            >
              <Typography
                style={styles.modelHeadingText as React.CSSProperties}
              >
                Save as Draft?
              </Typography>
              <Typography style={styles.modelBodyText as React.CSSProperties}>
                Draft will be saved for a period 1 month and then deleted from
                the system
              </Typography>
            </div>
            <div style={styles.modelBtnGrid}>
              <Button
                style={styles.discartBtn as React.CSSProperties}
                onClick={this.handleModelClose}
              >
                Discard
              </Button>
              <Button
                style={{...styles.saveDraftBtn,backgroundColor:isButtonActive?"#EA0C78":"grey"} as React.CSSProperties}
                onClick={isButtonActive ? this.saveDraftData:undefined}
                data-test-id="saveDraftData"
              >
                Save Draft
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  getValError = (field: string[]): React.ReactNode | undefined => {
    const isInValid = field.findIndex(
      (item) => this.state.error[`${item}Error`]
    );

    if (isInValid >= 0) {
      return (
        <span style={styles.errorText}>
          {this.state.activeStep === 2
            ? this.state.MesErrFormFirst[`${field[isInValid]}`]
            : this.state.MesErrFormSecond[`${field[isInValid]}`]}
        </span>
      );
    }
    return undefined;
  };

  firstStep = () => {
    return (
      <Grid item xs={12} style={{ backgroundColor: "#fff" }}>
        <div>
          <p style={styles.fontHading as React.CSSProperties}>
            What type of establishment would you like to register?*{" "}
          </p>
        </div>
        <Grid container spacing={3}>
          <Grid item lg={6} xs={12} onClick={() => this.handleFirstClick("dog_hotel")}
            data-test-id="handleFirstClick"
            style={styles.cursor}
          >
            <Grid style={step3Styles.mainContainer as React.CSSProperties}>
              <div
                style={
                  this.state.firstPlace
                    ? (styles.onClickAllPlace as React.CSSProperties)
                    : (styles.allPlace as React.CSSProperties)
                }
              >
                <div style={styles.imgCompt}>
                  <img
                    src={DogImg}
                    alt="HomeIcon"
                    style={styles.HomeIcon as React.CSSProperties}
                  />
                </div>
                <div style={styles.modelTexts}>Dog Hotel</div>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            onClick={() => this.handleFirstClick("cat_hotel")}
            data-test-id="handleFirstSecondClick"
          >
            <Grid style={step3Styles.mainContainer as React.CSSProperties}>
              <div
                style={
                  this.state.secondPlace
                    ? (styles.onClickAllPlace as React.CSSProperties)
                    : (styles.allPlace as React.CSSProperties)
                }
              >
                <div style={styles.imgCompt as React.CSSProperties}>
                  <img
                    src={CatImg}
                    alt="HomeIcon"
                    style={styles.HomeIcon as React.CSSProperties}
                  />
                </div>
                <div style={styles.modelTexts as React.CSSProperties}>
                  Cat Hotel
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            style={styles.cursor}
            onClick={() => this.handleFirstClick("dog_cat_hotel")}
            data-test-id="handleFirstThirdClick"
          >
            <Grid style={step3Styles.mainContainerSec as React.CSSProperties}>
              <div
                style={
                  this.state.thirdPlace
                    ? (styles.onClickAllPlace as React.CSSProperties)
                    : (styles.allPlace as React.CSSProperties)
                }
              >
                <div style={styles.imgComptSec as React.CSSProperties}>
                  <img
                    src={dog_cat_Image}
                    alt="DogImg"
                  />
                </div>
                <div style={styles.modelTexts as React.CSSProperties}>
                  Dog & Cat Hotel
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            onClick={() => this.handleFirstClick("daycare_services")}
            data-test-id="handleFirstForthClick"
            style={styles.cursor}

          >
            <Grid style={step3Styles.mainContainerSec as React.CSSProperties}>
              <div
                style={
                  this.state.fourthPlace
                    ? (styles.onClickAllPlace as React.CSSProperties)
                    : (styles.allPlace as React.CSSProperties)
                }
              >
                <div style={styles.imgCompt as React.CSSProperties}>
                  <img
                    src={Daycare}
                    alt="Daycare"
                    style={styles.HomeIcon as React.CSSProperties}
                  />
                </div>
                <div style={styles.modelTexts as React.CSSProperties}>
                  Daycare services
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  thirdStep = () => {
    const {
      propertyName,
      licenseNumber,
      streetAddressFirst,
      suite,
      city,
      businessName,
      postcode,
      legalBusinessName,
      vatNumber,
      streetAddressSecond,
    } = this.state;
    return (
      <div>
        <div>
          <Grid style={step3Styles.mainContainer}>
            <div style={step3Styles.mainContainerDiv}>
              <span
                style={
                  {
                    ...step3Styles.fontHading,
                    fontSize: "24px",
                  } as React.CSSProperties
                }
              >
                Confirm Property Details
              </span>
            </div>
            <div style={Styles.addrssLayout as React.CSSProperties}>
              <Typography variant="body1" style={styles.thirdStepText as React.CSSProperties}>
                {`Your address is only shared with guests after they've made reservation.`}
              </Typography>
            </div>
            <div style={step3Styles.mainContainerDiv}>
              <label style={step3Styles.lableText as React.CSSProperties}>
                Business Name*
              </label>
              <input
                type="text"
                style={step3Styles.inputStyle}
                name="businessName"
                value={businessName}
                placeholder="Enter business name"
                onChange={this.handleChangeThirdForm}
                data-test-id="handleChangeThirdForm"
              />
              {this.getValError(["businessName"])}
            </div>
            <div style={step3Styles.mainContainerDiv}>
              <label style={step3Styles.lableText as React.CSSProperties}>
                {`Legal Business Name (if different)`}
              </label>
              <input
                type="text"
                style={step3Styles.inputStyle}
                name="legalBusinessName"
                value={legalBusinessName}
                placeholder="Enter legal business name "
                onChange={this.handleChangeThirdForm}
                data-test-id="handleChangeThirdForm"
              />
            </div>
            <div style={step3Styles.mainContainerDiv}>
              <label style={step3Styles.lableText as React.CSSProperties}>
                License Number*
              </label>
              <input
                type="text"
                style={step3Styles.inputStyle}
                name="licenseNumber"
                value={licenseNumber}
                placeholder="Enter license number"
                onChange={this.handleChangeThirdForm}
                data-test-id="handleChangeThirdForms"
                pattern="[0-9]*"
              />

              {this.getValError(["licenseNumber"])}
            </div>

            <div style={step3Styles.mainContainerDiv}>
              <label style={step3Styles.lableTextSec as React.CSSProperties}>
                {`Do you have VAT registration for this property...`}
              </label>
              <>
                <div
                  style={{ ...styles.radioButanContainer, marginTop: "15px" }}
                >
                  <div style={styles.radioButanContainer}>
                    <CustomRadio
                      checked={this.state.vatRegistration === "Yes"}
                      onChange={() => this.handleRadioChanges("Yes")}
                      data-test-id="handleRadioChangeDogs"
                    />
                    <Typography
                      style={
                        this.state.vatRegistration === "Yes"
                          ? styles.radioButoonText
                          : styles.radioButoonTexts
                      }
                    >
                      Yes
                    </Typography>
                  </div>
                  <div style={styles.radioButanContainer}>
                    <CustomRadio
                      checked={this.state.vatRegistration === "No"}
                      onChange={() => this.handleRadioChanges("No")}
                      data-test-id="handleRadioChangeCats"
                    />
                    <Typography
                      style={
                        this.state.vatRegistration === "No"
                          ? styles.radioButoonText
                          : styles.radioButoonTexts
                      }
                    >
                      No
                    </Typography>
                  </div>
                </div>
              </>
            </div>
            {this.state.vatRegistration === "No" ? (
              <></>
            ) : (
              <div style={step3Styles.mainContainerDiv}>
                <label style={step3Styles.lableText as React.CSSProperties}>
                  Enter VAT Number*
                </label>
                <input
                  type="number"
                  style={step3Styles.inputStyle}
                  name="vatNumber"
                  value={vatNumber !== null ? vatNumber : ""}
                  placeholder="Enter VAT number"
                  onChange={this.handleChangeThirdForm}
                  data-test-id="handleChangeThirdForm"
                />
                {this.state.vatNumberError && (
                  <Typography style={{ color: "red" }}>
                    {this.state.vatNumberError}
                  </Typography>
                )}
              </div>
            )}

            <div style={step3Styles.mainContainerSecDiv}>
              <label style={step3Styles.lableText as React.CSSProperties}>
                Address Line 1*
              </label>
              <input
                name="streetAddressFirst"
                value={streetAddressFirst}
                type="text"
                style={step3Styles.inputStyle}
                placeholder="E.g. 125 High Street"
                onChange={this.handleChangeThirdForm}
              />
              {this.getValError(["streetAddressFirst"])}
            </div>

            <div style={step3Styles.mainContainerSecDiv}>
              <label style={step3Styles.lableText as React.CSSProperties}>
                {`Address Line 2`}

              </label>
              <input
                name="streetAddressSecond"
                value={streetAddressSecond}
                type="text"
                style={step3Styles.inputStyle}
                placeholder="E.g. Kensington"
                onChange={this.handleChangeThirdForm}
              />
            </div>

            <div style={step3Styles.mainContainerSecDiv}>
              <label style={step3Styles.lableText as React.CSSProperties}>
                Town / City *
              </label>
              <input
                name="city"
                value={city}
                type="text"
                style={step3Styles.inputStyle}
                placeholder="E.g. London"
                onChange={this.handleChangeThirdForm}
              />
              {this.getValError(["city"])}
            </div>

            <div style={styles.inputBoxContainer}>
              <p
                style={
                  {
                    ...step3Styles.lableText,
                  } as React.CSSProperties
                }
              >
                {`County`}

              </p>
              <input
                data-test-id="handleChangeForthes"
                type="text"
                name="yourCounty"
                value={this.state.yourCounty}
                onChange={this.handleChangeInput}
                placeholder="E.g. Greater London"
                style={{ ...step3Styles.inputStyle, marginTop: "2px" }}
              />
            </div>

            <div style={step3Styles.mainContainerSecDiv as React.CSSProperties}>
              <label style={step3Styles.lableText as React.CSSProperties}>
                Postcode*
              </label>
              <input
                name="postcode"
                type="text"
                value={postcode}
                style={step3Styles.inputStyle}
                placeholder="E.g. SWA1A 1AA"
                onChange={this.handleChangeThirdForm}
              />
              {this.getValError(["postcode"])}
            </div>
            <div style={step3Styles.mainContainerSecDiv as React.CSSProperties}>
              <label style={step3Styles.lableText as React.CSSProperties}>
                {`Country / Region`}

              </label>
              <CustomSelect>
                <Select
                  variant="outlined"
                  displayEmpty
                  renderValue={() => (
                    <span style={styles.textOfOutPut}>
                      {this.state.country}
                    </span>
                  )}
                  MenuProps={{
                    style: { maxHeight: "500px", minHeight: "290px" },

                    disableScrollLock: false,
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "center",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "center",
                    },
                  }}
                  IconComponent={ExpandMoreIcon}
                  onChange={this.handleCountryClose}
                  data-test-id="handleSelectThr"
                >
                  {configJSON.countries.map((value: any, index: number) => (
                    <CustomMenuItem
                      key={index}
                      value={value.label}
                    >
                      <div
                        style={
                          this.state.country.includes(value.label)
                            ? styles.selectedSlectMenu
                            : styles.slectMenu
                        }
                      >
                        {value.label}
                      </div>
                    </CustomMenuItem>
                  ))}
                </Select>
              </CustomSelect>
            </div>
          </Grid>
        </div>
        <div style={step3Styles.mainContainerDiv as React.CSSProperties}>
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "#0F172A" }}>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  fontFamily: "inter",
                }}
              >
                Indicate the exact location of your business
              </span>
            </div>
            <div>
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>
                  <AntSwitch
                    onChange={this.handleChangeThirdForm}
                    name="checkedC"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid>
            <span
              style={{
                color: "#64748B",
                fontWeight: 400,
                fontSize: "14px",
                fontFamily: "inter",
              }}
            >
              Make it clear to pet owners where your place is located. We'll
              only share your address
              <br /> after they've made a reservation.
              <br />
            </span>
          </Grid>
          <Grid style={step3Styles.mainContainerDiv}>
            <div style={step3Styles.mapGrid}>
              <img src={map} alt="map" style={step3Styles.mapStyle} />
            </div>
          </Grid>
        </div>
      </div>
    );
  };

  four = () => {
    return (
      <Grid item>
        <Grid item>
          <Typography style={step3Styles.whoElse as React.CSSProperties}>
            How can people reach out to your hotel?
          </Typography>
        </Grid>
        <Grid style={{ marginTop: "2.1%" } as React.CSSProperties}>
          <div
            style={
              { display: "flex", alignItems: "center" } as React.CSSProperties
            }
          >
            <CustomCheckboxSecondary
              name="checkboxChecked"
              onChange={this.copyData}
              data-test-id="copyData"
              checked={this.state.copyDataChecked}
            />
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#334155",
                marginLeft: "10px",
              }}
            >

              Do you want to copy information from account information.
            </Typography>
          </div>

          <div style={{ ...styles.inputBoxContainer, marginTop: "6%" }}>
            <label style={step3Styles.lableText as React.CSSProperties}>
              Phone Number*
            </label>
            <div style={{ display: "flex", width: "100%", marginTop: "1.5%" }}>
              <CustomSelectSec>
                <Select
                  variant="outlined"
                  displayEmpty
                  renderValue={() => (
                    <span style={styles.textOfOutPut}>
                      {this.state.phNoCountry}
                    </span>
                  )}
                  MenuProps={{
                    PaperProps: {
                      style: { width: "100px" },
                    },
                    style: {
                      maxHeight: "500px",
                      minHeight: "200px",
                      width: "50%",
                    },
                    disableScrollLock: false,
                    getContentAnchorEl: null,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "center",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "center",
                    },
                  }}
                  IconComponent={ExpandMoreIcon}
                  onChange={this.handelPhCountryCloses}
                  data-test-id="handleSelectThr"
                >
                  {configJSON.countries.map(
                    (
                      value: { label: string; phone: string },
                      index: number
                    ) => (
                      <CustomMenuItemSec
                        key={index}
                        value={`${value.label} ${value.phone}`}
                      >
                        {`${value.label} ${value.phone}`}
                      </CustomMenuItemSec>
                    )
                  )}
                </Select>
              </CustomSelectSec>
              <input
                name="phoneNumber"
                type="number"
                value={
                  this.state.phoneNumber !== null ? this.state.phoneNumber : ""
                }
                data-test-id="handleChangeForths"
                placeholder="Phone Number"
                onChange={this.handleChangeInput}
                style={styles.thirdFormInputStyle as React.CSSProperties}
              />
            </div>
            {this.getValError(["phoneNumber"])}
          </div>

          <div style={styles.inputBoxContainer}>
            <p
              style={
                {
                  ...step3Styles.lableText,
                  marginBottom: "11px",
                } as React.CSSProperties
              }
            >
              Email*
            </p>
            <input
              data-test-id="handleChangeForthes"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeInput}
              placeholder="kevinbarrett@iamcat.com"
              style={styles.phoneNumberInput as React.CSSProperties}
            />
            <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {this.state.emailErrorText}

            </div>
            {this.getValError(["email"])}
          </div>
          <div style={styles.inputBoxContainerSec}>
            <Box>
            <Typography variant="h6" style={boxStyles.repsentativeText}>
              Add Representative Contact Details
            </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} marginLeft={'5px'}
             onClick={this.addMoreRepresentativeDetails}
             data-test-id='add_row'>
              <img src={addPlus} width={24} height={24}/>
            <Typography color="secondary" style={boxStyles.addText}
              variant="subtitle1"
            >
              Add More
            </Typography>
            </Box>
            
          </div>

          {this.state.representativeDetails.map((representative: Representative, index: number) => {
            return (
              <>
                <Grid item xs={12} style={{ margin: '30px 0px' }} container justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle2" style={boxStyles.repsentativeText}>Representative Contact Details &nbsp;({index+1})</Typography>

                  {this.state.representativeDetails.length > 1 && <Typography
                    data-test-id='remove_row'
                    onClick={() => this.handleRemoveContact(index)}
                    variant="subtitle2" style={boxStyles.removeText}>Remove</Typography>}
                </Grid>
                <div style={styles.inputBoxContainer}>
                  <p
                    style={
                      {
                        ...step3Styles.lableText,
                        marginBottom: "11px",
                      } as React.CSSProperties
                    }
                  >
                    First Name*
                  </p>
                  <div style={{ display: "flex" }}>
                    <div
                      data-test-id='openMenu'
                      style={{ ...styles.countryPhnameselect, width: "15%", cursor: "pointer", } as React.CSSProperties}
                      onClick={(event) => this.handleGenderopen(event, index)}
                    >
                      <span style={styles.countrySpan as React.CSSProperties}>{this.state.representativeGender === null ? "Mr." : representative.representativeGender}</span>
                      <ExpandMoreIcon
                        style={{ marginRight: "10px", color: "grey" }}
                      />
                    </div>

                    <Menu
                      anchorEl={this.state.anchorElSalutations[index]} // Use individual anchorEl for each Menu
                      open={Boolean(this.state.anchorElSalutations[index])}
                      onClose={() => this.handleMenuClose("", index)} // Pass index to handleGenderClose
                      variant="menu"
                      id="handlegenderchange"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                      getContentAnchorEl={null}
                      PaperProps={{
                        style: {
                          width: "86px", padding: "0px 10px", cursor: "pointer",
                          maxHeight: "219px", overflowY: "auto", scrollbarColor: "#5B8188 transparent",
                          borderBottomRightRadius: "50% !important",
                          scrollbarWidth: "thin", marginTop: "5px", borderRadius: "8px",
                        },
                      }} >
                      {['Mr.', "Miss", "Mrs", "Mx."].map((value: string) => {
                        return (
                          <>
                            <MenuItem value={value}

                              onClick={() => this.handleMenuClose(value, index)}
                              data-test-id="mrvalue"


                            >{value}
                            </MenuItem>
                            <Divider style={{
                              margin: "2px",
                              backgroundColor: "#B2E4F8"
                            }} />
                          </>
                        )
                      })}

                    </Menu>
                    <input
                      data-test-id="first_name"
                      type="text"
                      name="representativeFirstName"
                      value={representative.representativeFirstName}
                      onChange={(event) => this.handleInputChange(index, event, "representativeFirstName")}
                      placeholder="First Name"
                      style={styles.phoneNumberInputSec as React.CSSProperties}
                    />
                  </div>
                  <Grid item xs={12} style={boxStyles.errorMargin}>
                    <Typography variant="body1" color="error">{this.state.repErrors[index]?.representativeFirstName}</Typography>

                  </Grid>
                </div>
                <div style={styles.inputBoxContainer}>
                  <p
                    style={
                      {
                        ...step3Styles.lableText,
                        marginBottom: "11px",
                      } as React.CSSProperties
                    }
                  >
                    Surname*
                  </p>
                  <input
                    data-test-id="surname"
                    type="text"
                    name="representativeSurname"
                    value={representative.representativeSurname}
                    onChange={(event) => this.handleInputChange(index, event, "representativeSurname")}

                    placeholder="Last Name"
                    style={styles.phoneNumberInput as React.CSSProperties}
                  />
                  {this.getValError(["representativeSurname"])}
                </div>
                <Grid item xs={12} style={boxStyles.errorMargin}>
                  <Typography variant="body1" color='error'>{this.state.repErrors[index]?.representativeSurname}</Typography>

                </Grid>
                <div style={styles.inputBoxContainer}>
                  <label style={step3Styles.lableText as React.CSSProperties}>
                    Representive Phone Number*
                  </label>
                  <div style={{ display: "flex", width: "100%", marginTop: "1.5%" }}>
                    <CustomSelectSec>
                      <Select
                        data-test-id='select_country'
                        variant="outlined"
                        displayEmpty
                        renderValue={() => (
                          <span style={styles.textOfOutPut}>
                            {representative.representativePhCountry}
                          </span>
                        )}
                        MenuProps={{
                          PaperProps: {
                            style: { width: "100px" },
                          },
                          style: {
                            maxHeight: "500px",
                            minHeight: "200px",
                            width: "50%",
                          },
                          disableScrollLock: false,
                          getContentAnchorEl: null,
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "center",
                          },
                        }}
                        IconComponent={ExpandMoreIcon}
                        onChange={(event) => this.handleSelectCountryChange(index, event)}
                      >
                        {configJSON.countries.map(
                          (
                            value: { label: string; phone: string },
                            index: number
                          ) => (
                            <CustomMenuItemSec
                              key={index}
                              value={`${value.label} ${value.phone}`}
                            >
                              {`${value.label} ${value.phone}`}
                            </CustomMenuItemSec>
                          )
                        )}
                      </Select>
                    </CustomSelectSec>
                    <input
                      type="number"
                      name="representativePhNumber"
                      value={representative.representativePhNumber}
                      data-test-id="phone_number"
                      placeholder="Phone Number"
                      onChange={(event) => this.handleInputChange(index, event, "representativePhNumber")}

                      style={styles.thirdFormInputStyle as React.CSSProperties}
                    />
                  </div>
                </div>
                <Grid item xs={12} style={boxStyles.errorMargin}>
                  <Typography variant="body1" color="error">{this.state.repErrors[index]?.representativePhNumber}</Typography>

                </Grid>
              </>
            )
          })
          }
        </Grid>
      </Grid>
    );
  };

  generateNextButton = () => {
    const buttonText = "Next";
    const isPlacesSelected =
      (this.state.activeStep === 1 &&
        (this.state.firstPlace ||
          this.state.secondPlace ||
          this.state.thirdPlace ||
          this.state.fourthPlace)) ||
      this.state.activeStep === 2 ||
      this.state.activeStep === 3;

    const isButtonActive = isPlacesSelected;

    return (
      <Button
        style={
          isPlacesSelected
            ? (styles.onClickNextButton as React.CSSProperties)
            : (styles.nextButton as React.CSSProperties)
        }
        onClick={isButtonActive ? this.handleNext : undefined}
        data-test-id="handleNext"
        disabled={!isButtonActive}
      >
        <div style={styles.buttonDiv}>
          <div style={{ height: "24px", marginRight: '10px' }}>{buttonText}</div>
          <div style={{ height: "24px", width: "24px" }}>
            <KeyboardArrowRight />
          </div>
        </div>
      </Button>
    );
  };

  saveDraftWarning = () => {
    return (
      <>
        {((this.state.activeStep === 1 && this.state.saveDraftWarn) ||
          (this.state.activeStep === 2 && this.state.saveDraftWarnSec) ||
          (this.state.activeStep === 3 && this.state.saveDraftWarnThird)) && (
            <div style={styles.saveDraftWarn as React.CSSProperties}>
              <ReportProblemOutlinedIcon style={{ color: "rgb(195 129 0)" }} />
              <Typography style={styles.saveDraftText as React.CSSProperties}>
                Draft will be saved for a period of 1 month and then deleted from
                the system
              </Typography>
            </div>
          )}
      </>
    );
  };

  openStep = () => {
    let componentToRender = null;

    switch (this.state.activeStep) {
      case 1:
        componentToRender = this.firstStep();
        break;
      case 2:
        componentToRender = this.thirdStep();
        break;
      case 3:
        componentToRender = this.four();
        break;
      default:
    }

    return componentToRender;
  };

  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <>

        <BussinessOwnerSideBar active={0} navigation={this.props.navigation} />

      

        <div style={styles.boOneContent as React.CSSProperties}>
          <Grid style={styles.mainContainer as React.CSSProperties}>
            {this.openModel()}
            <Grid style={styles.mainComponentGrid as React.CSSProperties}>
              <Grid>
                <Grid>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={styles.mainComponentText as React.CSSProperties}>
                      1. We'd like to know more about your place
                      <br />
                      {`(Pet Hotel 1)`}
                    </p>
                    <span
                      style={
                        {
                          textDecoration: "underline",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#54A7C9",
                          fontFamily: "inter",
                          cursor: "pointer",
                        } as React.CSSProperties
                      }
                      onClick={this.saveDraftModelOpen}
                      data-test-id="saveDraftModelOpen"
                    >
                      Save Draft
                    </span>
                  </div>

                  <CssLinearProgress
                    variant="determinate"
                  />
                  {this.saveDraftWarning()}
                </Grid>

                <Grid>{this.openStep()}</Grid>

                <Grid style={styles.buttonGrid as React.CSSProperties}>
                  <Grid>
                    {this.state.activeStep>1?<Button
                      style={styles.backButton as React.CSSProperties}
                      onClick={() => this.handleBack()}
                      data-test-id="handleBack"
                      disabled={true}
                    >
                      <div style={styles.buttonDiv}>
                        <KeyboardArrowLeft
                          style={styles.backBtnIcon as React.CSSProperties}
                        />

                        <span style={styles.backBtnText as React.CSSProperties}>
                          Back
                        </span>
                      </div>
                    </Button>:null}
                  </Grid>
                  <Grid>{this.generateNextButton()}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Footer color="#E0F4FC" />
        </div>

      </>
      // Customizable Area End
    );
  }
}
// Customizable Area Start
export const CssLinearProgress = withStyles({
  root: {
    backgroundColor: colors.primaryBlue,
    color: "#B2E4F8",
  },
  barColorPrimary: {
    backgroundColor: colors.primaryBlue,
  },
})(LinearProgress);
const styles = {
  cursor: {
    cursor: 'pointer'
  },
  boOneContent: {
    marginLeft: "140px", // Adjust based on the width of your sidebar
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    overflowY: "auto", // Allow main reservationContent area to scroll
  },
  footerStyle: {
    marginTop: "20%"
  },
  slectMenu: {
    margin: "8px 0px 9px",
    width: "98%",
    padding: "10px 0px 10px 10px",
  },
  selectedSlectMenu: {
    margin: "8px 0px 9px",
    width: "98%",
    padding: "10px 0px 10px 10px",
    backgroundColor: "#B2E4F8",
    borderRadius: "8px",
  },
  textOfOutPut: {
    fontFamily: "inter",
    fontSize: "16px",
    color: "#64748B",
    fontWeight: 400,
    marginRight: '15px'
  },
  errorText: { color: "red", fontFamily: "inter" },
  genderSelect: {
    background: "#E0F4FC",
    border: "1px solid #B2E4F8",
    borderRadius: "8px 0px 0px 8px",
    width: "10%",
    fontSize: "14px",
    paddingLeft: "20px",
    color: "#0F172A",
    fontFamily: "inter",
    height: "45px",
  },
  inputBoxContainer: { marginTop: "2%" },
  inputBoxContainerSec: {
    margin: "4% 0% 3% 0%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  radioButanContainer: {
    display: "flex",
    alignItems: "center",
   
  },
  radioButoonTexts: {
    marginRight: "30px",
    fontSize: "16px",
    fontWeight: 400,
    color: "#64748B",
  },
  radioButoonText: {
    marginRight: "30px",
    fontSize: "16px",
    fontWeight: 700,
    color: "#334155",
  },
  backBtnText: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#0F172A",
    fontFamily: "inter",
  },
  backBtnIcon: {
    color: "#0F172A",
    marginRight: '10px'
  },
  phoneNumberInput: {
    width: "100%",
    height: "45px",
    border: "1px solid #B2E4F8",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inter",
    paddingLeft: "10px",
  },
  phoneNumberInputSec: {
    width: "90%",
    height: "45px",
    border: "1px solid #B2E4F8",
    borderRadius: "0px 8px 8px 0px",
    fontSize: "14px",
    fontFamily: "inter",
    paddingLeft: "10px",
  },
  thirdFormInputStyle: {
    border: "1px solid #B2E4F8",
    paddingLeft: "5px",
    width: "77%",
    borderBottomRightRadius: "8px",
    borderLeft: "none",
    borderTopRightRadius: "8px",
    fontSize: "14px",
    height: "45px",
  },
  thirdStepText: {
    fontWeight: 400,
    color: "#334155",
    lineHeight: '22px'
  },
  modelTexts: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#0F172A",
    fontFamily: "inter",
  },
  saveDraftText: {
    fontFamily: "Inter",
    paddingLeft: "10px",
    fontSize: "16px",
    fontWeight: 400,
  },
  saveDraftWarn: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    backgroundColor: "#FEF3C7",
    paddingLeft: "10px",
  },
  checkBoxBtn: {
    width: "14px",
    marginRight: "7px",
  },
  saveDraftBtn: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#fff",
    fontFamily: "inter",
    textTransform: "none",
    backgroundColor: "#EA0C78",
    width: "192px",
    height: "59px",
    borderRadius: "8px",
  },
  discartBtn: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#EA0C78",
    fontFamily: "inter",
    textTransform: "none",
    border: "1px solid #EA0C78",
    width: "192px",
    height: "59px",
    borderRadius: "8px",
  },
  modelBtnGrid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modelBodyText: {
    textAlign: "center",
    fontSize: "14px",
    fontWeight: 700,
    color: "#475569",
  },
  modelHeadingText: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 700,
    color: "#224350",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    height: "auto",
    minHeight: "92vh",
    backgroundColor: "rgb(224, 244, 252)",
  },
  HomeIcon: { width: "100%", height: "90%" },
  HomeIconSec: {
    width: "65px",
    height: "55px",
    marginRight: "10px",
    marginBottom: "5px",
  },

  mainComponentGrid: {
    width: "60%",
    padding: "20px 10% 5%",
    backgroundColor: "#fff",
    borderBottomRightRadius: "30px",
    height: "80%",
    marginBottom: "2%",
  },
  mainComponentText: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#334155",
    fontFamily: "inter",
  },

  fontHading: {
    fontSize: "24px",
    fontWeight: "400",
    color: "#334155",
    lineHeight: "40px",
    marginTop: "4%",
    marginBottom: "14px",
    fontFamily: "inter",
  },
  allPlace: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#E8F9FF",
    padding: "20px 40px 20px 40px",
    borderRadius: "9px",
    color: "#334155",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    height: "70px",
  },
  imgCompt: {
    width: "60px",
    height: "60px",
    margin: "0px 30px 0px 40px",
  },
  imgComptSec: {
    display: "flex",
    margin: "0px 30px 0px 0px",
    alignItems: "flex-end",
  },
  onClickAllPlace: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#CAf0FF",
    padding: "18px 38px 18px 38px",
    borderRadius: "9px",
    border: "2px solid #94A3B8",
    color: "#334155",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    height: "70px",
  },
  nextButton: {
    height: "44px",
    padding: "10px 16px 10px 16px",
    borderRadius: "8px",
    width: "210px",
    backgroundColor: "rgb(221 93 155)",
    color: "#CBD5E1",
    fontWeight: "700",
    textTransform: "none",
    paddingLeft: "30px"
  },
  onClickNextButton: {
    width: "210px",
    borderRadius: "8px",
    height: "44px",
    backgroundColor: "#EA0C78",
    padding: "10px 16px 10px 16px",
    color: "#fff",
    fontWeight: "700",
    textTransform: "none",
    paddingLeft: "30px"
  },
  backButton: {
    backgroundColor: "#fff",
    width: "76px",
    color: "#64748B",
    fontWeight: "700",
    padding: "10px 16px 10px 16px",
    textTransform: "none",
  },
  buttonGrid: {
    flexWrap: "wrap",
    display: "flex",
    margin: "40px 0px 40px 0px",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },

  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  countrySpan: {
    color: "#64748B", fontSize: "16px",
    fontWeight: 400, fontFamily: "inter", textTransform: "capitalize"
  },

  countryPhnameselect: {
    paddingLeft: "10px",
    width: "40%",
    height: "43px",
    border: "1px solid #B2E4F8",
    borderRadius: "8px 0px 0px 8px",
    backgroundColor: "#E0F4FC",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer"
  },
};

const step3Styles = {
  fontHading: {
    fontSize: "30px",
    fontWeight: "400",
    color: "#334155",
    marginBottom: "0px",
    fontFamily: "inter",
  },
  nextButton: {
    height: "44px",
    width: "210px",

    margin: "10px 0px 0px 0px",
    borderRadius: "8px",
    padding: "10px 16px 10px 16px",
    backgroundColor: "#64748B",
    color: "#CBD5E1",
    fontWeight: "700",
  },
  onClickNextButton: {
    fontWeight: "700",
    width: "210px",
    borderRadius: "8px",
    height: "44px",
    padding: "10px 16px 10px 16px",
    color: "#fff",
    backgroundColor: "#64748B",
    margin: "10px 0px 0px 0px",
  },
  backButton: {
    color: "#64748B",
    width: "76px",
    height: "26px",
    fontWeight: "700",
    backgroundColor: "#fff",
    padding: "10px 16px 10px 16px",
  },
  buttonGrid: {
    flexWrap: "wrap",
    margin: "40px 0px 30px 0px",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputStyle: {
    width: "100%",
    height: "45px",
    marginTop: "10px",
    paddingLeft: "10px",
    border: "1px solid #B2E4F8",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inter",
  },
  countrynameselect: {
    paddingLeft: "10px",
    width: "99%",
    height: "45px",
    marginTop: "10px",
    border: "1px solid #B2E4F8",
    borderRadius: "8px",
    backgroundColor: "#E0F4FC",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countryPhnameselect: {
    paddingLeft: "10px",
    width: "40%",
    height: "43px",
    border: "1px solid #B2E4F8",
    borderRadius: "8px 0px 0px 8px",
    backgroundColor: "#E0F4FC",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lableText: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#334155",
    fontFamily: "inter",
  },
  optionalText: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#334155",
    display: 'inline'
  },
  lableTextSec: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#0F172A",
    fontFamily: "inter",
  },
  mainContainer: {
    width: "100%",
    margin: "10px 0px 0px",
  },
  mainContainerSec: {
    width: "100%",
    margin: "0px",
  },
  mainContainerDiv: {
    marginTop: "30px",
  },
  mainContainerSecDiv: {
    marginTop: "20px",
  },
  mapGrid: { width: "100%", height: "406px" },
  mapStyle: { width: "100%", height: "100%" },
  whoElse: {
    fontSize: "24px",
    color: "#334155",
    marginTop: "5%",
    fontFamily: "inter",
    fontWeight: 400,
  },
  expendIconStyle: {
    position: "absolute",
    top: "25%",
    right: "2%",
  },
  countrySpan: {
    color: "#0F172A",
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "inter",
  },

};
const Styles = {

  root: {
    borderBottom: "1px solid #E0F4FC",
    padding: "10px",
  },
  boxLayout: {
    width: '100%',
    padding: '20px 40px',
    display: "flex",
    alignItems: "center",
    backgroundColor: "#E8F9FF",
    borderRadius: "9px",
    color: "#334155",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    maxHeight: "104px",

  },
  addrssLayout: {
    marginTop: 10
  },

};

const boxStyles = {
  box: {
    borderRadius: 8,
    background: "#F0FAFE",
    border: '1px solid black',
    alignItems: 'center',
    padding: '0 20px'
  },
  repsentativeText: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.black
  },
  addText: {
    fontWeight: theme.typography.fontWeightBold,
    cursor: 'pointer'

  },
  errorMargin: {
    marginTop: '5px'
  },
  removeText:
    {
      textDecoration: "underline",
      fontSize: "18px",
      fontWeight: 700,
      color: "#54A7C9",
      fontFamily: "inter",
      cursor: "pointer",
    } as React.CSSProperties

}

// Customizable Area End
