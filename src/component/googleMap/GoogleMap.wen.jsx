import React from "react";
// Customizable Area Start
import { StyleSheet, Dimensions, Platform } from "react-native";
import GoogleMapReact from 'google-map-react';

interface MarkerProps {
  latitude: number;
  longitude: number;
  text: string;
}
// Customizable Area End

const viewportHeight = Dimensions.get("window").height;
const viewportWidth = Dimensions.get("window").width;

import MapView from "react-native-maps";

import MapsController, { Props, configJSON } from "./MapsController";
// const LocationMark = ({text}) => <div>{text}</div>

export default class Maps extends MapsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    return (
      <>

        <div 
        style={{ height: '400px', width: '100%', borderRadius: "15px" }}
        >
         <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyCUWbYQiHLJ3B7i7tJ97kz0sec4T9vPxyU' }}
           defaultCenter={{ lat: this.state.center.latitude, lng: this.state.center.longitude }}
           defaultZoom={this.state.zoom}
           yesIWantToUseGoogleMapApiInternals
         // onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
         >
              {/* <LocationMark
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
            </GoogleMapReact>
          </div>
        </>
      );
    }
  // Customizable Area End
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginLeft: "auto",
    marginRight: "auto",
    width: Platform.OS === "web" ? "75%" : "100%",
    maxWidth: 650,
    backgroundColor: "#ffffffff",
  },
  map: {
    width: viewportWidth,
    height: viewportHeight,
    position: "absolute",
    top: 0,
    bottom: 0,
  },
});
// Customizable Area End
