import React, {Component} from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';
import {store} from './Additional/store';
import HomeScreen from './Additional/Screens/HomeScreen';
import DetailImage from './Additional/Screens/DetailImage';
import { createStackNavigator} from 'react-navigation-stack';



export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppContainer>
          <View style={styles.container}>
            <HomeScreen/>
          </View>
        </AppContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bdc9c1'
  }
});




const AppNavigator = createStackNavigator({
  Gallery: {screen: HomeScreen},
  Image: {screen: DetailImage},
});

const AppContainer = createAppContainer(AppNavigator);
