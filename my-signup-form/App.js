import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import Input from './src/components/Input';

const App = () => {
    const { control, handleSubmit, watch, reset } = useForm();
    const password = watch('password');

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            Alert.alert('Error', 'Passwords do not match!');
            return;
        }
        Alert.alert('Success', `Welcome, ${data.fullName}!`);
        reset();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Signup Form</Text>
            <Controller
                control={control}
                name="email"
                rules={{ required: 'Email is required' }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Email"
                        value={value}
                        onChangeText={onChange}
                        placeholder="Enter your email"
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                rules={{ required: 'Password is required' }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Password"
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry
                        placeholder="Enter your password"
                    />
                )}
            />
            <Controller
                control={control}
                name="confirmPassword"
                rules={{ required: 'Confirm Password is required' }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Confirm Password"
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry
                        placeholder="Confirm your password"
                    />
                )}
            />
            <Controller
                control={control}
                name="fullName"
                rules={{ required: 'Full Name is required' }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        label="Full Name"
                        value={value}
                        onChangeText={onChange}
                        placeholder="Enter your full name"
                    />
                )}
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default App;
