import { useState } from "react";
import { Image, View, TextInput, Text, Pressable } from "react-native";
import { INITIAL_FORMS } from "../../styleConstants";

const LOGO_IMAGE = require("../../../assets/LOGO_IMAGE.png");

// Componente funcional LoginForm
export default function LoginForm({
  loginFailed, // Booleano que indica si el inicio de sesión falló
  loginHandler, // Función para manejar el inicio de sesión
  changeFormHandler, // Función para cambiar el formulario (por ejemplo, de inicio de sesión a registro)
  setIsLoggedIn, // Función para establecer si el usuario ha iniciado sesión o no
}: {
  loginFailed: boolean;
  loginHandler: (user: string, password: string) => void;
  changeFormHandler: () => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [username, setUsername] = useState(""); // Estado local para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado local para la contraseña

  return (
    <View style={INITIAL_FORMS.container}>
      {/* Imagen de la aplicación */}
      <Pressable
        style={INITIAL_FORMS.image}
        onPress={() => {
          setIsLoggedIn(true);
        }}
      >
        <Image style={INITIAL_FORMS.image} source={LOGO_IMAGE} />
      </Pressable>

      {/* Título de la aplicación */}
      <Text style={INITIAL_FORMS.title}>MyCook</Text>

      {/* Formulario de inicio de sesión */}
      <View style={INITIAL_FORMS.form}>
        <Text>User</Text>
        {/* Entrada de texto para el nombre de usuario */}
        <TextInput
          style={INITIAL_FORMS.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text>Password</Text>
        {/* Entrada de texto para la contraseña */}
        <TextInput
          style={INITIAL_FORMS.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Oculta el texto de la contraseña
        />

        {/* Mensaje de error si el inicio de sesión falla */}
        {loginFailed && (
          <View style={[{ marginBottom: 10 }, { alignItems: "center" }]}>
            <Text style={{ color: "red" }}>
              Incorrect username or password.
            </Text>
            <Text style={{ color: "red" }}>Please try again.</Text>
          </View>
        )}

        {/* Botón para iniciar sesión */}
        <Pressable
          onPress={() => loginHandler(username, password)}
          style={INITIAL_FORMS.button}
        >
          <Text>Log in</Text>
        </Pressable>

        {/* Enlace para cambiar al formulario de registro */}
        <Pressable onPress={changeFormHandler}>
          <Text style={INITIAL_FORMS.link}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}
