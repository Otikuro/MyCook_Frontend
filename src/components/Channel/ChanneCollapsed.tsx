import { Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addPostToChannel } from "../../HTTP Requests/channel";
import { ChannelType } from "../../types";

// Definición del componente ChannelCollapsed
export default function ChannelCollapsed({
  channel,
  post_id,
  hideChannels,
}: {
  channel: ChannelType;
  post_id: number;
  hideChannels: () => void;
}) {
  const navigation = useNavigation(); // Uso del hook useNavigation para obtener la instancia de navegación

  return (
    <Pressable
      style={styles.menuButton}
      onPress={() => {
        addPostToChannel(channel.channel_id, post_id).then(hideChannels);
      }}
    >
      <Text style={styles.buttonText}>{channel.name}</Text>
      {/* Renderizado del nombre del canal */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    height: 32,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    display: "flex",
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center" 
  }
});
