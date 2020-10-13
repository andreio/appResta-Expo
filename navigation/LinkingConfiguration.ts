import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          ClientApp: {
            screens: {
              TabOne: {
                screens: {
                  TabOneScreen: 'one',
                },
              },
              TabTwo: {
                screens: {
                  TabTwoScreen: 'two',
                },
              },
              AddressSetup: 'addressSetup',
            }
          }
        },
      },
      Admin: {
        screens: {

        }
      },
      NotFound: '*',
    },
  },
};
