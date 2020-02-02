import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import './style.css'

const CssPlayground = () => {
  return (
    <Container>
      <h1>
        CSS Playground
      </h1>
      <h2>Flex Container</h2>
      <div>display: flex</div>
      <div className='flex-container'>
        <div className='flex-element element1'>
          <h5>Service #1</h5>
        </div>
        <div className='flex-element element2'>
          <h5>Service #2</h5>
        </div>
        <div className='flex-element element3'>
          <h5>Service #3</h5>
        </div>
      </div>
      
      <div>display: inline-flex</div>
      <div className='flex-container inline-flex'>
        <div className='flex-element element1'>
          <h5>Service #1</h5>
        </div>
        <div className='flex-element element2'>
          <h5>Service #2</h5>
        </div>
        <div className='flex-element element3'>
          <h5>Service #3</h5>
        </div>
      </div>

      <h2>Flex Direction</h2>
      <div className='flex-container'>
        <div className='flex-element element1'>
          <h5>Service #1</h5>
        </div>
        <div className='flex-element element2'>
          <h5>Service #2</h5>
        </div>
        <div className='flex-element element3'>
          <h5>Service #3</h5>
        </div>
      </div>
      
      <div>flex-direction: column</div>
      <div className='flex-container direction-column'>
        <div className='flex-element element1'>
          <h5>Service #1</h5>
        </div>
        <div className='flex-element element2'>
          <h5>Service #2</h5>
        </div>
        <div className='flex-element element3'>
          <h5>Service #3</h5>
        </div>
      </div>

      <div>flex-direction: row</div>
      <div className='flex-container direction-row'>
        <div className='flex-element element1'>
          <h5>Service #1</h5>
        </div>
        <div className='flex-element element2'>
          <h5>Service #2</h5>
        </div>
        <div className='flex-element element3'>
          <h5>Service #3</h5>
        </div>
      </div>

      <div>flex-direction: direction-row-reverse</div>
      <div className='flex-container direction-row-reverse'>
        <div className='flex-element element1'>
          <h5>Service #1</h5>
        </div>
        <div className='flex-element element2'>
          <h5>Service #2</h5>
        </div>
        <div className='flex-element element3'>
          <h5>Service #3</h5>
        </div>
      </div>

      <div>flex-direction: direction-column-reverse</div>
      <div className='flex-container direction-column-reverse'>
        <div className='flex-element element1'>
          <h5>Service #1</h5>
        </div>
        <div className='flex-element element2'>
          <h5>Service #2</h5>
        </div>
        <div className='flex-element element3'>
          <h5>Service #3</h5>
        </div>
      </div>

      
    </Container>
  )
}

export default CssPlayground
