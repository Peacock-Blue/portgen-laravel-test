import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import './Qualification.css';
export const Qualification = ({userdata}) => {
  return (
    <>
      <Drawer userdata={userdata}/>
        <div className='Body'>
          <Container className='container'>
            {
              (userdata.metas.qualifications.length!==0)?
              (
                <div>
                  <Header size='large' content='Education'/>
                    <Grid centered columns={6} className="grid-row">
                      <Grid.Row color='grey'>
                        <Grid.Column textAlign='center'>Name</Grid.Column>
                        <Grid.Column textAlign='center'>Institution</Grid.Column>
                        <Grid.Column textAlign='center'>Field</Grid.Column>
                        <Grid.Column textAlign='center'>Start Date</Grid.Column>
                        <Grid.Column textAlign='center'>End Date</Grid.Column>
                        <Grid.Column textAlign='center'>Grade</Grid.Column>
                      </Grid.Row>
                    </Grid>
                    {userdata.metas.qualifications.map((qualification, index)=>(
                      <Grid centered celled columns={6} className="grid-row">
                        <Grid.Row>
                          <Grid.Column textAlign='center'>{qualification.name}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.institution}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.field}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.startdate}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.enddate}</Grid.Column>
                          <Grid.Column textAlign='center'>{qualification.grade}</Grid.Column>
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
