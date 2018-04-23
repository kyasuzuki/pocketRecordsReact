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
import styles from "../Style/AppStyle.js"

//import other pages
import SongCell from "../components/SongCell.js"

// classes
export default class Home extends Component {
  constructor(props) {
  super(props);

  this.state = {
    data: [],
  };
}

componentDidMount() {
  this.setState({
    data: [{title: 'song title 1', artist: 'artist 1'}, {title: 'song title 2', artist: 'artist'}]
  })
}

// handle songButton
// goToSong () {
//     Actions.SongPage()
// }

// songs
renderSong(song){
  return (
    <SongCell
      songTitle={song.title}
      songArtist={song.artist}
    />
  )
}

// render
  render() {
    return (
      <View>
      <FlatList
        data={this.state.data}
        renderItem={({item}) => this.renderSong(item)}
      />
      </View>


   );
  }
}


 AppRegistry.registerComponent('PkrRcrdsReact', () => Home);
