import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import './Achievements.css';
export const Achievements = ({userdata}) => {
  return (
    <>
      <Drawer userdata={userdata}/>
        <div className='Body'>
          <Container className='container'>
            {
              (userdata.metas.achievements.length!==0)?
              (
                <div>
                  <Header size='large' content='Achievements'/>
                    <Grid centered columns={2} className="grid-row">
                      <Grid.Row color='grey'>
                        <Grid.Column textAlign='center'>Name</Grid.Column>
                        <Grid.Column textAlign='center'>Date</Grid.Column>
                      </Grid.Row>
                    </Grid>
                    {userdata.metas.achievements.map((achievement, index)=>(
                      <Grid centered celled columns={2} className="grid-row">
                        <Grid.Row>
                          <Grid.Column textAlign='center'>{achievement.description}</Grid.Column>
                          <Grid.Column textAlign='center'>{achievement.date}</Grid.Column>
                        </Grid.Row>
                      </Grid>
                    ))}
                </div>
              ):(<div/>)
            }
          </Container>
        </div>
      <Footer userdata={userdata}/>
    </>
  );
}
