import { useState } from 'react';
import { Image, View, TextInput, Text, Pressable } from 'react-native';
import { INITIAL_FORMS } from '../../styleConstants';

const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');

export default function SignupForm({ changeFormHandler, signupHandler }: { changeFormHandler: () => void, signupHandler: (username: string, email: string, password: string) => void }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View style={INITIAL_FORMS.container}>
            <Image source={LOGO_IMAGE} style={INITIAL_FORMS.image} />

            <Text style={INITIAL_FORMS.title}>MyCook</Text>

            <View style={INITIAL_FORMS.form}>
                <Text>User</Text>
                <TextInput style={INITIAL_FORMS.input} value={username} onChangeText={setUsername}/>

                <Text>Email</Text>
                <TextInput style={INITIAL_FORMS.input} value={email} onChangeText={setEmail}/>

                <Text>Password</Text>
                <TextInput style={INITIAL_FORMS.input} value={password} onChangeText={setPassword}/>

{/*                 <Text>Repeat your password</Text>
                <TextInput style={INITIAL_FORMS.input} /> */}

                <Pressable style={INITIAL_FORMS.button} onPress={() => signupHandler(username, email, password)}>
                    <Text>Create account</Text>
                </Pressable>

                <Text>Already have an account?</Text>

                <Pressable onPress={changeFormHandler}>
                    <Text style={INITIAL_FORMS.link}>Log in</Text>
                </Pressable>
            </View>
        </View>
    );
}