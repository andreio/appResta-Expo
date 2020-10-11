type RevGeoResponse = {
    "title": string,
    "id": string,
    "resultType": string,
    "houseNumberType": string,
    "address": {
        "label": string,
        "countryCode": string,
        "countryName": string,
        "state": string,
        "county": string,
        "city": string,
        "district": string,
        "street": string,
        "postalCode": string,
        "houseNumber": string
    },
    "position": {
        "lat": number,
        "lng": number
    },
    "access": [
        {
            "lat": number,
            "lng": number
        }
    ],
    "distance": number,
    "mapView": {
        "west": number,
        "south": number,
        "east": number,
        "north": number
    }
}

export type AutoSuggestionResponse = {
    "title": string,
    "id": string,
    "resultType": string,
    "address": {
        "label": string
    },
    "position": { "lat": number, "lng": number },
    "access": [{ "lat": number, "lng": number }],
    "distance": number,
}

export const parseCoordsString = (point: string) => point
    .slice(1, -1)
    .split(",")
    .map(parseFloat)
    .reduce(({ latitude, longitude }, current, index) =>
        ({
            latitude: (!index && current) || latitude,
            longitude: (!!index && current) || longitude
        }), { latitude: 0, longitude: 0 });

const API_KEY = "qNmYZZ0H7mU08wrdxlSZXiBE77sIG66hOVrGYrKxZ5s"

const GEOCODE_ENDPOINT = `https://geocode.search.hereapi.com/v1/geocode?apiKey=${API_KEY}q=`
export function geocode(address: string,) {
    return fetch(`${GEOCODE_ENDPOINT}`).then(data => data.json()).then(({ items }) => items[0]);
}

const REVERSE_GEOCODE_ENDPOINT = `https://revgeocode.search.hereapi.com/v1/revgeocode?apiKey=${API_KEY}&at=`
export function reverseGeocode(lat: number, long: number, lang: string = "en-US") {
    return fetch(`${REVERSE_GEOCODE_ENDPOINT}${lat},${long}&lang=${lang}`)
        .then(data => data.json())
        .then(({ items }: { items: RevGeoResponse[] }) => (items || [])[0]);
}

const AUOTOSUGGEST_ENDPOINT = `https://autosuggest.search.hereapi.com/v1/autosuggest?apiKey=${API_KEY}&limit=20&at=`;

export function autosuggestLocation(query: string, countryCode: string, lat: number, long: number) {
    if (query.length < 3) {
        return Promise.resolve([]);
    }
    return fetch(`${AUOTOSUGGEST_ENDPOINT}${lat},${long}&q=${query}+${countryCode}`)
        .then(data => data.json())
        .then(({ items }: { items: AutoSuggestionResponse[] }) => items)

}
