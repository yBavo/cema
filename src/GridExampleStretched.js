import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import './styleGrid.css'

const GridExampleStretched = () => (
  <Container>
    <Grid celled olumns={4}>
    
      <Grid.Row>
        <Grid.Column width={2}>
          01 jan
        </Grid.Column>
        <Grid.Column>
          <p>Courtemanche J</p>
        </Grid.Column>
        <Grid.Column>
          Jalbert B
        </Grid.Column>
        
        <div className='multiRow'>
          <Grid.Row className='insideRow'>
            Paul
          </Grid.Row>
          <Grid.Row className='insideRow'>
            Raoul
          </Grid.Row>
        </div>

      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={2}>
          30 jan
        </Grid.Column>
        <Grid.Column>
          Courtemanche J
        </Grid.Column>
        <Grid.Column>
          <p>Paul2</p>
        </Grid.Column>
        <Grid.Column>
          <p>Bob</p>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </Container>
)

export default GridExampleStretched