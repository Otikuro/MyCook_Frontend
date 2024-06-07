import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ChannelType, PostType, RecipeType } from "../../types";
import { getAllPost, getPost } from "../../HTTP Requests/post";
import { getAllChannels } from "../../HTTP Requests/channel";
import Searcher from "../Searcher/Searcher";
import Selector from "../Selector/Selector";
import PostList from "../PostList/PostList";
import Channel from "../Channel/Channel";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getPostLike } from "../../HTTP Requests/post";

// Función para renderizar un elemento de la lista de canales
const renderItem = ({ item }: { item: any }) => <Channel channel={item} />;

// Componente funcional Explorer
export default function Explorer() {
  const navigation = useNavigation(); // Uso del hook useNavigation para obtener la instancia de navegación

  // Estados locales para controlar la pestaña seleccionada, los posts renderizados, los canales y si ha habido cambios
  const [tabSelected, setTabSelected] = useState(false);
  const [renderedPosts, setRenderedPosts] = useState<Array<PostType>>([]);
  const [channels, setChannels] = useState<Array<ChannelType>>([]);
  const [changed, setChanged] = useState<boolean>(false);

  // Función para recargar los posts y los canales
  function reload() {
    // Obtiene todos los posts
    getAllPost()
      .then((posts) => setRenderedPosts(posts))
      .catch((e) => console.log(e));
    // Obtiene todos los canales
    getAllChannels()
      .then((channels) => setChannels(channels))
      .catch((e) => console.log(e));
    setChanged(true); // Indica que ha habido cambios
  }

  // Efecto para cargar los posts y los canales al montar el componente
  useEffect(() => {
    reload();
  }, []);

  // Manejador de búsqueda
  function searchHandler(inputText: string) {
    // Obtiene los posts que coinciden con el texto de búsqueda
    getPostLike(inputText)
      .then((posts) => setRenderedPosts(posts))
      .catch((e) => console.log(e));
  }

  return (
    <View style={styles.container}>
      <>
        {/* Componente de búsqueda */}
        <Searcher searchHandler={searchHandler} />

        {/* Selector de pestañas */}
        <Selector
          type={"Search"}
          tabSelected={tabSelected}
          selectorHandler={setTabSelected}
        />

        {/* Renderizado de la lista de canales o de los posts según la pestaña seleccionada */}
        {tabSelected ? (
          <FlatList
            contentContainerStyle={styles.scroll}
            data={channels}
            renderItem={renderItem}
          />
        ) : (
          <PostList posts={renderedPosts} onRefresh={reload} />
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  scroll: {
    alignItems: "stretch"
  },
});
