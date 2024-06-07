import { FlatList, StyleSheet } from "react-native";
import { PostType } from "../../types";
import Post from "../Post/Post";
import { useRoute } from "@react-navigation/native";

export default function PostList({
  posts = [],
  onRefresh,
}: {
  posts: Array<PostType>; // Un array de objetos de tipo PostType, que contiene los posts a mostrar
  onRefresh: () => void; // Una función de retorno de llamada para manejar el evento de refresco
}) {
  // Obtenemos la ruta actual de la navegación
  const route = useRoute();

  // Si hay parámetros en la ruta y esos parámetros incluyen posts, actualizamos la lista de posts
  if (route.params && route.params.posts) {
    posts = route.params.posts;
  }

  // Función para renderizar cada item de la lista
  const renderItem = ({ item }: { item: PostType }) => {
    // Retorna el componente Post con los datos del post actual
    return <Post inputPost={item} isPreviewed key={item.post_id} />;
  };

  // Retorna una lista plana (FlatList) de posts
  return (
    <FlatList
      contentContainerStyle={styles.scroll}
      data={posts} // Los datos que serán renderizados en la lista
      renderItem={renderItem} // La función para renderizar cada item de la lista
      onRefresh={onRefresh} // Función de retorno de llamada para el evento de refresco
      refreshing={false} // Indica si la lista está actualmente refrescándose
    />
  );
}

const styles = StyleSheet.create({
  scroll: {
    alignItems: "stretch",
  },
});
