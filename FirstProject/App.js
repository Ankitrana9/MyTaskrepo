/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      Data: [
        {
          name: 'avinav',
          id: 12,
          show: false,
        },
        {
          name: 'vinti',
          id: 32,
          show: true,
        },
        {
          name: 'Shanu',
          id: 21,
          show: true,
        },
        {
          name: 'kaju',
          id: 33,
          show: true,
        },
        {
          name: 'man',
          id: 23,
          show: false,
        },
        {
          name: 'lol',
          id: 34,
          show: true,
        },
        {
          name: 'fire',
          id: 25,
          show: false,
        },
        {
          name: 'dad',
          id: 25,
          show: true,
        },
        {
          name: 'mom',
          id: 26,
          show: false,
        },
        {
          name: 'swagger',
          id: 27,
          show: true,
        },
        {
          name: 'run',
          id: 28,
          show: false,
        },
        {
          name: 'lili',
          id: 15,
          show: true,
        },
        {
          name: 'lala',
          id: 45,
          show: false,
        },
      ],
      Data2: [
        {
          name: 'avinav',
          id: 12,
          show: true,
        },
        {
          name: 'Shanu',
          id: 21,
          show: true,
        },
     

      ],
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.mainStyle}>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <View
            style={{
              backgroundColor: 'gray',
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{width: 35, height: 35, tintColor: 'white'}}
                source={require('./assets/back.png')}
              />
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: 15,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Home Page
            </Text>
          </View>
          <FlatList
            style={{flex: 1,backgroundColor:'gray'}}
            data={this.state.Data}
          //  keyExtractor={(item, index) => index.toString()}
            renderItem={({item,index}) => (
              <TouchableOpacity onPress={()=>alert(''+index)} >
              <View style={{marginTop: 50, flexDirection: 'row',backgroundColor:item.show==true?'red':'green',height:40,justifyContent:'center',paddingTop:10}}>
                <Text >{item.name}</Text>
                <Text style={{marginLeft: 30}}>{item.id}</Text>
              </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {backgroundColor: 'red', flex: 1},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
