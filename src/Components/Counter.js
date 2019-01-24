import React, { Component } from 'react';
import { 
    StyleSheet,
    Text, 

    View
} from 'react-native';

import styles from '../styles/Basic';

export default class Counter extends Component {
    render() {
        return (
            <View>
            <Text>
                {this.props.counter}
            </Text>
            </View>
        );
    }
}