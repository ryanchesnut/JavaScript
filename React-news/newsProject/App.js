import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import Tabs from '../newsProject/Tabs'; 
import {styles} from './Styles';

export default class App extends React.Component {
  
  constructor() {
    super(); 
    
    const orgdata = [
      {
        organizationName: 'Infowars',
        uri: 'https://www.infowars.com/wp-content/themes/infowars-sitegoals/images/logo.png', 
        videoStream: '', 
        latestVideos: '', 
        rssFeed: 'https://www.infowars.com/feed/custom_feed_rss', 
        podcasts: '', 
      },
    ]; 
    this.state = {
      data : orgdata
    }
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }; 
    const orgdata = [
      {
        organizationName: 'Infowars',
        uri: 'https://www.infowars.com/wp-content/themes/infowars-sitegoals/images/logo.png',
        videoStream: '',
        latestVideos: '',
        rssFeed: 'https://www.infowars.com/feed/custom_feed_rss',
        podcasts: '',
      },
    ]; 
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row-reverse', marginTop: 55, marginLeft: 10 }}>
          <View>
          <Image source={require('./assets/img/gear.png')} style={{ width: 50, height: 50 }}/>
          </View>
        </View>
        <Tabs>
          <ScrollView title="PROVIDERS" style={styles.content}> 
            <View style={{ flex: 3, flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>

              <View style={{ width: 80, height: 80}}>
                <Image source={require('./assets/img/infowarsLogo.jpg')} style={{ width: 80, height: 80 }}/>
                <Text style={{ textAlign"'': 'center' }}>Infowars</Text>
              </View>

              <View style={{ width: 80, height: 80, backgroundColor: 'white' }}>
                <Image source={require('./assets/img/bigleague.png')} style={{ width: '100%', height: undefined, aspectRatio: 1 }}/>
                <Text style={{ textAlign: 'center' }}>Big League</Text>
              </View>

              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}>
                <Image source={require('./assets/img/zerohedgeLogo.jpg')} style={{ width: '100%', height: undefined, aspectRatio: 1 }} />
                <Text style={{textAlign:'center'}}>Zero Hedge</Text>
              </View>

            </View>
            <View style={{ flex: 3, flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
            </View>
            <View style={{ flex: 3, flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
            </View>
            <View style={{ flex: 3, flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
            </View>
            <View style={{ flex: 3, flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
              <View style={{ width: 80, height: 80, backgroundColor: 'powderblue' }}></View>
            </View>
          </ScrollView>
          <View title="TOP STORIES" style={styles.content}>
            <Text style={styles.header}>
              Truly Native
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
          </View>
          <View title="LATEST" style={styles.content}>
            <Text style={styles.header}>
              Ease of Learning
            </Text>
            <Text style={styles.text}>
              It’s much easier to read and write comparing to native platform’s code
            </Text>
          </View>
        </Tabs>
      </View>
    );
  }
}

