import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

class RealCard extends Component {
    render() {

        const images =  {
            "1":require('../../../assets/images/1.jpg'),
            "2":require('../../../assets/images/2.jpeg'),
            "3":require('../../../assets/images/3.jpeg'),
            "4":require('../../../assets/images/4.jpeg'),
            "5":require('../../../assets/images/5.jpeg'),
        }
        
        const cardWidth = Math.round(Dimensions.get('window').width) + 2;

        return (
            <Card transparent noShadow style={{ marginLeft: 0, marginRight: 0 }}>
                <CardItem style={{ backgroundColor: '#121212' }}>
                    <Left>
                        <Image source={require('../../../assets/images/me.png')} style={{ width:45, height:45, borderRadius:3 }}/>
                        {/* <Thumbnail source={require('../../../assets/images/me.png')}/> */}
                        <Body>
                            <Text style={{ color: 'white', fontWeight: '800' }}>Dave Stuart</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody style={{ backgroundColor: '#121212' }}>
                    <Image source={images[this.props.imageSource]} style={{ height: cardWidth, width: cardWidth, flex: 1 }}
                    />
                </CardItem>
                <CardItem style={{ height: 45, backgroundColor: '#121212' }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{ color: 'gray'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{ color: 'gray'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{ color: 'gray'}} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ backgroundColor: '#121212' }}>
                    <Body>
                        <Text style={{color: 'white', fontWeight: '900' }}>{this.props.likes} likes</Text>
                        <Text style={{color: 'gray'}}
                            onPress={() => Linking.openURL('http://google.com')}>
                            View 1 Comment
                        </Text>
                    </Body>
                </CardItem>
                <CardItem style={{ height: 55, backgroundColor: '#121212', paddingBottom:10 }}>
                    <Left>
                        <Image source={require('../../../assets/images/me.png')} style={{ width:35, height:35, borderRadius:3 }}/>
                        <Body>
                            <Text style={{ color: 'white' }}>Add a comment...</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});

export default RealCard;