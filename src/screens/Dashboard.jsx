import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import HeaderCard from '../components/HeaderCard';
import search from '../assets/search.png';
import family from '../assets/family.png';
import print from '../assets/printer.png';
import vote from '../assets/voting-box.png';
import update from '../assets/update.png';
import religion from '../assets/religion.png';
import hindiText from '../lng/Hindi';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation(); // Use the useNavigation hook

  const handleCardPress = screenName => {
    navigation.navigate(screenName);
  };

  const cardsData = [
    {source: search, text: 'FindVoter'},
    {source: family, text: 'FindFamily'},
    {source: print, text: 'Print'},
    {source: religion, text: 'CasteData'},
    {source: vote, text: 'Vote'},
    {source: update, text: 'Update'},
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '20%',
          width: '100%',
        }}>
        <HeaderCard />
      </View>
      <View
        style={{
          height: '70%',
          width: '100%',
          position: 'absolute',
          top: 115,
        }}>
        <View style={styles.row}>
          {renderCard(cardsData[0], handleCardPress)}
          {renderCard(cardsData[1], handleCardPress)}
        </View>
        <View style={styles.row}>
          {renderCard(cardsData[2], handleCardPress)}
          {renderCard(cardsData[3], handleCardPress)}
        </View>
        <View style={styles.row}>
          {renderCard(cardsData[4], handleCardPress)}
          {renderCard(cardsData[5], handleCardPress)}
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#1e90ff',
          height: '5%',
          width: '100%',
          flex: 1,
        }}></View>
    </View>
  );
};

const renderCard = ({source, text}, handleCardPress) => (
  <TouchableOpacity style={styles.card} onPress={() => handleCardPress(text)}>
    <Image source={source} style={styles.sourceImage} />
    <Text style={styles.text}>{hindiText[text]}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',

    // justifyContent: 'center',
    // alignItems: 'center',
    // top: 0,
  },
  row: {
    // top: '5.5%',
    flexDirection: 'row',
    marginBottom: '4%',
    // justifyContent: 'space-around',
    marginHorizontal: '5%',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: '14%',
    marginHorizontal: '5%',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  icon: {
    color: '#3498db',
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  sourceImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default Dashboard;
