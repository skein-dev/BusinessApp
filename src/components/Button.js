import React, {Component} from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

class Buttons extends Component {
    render () {
        return (
            <View style = {styles.container}>
                <TouchableOpacity>
                    <Text style = {styles.text}>
                    Button
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Buttons

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
   }
})