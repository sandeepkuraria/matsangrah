import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import hindiText from '../lng/Hindi';
import data from '../../data';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook

const FindVoter = () => {
  const navigation = useNavigation(); // Initialize the navigation hook

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Add new states for each search field
  const [activeSearchField, setActiveSearchField] = useState('id');
  const [engNameSearchField, setEngNameSearchField] = useState('englishName');
  const [hindiNameSearchField, setHindiNameSearchField] = useState('hindiName');
  const [villageSearchField, setVillageSearchField] = useState('village');
  const [panchayatSearchField, setPanchayatSearchField] = useState('panchayat');
  const [areaSearchField, setAreaSearchField] = useState('area');

  const handleSearch = () => {
    console.log('Search button pressed');
    console.log('activeSearchField:', activeSearchField);
    console.log('searchQuery:', searchQuery);

    // Filter data based on the active search field and substring match
    const newFilteredData = data.filter(item => {
      if (searchQuery.trim() === '') {
        // If searchQuery is empty, return all data
        return true;
      }

      return (
        item[activeSearchField] === searchQuery ||
        item[engNameSearchField]
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item[hindiNameSearchField]
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item[villageSearchField]
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item[panchayatSearchField]
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item[areaSearchField].toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // Log the filtered data
    console.log('Filtered Data:', newFilteredData);

    // Update filteredData state
    setFilteredData(newFilteredData);
  };

  const renderItem = ({item}) => (
    <ScrollView>
      {/* Use TouchableOpacity to make the row tappable */}
      <TouchableOpacity
        onPress={() => {
          // Navigate to VoterInformation screen with the item data
          navigation.navigate('VoterInformation', {voterData: item});
        }}>
        <View style={styles.flatListItem}>
          <View style={{paddingHorizontal: '2%', width: '20%'}}>
            <Text></Text>
            <Text style={styles.number}>{`\n सं. क्र. ${item.id}`}</Text>
          </View>
          <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
            <View
              style={{
                paddingHorizontal: '1%',
                width: '65%',
              }}>
              <Text style={styles.name}>{item.hindiName}</Text>
              <Text
                style={
                  styles.sectionNumber
                }>{`\n भाग संख्या : ${item.sectionNumber}`}</Text>
            </View>
            <View
              style={{
                width: '30%',
                flexDirection: 'row',
              }}>
              <Text style={styles.gender}>{item.gender}</Text>
              <Text style={styles.age}>{item.age}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <View>
      <LinearGradient colors={['#1e90ff', '#ffffff']} style={styles.container}>
        {/* First row of search bars */}
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <TextInput
              style={styles.searchBar}
              placeholder="नाम/पिता/पति/सरनेम"
              placeholderTextColor="#808080"
              //   onChangeText={setSearchQuery}
              onChangeText={text => {
                setSearchQuery(text);

                setEngNameSearchField('englishName');
                setHindiNameSearchField('hindiName');
              }}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              style={styles.searchBar}
              placeholder="ग्राम/पंचायत/क्षेत्र"
              placeholderTextColor="#808080"
              //   onChangeText={setSearchQuery}
              onChangeText={text => {
                setSearchQuery(text);

                setVillageSearchField('village');
                setPanchayatSearchField('panchayat');
                setAreaSearchField('area');
              }}
            />
          </View>
        </View>

        {/* Second row of search bars */}
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <TextInput
              style={styles.searchBar}
              placeholder="भाग संख्या :"
              placeholderTextColor="#808080"
              //   onChangeText={setSearchQuery}
              onChangeText={text => {
                setSearchQuery(text);
                setActiveSearchField('sectionNumber');
              }}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              style={styles.searchBar}
              placeholder="सरल क्रमांक :"
              placeholderTextColor="#808080"
              //   onChangeText={setSearchQuery}
              onChangeText={text => {
                setSearchQuery(text);
                setActiveSearchField('id');
              }}
            />
          </View>
        </View>

        {/* Row with search button and text */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.buttonText}>{hindiText.search}</Text>
          </TouchableOpacity>
          <Text style={styles.searchText}>Total : 937</Text>
        </View>
      </LinearGradient>
      {/* FlatList for rendering multiple rows */}
      <View style={{marginBottom: '77%'}}>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: '1.5%',
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: '1.5%',
  },
  card: {
    height: 27,
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
    marginHorizontal: '1%',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    paddingLeft: 14,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '1%',
    marginBottom: '5%',
  },
  searchButton: {
    marginLeft: '5%',
    backgroundColor: '#1e90ff',
    borderRadius: 6,
    paddingVertical: '2%',
    paddingHorizontal: '13%',
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchText: {
    marginLeft: '10%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flatListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#6495ed',
  },
  number: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12, // Adjust the lineHeight value as needed
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

export default FindVoter;
