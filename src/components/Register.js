import { Component } from "react"
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

class Register extends Component {
    state = {
        name: '',
        user: '',
        password: '',
        confirm: '',
    }
    handleName = (e) => {
        this.setState ({ name: e })
    }
    handleUser = (e) => {
        this.setState ({ user: e })
    }
    handlePassword = (e) => {
        this.setState ({ password: e })
    }
    handleConfirm = (e) => {
        this.setState ({ confirm: e })
    }
    register = (name, user, password, confirm) => {
        alert("Name:" + name + "User" + user + "Password" + password + "Confirm" + confirm);
    }
    render() {
        return (
            <View style = {styles.container} >
                <TextInput onChangeText = { this.handleName } style = {styles.input} />
                <TextInput onChangeText = { this.handleUser } style = {styles.input} />
                <TextInput onChangeText = { this.handlePassword } style = {styles.input} />
                <TextInput onChangeText = { this.handleConfirm } style = {styles.input} />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.register(this.state.name, this.state.user, this.state.password, this.state.confirm)
                    }>
                    <Text style = {styles.submitButtonText}> Register </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Register

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1,
       borderRadius: 5,
       paddingLeft: 10,
       paddingRight: 10,
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })