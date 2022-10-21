/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NativeSampleModule from './js/NativeSampleModule';
import RTNCenteredText from './js/RTNCenteredText/RTNCenteredTextNativeComponent';
// import RTNColoredView from './js/RTNColoredView/RTNColoredViewNativeComponent';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const showMessage = async () => {
    try {
      // NativeSampleModule.getHelloWorld('Phi', 'Tup', (message) => {
      //   console.log('Hello message : ', message)
      //   Alert.alert(message)
      // })
      const message = NativeSampleModule.getHelloWorld('Phi')
      Alert.alert(message)
    } catch (error) {
      Alert.alert(error?.message)
    }

  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={backgroundStyle}>
        <TouchableOpacity onPress={showMessage}>
          <Text>dsad</Text>
        </TouchableOpacity>
      </View>

      <RTNCenteredText
        text="Hello World!"
        style={{ marginTop: 100, width: '100%', height: 30 }}
      />

      {/* <RTNColoredView color="#FF0099"/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
