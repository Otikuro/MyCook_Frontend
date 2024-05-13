import { useState } from 'react';
import { Image, View, TextInput, Text, Pressable } from 'react-native';
import { INITIAL_FORMS } from '../../styleConstants';

const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');

export default function LoginForm({ loginHandler, signupHandler }: { loginHandler: (user: string, password: string) => void, signupHandler: () => void }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={INITIAL_FORMS.container}>
            <Image style={INITIAL_FORMS.image} source={LOGO_IMAGE} />

            <Text style={INITIAL_FORMS.title}>MyCook</Text>

            <View style={INITIAL_FORMS.form}>
                <Text>User</Text>
                <TextInput
                    style={INITIAL_FORMS.input}
                    value={username}
                    onChangeText={setUsername}
                />

                <Text>Password</Text>
                <TextInput
                    style={INITIAL_FORMS.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <Pressable onPress={() => loginHandler(username, password)} style={INITIAL_FORMS.button}>
                    <Text>Log in</Text>
                </Pressable>

                <Pressable onPress={signupHandler} >
                    <Text style={INITIAL_FORMS.link}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
}