import React from 'react'
import { View } from 'react-native'
import PresentationalComponent from './src/components/PresentationalComponent'
import List from './src/components/List'

export default class App extends React.Component{
   state = {
      myState : "welcome",
   }
   render() {
      return(
         <View>
            <List/>
            <PresentationalComponent sendState = {this.state.myState}></PresentationalComponent>
         </View>
      );
   }
}