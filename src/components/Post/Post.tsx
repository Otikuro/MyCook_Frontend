import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../styleConstants";
import ImageSlider from "../ImageSlider/ImageSlider";
import { PostType } from "../../types";

const USER_IMAGE = require("../../../assets/USER_IMAGE.png");
const DOWN_ARROW_IMAGE = require("../../../assets/DOWN_ARROW_IMAGE.png");
const UP_ARROW_IMAGE = require("../../../assets/UP_ARROW_IMAGE.png");

export default function Post({
  post,
  isPreviewed = false,
  viewHandler,
}: {
  post: PostType;
  isPreviewed?: boolean;
  viewHandler?: () => void;
}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.body} onPress={viewHandler}>
        <Text style={styles.title}>{post.title}</Text>

        <View style={styles.description}>
          <Text>{post.body}</Text>
        </View>

        {post.images != undefined && (
          <View style={styles.postImage}>
            {!isPreviewed && <ImageSlider images={post.images} width={0.88} />}
            {isPreviewed && (
              <Image
                style={styles.postImage}
                source={{ uri: post.images[0].url }}
              />
            )}
          </View>
        )}
        {/* <>
            {!isPreviewed && <ImageSlider images={post.images} width={0.88} />}
            {isPreviewed && (
              <Image
                style={styles.postImage}
                source={{ uri: post.images[0].url }}
              />
            )}
          </> */}
      </Pressable>

      <View style={styles.footer}>
        <Pressable style={styles.user}>
          <Image style={styles.iconImage} source={USER_IMAGE} />
          <Text style={styles.userName}>{post.user.name}</Text>
        </Pressable>

        <View style={styles.score}>
          <Pressable>
            <Image style={styles.iconImage} source={UP_ARROW_IMAGE} />
          </Pressable>

          <Text style={styles.scoreText}>{post.votes}</Text>

          <Pressable>
            <Image style={styles.iconImage} source={DOWN_ARROW_IMAGE} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.postBorder,
    paddingVertical: 8,
    paddingHorizontal: "6%",
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  description: {
    width: "100%",
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
    marginBottom: 14,
    backgroundColor: COLORS.lightGrey,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    marginLeft: 8,
    fontSize: 18,
  },
  score: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 18,
    marginLeft: 4,
    marginRight: 4,
    fontWeight: "bold",
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
  },
});
