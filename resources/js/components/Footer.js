import React from 'react';
import {Icon, Grid} from 'semantic-ui-react';
import './Footer.css';

export const Footer = ({userdata}) => {
  return (
    <>
      {
        (userdata.email && userdata.github && userdata.email && userdata.linkedin)?(
          <div className='footer'>
            <Grid centered columns={4} className="grid-row">
              <Grid.Row className='row'>
                <Grid.Column textAlign='center'>
                  <Icon name='github'/>
                  <a href={userdata.github} className='link-footer'>{userdata.github}</a>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Icon name='mail'/>
                  <a href={userdata.email} className='link-footer'>{userdata.email}</a>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Icon name='call'/>
                  {userdata.mobile}
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Icon name='linkedin'/>
                  <a href={userdata.linkedin} className='link-footer'>{userdata.linkedin}</a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        ):
        (<div/>)
      }
    </>
  );
}
