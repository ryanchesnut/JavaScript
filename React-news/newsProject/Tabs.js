import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {styles} from './Styles';

export default class Tabs extends Component {

    state = {
        activeTab: 0
    }

    // Pull children out of props passed from App component
    render({ children } = this.props) {
        return (
            <View style={styles.container}>
                {/* Tabs row */}
                <View style={styles.tabsContainer}>
                    {/* Pull props out of children, and pull title out of props */}
                    {children.map(({ props: { title } }, index) =>
                        <TouchableOpacity
                            style={[
                                // Default style for every tab
                                styles.tabContainer,
                                // Merge default style with styles.tabContainerActive for active tab
                                index === this.state.activeTab ? styles.tabContainerActive : []
                            ]}
                            // Change active tab
                            onPress={() => this.setState({ activeTab: index })}
                            // Required key prop for components generated returned by map iterator
                            key={index}
                        >
                            <Text style={styles.tabText}>
                                {title}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                {/* Content */}
                <View style={styles.contentContainer}>
                    {children[this.state.activeTab]}
                </View>
            </View>
        );
    }
}