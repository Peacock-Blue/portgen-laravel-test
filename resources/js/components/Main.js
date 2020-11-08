import React from 'react';
import {Drawer} from './Drawer';
import {Body} from './Body';
import {Footer} from './Footer';
export const Main = ({userdata}) => {
  return (
    <>
      <Drawer userdata={userdata}/>
      <Body userdata={userdata}/>
      <Footer userdata={userdata}/>
    </>
  );
}
