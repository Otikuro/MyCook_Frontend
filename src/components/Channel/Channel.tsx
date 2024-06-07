import { Text, StyleSheet, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getPostsFromChannel, joinChannel } from "../../HTTP Requests/channel";
import { ChannelType } from "../../types";
import { useEffect, useState } from "react";

// Componente funcional Channel
export default function Channel({ channel }: { channel: ChannelType }) {
  const navigation = useNavigation(); // Uso del hook useNavigation para obtener la instancia de navegación
  const route = useRoute(); // Uso del hook useRoute para obtener la ruta actual

  // Estado local para determinar si el usuario puede unirse al canal
  const [joinable, setJoinable] = useState(
    channel.amIMember != undefined && !channel.amIMember
  );

  // Verifica si hay un canal especificado en los parámetros de la ruta y actualiza el canal
  if (route.params && (route.params as { channel: ChannelType }).channel) {
    channel = (route.params as { channel: ChannelType }).channel;
  }

  return (
    //@ts-ignore
    <Pressable
      style={styles.container}
      onPress={() => {
        getPostsFromChannel(channel.channel_id).then((posts) => {
          // Navega al componente de canal con los posts y la información actualizada del canal
          //@ts-ignore
          navigation.navigate("Channel", {
            posts: posts,
            channel: { ...channel, amIMember: !joinable },
          });
        });
      }}
    >
      <Text style={styles.title}>{channel.name}</Text>
      {/* Renderizado del nombre del canal */}
      <JoinButton
        inputChannel={channel}
        joinable={joinable}
        setJoinable={setJoinable}
      />
    </Pressable>
  );
}

// Componente funcional JoinButton para el botón de unirse
export function JoinButton({
  inputChannel,
  joinable,
  setJoinable,
}: {
  inputChannel?: ChannelType;
  joinable?: boolean;
  setJoinable?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const route = useRoute(); // Uso del hook useRoute para obtener la ruta actual

  // Función para unirse al canal
  function join(id) {
    joinChannel(id);
    if (setJoinable) setJoinable(false); // Actualiza el estado para indicar que el usuario ya se unió al canal
    setButtonJoinable(false);
  }

  // Estado local para determinar si el botón de unirse está habilitado
  const [buttonJoinable, setButtonJoinable] = useState(joinable ?? false);
  const [channel, setChannel] = useState(inputChannel);

  // Función para inicializar el estado local y verificar la ruta actual
  function initialize() {
    if (route.params && (route.params as { channel: ChannelType }).channel) {
      let routeChannel: ChannelType = (route.params as { channel: ChannelType })
        .channel;
      console.log(routeChannel);
      setChannel(routeChannel);
      setButtonJoinable(
        routeChannel.amIMember != undefined && !routeChannel.amIMember
      );
    }
  }

  useEffect(() => {
    initialize(); // Llama a la función initialize al montar el componente
  }, []);

  return (
    <>
      {buttonJoinable && (
        <Pressable onPress={() => join(channel.channel_id)}>
          <Text style={[styles.button, styles.join]}>Join</Text>
        </Pressable>
      )}
      {!buttonJoinable && (
        <Text style={[styles.button, styles.joined]}>Joined</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    textAlign: "center",
    borderRadius: 8,
    width: 100,
    padding: 6
  },
  join: {
    backgroundColor: "#FFAE27"
  },
  joined: {
    backgroundColor: "lightgreen"
  },
});
