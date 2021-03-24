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
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      height: '736px',
      padding: '50px',
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
