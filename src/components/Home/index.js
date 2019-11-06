import React, { Component } from "react";
import { Header, Left, Container, Button, Body, Title, Right, Icon, Input, Text, Content } from "native-base";
import { List, ListView, StyleSheet, Card, CardItem, ListItem, Thumbnail, Item } from 'native-base';
import { 
  StatusBar, 
  Platform, 
  Dimensions, 
  FlatList, 
  View,
  Image
} from "react-native";

import RealCard from '../Card'
import _ from "lodash";

import styles from "./styles";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class Home extends Component {
  state = {
    searchTerm: '',
    deals: [{
      "topicName":"sometopic",
      "title":"sometitle",
      "sid":0
      },
    ]
  }

  handleSearchChange = (newValue) => {
    this.setState({ searchTerm: newValue });
  }

  handleSearchPress = () => {
    const {searchFn} = this.props;
    const {searchTerm} = this.state;
    if (!searchTerm) {
      return;
    }
    
    searchFn(searchTerm);
  }

  handleUserPress = (userData) => {
    this.props.navigation.navigate("Userprofile", userData);
  }

  renderSearchBar() {
    
    const data = [
      {
        imageSrc: require('../../../assets/images/1.jpg'),
        title: "Your Story",
        type: 1
      },
      {
        imageSrc: require('../../../assets/images/2.jpeg'),
        title: "Melissa",
        type: 2
      },
      {
        imageSrc: require('../../../assets/images/3.jpeg'),
        title: "Jessica",
        type: 2
      },
      {
        imageSrc: require('../../../assets/images/4.jpeg'),
        title: "Monica",
        type: 3
      },
      {
        imageSrc: require('../../../assets/images/5.jpeg'),
        title: "Ema",
        type: 3
      }
    ];
    return (
      <FlatList
        horizontal
        data={data}
        renderItem={({ item: rowData }) => {
          var cardStyle = styles.activeUser
          var imageWidth = 80
          var textColor = 'gray'
          if (rowData.type == 1) {
            imageWidth = 70
            cardStyle = styles.yourstory,
            textColor = 'white'
          } else if (rowData.type == 3) {
            cardStyle = styles.inactiveUser
          }
          return (
            <Card transparent noShadow style={{ padding:2 }} >
              <CardItem cardBody style={{ backgroundColor: '#000' }}>  
                <Body>
                  <View style={cardStyle}>
                    <Image source={rowData.imageSrc} style={{ width:imageWidth-8, height:imageWidth-8, borderRadius:2}} />
                  </View>
                  <Text style={{ color:textColor, fontSize:13, marginTop:10, alignSelf:'center' }}>{rowData.title}</Text>  
                </Body>
              </CardItem>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={true}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#000"}
          style={{ 
            backgroundColor: '#121212',
            borderBottomWidth: 0,
            height: Platform.OS === 'ios' ? 70 : 70,
            paddingTop: Platform.OS === 'ios' ? 10 : 20,
            paddingBottom: Platform.OS === 'ios' ? 0 : 0, }}>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="ios-menu" style={{ color: "gray" }}/>
            </Button>
          </Left>
          <Body style={styles.headerBody}>
            <Title style={styles.textBody}>REAL</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <View style={{ height: 120 }}>
          {this.renderSearchBar()}
        </View>
        <Content>  
          <RealCard imageSource="1" likes="101"/>
          <RealCard imageSource="2" likes="201"/>
          <RealCard imageSource="3" likes="301"/>
          <RealCard imageSource="4" likes="401"/>
          <RealCard imageSource="5" likes="501"/>
        </Content>
      </Container>
    );
  }
}
