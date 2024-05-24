import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { COLORS } from "../../styleConstants";
import ImageSlider from "../ImageSlider/ImageSlider";
import { PostType } from "../../types";
import UserCollapsed from "../UserCollapsed/UserCollapsed";
import Comment from "../Comment/Comment";
import { useState } from "react";
import { getPost, votePost } from "../../HTTP Requests/post";
import { useNavigation, useRoute } from "@react-navigation/native";
import { server } from "../../HTTP Requests/general";
import Recipe from "../Recipe/Recipe";


const USER_IMAGE = require("../../../assets/USER_IMAGE.png");
const DOWN_ARROW_IMAGE = require("../../../assets/DOWN_ARROW_IMAGE.png");
const UP_ARROW_IMAGE = require("../../../assets/UP_ARROW_IMAGE.png");

export default function Post({
  post,
  isPreviewed = false,
}: {
  post: PostType;
  isPreviewed?: boolean;
}) {

  const navigation = useNavigation();
  const route = useRoute();
  if (route.params && route.params.post) {
    post = route.params.post;
  }
  if(isPreviewed && post.images){
    const image = post.images[0]
    post.images[0].url = image.url.includes('file:')?image.url: (image.url.includes('http')?image.url:server+'api/image/'+image.url)
  }
  const [voted, setVoted] = useState<-1 | 0 | 1>((post.voted == null ? 0 : (post.voted == 0 ? -1 : 1)))
  const [renderedVotes, setRenderedVotes] = useState<number>(post.votes)

  function vote(liked: boolean) {
    let lastVoted = voted
    let newVoted = 0
    let votesAdded = 0
    if (liked) {
      newVoted = 1
      votesAdded = 1
    }
    else {
      newVoted = -1
      votesAdded = -1
    }
    if (lastVoted == newVoted) {
      setVoted(0)
      votesAdded *= -1
    } else {
      setVoted(newVoted == 1 ? 1 : -1)
      votePost(post.post_id, liked)
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }
    if (lastVoted == newVoted * -1) {
      votesAdded *= 2
    }
    setRenderedVotes(renderedVotes + votesAdded)
  }

  if(!isPreviewed)console.log(post)

  return (
    <ScrollView style={styles.main} contentContainerStyle={styles.second}>
      <View style={styles.container}>
        <Pressable style={styles.body} onPress={isPreviewed?()=>getPost(post.post_id).then((post)=>navigation.navigate('Post', {post:post})):()=>{}}>
          <Text style={styles.title}>{post.title}</Text>

          <View style={styles.description}>
            <Text>{post.body}</Text>
          </View>

          {post.images != undefined && (
            <>{!isPreviewed &&
              <View style={[styles.postImage]} >
                <ImageSlider images={post.images} width={0.88} />
              </View>}
              {isPreviewed && post.images[0] != undefined && (
                <Image
                  style={styles.postImage}
                  source={{ uri: post.images[0].url }}
                />
              )}
            </>
          )}
        </Pressable>

        {post.recipe && <Recipe recipe={post.recipe} />}

        <View style={styles.footer}>
          <UserCollapsed name={post.user.name} />

          <View style={styles.score}>
            <Pressable onPress={() => vote(true)}>
              <Image style={[styles.iconImage, { tintColor: voted == 1 ? 'green' : 'black' }]} source={UP_ARROW_IMAGE} />
            </Pressable>

            <Text style={styles.scoreText}>{renderedVotes}</Text>

            <Pressable onPress={() => vote(false)}>
              <Image style={[styles.iconImage, { tintColor: voted == -1 ? 'red' : 'black' }]} source={DOWN_ARROW_IMAGE} />
            </Pressable>
          </View>
        </View>
      </View>

      {post.comments != undefined && (
        <ScrollView style={styles.scroll} >
          {!isPreviewed && post.comments.map((comment, index) => {
            return (<Comment key={index} comment_id={comment.comment_id} body={comment.body} user={comment.user} date={comment.date} />)
          })}
        </ScrollView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%'
  },
  second:{
    paddingVertical: 8,
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: "6%",
    borderBottomColor: COLORS.postBorder,
    paddingVertical: 8,
    flexDirection: "column",
    alignItems: "center"
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
  scroll: {
    width: '100%'
  }
});
