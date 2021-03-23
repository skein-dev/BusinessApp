import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'

export default class App extends React.Component {
   state = {
      myState: 'Welcome to visit our company.'
   }
   render() {
      return (
         <View>
            <PresentationalComponent sendstate = {this.state.myState}/>
         </View>
      );
   }
}