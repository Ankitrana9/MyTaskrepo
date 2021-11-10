import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App'
import LoginPage from './LoginPage';
import Link from './Link';
const Stackss = createNativeStackNavigator();
const Stackf = () => {
 return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stackss.Navigator options={{headerShown:false}}>
    
      <Stackss.Screen name="LoginPage" component={LoginPage}  options={{headerShown:false}} />
     
    
     
      
      
      </Stackss.Navigator>
    </NavigationContainer>
  );
};

export default Stackf;