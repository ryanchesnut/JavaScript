import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

    constructor() {
        super();
        const data = [
            {
                organizationName: 'Infowars',
                logo: 'https://www.infowars.com/wp-content/themes/infowars-sitegoals/images/logo.png',
                videoStream: '',
                latestVideos: '',
                rssFeed: 'https://www.infowars.com/feed/custom_feed_rss',
                podcasts: '',
            },
        ];
        this.state = {
            data = this.data
        }
    }



    render() {

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'grey' }} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 70, width: 70, alignItems: 'center', backgroundColor: 'yellow' }}>
                        <Text style={{ alignItems: 'center' }}>Hello</Text>
                    </View>
                    <View style={{ height: 70, width: 70, alignItems: 'center', backgroundColor: 'blue' }}>
                        <Text style={{ alignItems: 'center' }}>Hello</Text>
                    </View>
                    <View style={{ height: 70, width: 70, alignItems: 'center', backgroundColor: 'red' }}>
                        <Text style={{ alignItems: 'center' }}>Hello</Text>
                    </View>
                </View>
                <View style={{ flex: 2, backgroundColor: 'black', color: 'white', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }} >Infowars</Text>
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: 193,
        height: 110
    },
    container: {
        marginTop: 48,
        flex: 1
    },
    headerStyle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 24
    },
    elementsContainer: {
        flex: 1,
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    }
});
