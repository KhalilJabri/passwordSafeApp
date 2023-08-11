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
// import { useNavigation } from "@react-navigation/native";

import Item from "../components/Item";

const Acceuil = () => {
  const [name, setName] = useState("khalil jabri");
  const [description, setDescription] = useState("Hi everyOne");
  const [image, setImage] = useState("https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1691013223~exp=1691013823~hmac=d2290931bc11d4054255a719623f29c760ee548dfac279abe2370aae09bf95d5");
  const [search, setSearch] = useState("");

  // const navigation = useNavigation();

  const renderAccountItem = (itemData) =>  {
    return (
        <Item email={itemData.item.email}
            url={itemData.item.url}
            image={itemData.item.image}
            // navigation={navigation}
            />
    )
  }

  const data = [
    {'id': '1',
    'url': 'www.google.com',
    'image': 'https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1691070035~exp=1691070635~hmac=c0e2baaf11056ce457b31f27e0fd68423d3a0bcfc115e58a8ba37f1721bc4015',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
    {'id': '1',
    'url': 'www.google.com',
    'image': '',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
    {'id': '1',
    'url': 'www.google.com',
    'image': '',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
    {'id': '1',
    'url': 'www.google.com',
    'image': '',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
    {'id': '1',
    'url': 'www.google.com',
    'image': '',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
    {'id': '1',
    'url': 'www.google.com',
    'image': '',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
    {'id': '1',
    'url': 'www.google.com',
    'image': '',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
    {'id': '1',
    'url': 'www.google.com',
    'image': '',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
    {'id': '1',
    'url': 'www.google.com',
    'image': '',
    'email': 'exemple@gmail.com',
    'password': 'ASQR17QE'},
  ]

  return (
    // // <TouchableWithoutFeedback style={{flex: 1}} onPress={()=> Keyboard.dismiss()}>
    // {/* // <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS ==='ios' ? 'padding': ''}>
    // //     <ScrollView contentContainerStyle={{flex: 1}} bounces={false}> */}
      <View style={styles.container}>
        <TouchableOpacity style={styles.profile}>
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
          {/* <View style={{height: '50%'}}> */}
            <FlatList
              keyExtractor={(item, index) => index}
              data={data}
              renderItem={renderAccountItem}
            />
          {/* </View> */}
          {/* <TouchableOpacity style={{position: "absolute", bottom: '10%', right: '15%', backgroundColor: 'pink'}}>
            <EvilIcons name={"search"} size={40} color={"#252525"} />
          </TouchableOpacity> */}
      </View>
    // {/* //   </ScrollView>
    // //   </KeyboardAvoidingView> */}
    // {/* </TouchableWithoutFeedback> */}
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    // backgroundColor: 'yellow',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: "7%",
    height: "11%",
  },
  profileContent: {
    // backgroundColor: 'yellow',
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
    // flex: 2,
    // backgroundColor: 'pink',
    flexDirection: 'column',
    justifyContent: "space-between",
    // paddingVertical: 10,
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
    // backgroundColor: 'pink',
    paddingHorizontal: "5%",
  },
  wordTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8c8c8c",
  },
});

export default Acceuil;
