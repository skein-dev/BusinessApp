import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
   state = {
      myState: "hello world"
   }
   render() {
      return (
      <View>
         <Text> {this.state.myState} </Text>
      </View>
      );
   }
}