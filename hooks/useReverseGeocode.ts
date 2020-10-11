import * as React from "react";
import { reverseGeocode } from "../utils/geo";

export default function (lat: number, long: number): [string, string] {
    const [address, setAddress] = React.useState<[string, string]>(["", ""]);
    const cachedCoords = React.useRef([0, 0]);
    React.useEffect(() => {
        const [cachedLat, cachedLong] = cachedCoords.current;
        if (!lat || !long || (lat === cachedLat && long === cachedLong)) {
            return;
        }
        reverseGeocode(lat, long).then(data => {
            if (!data) {
                return;
            }
            setAddress([data.title, data.address.countryCode])
        }
        );
        cachedCoords.current = [lat, long];
    }, [lat, long]);
    return address;
}