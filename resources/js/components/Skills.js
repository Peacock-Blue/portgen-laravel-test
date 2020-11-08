import React from 'react';
import {Drawer} from './Drawer';
import {Footer} from './Footer';
import {Container, Header, Grid} from 'semantic-ui-react';
import './Skills.css';
export const Skills = ({userdata}) => {
  return (
    <>
      <Drawer userdata={userdata}/>
        <div className='Body'>
          <Container className='container'>
              {
                (userdata.metas.skills.length!==0)?
                (
                  <div>
                    <Header size='large' content='Skills'/>
                      <Grid centered columns={2} className="grid-row">
                        {userdata.metas.skills.map((skill, index)=>(
                          <Grid.Column textAlign='center'>{skill}</Grid.Column>
                        ))}
                      </Grid>
                  </div>
                ):(<div/>)
              }
            </Container>
        </div>
      <Footer userdata={userdata}/>
    </>
  );
}
