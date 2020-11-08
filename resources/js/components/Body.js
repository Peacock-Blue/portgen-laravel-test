import React from 'react';
import {Container, Header, Grid, Image, Divider, Icon} from 'semantic-ui-react';
import './Body.css';

export const Body = ({userdata}) => {
  return (
    <div className='Body'>
      <Container className='container'>
        {
          (userdata.metas.name)?(<Header size='huge' content={userdata.metas.name}/>):(<div/>)
        }
        <Divider/>
          <Grid divided centered className='grid'>
            <Grid.Row>
              <Grid.Column width={4}>
                {
                  (userdata.metas.photoURI)?(<Image src={userdata.metas.photoURI} alt={userdata.metas.photoURI} className='image'/>):(<Icon name='user' size='massive'/>)
                }
              </Grid.Column>
              <Grid.Column width={6}>
                {
                  (userdata.metas.about)?(<><br/><Header size='large' content='A bit about me,'/><Header size='medium' content={userdata.metas.about} color='grey'/></>):(<div/>)
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    </div>
  );
}
