/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { WebView ,View} from 'react-native-webview';
 import {SafeAreaView,BackHandler} from 'react-native';
 
 export default class Link extends Component {
  WEBVIEW_REF = React.createRef();
   constructor(props) {
     super(props);
    this.state = {
      canGoBack: false,
    };
   }
   componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  };

   handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  }
   render() {
     return (
       <SafeAreaView style={{backgroundColor: 'white', flex: 1}}> 
  
         <WebView source={{ uri: 'https://iss.icar.gov.in' }}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange}
         />
       
       </SafeAreaView>
     );
   }
 }

 