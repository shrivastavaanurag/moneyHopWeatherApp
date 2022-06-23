import React, { Component } from 'react';
import { View, Text, TextInput } from "react-native";


export default class WeatherSearch extends Component {

    handleSubmit = () => {
        console.log('submit')
        //this.props && this.props.fetchByPostalHandler();
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 35
            }}>
               <TextInput style={{
                   height: 50,
                   margin: 12,
                   backgroundColor: 'white',
                   padding: 15,
                   borderRadius: 10,
                   width: '95%',
                   maxWidth: 700
               }}
                    onChangeText={() => this.props.setPostalCode()}
                    value={this.props.postalCode}
                    placeholder={
                        "Enter Postal Code"
                    }
                    onSubmitEditing={this.handleSubmit()}
                />
            </View>
        );
    }

}