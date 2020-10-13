import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { View, Text } from "./Themed";
import { useRestaurantQuery, Restaurant as IRestaurant } from "../data";
import { getPreciseDistance } from "geolib";
import { useLocation, LocationInfo } from "../hooks/useLocation";
import {useAppContext} from "../contexts/AppContext";

interface RestaurantProps {
  id: number;
}

const RestaurantTop: React.FunctionComponent<{ restaurant: IRestaurant }> = ({
  restaurant: { bkgUrl, logoUrl },
}) => (
  <ImageBackground source={{ uri: bkgUrl }} style={styles.resataurantCover}>
    <View style={styles.coverTop}></View>
    <View style={styles.coverBottom}>
      <View style={styles.logoContainer}>
        <ImageBackground
          source={{ uri: logoUrl }}
          style={styles.resataurantLogo}
        ></ImageBackground>
      </View>
    </View>
  </ImageBackground>
);

const RestaurantBottom: React.FunctionComponent<{
  restaurant: IRestaurant;
}> = ({ restaurant: { name, address, type } }) => {
  const location = useLocation(true)
  const distance = React.useMemo(() => getDistance(address, location), [
    location.latitude, location.longitude,
  ]);
  return (
    <View style={styles.bottomPanel}>
      <Text style={styles.restaurantName}>
        {name} - {type}
      </Text>
      {distance && (
        <Text style={styles.restaurantName}>
          {distance[0]}
          {distance[1]}
        </Text>
      )}
    </View>
  );
};

const getDistance = (point: string, location: LocationInfo) => {
  if (!location) {
    return null;
  }
  const [latitude, longitude] = point.slice(1, -1).split(",").map(parseFloat);
  let distance = getPreciseDistance(
    {
      latitude,
      longitude,
    },
    {
      latitude: location.latitude,
      longitude: location.longitude,
    }
  );
  let unit = "m";
  if (distance > 1000) {
    distance = distance / 1000;
    unit = "km";
  }
  return [distance, unit];
};

export const Restaurant: React.FunctionComponent<RestaurantProps> = ({
  id,
}) => {
  const restaurant = useRestaurantQuery({ variables: { id } });
  if (!restaurant?.data?.restaurant_by_pk) {
    return <Text>loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <RestaurantTop restaurant={restaurant.data.restaurant_by_pk} />
        <RestaurantBottom restaurant={restaurant.data.restaurant_by_pk} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  innerContainer: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 10,
  },
  resataurantCover: {
    borderTopLeftRadius: 10,
    borderTopStartRadius: 10,
    height: 120,
    width: "100%",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },

  resataurantLogo: {
    borderRadius: 100,
    height: 50,
    width: 50,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bottomPanel: {
    flex: 1,
    margin: 10,
  },
  restaurantName: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Inter_900Black",
  },
  logoContainer: {
    width: 50,
    height: 50,
    overflow: "hidden",
    borderRadius: 100,
  },
  coverBottom: {
    backgroundColor: "transparent",
    flex: 0.5,
    width: "100%",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    padding: 10,
  },
  coverTop: {
    backgroundColor: "transparent",
    flex: 0.5,
    width: "100%",
    alignSelf: "flex-end",
    padding: 5,
  },
});
