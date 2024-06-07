import React, { useRef, useState } from "react";
import { ImageType } from "../../types";
import {
  Image,
  StyleSheet,
  Text,
  FlatList,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import AddImageButton from "./AddImageButton";
import { server } from "../../HTTP Requests/general";

// Componente funcional ImageSlider
export default function ImageSlider({
  images,
  setImages,
  width = 1,
}: {
  images: ImageType[]; // Lista de imágenes
  setImages?: React.Dispatch<React.SetStateAction<ImageType[]>>; // Función para actualizar la lista de imágenes (opcional)
  width: number; // Ancho del slider (porcentaje de la pantalla)
}) {
  // Estado local para almacenar el índice de la imagen actualmente renderizada
  const [renderedIndex, setRenderedIndex] = useState(0);

  // Función para añadir una nueva imagen a la lista
  const addImages = setImages != undefined;
  function addImage(newImage: ImageType) {
    if (setImages) setImages([...images, newImage]);
  }

  // Función para eliminar la imagen actual
  function deleteCurrentImage() {
    setImages(images.filter((image, index) => index != renderedIndex));
  }

  // Función para renderizar una imagen individual
  function renderImage({
    item,
  }: {
    item: ImageType | { isButton: true; image_id: "button" };
  }) {
    if (item.hasOwnProperty("isButton"))
      // Renderiza un botón para añadir imagen si es necesario
      return <AddImageButton addImageFunction={addImage} width={width} />;
    const image = item as ImageType;
    const url = image.url.includes("file:")
      ? image.url
      : image.url.includes("http")
      ? image.url
      : server + "api/image/" + image.url;
    return (
      <Image
        alt={image.alt}
        source={{ uri: url }} // URL de la imagen
        style={[
          styles.image,
          { width: Dimensions.get("window").width * width }, // Ancho de la imagen
        ]}
        key={image.image_id} // Clave única para la imagen
      />
    );
  }

  // Lista de datos a ser mostrados en el FlatList
  let data: Array<ImageType | { isButton: true; image_id: "button" }> = [
    ...images,
  ];
  if (addImages) data.push({ isButton: true, image_id: "button" }); // Añade un botón para añadir imagen al final de la lista de datos

  // Callback para detectar cambios en las imágenes visibles
  const onViewableItemsChanged = ({ viewableItems }) => {
    let viewableIndex = viewableItems.find((item) => item.isViewable);
    setRenderedIndex(viewableIndex?.index ?? 0);
  };
  const onViewableItemsCallback = useRef(onViewableItemsChanged);

  return (
    <View style={styles.container}>
      {/* Información sobre la imagen actual */}
      {images.length > 0 && renderedIndex < images.length && (
        <>
          <Text style={[styles.info, styles.index]}>
            {renderedIndex + 1}/{images.length}
          </Text>
          {setImages && (
            <Pressable
              style={[styles.info, styles.delete]}
              onPress={deleteCurrentImage}
            >
              <Text style={styles.deleteText}>x</Text>
            </Pressable>
          )}
        </>
      )}
      {/* FlatList para mostrar las imágenes */}
      <FlatList
        horizontal // Desplazamiento horizontal
        pagingEnabled // Paginación activada
        onViewableItemsChanged={onViewableItemsCallback.current} // Callback para detectar cambios en las imágenes visibles
        showsHorizontalScrollIndicator={false} // Oculta el indicador de desplazamiento horizontal
        data={data} // Datos a ser mostrados
        renderItem={renderImage} // Función para renderizar cada elemento
        keyExtractor={(item) => item.image_id} // Función para obtener la clave única de cada elemento
        contentContainerStyle={{ display: "flex", flexGrow: 1 }} // Estilo del contenedor de contenido
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    width: "100%",
    overflow: "scroll", // Allow horizontal scroll
    marginVertical: 8,
  },
  image: {
    //width: "100%", // Fixed width for each image item
    aspectRatio: 1,
  },
  info: {
    position: "absolute",
    zIndex: 1,
    top: 8,
    fontSize: 15,
    textAlign: "center",
    verticalAlign: "middle",
    fontWeight: "800",
  },
  index: {
    left: 8,
    textAlign: "center",
    backgroundColor: "rgba(200,200,200,.5)",
    borderRadius: 16,
    paddingHorizontal: 8,
  },
  delete: {
    right: 8,
    backgroundColor: "rgba(255,0,0,.5)",
    borderRadius: 12,
    width: 24,
    height: 24,
  },
  deleteText: {
    borderRadius: 12,
    fontSize: 15,
    textAlign: "center",
    verticalAlign: "middle",
    fontWeight: "800",
  },
});
