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
        {/* <div className='mt-8 flex grid  h-[70vh] lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
          <div className='flex items-center justify-center border borderColor '>
            <h1>Wep App</h1>
          </div>
          <div className='flex items-center justify-center border borderColor '>
            <h1>Wepsite</h1>
          </div>
        </div> */}
        <div>
        <ServicesView />
        </div>

      </div>
    </Container>
  )
}

export default HomeServices;