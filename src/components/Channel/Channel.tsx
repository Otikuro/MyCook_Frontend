import { Text, StyleSheet, Pressable } from "react-native";
import Navigation from "../Navigation/Navigation";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getPostsFromChannel, joinChannel } from "../../HTTP Requests/channel";
import { ChannelType } from "../../types";
import { useEffect, useState } from "react";

export default function Channel({ channel }: { channel: ChannelType }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [joinable, setJoinable] = useState(
    channel.amIMember != undefined && !channel.amIMember
  );
  if (route.params && (route.params as { channel: ChannelType }).channel) {
    channel = (route.params as { channel: ChannelType }).channel;
  }

  return (
    //@ts-ignore
    <Pressable
      style={styles.container}
      onPress={() => {
        getPostsFromChannel(channel.channel_id).then((posts) => {
          navigation.navigate("Channel", {
            posts: posts,
            channel: { ...channel, amIMember: !joinable },
          });
        });
      }}
    >
      <Text style={styles.title}>{channel.name}</Text>
      <JoinButton
        inputChannel={channel}
        joinable={joinable}
        setJoinable={setJoinable}
      />
    </Pressable>
  );
}

export function JoinButton({
  inputChannel,
  joinable,
  setJoinable,
}: {
  inputChannel?: ChannelType;
  joinable?: boolean;
  setJoinable?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const route = useRoute();

  function join(id) {
    joinChannel(id);
    if (setJoinable) setJoinable(false);
    setButtonJoinable(false);
  }

  const [buttonJoinable, setButtonJoinable] = useState(joinable ?? false);
  const [channel, setChannel] = useState(inputChannel);

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
    initialize();
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
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    textAlign: "center",
    borderRadius: 8,
    width: 100,
    padding: 6,
  },
  join: {
    backgroundColor: "#FFAE27",
  },
  joined: {
    backgroundColor: "lightgreen",
  },
});
