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

const FindVoter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  //   const handleSearch = () => {
  //     // Implement your search logic here
  //     console.log('Search button pressed');
  //     // Filter data based on search query
  //     const filteredData = data.filter(
  //       item =>
  //         item.id.includes(searchQuery) ||
  //         item.name.includes(searchQuery) ||
  //         item.sectionNumber.includes(searchQuery),
  //     );
  //     // Log the filtered data (you can use it as needed, e.g., update the state)
  //     console.log(filteredData);
  //   };
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search button pressed');
    // Filter data based on search query
    const newFilteredData = data.filter(
      item => item.id.includes(searchQuery),
      // item.name.includes(searchQuery) ||
      // item.sectionNumber.includes(searchQuery),
    );
    // Update filteredData state
    setFilteredData(newFilteredData);
    // Log the newFilteredData data (you can use it as needed, e.g., update the state)
    // console.log(newFilteredData);
  };

  const renderItem = ({item}) => (
    <ScrollView>
      <View style={styles.flatListItem}>
        <View>
          <Text></Text>
          <Text style={styles.number}>{`\n सं. क्र. ${item.id}`}</Text>
        </View>
        <View style={{}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text
            style={
              styles.sectionNumber
            }>{`\n भाग संख्या : ${item.sectionNumber}`}</Text>
        </View>
        <Text style={styles.gender}>{item.gender}</Text>
        <Text style={styles.age}>{item.age}</Text>
      </View>
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
              onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              style={styles.searchBar}
              placeholder="ग्राम/पंचायत/क्षेत्र"
              placeholderTextColor="#808080"
              onChangeText={setSearchQuery}
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
              onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              style={styles.searchBar}
              placeholder="सरल क्रमांक :"
              placeholderTextColor="#808080"
              onChangeText={setSearchQuery}
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
    justifyContent: 'space-evenly',
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
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default FindVoter;
