import { useEffect, useState } from "react";
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

const renderItem = ({ item }: { item: any }) => (<Channel title={item.title} />);

export default function Explorer() {
  const [tabSelected, setTabSelected] = useState(false);
  const [postIdSelected, setPostIdSelected] = useState<number | undefined>();
  const [postSelected, setPostSelected] = useState<undefined | PostType>();
  const [renderedPosts, setRenderedPosts] = useState<
    Array<PostType | RecipeType>
  >([]);
  const [channels, setChannels] = useState<Array<ChannelType>>([]);

  useEffect(() => {
    console.log(postIdSelected)
    if (postIdSelected != undefined)
      getPost(postIdSelected)
        .then(post => setPostSelected(post))
        .catch(e => console.log(e))
  }, [postIdSelected])

  useEffect(() => {
    getAllPost()
      .then((posts) => {
        posts.forEach((post) => {
          if (post.images)
            post.images.forEach((image) => {
              image.url = server + "api/image/" + image.url;
            });
        });

        setRenderedPosts(posts);

      }).catch(e => console.log(e))

  }, []);

  useEffect(
    () => {
      getAllChannels().then(
        (channels) => setChannels(channels)
      ).catch(
        (e) => console.log(e)
      );
    },
    []
  );

  return (
    <View style={styles.container}>
      {postSelected ? (
        <Post
          post={postSelected}
        />
      ) : (
        <>
          <Searcher />

          <Selector
            type={"Search"}
            tabSelected={tabSelected}
            selectorHandler={setTabSelected}
          />

          {tabSelected ? (
            <FlatList contentContainerStyle={styles.scroll} data={channels} renderItem={renderItem} />
          ) : (
            <PostList posts={renderedPosts} setPostSelected={setPostIdSelected} />
          )}
        </>
      )}
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
