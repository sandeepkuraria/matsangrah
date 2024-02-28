import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import hindiText from '../lng/Hindi';

const HeaderCard = () => {
  return (
    <View
      style={{
        backgroundColor: '#1e90ff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '8%',
        paddingBottom: '12%',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text
            style={{
              color: '#ffff',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {hindiText.totalVoters + ` - 937 `}
          </Text>
        </TouchableOpacity>
        <View style={{position: 'relative', right: 10}}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faGear} color="#ffff" size={35} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{}}>
        <Text
          style={{
            color: '#ffff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {hindiText.jabalpurPaschimAssembly2024}
        </Text>
      </View>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({});
