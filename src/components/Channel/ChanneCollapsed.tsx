import { Text, StyleSheet, Pressable } from "react-native";
import Navigation from "../Navigation/Navigation";
import { useNavigation, useRoute } from '@react-navigation/native';
import { addPostToChannel } from "../../HTTP Requests/channel";
import { ChannelType } from "../../types";
import { useState } from "react";

export default function ChannelCollapsed({ channel, post_id, hideChannels }: { channel: ChannelType, post_id: number, hideChannels: ()=>void }) {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.menuButton} onPress={() => { addPostToChannel(channel.channel_id, post_id).then(hideChannels) }}>
      <Text style={styles.buttonText}>{channel.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    height: 32,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    display: 'flex',
    justifyContent: 'center'
  }, buttonText: {
    textAlign: 'center'
  }
});