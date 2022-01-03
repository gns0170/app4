import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import Navigator from '~/Screens/Navigators/Navigator';

interface Props {}

const App = ({}: Props) => {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);


  return (
    <Navigator />
  );
};
export default App;