import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";
import Post from "../Post/Post";
import PostList from "../PostList/PostList";
import { PostType, RecipeType } from "../../types";
import { getAllPost, getPost } from "../../HTTP Requests/post";
import { server } from "../../HTTP Requests/general";

export default function Explorer() {
  const [tabSelected, setTabSelected] = useState(false);
  const [postIdSelected, setPostIdSelected] = useState<number | undefined>();
  const [postSelected, setPostSelected] = useState<undefined | PostType>();
  const [renderedPosts, setRenderedPosts] = useState<
    Array<PostType | RecipeType>
  >([]);

  useEffect(() => {
    console.log(postIdSelected)
    if (postIdSelected != undefined)
      getPost(postIdSelected)
        .then(post => setPostSelected(post))
        .catch(e => console.log(e))
  }, [postIdSelected])

  useEffect(() => {
    let posts = undefined
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
          <PostList posts={renderedPosts} setPostSelected={setPostIdSelected} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "88%",
  },
  scroll: {
    alignItems: "stretch",
  },
});
