import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../css/homeCSS";
import { useState } from "react";
// import Login from "../../image/B.png";
import BodyImage from "../Screen/Map.png";
import Images from "../Screen/images.jpg";
import { RoomData } from "../../data/prodactData";
import { FlatList } from "react-native";
import { Locations } from "../../data/locations";
import { SectionList } from "react-native";
import { Itams } from "../../data/itam";
const Home = () => {
  return (
    <View style={styles.mainBody}>
      <View style={styles.componetBody}>
        <ImageBackground
          source={BodyImage}
          style={styles.componet_a}
        ></ImageBackground>
        <View style={styles.componet_b}>
          <View style={[styles.componet_b_body, styles.shado]}>
            <TextInput style={styles.searchBar} placeholder="Welcame" />
            <ScrollView>
              <View style={styles.componet_b_Text_body}>
                <FlatList
                  // horizontal
                  data={RoomData}
                  renderItem={({ item }) => (
                    <View key={item.key}>
                      <Text style={styles.componet_b_Text}>{item.room}</Text>
                    </View>
                  )}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.componet_C}>
          <View style={[styles.componet_C_body_A, styles.shados]}>
            <TouchableOpacity>
              <View style={styles.componet_C_Carcal}></View>
              <Text style={styles.componet_C_Carcal_text}>Ewlcom</Text>
            </TouchableOpacity>
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
            <View style={styles.componet_C_body_B_I}>
              <TouchableOpacity>
                <ImageBackground
                  borderRadius={20}
                  source={Images}
                  style={styles.componet_C_body_B_Images}
                >
                  <Text style={styles.componet_C_body_B_Text}>Colorado</Text>
                </ImageBackground>
              </TouchableOpacity>
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
    </View>
  );
};

export default Home;
