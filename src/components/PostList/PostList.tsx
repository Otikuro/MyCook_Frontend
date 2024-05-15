import { FlatList, StyleSheet } from "react-native";
import { PostType, RecipeType } from "../../types";
import PostPreview from "../PostPreview/PostPreview";

export default function PostList({
  posts,
  setPostSelected,
}: {
  posts: Array<PostType | RecipeType>;
  setPostSelected: React.Dispatch<React.SetStateAction<number>>;
}) {
  const renderItem = ({ item }: { item: PostType }) => (
    <PostPreview
      post={item}
      viewHandler={() => setPostSelected(item.post_id)}
      key={item.post_id}
    />
  );

  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      data={posts}
      renderItem={renderItem}
    />
  );
}
const styles = StyleSheet.create({
  scroll: {
    alignItems: "stretch",
  },
});
