import * as React from 'react';
import { Appbar } from 'react-native-paper';
const Header = () => {
return (
    <Appbar.Header style={{marginTop:40, backgroundColor:'red'}}>
      
      <Appbar.Content title="News update" />
      
    </Appbar.Header>
  );
};
export default Header;