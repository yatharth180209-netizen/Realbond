import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AssessmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assessment Screen</Text>
      <Text style={styles.description}>This is the assessment screen for RealBond.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default AssessmentScreen;