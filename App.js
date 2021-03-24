import React from 'react';
import { View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'


export default class App extends React.Component{
   state = {
      myState : "welcome",
   }
   render() {
      return(
         <View>
            <PresentationalComponent sendState = {this.state.myState}></PresentationalComponent>
         </View>
      );
   }
}