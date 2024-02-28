// Import necessary components and hooks
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView, // Import KeyboardAvoidingView
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import hindiText from '../lng/Hindi';
import Printer from '../assets/printer.png';
import orangePrinter from '../assets/printerOrange.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faPhone,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const VoterInformation = () => {
  const route = useRoute();
  const {voterData} = route.params;

  // State variable for the array of data
  const [data, setData] = useState([]);

  // State variables for each field
  const [panchayat, setPanchayat] = useState('');
  const [nameHindi, setNameHindi] = useState('');
  const [fatherHusbandHindi, setFatherHusbandHindi] = useState('');
  const [ageGender, setAgeGender] = useState('');
  const [caste, setCaste] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState(new Date()); // Initialize with current date
  const [epicNumber, setEpicNumber] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [voteCenter, setVoteCenter] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPhoneNumberModal, setShowPhoneNumberModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactLabel, setContactLabel] = useState('');
  // State variable for dropdown value

  const [priorityDropdownValue, setPriorityDropdownValue] = useState('');
  const [statusDropdownValue, setStatusDropdownValue] = useState('');

  const requestContactsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      ]);

      if (
        granted['android.permission.READ_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Contacts permissions granted');
      } else {
        console.warn('Contacts permissions denied');
      }
    } catch (err) {
      console.error('Error requesting contacts permissions:', err);
    }
  };

  // Function to handle the update button press
  const handleUpdate = async () => {
    // Save updated data to local storage
    const updatedData = {
      panchayat,
      nameHindi,
      fatherHusbandHindi,
      ageGender,
      caste,
      houseNumber,
      address,
      mobile,
      // dob,
      dob: dob.toISOString().split('T')[0], // Convert Date object to string
      epicNumber,
      priority,
      status,
      voteCenter,
      // Add other fields...
    };

    // Update the data array with the new data for the current ID
    // setData(prevData => [...prevData, {id: voterData.id, data: updatedData}]);

    console.log(
      'updatedData in voterinformation useEffect.......',
      updatedData,
    );

    try {
      // Fetch existing data array from local storage
      const storedDataArray = await AsyncStorage.getItem('voterDataArray');
      const existingDataArray = storedDataArray
        ? JSON.parse(storedDataArray)
        : [];

      // Find the index of the current ID in the array
      const dataIndex = existingDataArray.findIndex(
        item => item.id === voterData.id,
      );

      // If the ID exists in the array, update the data; otherwise, add a new entry
      if (dataIndex !== -1) {
        existingDataArray[dataIndex].data = updatedData;
      } else {
        existingDataArray.push({id: voterData.id, data: updatedData});
      }

      // Update the local storage with the modified data array
      await AsyncStorage.setItem(
        'voterDataArray',
        JSON.stringify(existingDataArray),
      );

      // Display a success message
      Alert.alert('Update Successful', 'Data has been updated successfully');
    } catch (error) {
      // Handle errors
      console.error('Error saving data to local storage:', error);
      Alert.alert('Update Failed', 'Failed to update data. Please try again.');
    }
  };

  // Load data from AsyncStorage when the component mounts
  useEffect(() => {
    // Call this function before attempting to save contacts
    requestContactsPermission();

    // Load data from AsyncStorage when the component mounts
    const loadData = async () => {
      try {
        // Fetch existing data array from local storage
        const storedDataArray = await AsyncStorage.getItem('voterDataArray');
        console.log(
          'storedDataArray in voterinformation useEffect.......',
          storedDataArray,
        );

        if (storedDataArray) {
          const existingDataArray = JSON.parse(storedDataArray);

          // Find the data for the current ID in the array
          const currentData = existingDataArray.find(
            item => item.id === voterData.id,
          );

          if (currentData) {
            // Update state variables with data from AsyncStorage
            setPanchayat(currentData.data.panchayat || '');
            setNameHindi(currentData.data.nameHindi || '');
            setFatherHusbandHindi(currentData.data.fatherHusbandHindi || '');
            setAgeGender(currentData.data.ageGender || '');
            setCaste(currentData.data.caste || '');
            setHouseNumber(currentData.data.houseNumber || '');
            setAddress(currentData.data.address || '');
            setMobile(currentData.data.mobile || '');
            setDob(
              currentData.data.dob
                ? new Date(currentData.data.dob)
                : new Date(),
            );
            setEpicNumber(currentData.data.epicNumber || '');
            setPriority(currentData.data.priority || '');

            setStatus(currentData.data.status || '');
            setVoteCenter(currentData.data.voteCenter || '');
          }
        }
      } catch (error) {
        // Handle errors
        console.error('Error loading data from local storage:', error);
      }
    };

    loadData();
  }, []); // Updated dependency array to trigger the effect when the ID changes

  const rows = [
    {label: hindiText.panchayatKshetra, value: panchayat},
    {label: hindiText.name, value: nameHindi},
    {label: hindiText.fatherHusband, value: fatherHusbandHindi},
    {label: hindiText.ageSex, value: ageGender},
    {label: hindiText.caste, value: caste, icon: faMagnifyingGlass},
    {label: hindiText.HouseNumber, value: houseNumber},
    {label: hindiText.address, value: address},
    {label: hindiText.mobile, value: mobile, icon: faPhone},
    {
      label: hindiText.dob,
      value: dob.toLocaleDateString(),
      icon: faCalendarDays,
    },
    {label: hindiText.epicNumber, value: epicNumber},
    {label: hindiText.priority, value: priority},
    {label: hindiText.status, value: status},
    {label: hindiText.voteCenter, value: voteCenter},
  ];

  // Add these functions to your component
  const openPhoneNumberModal = () => {
    setShowPhoneNumberModal(true);
  };

  const handleSavePhoneNumber = async () => {
    try {
      // Save phone number to local storage with the given label
      const updatedData = {
        ...data,
        [contactLabel]: phoneNumber,
      };

      // Update the data array with the new data for the current ID
      setData(prevData => [...prevData, {id: voterData.id, data: updatedData}]);

      // Update the local storage with the modified data array
      await AsyncStorage.setItem('voterDataArray', JSON.stringify(data));

      // Implement logic to save the phone number to your data or perform any necessary actions
      console.log('Save phone number:', phoneNumber);

      // Set the entered phone number to the mobile state variable
      setMobile(phoneNumber || ''); // Use phoneNumber, and handle the case where it's falsy

      // Display a success message
      // Alert.alert('Update Successful', 'Data has been updated successfully');

      // Save phone number to the contact list
      const newContact = {
        givenName: nameHindi, // Use the appropriate name field
        phoneNumbers: [{label: contactLabel, number: phoneNumber}],
      };

      // Add the new contact to the contact list
      await Contacts.addContact(newContact);

      // Close the phone number modal
      setShowPhoneNumberModal(false);
    } catch (error) {
      // Handle errors
      console.error('Error saving phone number:', error);
      Alert.alert(
        'Save Failed',
        'Failed to save phone number. Please try again.',
      );
    }
    // // Close the phone number modal
    // setShowPhoneNumberModal(false);
  };

  const handleCancelPhoneNumber = () => {
    // Implement logic when the user cancels entering the phone number
    setShowPhoneNumberModal(false);
  };

  const renderRow = (label, value, icon) => (
    <View style={styles.cardRow} key={label}>
      <View style={{width: '30%'}}>
        <Text style={styles.label}>{label} :</Text>
      </View>
      <View
        style={{
          width: '70%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={styles.card}>
          {icon === faCalendarDays ? (
            <TouchableOpacity onPress={openDatePicker}>
              <TextInput
                style={styles.searchBar}
                editable={false}
                value={value}
              />
            </TouchableOpacity>
          ) : label === hindiText.priority ? (
            // Using ModalDropdown for the "priority" field

            <ModalDropdown
              options={[
                'select values                                           ',
                'A',
                'B',
                'C',
              ]}
              defaultValue={priority}
              onSelect={(index, selectedValue) =>
                handleDropdownChange('priority', selectedValue)
              }
              style={styles.modelDropDownSearch}
              textStyle={{fontSize: 14, color: 'black', fontWeight: 'bold'}}
            />
          ) : label === hindiText.status ? (
            // Using ModalDropdown for the "status" field
            <ModalDropdown
              options={[
                'select status                                           ',
                hindiText.available,
                hindiText.getaway,
                hindiText.dead,
              ]}
              defaultValue={status}
              onSelect={(index, selectedValue) =>
                handleDropdownChange('status', selectedValue)
              }
              style={styles.modelDropDownSearch}
              textStyle={{fontSize: 14, color: 'black', fontWeight: 'bold'}}
            />
          ) : label === hindiText.mobile ? (
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.searchBar}
                editable={false}
                value={mobile} // Update this line to use the mobile state variable
              />
            </View>
          ) : label === hindiText.voteCenter ? (
            <Text style={styles.modelDropDownSearch}>
              {hindiText.PrimarySchoolBuildingJabalpur}
            </Text>
          ) : (
            <TextInput
              style={styles.searchBar}
              onChangeText={text => handleTextInputChange(label, text)}
              value={value}
            />
          )}
        </View>

        {icon ? (
          <View style={{padding: '2%'}}>
            {icon === faPhone ? (
              <TouchableOpacity onPress={() => openPhoneNumberModal(value)}>
                <FontAwesomeIcon icon={icon} color="#1e90ff" size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => icon === faCalendarDays && openDatePicker()}>
                <FontAwesomeIcon icon={icon} color="#1e90ff" size={20} />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
      </View>
    </View>
  );

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleTextInputChange = (label, text) => {
    switch (label) {
      case hindiText.panchayatKshetra:
        setPanchayat(text);
        break;
      case hindiText.name:
        setNameHindi(text);
        break;
      case hindiText.fatherHusband:
        setFatherHusbandHindi(text);
        break;
      case hindiText.ageSex:
        setAgeGender(text);
        break;
      case hindiText.caste:
        setCaste(text);
        break;
      case hindiText.HouseNumber:
        setHouseNumber(text);
        break;
      case hindiText.address:
        setAddress(text);
        break;
      case hindiText.mobile:
        setMobile(text);
        break;
      case hindiText.dob:
        setDob(text);
        break;
      case hindiText.epicNumber:
        setEpicNumber(text);
        break;
      case hindiText.priority:
        setPriority(text);
        break;
      case hindiText.status:
        setStatus(text);
        break;
      case hindiText.voteCenter:
        setVoteCenter(text);
        break;
      default:
        break;
    }
  };

  const handleDropdownChange = (label, selectedValue) => {
    switch (label) {
      case 'priority':
        setPriority(selectedValue);
        break;
      case 'status':
        setStatus(selectedValue);
        break;
      default:
        break;
    }
  };

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
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.backgroundContainer}>
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
          }>{`${hindiText.Division} : ${voterData.sectionNumber}`}</Text>
        <Text style={styles.headerText}>
          {voterData.jabalpurPaschimAssembly2024}
        </Text>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="calendar"
          onChange={onChangeDate}
        />
      )}

      <Modal isVisible={showPhoneNumberModal}>
        <View style={styles.phoneModalContainer}>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              fontSize: 16,
              padding: 10,
            }}>
            Enter Mobile Number
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between', // Optional: adjust as needed
              alignItems: 'center', // Optional: adjust as needed
            }}>
            <TextInput
              style={[styles.popUpContactSearch, {flex: 1}]}
              keyboardType="phone-pad"
              onChangeText={text => setPhoneNumber(text)}
            />
            <TouchableOpacity>
              <Image
                source={require('../assets/user.png')}
                style={[styles.image, {marginLeft: 10}]}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              onPress={handleSavePhoneNumber}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancelPhoneNumber}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.renderBox}>
        {rows.map(row => renderRow(row.label, row.value, row.icon))}
      </View>

      <View>
        <View style={[styles.imageComponent, {borderBottomWidth: 2}]}>
          {imageSources.map((source, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity onPress={handleUpdate}>
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
        <View style={styles.backgroundFooter}>
          <Text></Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  backgroundContainer: {
    padding: '3%',

    backgroundColor: '#1E90FF',
  },

  backgroundFooter: {
    backgroundColor: '#1E90FF',
  },

  text: {
    fontSize: 25,
    fontWeight: '600',
    paddingTop: '2%',
    color: '#fff',
    textAlign: 'center',
  },

  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '2%',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: '3%',
  },
  cardRow: {
    flexDirection: 'row',
    paddingTop: '1.5%',
    paddingHorizontal: '5%',
  },
  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
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
    marginLeft: '1%',
  },
  searchBar: {
    height: 50,
    borderColor: 'gray',
    paddingLeft: '1%',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  modelDropDownSearch: {
    flex: 1,
    height: 50,
    borderColor: 'grey',
    paddingLeft: '1%',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  phoneModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
  },

  popUpContactSearch: {
    borderWidth: 0.5,
    borderRadius: 8,
    height: 40,
    borderColor: '#e6e6e6',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    margin: 15,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#1E90FF',
    marginHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },

  renderBox: {
    // flex: 8,
  },

  imageComponent: {
    // flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '3%',
    justifyContent: 'space-around',
    // paddingVertical: '2%',
    // backgroundColor: 'red',
  },
  imageContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  printerText: {
    color: 'black',
    fontSize: 11,
    fontWeight: '600',
    paddingHorizontal: '2%',
    textAlign: 'right',
  },
  image: {
    // flex: 1,
    width: 35, // Adjust the width as needed
    height: 35, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
});

export default VoterInformation;
