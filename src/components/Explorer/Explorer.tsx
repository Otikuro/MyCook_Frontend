import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ChannelType, PostType, RecipeType } from "../../types";
import { getAllPost, getPost } from "../../HTTP Requests/post";
import { server } from "../../HTTP Requests/general";
import { getAllChannels } from "../../HTTP Requests/channel";
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";
import Post from "../Post/Post";
import PostList from "../PostList/PostList";
import Channel from "../Channel/Channel";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getPostLike } from "../../HTTP Requests/post";

const renderItem = ({ item }: { item: any }) => (<Channel channel={item} />);

export default function Explorer() {
  const navigation = useNavigation();

  const [tabSelected, setTabSelected] = useState(false);
  const [renderedPosts, setRenderedPosts] = useState<Array<PostType>>([]);
  const [channels, setChannels] = useState<Array<ChannelType>>([]);
  const [changed, setChanged] = useState<boolean>(false);



  function reload() {
    getAllPost()
      .then((posts) => setRenderedPosts(posts))
      .catch(e => console.log(e))
    getAllChannels()
      .then((channels) => setChannels(channels))
      .catch((e) => console.log(e));
    setChanged(true)
  }

  useEffect(
    () => {
      reload()
    },
    []
  );

  function searchHandler(inputText: string) {
    getPostLike(inputText)
      .then((posts) => setRenderedPosts(posts))
      .catch(e => console.log(e));
  }

  return (
    <View style={styles.container}>
      <>
        <Searcher searchHandler={searchHandler} />

        <Selector
          type={"Search"}
          tabSelected={tabSelected}
          selectorHandler={setTabSelected}
        />

        {tabSelected ? (
          <FlatList contentContainerStyle={styles.scroll} data={channels} renderItem={renderItem} />
        ) : (
          <PostList posts={renderedPosts} onRefresh={reload} />
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  scroll: {
    alignItems: "stretch",
  },
});
