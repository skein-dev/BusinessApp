import React from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'

class Animations extends Component {
    componentWillMount = () => {
        this.animatedWith = new this.animatedWith.Value( 50 )
        this.animatedHeight = new this.animatedHeight.Value( 100 )
    }
    animatedBox = () => {
        Animated.timing( this.animated, {
            toValue: 200,
            duration: 1000,
        }).start()
        Animated.timing( this.animated, {
            toValue: 500,
            duration: 500
        }).start()
    }
    render() {
        const animatedStyle = { width: this. animatedWidth, height: this.animatedHeight }
        return (
            <TouchableOpacity style = { style.container } onPress = { this.animatedBox } >
                <Animated.View style = {[ style.box, animatedStyle ]}/>
            </TouchableOpacity>
        )
    }
}
export default Animations

const styles = styleSheet.creat({
    container: {
        justifyContent: 'center',
        aliginItem: 'center'
    },
    box: {
        backgroundColor: 'blue',
        width: 50,
        height: 100,
    }
})