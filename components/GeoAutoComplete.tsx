import * as React from "react";
import Autocomplete from "react-native-autocomplete-input";
import {StyleSheet, TouchableOpacity} from "react-native";
import {Text} from "./Themed";
import useAddressAutocomplete from "../hooks/useAddressGeocomplete";

export interface GeoAutoCompleteProps {
    onAddressSelected: (address: string, lat: number, long: number) => void;
    latitude: number;
    longitude: number;
    countryCode: string;
    address: string;
}

export const GeoAutoComplete: React.FunctionComponent<GeoAutoCompleteProps>
    = ({
           longitude, latitude, countryCode, address, onAddressSelected
       }) => {

    const [show, setShow] = React.useState(false);

    const [results, filterLocations] = useAddressAutocomplete();
    const onQueryChanged = React.useCallback(
        (query: string) => {
            setShow(true);
            filterLocations({countryCode, latitude, longitude, query});
        },
        []
    );
    const onSelectAddress = React.useCallback((address: string, latitude: number, longitude: number) => {
        setShow(false);
        onAddressSelected(address, latitude, longitude);
    }, []);

    return (<Autocomplete
        style={{color: "black", backgroundColor: "white"}}
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.autocompleteContainer}
        data={results}
        hideResults={!show}
        defaultValue={address}
        keyExtractor={({id}) => id}
        onChangeText={onQueryChanged}
        placeholder="Enter place name"
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => onSelectAddress(item.address.label, item.position.lat, item.position.lng)}>
                <Text style={styles.itemText}>
                    <Text style={{fontWeight: "bold", color: "black"}}>
                        {item.title}
                    </Text>
                </Text>
            </TouchableOpacity>
        )}
    />);
};

const styles = StyleSheet.create({
    autocompleteContainer: {
        flex: 1,
        width: "100%",
        position: "absolute",
        margin: 100,
        padding: 20,
        zIndex: 2
    },
    itemText: {
        fontSize: 15,
        margin: 2,
        color: "black",
    },
});
