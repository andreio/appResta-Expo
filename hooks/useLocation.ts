import * as React from "react";
import * as Location from 'expo-location';

export type LocationInfo = {
    location: Location.LocationData | null,
    error: string | null
}

export const useLocation = () => {
    const [location, setLocation] = React.useState<LocationInfo>({
        error: null,
        location: null
    });
    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setLocation({ error: 'Permission to access location was denied', location: null });
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation({ location, error: null });
        })();
    });

}