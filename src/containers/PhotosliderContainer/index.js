import React, { Component } from "react";
import Photoslider from "../../components/Photoslider";

export default class PhotosliderContainer extends Component {
 
  render() {
    return (
      <Photoslider
        navigation={this.props.navigation}
      />
    );
  }
}
