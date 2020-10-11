import * as React from "react";
import { useUserQuery } from "../data";
import { parseCoordsString } from "../utils/geo";
import { useNavigation } from "@react-navigation/native";

type AppContext = {
  user: {
    firstName: string;
    lastName: string;
    addressCoords: {
      latitude: number;
      longitude: number;
    };
    addressText: string;
  };
} | null;

type AppContextProviderProps = {
  id: number;
};

const AppContext = React.createContext<AppContext>(null);

export const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  id,
  children,
}) => {
  const navigation = useNavigation();
  const user = useUserQuery({ variables: { id } });
  if (!user.data?.user_by_pk) {
    return null;
  }
  const {
    firstName,
    lastName,
    addressCoords,
    addressText,
  } = user.data.user_by_pk;
  if (!addressCoords || !addressText) {
    //navigate to localization
    navigation.navigate("AddressSetup");
    return null;
  }
  const value: AppContext = {
    user: {
      firstName,
      lastName,
      addressText,
      addressCoords: parseCoordsString(addressCoords),
    },
  };
  return <AppContext.Provider {...{ children, value }}></AppContext.Provider>;
};

export const useAppContext = () => React.useContext(AppContext);
