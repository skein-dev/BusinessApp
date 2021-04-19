import React from 'react'
import { View } from 'react-native'
import PresentationalComponent from './src/components/PresentationalComponent'
import List from './src/components/List'
import Login from './src/components/Login'
import ScrollView from './src/components/ScrollView'
import ApisCall from './src/components/ApisCall.js'
import Register from './src/components/Register.js'
import Buttonaa from './src/components/Button'
import Animations from './src/components/Animations.js'
import Routes from './src/components/Routes.js'
export default class App extends React.Component{
   state = {
      myState : "welcome",
   }
   render() {
      return(
         <View>
            <Routes />
            {/* { <Animations /> } */}
            {/* <Buttonaa/> */}
            {/* { <Register /> } */}
            {/* {  <ApisCall/> } */}
            {/* { <ScrollView/> } */}
            {/* { <Login /> } */}
            {/* <List/> */}
            {/* <PresentationalComponent sendState = {this.state.myState}></PresentationalComponent> */}
         </View>
      );
   }
}