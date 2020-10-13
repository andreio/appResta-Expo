import * as React from "react";
import {useUserQuery} from "../data";
import {parseCoordsString} from "../utils/geo";
import {useNavigation} from "@react-navigation/native";

type Location = {
    coords: {
        latitude: number;
        longitude: number;
    };
    address: string;
    countryCode: string;
};

type AppContext = {
    user: {
        firstName: string;
        lastName: string;
        location: Location | null
    };
};

type AppContextProviderProps = {
    id: number;
};

const AppContext = React.createContext<AppContext>({user: {location: null, firstName: "", lastName: ""}});

export const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
                                                                                         id,
                                                                                         children,
                                                                                     }) => {
    const user = useUserQuery({variables: {id}});
    if (!user.data?.user_by_pk) {
        return null;
    }
    const {
        firstName,
        lastName,
        addressCoords,
        addressText,
        addressCountryCode
    } = user.data.user_by_pk;

    let location: Location | null = null;
    if (addressCoords && addressText && addressCountryCode) {
        location = {
            coords: parseCoordsString(addressCoords),
            countryCode: addressCountryCode,
            address: addressText
        };
    }

    const value: AppContext = {
        user: {
            firstName,
            lastName,
            location
        },
    };
    return <AppContext.Provider {...{children, value}}></AppContext.Provider>;
};

export const useAppContext = () => React.useContext(AppContext);
