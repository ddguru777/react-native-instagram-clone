import React, { Component } from "react";
import { 
  Image, 
  StatusBar,
  ImageBackground
} from "react-native";
import { Container, Content, Button, Text, View } from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./styles";

const logo = require("../../../assets/images/logo-img.png");

export default class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/login-bg.png')} style={{width: '100%', height: '100%'}}>
        <StatusBar hidden={true}/>
        <Spinner visible={this.props.loading}/>
        <Content>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.textLogo}>github.com/ddguru777</Text>
          <Text style={styles.textLogo}>This is non-functional login.</Text>
          <Text style={styles.textLogo}>Type in "demo@gmail.com" to pass this page.</Text>
          <View style={styles.containerForm}>
            <View style={styles.contentForm}>
              {this.props.loginForm}
              <Button block onPress={() => this.props.onLogin()} style={styles.buttonLogin}>
                <Text uppercase={false} style={styles.textLogin}>Login</Text>
              </Button>
            </View>
          </View>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}