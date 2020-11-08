import React, {useState} from 'react';
import {Sidebar, Menu, Icon, Divider} from 'semantic-ui-react';
import './Drawer.css';

export const Drawer = ({userdata}) => {
  const [visible, setVisible] = useState(0);
  return (
    <>
    <div className={(visible===1)?'show':'hide'}>
      <Sidebar.Pushable className='drawer'>
        <Sidebar
          as={Menu}
          icon='labeled'
          inverted
          vertical
          visible={true}
          width='thin'
          className='drawer'
        >
          <Menu.Item onClick={()=>{setVisible(0)}}>
            <Icon name='close'/>
          </Menu.Item>
          <Menu.Item as='a' href='/portfolio'>
            <Icon name='home' />
            Home
          </Menu.Item>
          {((userdata.metas.works && userdata.metas.works.length!==0))?(<Menu.Item as='a' href='./work'>
            <Icon name='github' />
            Projects
          </Menu.Item>):<div/>}
          {(userdata.metas.qualifications && userdata.metas.qualifications.length!==0)?(<Menu.Item as='a' href='./education'>
            <Icon name='graduation cap' />
            Qualifications
          </Menu.Item>):<div/>}
          {(userdata.metas.experience && userdata.metas.experience.length!==0)?(<Menu.Item as='a' href='./experience'>
            <Icon name='building' />
            Experience
          </Menu.Item>):<div/>}
          {(userdata.metas.achievements && userdata.metas.achievements.length!==0)?(<Menu.Item as='a' href='./achievement'>
            <Icon name='winner' />
            Achievements
          </Menu.Item>):<div/>}
          {(userdata.metas.skills && userdata.metas.skills.length!==0)?(<Menu.Item as='a' href='./skill'>
            <Icon name='laptop' />
            Skills
          </Menu.Item>):<div/>}
        </Sidebar>
      </Sidebar.Pushable>
    </div>
    <div className={(visible===0)?'menu':'hide'}>
      <Icon name='bars' size='large' onClick={()=>{setVisible(1)}} className='menuicon'/>
    </div>
    <Divider className='divider'/>
    </>
  );
}
