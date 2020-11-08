import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import './Experience.css';
export const Experience = ({userdata}) => {
  return (
    <>
      <Drawer userdata={userdata}/>
        <div className='Body'>
          <Container className='container'>
            {
              (userdata.metas.experience.length!==0)?
              (
                <div>
                  <Header size='large' content='Experience'/>
                    <Grid centered columns={4} className="grid-row">
                      <Grid.Row color='grey'>
                        <Grid.Column textAlign='center'>Company</Grid.Column>
                        <Grid.Column textAlign='center'>Field</Grid.Column>
                        <Grid.Column textAlign='center'>Start Date</Grid.Column>
                        <Grid.Column textAlign='center'>End Date</Grid.Column>
                      </Grid.Row>
                    </Grid>
                    {userdata.metas.experience.map((experience, index)=>(
                      <Grid centered celled columns={4} className="grid-row">
                        <Grid.Row>
                          <Grid.Column textAlign='center'>{experience.company}</Grid.Column>
                          <Grid.Column textAlign='center'>{experience.field}</Grid.Column>
                          <Grid.Column textAlign='center'>{experience.startdate}</Grid.Column>
                          <Grid.Column textAlign='center'>{experience.enddate}</Grid.Column>
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
