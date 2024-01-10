import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import hindiText from '../lng/Hindi';

const HeaderCard = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#1e90ff',
          position: 'relative',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '8%',
          paddingBottom: '11%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: '1%',
          }}>
          <TouchableOpacity
            style={{position: 'relative', left: 120, top: 8, flex: 1}}>
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
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({});
