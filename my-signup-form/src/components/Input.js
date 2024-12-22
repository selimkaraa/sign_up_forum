import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCapitalize="none"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
});

export default Input;
