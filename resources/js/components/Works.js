import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import './Works.css';
export const Works = ({userdata}) => {
  return (
    <>
      <Drawer userdata={userdata}/>
        <div className='Body'>
          <Container className='container'>
              {
                (userdata.metas.works.length!==0)?
                (
                  <div>
                    <Header size='large' content='Projects'/>
                      <Grid centered columns={5} className="grid-row">
                        <Grid.Row color='grey'>
                          <Grid.Column textAlign='center'>Name</Grid.Column>
                          <Grid.Column textAlign='center'>Description</Grid.Column>
                          <Grid.Column textAlign='center'>Technologies Used</Grid.Column>
                          <Grid.Column textAlign='center'>Code</Grid.Column>
                          <Grid.Column textAlign='center'>Link</Grid.Column>
                        </Grid.Row>
                      </Grid>
                      {userdata.metas.works.map((work, index)=>(
                        <Grid centered celled columns={5} className="grid-row">
                          <Grid.Row>
                            <Grid.Column textAlign='center'>{work.name}</Grid.Column>
                            <Grid.Column textAlign='center'>{work.description}</Grid.Column>
                            <Grid.Column textAlign='center'>{work.technology}</Grid.Column>
                            <Grid.Column width={2} textAlign='center'><a href={work.code} className='work-link'>CODE</a></Grid.Column>
                            {(work.link!=' - ')?(<Grid.Column textAlign='center'><a href={work.link} className='work-link'>WEBSITE</a></Grid.Column>):(<Grid.Column textAlign='center'> - </Grid.Column>)}
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
