"use client"
import React from 'react'
import Container from '../Ui/Container'
import Title from '../Common/Title'
import ServicesView from '../Ui/ServicesView'

function HomeServices() {
  return (
    <Container >
      <div className='mt-20 relative z-1'>
        <div className='h-10'>   <Title name={"Services"} /></div>
        <div>
          <ServicesView />
        </div>
      </div>
    </Container>
  )
}

export default HomeServices;