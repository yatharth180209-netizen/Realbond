import React from 'react';
import { View, Text, Button } from 'react-native';

const OnboardingScreen = () => {
  const handleNext = () => {
    // Logic to move to the next onboarding step
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to RealBond!</Text>
      <Text>Your journey starts here.</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default OnboardingScreen;