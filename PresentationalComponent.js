import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text style = {styles.myStyle}>
            {props.myState}
         </Text>
      </View>
   )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
   myStyle: {
      marginTop: 30,
      textAlign: 'center',
      color: 'blac',
      fontWeight: 'bold',
      fontSize: 25
   }
})