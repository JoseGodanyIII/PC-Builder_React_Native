import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  import categories from "../config/categories";
  import colors from "../config/colors";
  import spacing from "../config/spacing";
  
  const Categories = ({ onChange }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(null);
  
    const handlePress = (id) => {
      setActiveCategoryId(id);
      onChange(id);
    };
    return (
        <FlatList
          horizontal={true}
          data={categories}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginVertical: spacing }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handlePress(item.id)}
              style={{ marginRight: spacing * 2, alignItems: "center" }}
            >
              <Text
                style={[
                  { color: colors.secondary, fontSize: spacing * 2 },
                  activeCategoryId === item.id && { color: colors.primary },
                ]}
              >
                {item.name}
              </Text>
              {activeCategoryId === item.id && (
                <View
                  style={{
                    height: spacing,
                    width: spacing,
                    backgroundColor: colors.primary,
                    borderRadius: spacing / 2,
                    marginTop: spacing / 2,
                  }}
                />
              )}
            </TouchableOpacity>
          )}
        />
      );
  }

export default Categories;

const styles = StyleSheet.create({});


