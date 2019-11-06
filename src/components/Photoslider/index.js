import React, { Component } from "react";
import { Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { StatusBar, Platform, Image, View, Dimensions } from "react-native";
import styles from "./styles";
import ImageSlider from 'react-native-image-slider';

const SLIDER_WIDTH = Dimensions.get('window').width - 6;
const SLIDER_HEIGHT = Dimensions.get('window').height - 200;

export default class Photoslider extends Component {
  constructor(props) {
    super(props);

    const pos = this.props.navigation.getParam('index', 0);
    const photos = this.props.navigation.getParam('photos', []);

    let listPhotos = [];
    photos.map((item) => {
      listPhotos.push(item.urls.regular);
    });

    this.state = {
      position: pos,
      dataSource: listPhotos
    }
  }

  render() {
    // const images = [
    //   'https://placeimg.com/640/640/nature',
    //   'https://placeimg.com/640/640/people',
    //   'https://placeimg.com/640/640/animals',
    //   'https://placeimg.com/640/640/beer',
    // ];

    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
          style={{ 
            borderBottomWidth: 1,
            height: Platform.OS === 'ios' ? 70 : 70,
            paddingTop: Platform.OS === 'ios' ? 10 : 20,
            paddingBottom: Platform.OS === 'ios' ? 0 : 0, }}>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={() => this.props.navigation.pop()}>
              <Icon name="arrow-back" style={{ color: "#000" }}/>
            </Button>
          </Left>
          <Body style={styles.headerBody}>
          <Title style={styles.textBody}>Gallery</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <Content>
          <ImageSlider
            loopBothSides
            // autoPlayWithInterval={3000}
            images={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
            width
            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View key={index} style={[style, styles.customSlide]}>
                <Image source={{ uri: item }} style={{width: SLIDER_WIDTH, height: SLIDER_HEIGHT}} />
              </View>
            )}
          />
        </Content>
      </Container>
    );
  }
}
