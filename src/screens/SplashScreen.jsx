// SplashScreen.js
import React, {useEffect, useRef} from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';

const SplashScreen = ({navigation}) => {
  const jumpAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const jumpUp = Animated.timing(jumpAnimation, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    });

    const jumpDown = Animated.timing(jumpAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });

    Animated.sequence([
      jumpUp,
      jumpDown,
      jumpUp,
      jumpDown,
      jumpUp,
      jumpDown,
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('VerificationScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [jumpAnimation, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {transform: [{translateY: jumpAnimation}]},
        ]}>
        <Image source={require('../assets/vote.png')} style={styles.logo} />
      </Animated.View>
      <Text style={styles.text}>MatSangrah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your background color
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100, // Adjust the width of your logo
    height: 100, // Adjust the height of your logo
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    color: '#333', // Set your text color
  },
});

export default SplashScreen;
