import React, { useState } from "react";
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

export default function ImageSlider({
  images,
  setImages,
  width = 1,
}: {
  images: ImageType[];
  setImages?: React.Dispatch<React.SetStateAction<ImageType[]>>;
  width: number; //percentage of the screen covered
}) {
  const [renderedIndex, setRenderedIndex] = useState(0);
  const addImages = setImages != undefined;

  function addImage(newImage: ImageType) {
    if (setImages) setImages([...images, newImage]);
  }
  function deleteCurrentImage() {
    setImages(images.filter((image, index) => index != renderedIndex));
  }

  function renderImage({
    item,
  }: {
    item: ImageType | { isButton: true; imageId: string };
  }) {
    if (item.hasOwnProperty("isButton"))
      return <AddImageButton addImageFunction={addImage} width={width} />;
    const image = item as ImageType;
    return (
      <Image
        alt={image.alt}
        source={{ uri: image.source }}
        style={[
          styles.image,
          { width: Dimensions.get("window").width * width },
        ]}
      />
    );
  }
  let data: Array<ImageType | { isButton: true; imageId: "button" }> = [
    ...images,
  ];
  if (addImages) data.push({ isButton: true, imageId: "button" });

  const onViewableItemsChanged = (viewableItems) => {
    let viewableIndex = viewableItems.find((item) => item.isViewable);
    setRenderedIndex(viewableIndex?.index ?? 0);
  };

  return (
    <View style={styles.container}>
      {images.length > 0 && renderedIndex < images.length && (
        <>
          <Text style={[styles.info, styles.index]}>
            {renderedIndex + 1}/{images.length}
          </Text>
          <Pressable
            style={[styles.info, styles.delete]}
            onPress={deleteCurrentImage}
          >
            <Text style={styles.deleteText}>x</Text>
          </Pressable>
        </>
      )}
      <FlatList
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
        data={data}
        renderItem={renderImage}
        keyExtractor={(item) => item.imageId}
        contentContainerStyle={{ display: "flex", flexGrow: 1 }} // Allow content to grow horizontally
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    overflow: "scroll", // Allow horizontal scroll
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
