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
                style={styles.button}
                onPress={() => this.props.WhenPressed()} //Prop to call from App.js, specifies a function, either increment or decrement
            >
                <Text style= {styles.Button}>
                    {/* set button title */}
                    {this.props.title}
                </Text>
            </TouchableOpacity>

        );
    }
}