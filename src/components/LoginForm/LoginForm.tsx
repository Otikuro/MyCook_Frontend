import { useState } from 'react';
import { Image, View, TextInput, Text, Pressable } from 'react-native';
import { INITIAL_FORMS } from '../../styleConstants';

const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');

export default function LoginForm({ loginFailed, loginHandler, changeFormHandler, setIsLoggedIn }: { loginFailed: boolean, loginHandler: (user: string, password: string) => void, changeFormHandler: () => void, setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={INITIAL_FORMS.container}>
            <Pressable style={INITIAL_FORMS.image} onPress={()=>{setIsLoggedIn(true)}}>
                <Image style={INITIAL_FORMS.image} source={LOGO_IMAGE} />
            </Pressable>
            

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

                { loginFailed &&
                    <View style={[{ marginBottom: 10 }, { alignItems: 'center' }]}>
                        <Text style={{ color: 'red' }}>Incorrect username or password.</Text>
                        <Text style={{ color: 'red' }}>Please try again.</Text>
                    </View>
                }

                <Pressable onPress={() => loginHandler(username, password)} style={INITIAL_FORMS.button}>
                    <Text>Log in</Text>
                </Pressable>

                <Pressable onPress={changeFormHandler} >
                    <Text style={INITIAL_FORMS.link}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
}