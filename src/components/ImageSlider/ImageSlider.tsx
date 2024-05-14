import React, { useState } from "react";
import { ImageType } from "../../types";
import {
  Image,
  StyleSheet,
  Text,
  FlatList,
  View,
  Dimensions,
} from "react-native";
import AddImageButton from "./AddImageButton";

export default function ImageSlider({
  images,
  setImages,
}: {
  images: ImageType[];
  setImages?: React.Dispatch<React.SetStateAction<ImageType[]>>;
}) {
  const [renderedIndex, setRenderedIndex] = useState(0);
  const addImages = setImages != undefined;

  function addImage(newImage: ImageType) {
    //@ts-ignore
    if (addImages) setImages([...images, newImage]);
  }

  function renderImage({
    item,
  }: {
    item: ImageType | { isButton: true; imageId: string };
  }) {
    if (item.hasOwnProperty("isButton"))
      return <AddImageButton addImageFunction={addImage} />;
    const image = item as ImageType;
    return (
      <Image
        alt={image.alt}
        source={{ uri: image.source }}
        style={styles.image}
      />
    );
  }
  let data: Array<ImageType | { isButton: true; imageId: "button" }> = [
    ...images,
  ];
  if (addImages) data.push({ isButton: true, imageId: "button" });

  return (
    <View style={styles.container}>
      {images.length > 0 && renderedIndex < images.length && (
        <Text style={styles.index}>
          {renderedIndex + 1}/{images.length}
        </Text>
      )}
      <FlatList
        horizontal
        pagingEnabled
        onViewableItemsChanged={({ viewableItems, changed }) => {
          let viewableIndex = viewableItems.find((item) => item.isViewable);
          setRenderedIndex(viewableIndex?.index ?? 0);
        }}
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
        data={data}
        renderItem={renderImage}
        keyExtractor={(item) => item.imageId}
        contentContainerStyle={{ flexGrow: 1 }} // Allow content to grow horizontally
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll", // Allow horizontal scroll
  },
  image: {
    width: Dimensions.get("window").width, // Fixed width for each image item
    height: "100%",
  },
  index: {
    position: "absolute",
    zIndex: 1,
    top: 4,
    left: 4,
    textAlign: "center",
    backgroundColor: "rgba(200,200,200,.5)",
    borderRadius: 16,
    paddingHorizontal: 8,
  },
});
