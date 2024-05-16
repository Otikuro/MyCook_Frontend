import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";
import PostPreview from "../PostPreview/PostPreview";
import Post from "../Post/Post";
import PostList from "../PostList/PostList";
import { PostType, RecipeType } from "../../types";
import { getAllPost } from "../../HTTP Requests/post";
import { server } from "../../HTTP Requests/general";

const data: PostType[] = [
  {
    post_id: 0,
    title: "Titulo",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea saepe at eligendi excepturi. Repudiandae atque fuga facilis temporibus quod harum mollitia aliquam quis unde libero eius architecto inventore quam id magnam, omnis quos natus.",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 1,
    title: "Titulo",
    body: "descipodfniohiuohouhooij consectetur adipisicing elit. Ab ea saepe at eligendi excepturi.",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 2,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Paco" },
    votes: 20,
  },
  {
    post_id: 3,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 4,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 5,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 6,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 7,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 8,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 9,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 10,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 11,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 12,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 13,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 14,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 15,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
  {
    post_id: 16,
    title: "Titulo",
    body: "descipodfniohiuohouhooij",
    user: { name: "Nombre" },
    votes: 20,
  },
];

export default function Explorer() {
  const [tabSelected, setTabSelected] = useState(false);
  const [postSelected, setPostSelected] = useState<number | undefined>();
  const [renderedPosts, setRenderedPosts] = useState<
    Array<PostType | RecipeType>
  >([]);

  useEffect(() => {
    getAllPost()
      .then((posts) => {
        posts.forEach((post) => {
          post.images.forEach((image) => {
            image.url = server + "api/image/" + image.url;
            console.log(image.url);
          });
          console.log(post.images);
        });
        setRenderedPosts(posts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      {postSelected !== undefined ? (
        <Post
          post={renderedPosts.find((post) => (post.post_id = postSelected))}
        />
      ) : (
        <>
          <Searcher />
          <Selector
            type={"Search"}
            tabSelected={tabSelected}
            selectorHandler={setTabSelected}
          />
          <PostList posts={renderedPosts} setPostSelected={setPostSelected} />
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
