import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Navigator,
	DrawerLayoutAndroid
} from 'react-native';

import MainContainer from './MainContainer'

class App extends Component {
	constructor(props) {
    super(props)
  }

  renderScene(route, navigator){
  	let Component = route.component
  	return (
  		<Component navigator={navigator} route={route} />
  		)
  }

  configureScene(route){
  	return Navigator.SceneConfigs.FloatFromBottomAndroid
  }

  render() {
  	var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
  return (
  			<DrawerLayoutAndroid
  				drawerWidth={300}
  				drawerPosition={DrawerLayoutAndroid.positions.Right}
  				renderNavigationView={() => navigationView }>
  				 <Navigator
        			ref='navigator'
        			style={styles.navigator}
        			configureScene={this.configureScene}
        			renderScene={this.renderScene}
        			initialRoute={{
          			component: MainContainer,
          			name: 'Main'
        			}}
      			/>
      </DrawerLayoutAndroid>

      	  );
	}
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App