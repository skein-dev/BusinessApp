import React, { Component } from "react"
import { View, Text } from "react-native"

export default class ApisCall extends Component {
     state = {
        data: ''
     }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        })
        .then ((response) => response.json())
        .then ((responseJson) => {
            console.log('asdfsfd', responseJson);
            this.setState ({
                data: responseJson
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <View>
                <Text>
                    {this.state.data.body}
                </Text>
            </View>
        )
    }
}