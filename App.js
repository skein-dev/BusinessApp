import React from 'react';
import { View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'

export default class App extends React.Component {
   state = {
      myState: "adimin"
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      return (
         <View>
            <PresentationalComponent sendState = {this.state.myState} updateState = {this.updateState}/>
         </View>
      );
   }
}