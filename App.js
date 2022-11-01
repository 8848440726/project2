import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    TouchableHighlight,
    TextInput
} from 'react-native';
class AppContent extends Component {
    render() {
        return (
            <View>
                <Text style={styles.contentstyle}>Register {this.props.date}</Text>
            </View>
        )
    }
}
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            main_text: 'Name'
        }
    }
    updateText() {
        this.setState({
            main_text: 'Username (name)'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/sky.jpg')}
                    style={styles.imagebackground}>
                    <Image source={require('./assets/nasa.png')}
                        style={styles.image}></Image>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <TextInput style={styles.inputview}
                        placeholder={this.state.main_text}
                        placeholderTextColor='yellow'></TextInput>
                    <TextInput style={styles.inputview}
                        placeholder='Email ID'
                        placeholderTextColor={'yellow'}></TextInput>
                    <TextInput style={styles.inputview}
                        placeholder='Password'
                        placeholderTextColor={'yellow'}
                        secureTextEntry={true}></TextInput>


                    <View style={styles.sub}>
                        <TextInput style={styles.box}
                            placeholder='code'
                            placeholderTextColor={'yellow'}></TextInput>
                        <TextInput style={styles.boxview}
                            placeholder='Mobile Number'
                            placeholderTextColor={'yellow'}></TextInput>
                    </View>
                    <TouchableHighlight style={styles.button}
                        onPress={() => this.updateText()}>
                        <Text style={styles.buttontext}>Register</Text>
                    </TouchableHighlight>
                    <AppContent date='14th August'></AppContent>
                </ImageBackground>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagebackground: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
    },
    inputview: {
        color: 'red',
        height: 55,
        width: '70%',
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 20,
        paddingLeft: 20
    },
    box: {
        flexDirection: 'row',
        height: 55,
        width: '20%',
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 20,
        marginRight: 7,
        paddingLeft: 20
    },
    sub: {
        flexDirection: 'row'
    },
    boxview: {
        flexDirection: 'row',
        height: 55,
        width: '50%',
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 20,
        paddingLeft: 20
    },
    button: {
        height: 55,
        width: '60%',
        backgroundColor: 'yellow',
        marginTop: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttontext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    contentstyle: {
        fontSize: 22,
        color: 'white',
        marginTop: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }

})