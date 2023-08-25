import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardEventListener
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";

import Item from "../components/Item";
import { accountData as data } from "../data/UrlData";

const Acceuil = () => {
  const [name, setName] = useState("khalil jabri");
  const [description, setDescription] = useState("Hi everyOne");
  const [image, setImage] = useState("https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1691013223~exp=1691013823~hmac=d2290931bc11d4054255a719623f29c760ee548dfac279abe2370aae09bf95d5");
  const [search, setSearch] = useState("");

  const navigation = useNavigation();

  const renderAccountItem = (itemData) => {
    return (
      <Item email={itemData.item.email}
        url={itemData.item.url}
        image={itemData.item.image}
      // navigation={navigation}
      />
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.profile}>
        <View style={styles.profileContent}>
          <Image source={{ uri: image }} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text>{name}</Text>
            <Text>{description}</Text>
          </View>
        </View>
        <View style={styles.profileIcon}>
          <MaterialIcons
            name={"arrow-forward-ios"}
            size={18}
            color={"#252525"}
          />
        </View>
      </TouchableOpacity>
      <ScrollView  style={{ height: "100%" }} >
        <View style={styles.search}>
          <EvilIcons name={"search"} size={21} color={"#252525"} />
          <TextInput
            style={styles.input}
            placeholder="Search account"
            onChangeText={(text) => setSearch(text)}
            value={search}
          />
        </View>

        <View style={styles.title}>
          <Text style={styles.wordTitle}>Recent Saved</Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => index}
          data={data}
          renderItem={renderAccountItem}
          scrollEnabled={false}
          contentContainerStyle={{
            paddingBottom: 20,
            // backgroundColor: 'pink'
          }}
        />
      </ScrollView >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: "7%",
    height: "11%",
  },
  profileContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  profileImage: {
    height: "100%",
    width: "15%",
    borderRadius: 50,
    marginRight: 10,
  },
  profileDetails: {
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  profileIcon: {
    paddingRight: 10,
  },
  search: {
    backgroundColor: "#e6e6e6",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#8c8c8c",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: "5%",
    marginVertical: 20,
    marginHorizontal: "6%",
  },
  title: {
    paddingHorizontal: "5%",
  },
  wordTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8c8c8c",
  },
});

export default Acceuil;
