import * as React from "react";
import {Button, Dimensions} from "react-native";
import {View, Text} from "../components/Themed";
import {StyleSheet} from "react-native";
import {useLocation} from "../hooks/useLocation";
import MapView, {Marker, MapEvent, AnimatedRegion} from 'react-native-maps';
import {reverseGeocode} from "../utils/geo";
import {GeoAutoComplete} from "../components/GeoAutoComplete";
import {useUpdateUserLocationMutation} from "../data";
import {useNavigation} from "@react-navigation/native";
import {useAppContext} from "../contexts/AppContext";

type AddressSetupContainerProps = {
    address: string | undefined;
};

type AddressSetupProps = {
    address: string;
    latitude: number;
    longitude: number;
    onAddressChanged: (address: string, lat: number, long: number) => void;
    onCoordsChanged: (lat: number, long: number) => void;
    countryCode: string;
};


const AddressSetup: React.FunctionComponent<AddressSetupProps>
    = ({
           onCoordsChanged,
           onAddressChanged,
           longitude,
           latitude,
           address,
           countryCode
       }) => {
    const navigation = useNavigation();
    const [updateUserLocation] = useUpdateUserLocationMutation();

    const mapRef = React.useRef<MapView>(null);

    React.useEffect(() => {
        setTimeout(() =>
                mapRef.current?.animateCamera({altitude: 500, center: {longitude, latitude}}),
            300);
    }, [latitude, longitude]);

    const onMapDragEnd = React.useCallback(({nativeEvent: {coordinate: {latitude, longitude}}}: MapEvent) => {
        onCoordsChanged(latitude, longitude);
    }, []);

    const onPressSave = React.useCallback(() => updateUserLocation({
        variables: {
            addressCoords: `${latitude}, ${longitude}`,
            addressCountryCode: countryCode,
            addressText: address,
            id: 1
        }
    }).then(() => navigation.navigate("Root")), []);

    return (
        <View style={styles.container}>
            <View style={styles.saveButton}>
                <Button title="Save" onPress={onPressSave}/>
            </View>
            <GeoAutoComplete onAddressSelected={onAddressChanged}
                             latitude={latitude}
                             longitude={longitude}
                             countryCode={countryCode}
                             address={address}/>

            <MapView style={styles.mapStyle}
                     liteMode={true}
                     ref={mapRef}
                     zoomControlEnabled={true}
                     showsMyLocationButton={true}
                     showsScale={true}
                     initialRegion={{
                         latitude,
                         longitude,
                         latitudeDelta: 0.00922,
                         longitudeDelta: 0.00421,
                     }}
            >
                <Marker draggable
                        onDragEnd={onMapDragEnd}
                        coordinate={{latitude: latitude, longitude: longitude}}
                        title={"Location"}
                />
            </MapView>
        </View>
    );
};

export const AddressSetupContainer: React.FunctionComponent<AddressSetupContainerProps> = () => {
    const location = useLocation(true);
    const {user: {location: savedLocation}} = useAppContext();

    const [{longitude, latitude, address}, setState] = React.useState({longitude: 0, latitude: 0, address: ""})

    React.useEffect(() => {
        setState({
            longitude: savedLocation?.coords.longitude || location.longitude,
            latitude: savedLocation?.coords.latitude || location.latitude,
            address: savedLocation?.address || location.address
        })
    }, [location.longitude, location.latitude, location.address,
        savedLocation?.address, savedLocation?.coords.longitude, savedLocation?.coords.latitude])

    const onAddressChanged = React.useCallback((address: string, latitude: number, longitude: number) => {
        setState({
            longitude, latitude, address
        });
    }, []);

    const onCoordsChanged = React.useCallback((latitude: number, longitude: number) => {
        console.log("coords changed");
        reverseGeocode(latitude, longitude).then(({address: {label: address}}) => setState(({
            longitude,
            latitude,
            address
        })));
    }, []);
    console.log(latitude, longitude, address);
    if (!latitude && !longitude) {
        return null;
    }
    return (<AddressSetup
        address={address}
        latitude={latitude}
        longitude={longitude}
        countryCode={location.countryCode}
        onAddressChanged={onAddressChanged}
        onCoordsChanged={onCoordsChanged}
    />);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        color: "black"
    },
    saveButton: {
        width: 200,
        color: "red",
        height: 100,
        position: "absolute",
        zIndex: 2,
        backgroundColor: "transparent",
        top: 200
    },
    mapStyle: {
        zIndex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
