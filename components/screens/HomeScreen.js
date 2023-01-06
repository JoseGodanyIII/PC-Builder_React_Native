import React ,{ useState }  from "react";
import {SafeAreaView,ScrollView,StyleSheet,Text,View,TouchableOpacity,Image,Dimensions,} from "react-native";
import colors from "../config/colors";
import spacing from "../config/spacing";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import SearchField from "../extras/SearchField";
import Categories from "../extras/Categories";
import parts from "../config/parts";

const HomeScreen = () => {

    const [activeCategoryId, setActiveCategoryId] = useState(null);

    const { width } = Dimensions.get("window");


    return (
        <SafeAreaView>
          <ScrollView
            style={{
              padding: spacing,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: spacing,
                  overflow: "hidden",
                  width: spacing * 4,
                  height: spacing * 4,
                }}
              >
                <BlurView
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="menu"
                    size={spacing * 2.5}
                    color={colors.secondary}
                  />
                </BlurView>
              </TouchableOpacity>
              <View
                style={{
                  width: spacing * 4,
                  height: spacing * 4,
                  overflow: "hidden",
                  borderRadius: spacing,
                }}
              >
              </View>
            </View>
            <View style={{ width: "80%", marginVertical: spacing * 3 }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: spacing * 3.5,
                  fontWeight: "600",
                }}
              >
                Find the best PC Parts
              </Text>
            </View>
            <SearchField />
            <Categories onChange={(id) => setActiveCategoryId(id)} />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {parts
                .filter((parts) => {
                  if (activeCategoryId === null) {
                    return true;
                  }
                  return parts.categoryId === activeCategoryId;
                })
                .map((parts) => (
                  <View
                    key={parts.id}
                    style={{
                      width: width / 2 - spacing * 2,
                      marginBottom: spacing,
                      borderRadius: spacing * 2,
                      overflow: "hidden",
                    }}
                  >
                    <BlurView
                      tint="dark"
                      intensity={95}
                      style={{
                        padding: spacing,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          height: 150,
                          width: "100%",
                        }}
                      >
                         {/* <Image
                          source={parts.image}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: spacing * 2,
                          }}
                        />  */}
                        <View
                          style={{
                            position: "absolute",
                            right: 0,
                            borderBottomStartRadius: spacing * 3,
                            borderTopEndRadius: spacing * 3,
                            overflow: "hidden",
                          }}
                        >
                          <BlurView
                           
                            tint="dark"
                            intensity={70}
                            style={{ 
                            flexDirection: "row",
                            padding: spacing - 2,
                            }}
                          >
                            <Ionicons
                              style={{
                                marginLeft: spacing / 2,
                              }}
                              name="star"
                              color={colors.primary}
                              size={spacing * 1.7}
                            />
                            <Text
                              style={{
                                color: colors.white,
                                marginLeft: spacing / 2,
                              }}
                            >
                              {parts.rating}
                            </Text>
                          </BlurView>
                        </View>
                      </TouchableOpacity>
                      <Text
                        numberOfLines={2}
                        style={{
                          color: colors.white,
                          fontWeight: "600",
                          fontSize: spacing * 1.7,
                          marginTop: spacing,
                          marginBottom: spacing / 2,
                        }}
                      >
                        {parts.name}
                      </Text>
                      <View
                        style={{
                          marginVertical: spacing / 2,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={{
                              color: colors.primary,
                              marginRight: spacing / 2,
                              fontSize: spacing * 1.6,
                            }}
                          >
                            $
                          </Text>
                          <Text
                            style={{ color: colors.white, fontSize: spacing * 1.6 }}
                          >
                            {parts.price}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: colors.primary,
                            padding: spacing / 2,
                            borderRadius: spacing,
                          }}
                        >
                          <Ionicons
                            name="add"
                            size={spacing * 2}
                            color={colors.white}
                          />
                        </TouchableOpacity>
                      </View>
                    </BlurView>
                  </View>
                ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    };

export default HomeScreen;

const styles = StyleSheet.create({});

