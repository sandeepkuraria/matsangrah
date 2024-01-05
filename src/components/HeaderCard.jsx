import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import hindiText from '../lng/Hindi';

const HeaderCard = () => {
  return (
    <View
      style={{
        backgroundColor: '#1e90ff',
        paddingVertical: '12%',
        paddingHorizontal: '10%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: '9%',
          paddingBottom: '3%',
          paddingLeft: '30%',
        }}>
        <Text
          style={{
            color: '#ffff',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {hindiText.totalVoters + ` - 937 `}
        </Text>
        <View style={{paddingLeft: '25%'}}>
          <FontAwesomeIcon icon={faGear} color="#ffff" size={35} />
        </View>
      </View>
      <View style={{}}>
        <Text
          style={{
            color: '#ffff',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {hindiText.jabalpurPaschimAssembly2024}
        </Text>
      </View>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({});
