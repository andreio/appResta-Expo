import * as React from "react";
import {autosuggestLocation, AutoSuggestionResponse} from "../utils/geo";
import debounce from "lodash.debounce";


export default function useAddressAutocomplete(): [AutoSuggestionResponse[], React.Dispatch<React.SetStateAction<{
    query: string,
    latitude: number,
    longitude: number,
    countryCode: string
}>>] {
    const [{longitude, latitude, query, countryCode}, setQuery] =
        React.useState({query: "", latitude: 0, longitude: 0, countryCode: ""});
    const [results, setResults] = React.useState<AutoSuggestionResponse[]>([]);
    const cachedAddressRef = React.useRef(query);
    const debouncedAutoSuggest = React.useRef(debounce(autosuggestLocation, 200)).current;
    React.useEffect(() => {
        if (query === cachedAddressRef.current) {
            return;
        }
        debouncedAutoSuggest(query, countryCode, latitude, longitude)?.then(data => {
            if (!data) {
                return;
            }
            console.log(data);
            cachedAddressRef.current = query;
            setResults(data);
        })
    }, [query, longitude, latitude, countryCode]);
    return [results, setQuery];
}
