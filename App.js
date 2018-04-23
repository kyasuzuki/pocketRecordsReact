/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import components
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  List,
  Flatlist,
} from 'react-native';

import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux'

// import stylesheets
import styles from "./Style/AppStyle.js"

// import screens
import Home from "./Screens/Home.js"
import SongPage from "./Screens/SongPage.js"

const instructions = Platform.select({
  // ios: put ios properties here
  // android: put android propreties here
});

// classes
export default class PocketRecords extends Component {

  render() {
      return (
      <Router>
        <Stack key="root">
          <Scene key="Home" component={Home} title="Home" />
          <Scene key="SongPage" component={SongPage} title="SongPage"/>
        </Stack>
      </Router>
    );
  }
}



AppRegistry.registerComponent('PkrRcrdsReact', () => App);
