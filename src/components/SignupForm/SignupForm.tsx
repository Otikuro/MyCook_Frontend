import { useEffect, useState } from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { INITIAL_FORMS } from "../../styleConstants";

const LOGO_IMAGE = require("../../../assets/LOGO_IMAGE.png");

export default function SignupForm({
  signupFailed,
  changeFormHandler,
  signupHandler,
}: {
  signupFailed: boolean;
  changeFormHandler: () => void;
  signupHandler: (username: string, email: string, password: string) => void;
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });

  useEffect(() => {
    // Este efecto se ejecuta cuando el valor de `email` cambia
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato de email
    setErrors({ ...errors, email: email.length > 0 && !regex.test(email) }); // Actualiza los errores relacionados con el email
    console.log("email", errors); // Muestra los errores actuales en la consola
  }, [email]); // Este efecto depende del valor de `email`

  useEffect(() => {
    // Este efecto se ejecuta cuando el valor de `password` cambia
    const regex = /^.{8,}$/; // Expresión regular para validar que la contraseña tenga al menos 8 caracteres
    setErrors({
      ...errors,
      password: password.length > 0 && !regex.test(password),
    }); // Actualiza los errores relacionados con la contraseña
  }, [password]); // Este efecto depende del valor de `password`

  return (
    <View style={INITIAL_FORMS.container}>
      {/* Logo */}
      <Image source={LOGO_IMAGE} style={INITIAL_FORMS.image} />

      {/* Título */}
      <Text style={INITIAL_FORMS.title}>MyCook</Text>

      {/* Formulario */}
      <View style={INITIAL_FORMS.form}>
        {/* Campo de usuario */}
        <Text>User</Text>
        <TextInput
          style={INITIAL_FORMS.input}
          value={username}
          onChangeText={setUsername}
        />
        {/* Campo de email */}
        <Text>Email</Text>
        <TextInput
          style={INITIAL_FORMS.input}
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && (
          <Text style={styles.error}>Check the email format</Text>
        )}
        {/* Muestra un mensaje de error si el formato de email es incorrecto */}
        {/* Campo de contraseña */}
        <Text>Password</Text>
        <TextInput
          style={INITIAL_FORMS.input}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        {errors.password && (
          <Text style={styles.error}>
            Your password must have at least 8 characters
          </Text>
        )}
        {/* Muestra un mensaje de error si la contraseña es demasiado corta */}
        {/* Mensaje de error de inicio de sesión */}
        {signupFailed && (
          <View style={[{ marginBottom: 10 }, { alignItems: "center" }]}>
            <Text style={{ color: "red" }}>
              Incorrect username or password.
            </Text>
            <Text style={{ color: "red" }}>Please try again.</Text>
          </View>
        )}
        {/* Botón para crear una cuenta */}
        <Pressable
          style={INITIAL_FORMS.button}
          onPress={() =>
            !errors.email &&
            !errors.password &&
            signupHandler(username, email, password)
          }
        >
          <Text>Create account</Text>
        </Pressable>
        {/* Enlace para iniciar sesión */}
        <Text>Already have an account?</Text>
        <Pressable onPress={changeFormHandler}>
          <Text style={INITIAL_FORMS.link}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red"
  },
});
