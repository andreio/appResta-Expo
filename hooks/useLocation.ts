import * as React from "react";
import * as Location from 'expo-location';
import useReverseGeocode from "./useReverseGeocode";

export const UNITIALIZED_ERROR = "unitizalized";
export const PERMISION_ERROR = "permission_error";

export type LocationState = {
    latitude: number;
    longitude: number;
    error: string | null
}

const DEFAULT_LOCATION_STATE = {
    latitude: 0,
    longitude: 0,
    error: UNITIALIZED_ERROR
}

const UNGRANTED_LOCATION_STATE = {
    ...DEFAULT_LOCATION_STATE,
    error: PERMISION_ERROR
}

export type LocationInfo = LocationState & {
    address: string;
    countryCode: string;
}

export const useLocation = (cached: boolean): LocationInfo => {
    const [{ latitude, longitude, error }, setLocation] = React.useState<LocationState>(DEFAULT_LOCATION_STATE);
    React.useEffect(() => {
        (async () => {
            if (cached && latitude && longitude) {
                return;
            }
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setLocation(UNGRANTED_LOCATION_STATE);
                return
            }

            let { coords: { latitude: newLat, longitude: newLong } } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
            if (newLat !== latitude || newLong !== longitude) {
                setLocation({ latitude: newLat, longitude: newLong, error: null });
            }
        })();
    });
    const [address, countryCode] = useReverseGeocode(latitude, longitude);
    return {
        address,
        countryCode,
        error,
        latitude,
        longitude
    };
}
