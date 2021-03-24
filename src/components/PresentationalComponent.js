import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return(
      <View style = { style.viewScal }>
         <View style = {style.myStyle}></View>
         <View style = {style.myStyle1}></View>
      </View>
   )
}
export default PresentationalComponent

const style = StyleSheet.create ({
   viewScal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100vh',
      padding: '10%',
   },
   myStyle: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
   },
   myStyle1: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
   },
})
