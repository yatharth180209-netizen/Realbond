import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChallengeScreen = () => {
    const handleSolveChallenge = () => {
        // Implement challenge solving logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Challenge Screen</Text>
            <Text style={styles.description}>Here you can view and solve challenges!</Text>
            <Button title="Solve Challenge" onPress={handleSolveChallenge} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        marginVertical: 16,
    },
});

export default ChallengeScreen;