import React, { Component } from 'react';
import { 
    StyleSheet,
    Text, 
    TouchableOpacity 
} from 'react-native';

import styles from '../styles/Basic';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                style={StyleSheet.flatten(styles.button)}
                onPress={() => console.log('You pressed the button')}
            >
                <Text style= {styles.Button}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>

        );
    }
}