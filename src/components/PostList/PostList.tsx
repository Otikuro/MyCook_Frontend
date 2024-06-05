import { FlatList, StyleSheet } from "react-native";
import { PostType, RecipeType } from "../../types";
import Post from "../Post/Post";
import { useRoute } from "@react-navigation/native";

export default function PostList({
  posts= [],
  onRefresh
} : {
  posts: Array<PostType>;
  onRefresh: Function
}) {
  const route = useRoute();
  
  if (route.params && route.params.posts) {
    posts = route.params.posts;
  }
  
  const renderItem = ({ item }: { item: PostType }) => {
    return (
    <Post
      inputPost={item}
      isPreviewed
      key={item.post_id}
    />
  )};

  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      data={posts}
      renderItem={renderItem}
      onRefresh={onRefresh}
      refreshing={false}
    />
  );
}
const styles = StyleSheet.create({
  scroll: {
    alignItems: "stretch",
  },
});
