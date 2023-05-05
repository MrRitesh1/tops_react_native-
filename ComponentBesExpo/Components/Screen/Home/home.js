import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "../../css/homeCSS";
import { useState, useRef } from "react";
// import Login from "../../image/B.png";
import BodyImage from "../../../image/Map.png";
import Images from "../../../image/images.jpg";
import { RoomData } from "../../../data/prodactData";
import { FlatList } from "react-native";
import { Locations } from "../../../data/locations";
import { SectionList } from "react-native";
import { Itams } from "../../../data/itam";
const Home = () => {
  return (
    <View style={styles.mainBody}>
      <FlatList
        horizontal
        // horizontal={true}
        style={{ marginTop: 100 }}
        data={RoomData}
        renderItem={({ item }) => (
          <View key={item.key}>
            <Text style={styles.componet_b_Text}>{item.room}</Text>
          </View>
        )}
      />

      {/* <FlatList
        horizontal
        // horizontal={true}
        style={{ marginTop: 100 }}
        data={Locations}
        renderItem={({ item }) => (
          <View key={item.key}>
            <Image style={styles.componet_b_Text}>{item.image}</Image>
          </View>
        )}
      /> */}
      <View style={styles.componetBody}>
        <ImageBackground
          // ref={"../../image/Map.png"}
          source={BodyImage}
          style={styles.componet_a}
        ></ImageBackground>
        <View style={styles.componet_b}>
          <View style={[styles.componet_b_body, styles.shado]}>
            <TextInput style={styles.searchBar} placeholder="Welcame" />

            {/* <View style={styles.componet_b_Text_body}> */}

            <FlatList
              horizontal
              // horizontal={true}
              // style={{ width: 200 }}
              data={RoomData}
              renderItem={({ item }) => (
                <View key={item.key} style={styles.componet_b_Text_Body}>
                  <Text>{item.room}</Text>
                </View>
              )}
            />
            {/* </View> */}
          </View>
        </View>
        <View style={styles.componet_C}>
          <View style={[styles.componet_C_body_A, styles.shados]}>
            <TouchableOpacity>
              <View style={styles.componet_C_Carcal}></View>
              <Text style={styles.componet_C_Carcal_text}>Ewlcom</Text>
            </TouchableOpacity>
            {console.log("eeeeeeeeeeeeeeee", Itams)}
            {/* <SectionList
              sections={Itams}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={styles.componet_C_Carcal}></View>
                  <Text style={styles.componet_C_Carcal_text}>{item}</Text>
                </TouchableOpacity>
              )}
            /> */}
          </View>
          <View style={styles.componet_C_body_B}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              Popular Locations
            </Text>
            <Text style={{ opacity: 0.2 }}>
              Let find out what most intenesting things
            </Text>
            {/* <View style={styles.componet_C_body_B_I}>
              <TouchableOpacity>
                <ImageBackground
                  borderRadius={20}
                  source={Images}
                  style={styles.componet_C_body_B_Images}
                >
                  <Text style={styles.componet_C_body_B_Text}>Colorado</Text>
                </ImageBackground>
              </TouchableOpacity> */}
            {/* <FlatList
                data={Locations}
                renderItem={({ item }) => (
                  <ImageBackground
                    borderRadius={20}
                    source={item.image}
                    style={styles.componet_C_body_B_Images}
                  >
                    <Text style={styles.componet_C_body_B_Text}>
                      {item.city}
                    </Text>
                  </ImageBackground>
                )}
              /> */}
          </View>
        </View>
      </View>
    </View>
    // </View>
  );
};

export default Home;
