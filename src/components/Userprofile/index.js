import React, { Component } from "react";
import { Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content, View } from "native-base";
import { StatusBar, Platform, Image, FlatList, Dimensions, TouchableHighlight } from "react-native";
import styles from "./styles";
import Spinner from "react-native-loading-spinner-overlay";
import _ from "lodash";

const BATCH_SIZE = 24;
const NUM_COLUMNS = 4;
const THUMBNAIL_WIDTH = Dimensions.get('window').width / NUM_COLUMNS - 6;

export default class Userprofile extends Component {
  state = {
    username: '',
  }

  componentDidMount() {
    const uname = this.props.navigation.getParam('username', 'None');
    const {listUphotos} = this.props;

    if (!uname) {
      return;
    }
    listUphotos(uname);
  }

  handlePhotoPress = (index) => {
    const photoList = _.get(this.props, 'uphotos.list', []);
    this.props.navigation.navigate("Photoslider", {'index': index, 'photos': photoList});
  }

  handleUserPress = () => {
    const uname = this.props.navigation.getParam('username', 'None');
    const {listUphotos} = this.props;
    if (!uname) {
      return;
    }
    listUphotos(uname);
  }

  renderItem = ({ item, index }) => {
    const columnIndex = index % 4;
    return (
      <View style={{ marginLeft: columnIndex > 0 ? 8 : 0 }}>
        <TouchableHighlight onPress={() => this.handlePhotoPress(index)}>
          <Image 
            style={{width: THUMBNAIL_WIDTH, height: THUMBNAIL_WIDTH}}
            source={{uri: item.urls.thumb}}
          />
        </TouchableHighlight>
      </View>
    );
  }

  getItemLayout = (data, index) => ({
    length: THUMBNAIL_WIDTH,
    offset: THUMBNAIL_WIDTH * index,
    index,
  });


  renderContent() {
    const isLoading = _.get(this.props, 'uphotos.isLoading', false);
    const photoList = _.get(this.props, 'uphotos.list', []);
    const isFailed = _.get(this.props, 'uphotos.isFailed', false);
    const errorMsg = _.get(this.props, 'uphotos.error');

    if (isFailed) {
      return (
        <Text style={{ alignSelf: "center", marginTop: 10}}>{errorMsg}</Text>
      )
    }

    if (isLoading) {
      return (
        <Text style={{ alignSelf: "center", marginTop: 10}}>Loading...</Text>
      )
    }

    if (!photoList.length) {
      return (
        <Text style={{ alignSelf: "center", marginTop: 10}}>No photos to show!</Text>
      )
    }

    return (
      <FlatList
        data={photoList}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        getItemLayout={this.getItemLayout}
        maxToRenderPerBatch={BATCH_SIZE}
        windowSize={BATCH_SIZE}
        numColumns={NUM_COLUMNS}
        removeClippedSubviews
        // refreshControl={(
        //   <RefreshControl
        //     refreshing={isRefreshing}
        //     onRefresh={this.handleRefresh}
        //     tintColor={color.blue}
        //   />
        // )}
        columnWrapperStyle={{ marginBottom: 8 }}
        // onEndReached={this.handleLoadMore}
        onEndReachedThreshold={1}
        // ListFooterComponent={this.renderFooter}
        // ListEmptyComponent={this.renderEmptyComponent}
      />
    )
  }
  
  render() {
    const username = this.props.navigation.getParam('username', 'None');
    const fullname = this.props.navigation.getParam('name', '');
    const avatarUri = this.props.navigation.getParam('profile_image', {}).medium;
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
          <Title style={styles.textBody}>Profile</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <Content>
          <Spinner visible={this.props.loading}/>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{uri: avatarUri}}/>
              <Text style={styles.name}>{fullname} </Text>
              <Text style={styles.userInfo}>{username} </Text>
            </View>
          </View>
          <View style={styles.body}>
            {this.renderContent()}
          </View>
        </Content>
      </Container>
    );
  }
}
