// Import necessary components and hooks
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import hindiText from '../lng/Hindi';
import {SvgXml} from 'react-native-svg';
import WaveHeader from '../components/WaveHeader';
import Printer from '../assets/printer.png';
import orangePrinter from '../assets/printerOrange.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faPhone,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

const VoterInformation = () => {
  const [panchayatSearchField, setPanchayatSearchField] = useState('panchayat');
  const route = useRoute();
  const {voterData} = route.params;

  const rows = [
    {label: hindiText.panchayatKshetra, value: voterData.panchayat},
    {label: hindiText.name, value: voterData.nameHindi},
    {label: hindiText.fatherHusband, value: voterData.fatherHusbandHindi},
    {label: hindiText.ageSex, value: voterData.ageGender},
    {label: hindiText.caste, value: voterData.caste, icon: faMagnifyingGlass},
    {label: hindiText.HouseNumber, value: voterData.houseNumber},
    {label: hindiText.address, value: voterData.address},
    {label: hindiText.mobile, value: voterData.mobile, icon: faPhone},
    {label: hindiText.dob, value: voterData.dob, icon: faCalendarDays},
    {label: hindiText.epicNumber, value: voterData.epicNumber},
    {label: hindiText.priority, value: voterData.priority},
    {label: hindiText.status, value: voterData.status},
    {label: hindiText.voteCenter, value: voterData.voteCenter},
  ];

  const renderRow = (label, value, icon) => (
    <View style={styles.cardRow} key={label}>
      <View style={{width: '30%'}}>
        <Text style={styles.label}>{label} :</Text>
      </View>
      <View
        style={{width: '70%', flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.card}>
          <TextInput
            style={styles.searchBar}
            onChangeText={text => setPanchayatSearchField('value')}>
            {value}
          </TextInput>
        </View>
        {icon ? (
          <View style={{padding: '2%'}}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={icon} color="#1e90ff" size={20} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );

  const imageSources = [
    require('../assets/updated.png'),
    require('../assets/display-pic.png'),
    require('../assets/phone.png'),
    require('../assets/sms.png'),
    require('../assets/whatsappBlack.png'),
    require('../assets/whatsappGreen.png'),
    require('../assets/family.png'),
  ];

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

      <View style={styles.infoHeader}>
        <Text
          style={
            styles.headerText
          }>{`${hindiText.saralKrimank} ${voterData.id}`}</Text>
        <Text
          style={
            styles.headerText
          }>{`${hindiText.Division} ${voterData.sectionNumber}`}</Text>
        <Text style={styles.headerText}>
          {voterData.jabalpurPaschimAssembly2024}
        </Text>
      </View>

      {rows.map(row => renderRow(row.label, row.value, row.icon))}
      <View style={[styles.imageComponent, {borderBottomWidth: 2}]}>
        {imageSources.map((source, index) => (
          <View key={index} style={styles.imageContainer}>
            <TouchableOpacity>
              <Image source={source} style={styles.image} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={[styles.imageComponent, {borderBottomWidth: 2}]}>
        <View style={styles.imageContainer}>
          <Text style={styles.printerText}>{hindiText.selfReceipt}</Text>
          <TouchableOpacity>
            <Image source={Printer} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.printerText}>{hindiText.familyReceipt}</Text>
          <TouchableOpacity>
            <Image source={Printer} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.imageComponent}>
        <View style={styles.imageContainer}>
          <Text style={styles.printerText}>{hindiText.selfReceipt}</Text>
          <TouchableOpacity>
            <Image source={orangePrinter} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.printerText}>{hindiText.familyReceipt}</Text>
          <TouchableOpacity>
            <Image source={orangePrinter} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{height: '2%'}}>
        <Image style={styles.backgroundFooter} />
      </View>
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

  backgroundFooter: {
    flex: 1,
    backgroundColor: '#1E90FF',
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
    paddingTop: '2%',
    color: '#fff',
    textAlign: 'center',
  },

  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  cardRow: {
    flexDirection: 'row',
    paddingTop: '1.5%',
    paddingHorizontal: '5%',
    // backgroundColor: 'red',
  },

  card: {
    height: 28,
    justifyContent: 'space-evenly',
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingVertical: '6%',
    marginLeft: '1%',
  },
  //   panchayatKshetra: {marginLeft: '1%'},
  searchBar: {
    height: 50,
    borderColor: 'gray',
    // paddingLeft: 14,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    // lineHeight: 30,
    // width: '100%',
  },

  imageComponent: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '3%',
    justifyContent: 'space-around',
    paddingBottom: '5%',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%', // Adjust the margin as needed
  },
  printerText: {
    color: 'black',
    fontSize: 11,
    fontWeight: '600',
    paddingHorizontal: '2%',
  },
  image: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: '5%',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: '4%',
  },
});

export default VoterInformation;
