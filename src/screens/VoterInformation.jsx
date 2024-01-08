// Import necessary components and hooks
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import hindiText from '../lng/Hindi';
import {SvgXml} from 'react-native-svg';
import WaveHeader from '../components/WaveHeader';

const VoterInformation = () => {
  // Get the route and extract the voterData parameter
  const route = useRoute();
  const {voterData} = route.params;

  // Render the VoterInformation screen with the extracted data
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <SvgXml
          xml={WaveHeader}
          width="300%"
          height="100%"
          style={styles.backgroundSvg}
        />
        <Text style={styles.text}>{hindiText.voterInformation}</Text>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
        <View style={{width: '20%'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              paddingHorizontal: '10%',
            }}>
            {`सं. क्र. ${voterData.id}`}
          </Text>
        </View>
        <View style={{width: '20%'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              paddingHorizontal: '10%',
            }}>
            {`भाग ${voterData.sectionNumber}`}
          </Text>
        </View>
        <View style={{width: '80%'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              paddingHorizontal: '1%',
            }}>
            {`${voterData.jabalpurPaschimAssembly2024}`}
          </Text>
        </View>
      </View>

      {/* Add other relevant information from voterData */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    position: 'relative',
    height: '10%',
  },
  backgroundSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 0,
    color: '#fff',
    textAlign: 'center',
  },
  number: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 12, // Adjust the lineHeight value as needed
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionNumber: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12, // Adjust the lineHeight value as needed
  },
  gender: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: '4%',
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: '10%',
  },
});

export default VoterInformation;
