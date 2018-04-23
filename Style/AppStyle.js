import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',

  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: 'blue',
    flex: 1,
    marginBottom: 5,
  },

  songButton: {
   backgroundColor: "white",
   flex: 1,
 },

 songContainer: {
   flexDirection: "row",
 }
});
