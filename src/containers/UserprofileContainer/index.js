import React, { Component } from "react";
import Userprofile from "../../components/Userprofile";
import { listUphotos } from "../../actions";
import { connect } from "react-redux";

export class UserprofileContainer extends Component {
  
  render() {
    const { uphotos, listUphotos } = this.props

    return (
      <Userprofile
        navigation={this.props.navigation}
        uphotos={uphotos}
        listUphotos={listUphotos}
      />
    );
  }
}

const mapStateToProps = state => ({
  uphotos: state.uphotos,
});

const mapDispatchToProps = dispatch => ({
  listUphotos: (...args) => dispatch(listUphotos(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserprofileContainer);