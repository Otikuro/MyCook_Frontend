import { Image,View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { INITIAL_FORMS } from '../../styleConstants';

const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');

export default function SignupForm({ signupHandler }: { signupHandler: () => void }) {
    return (
        <View style={INITIAL_FORMS.container}>
            <Image source={LOGO_IMAGE} style={INITIAL_FORMS.image} />

            <Text style={INITIAL_FORMS.title}>MyCook</Text>

            <View style={INITIAL_FORMS.form}>
                <Text>User</Text>
                <TextInput style={INITIAL_FORMS.input} />

                <Text>Email</Text>
                <TextInput style={INITIAL_FORMS.input} />
         

                <Text>Password</Text>
                <TextInput style={INITIAL_FORMS.input} />
            

                <Text>Repeat your password</Text>
                <TextInput style={INITIAL_FORMS.input} />
            
                <Pressable style={INITIAL_FORMS.button}>
                    <Text>Create account</Text>
                </Pressable>

                <Text>Already have an account?</Text>
                
                <Pressable onPress={signupHandler}>
                    <Text style={INITIAL_FORMS.link}>Log in</Text>
                </Pressable>
            </View>
        </View>
    );
}