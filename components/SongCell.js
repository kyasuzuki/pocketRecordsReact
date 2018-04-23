// import components
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  List,
  FlatList,
  TouchableHighlight,
  Image,
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux'

// import styles
import styles from "../Style/SongCellStyle.js"

//import other pages
import SongPage from "../Screens/SongPage.js"

// classes
export default class SongCell extends Component {
  constructor(props) {
  super(props);

  this.state = {
    data: [],
    tester: "hello!",
    // useful if you want something on the page to change (two tabs on page)
  };
}

// componentDidMount() {
//   this.setState({
//     data: [{title: 'song title 1', artist: 'artist 1'}, {title: 'song title 2', artist: 'artist'}]
//   })
// }

//handle songButton
goToSong () {
    Actions.SongPage({
    songTitle: this.props.songTitle,
    songArtist: this.props.songArtist
    });
}

// songs

// render
  render() {
    return (
      // <View>
      //   <Text> {this.props.title} </Text>
      // </View>

      <TouchableHighlight
      style={styles.song}
      onPress={this.goToSong.bind(this)}
      >
      <View style={styles.songContainer}>

      <Image source={require('../Screens/sampleAlbum.jpg')} style={{width: 60, height: 60, margin: 10}} />
      <View style={{justifyContent:"center"}}>
        <Text>{this.props.songTitle}</Text>
        <Text>{this.props.artist}</Text>
        </View>

      </View>
      </TouchableHighlight>


   );
  }
}


 AppRegistry.registerComponent('PkrRcrdsReact', () => SongCell);
