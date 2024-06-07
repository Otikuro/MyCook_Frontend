import { useEffect, useState } from 'react';
import { Image, View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import { INITIAL_FORMS } from '../../styleConstants';

const LOGO_IMAGE = require('../../../assets/LOGO_IMAGE.png');

export default function SignupForm({ signupFailed, changeFormHandler, signupHandler }: { signupFailed: boolean, changeFormHandler: () => void, signupHandler: (username: string, email: string, password: string) => void }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({email:false, password:false});

    useEffect(()=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors({...errors,email: email.length>0 && !regex.test(email)});
        console.log('email', errors)
    },[email])

    useEffect(()=>{
        const regex = /^.{8,}$/;
        setErrors({...errors,password: password.length>0 && !regex.test(password)});
    },[password])

    


    return (
        <View style={INITIAL_FORMS.container}>
            <Image source={LOGO_IMAGE} style={INITIAL_FORMS.image} />

            <Text style={INITIAL_FORMS.title}>MyCook</Text>

            <View style={INITIAL_FORMS.form}>
                <Text>User</Text>

                <TextInput style={INITIAL_FORMS.input} value={username} onChangeText={setUsername} />
                
                <Text>Email</Text>
                <TextInput style={INITIAL_FORMS.input} value={email} onChangeText={setEmail} />
                {errors.email && <Text style={styles.error}>Check the email format</Text>}


                <Text>Password</Text>
                <TextInput style={INITIAL_FORMS.input} value={password} secureTextEntry onChangeText={setPassword}/>
                {errors.password && <Text style={styles.error}>Your password must have at leas 8 characters</Text>}


                {/*                 <Text>Repeat your password</Text>
                <TextInput style={INITIAL_FORMS.input} /> */}

                { signupFailed  &&
                    <View style={[{ marginBottom: 10 }, { alignItems: 'center' }]}>
                        <Text style={{ color: 'red' }}>Incorrect username or password.</Text>
                        <Text style={{ color: 'red' }}>Please try again.</Text>
                    </View>
                }

                <Pressable style={INITIAL_FORMS.button} onPress={() => !errors.email&&!errors.password&&signupHandler(username, email, password)}>
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

const styles = StyleSheet.create({
    error:{
        color:'red'
    }
})