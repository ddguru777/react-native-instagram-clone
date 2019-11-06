import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import { connect } from "react-redux";
import { userRequestLogout } from "../../actions";

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "Search User",
        route: "Usernavi",
        icon: "ios-search"
      },
      {
        name: "Logout",
        route: "Logout",
        icon: "ios-log-out"
      }
    ];
  }

  navigator(data) {
    if (data.route === "Logout") {
      this.props.logout();
      this.props.navigation.navigate("Login");
    } else {
      this.props.navigation.navigate(data.route);
    }
  }

  render() {
    return (
      <Sidebar
        data={this.data}
        onPress={(data) => this.navigator(data)}/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userRequestLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(SidebarContainer);
