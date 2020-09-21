import * as React from "react";
import {
  StyleSheet,
  SectionList,
  SectionListRenderItem,
  SectionListData,
  ListRenderItem,
} from "react-native";
import Colors from "../constants/Colors";
import { Text, View } from "../components/Themed";
import { FlatList } from "react-native-gesture-handler";
import { Restaurant } from "../components/Restaurant";

const sectionData = {
  breakfast: [2, 2, 2, 2, 2, 2],
  lunch: [2, 2, 2, 2, 2, 2],
  dinner: [2, 2, 2, 2, 2, 2],
};

const sections: SectionListData<keyof typeof sectionData>[] = [
  {
    title: "Breakfast",
    data: ["breakfast"],
  },
  {
    title: "Lunch",
    data: ["lunch"],
  },
  {
    title: "Dinner",
    data: ["dinner"],
  },
];

const renderItem: ListRenderItem<number> = ({ item, index }) => (
  <View key={item + "" + index} style={styles.restaurantContainer}>
    <Restaurant id={item} />
  </View>
);

const renderSection: SectionListRenderItem<keyof typeof sectionData> = ({
  item,
  index,
}) => {
  return (
    <FlatList
      key={item + "" + index}
      horizontal={true}
      data={sectionData[item]}
      renderItem={renderItem}
      keyExtractor={(item) => item + "" + index}
    />
  );
};

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <SectionList<keyof typeof sectionData>
        style={styles.sectionListLayout}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={styles.sectionList}
        sections={sections}
        renderItem={renderSection}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section: { data } }) => (
          <Text style={styles.title}>
            {data[0].charAt(0).toUpperCase() + data[0].slice(1)}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  sectionListLayout: {
    // flex: 1,
    // backgroundColor: "blue",
  },
  sectionList: {
    // flex: 1,
    // backgroundColor: "red",
  },

  title: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: "Inter_900Black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  restaurantContainer: {
    backgroundColor: "transparent",
    padding: 10,
    paddingRight: 5,
    textTransform: "capitalize",
  },
});
