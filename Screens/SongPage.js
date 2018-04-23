// import components
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux'

// import stylesheets
import styles from "../Style/AppStyle.js"

// classes


// default class
export default class SongPage extends Component {
  constructor(props) {
    super(props)
    }

  render() {
    return (
      <View>
      <Text> {this.props.songTitle} </Text>
      <Text> {this.props.songArtist} </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('PkrRcrdsReact', () => SongPage);
