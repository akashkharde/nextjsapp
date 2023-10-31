import React from 'react'
import Button from '../Ui/Button'

function Title({ name }) {
  return (
    <div className='w-full'>
      <p className='whitespace-nowrap  cursor-pointer border borderColor bg-[#0c141b] px-5 py-1 overflow-hidden rounded-3xl absolute tracking-widest uppercase  after:content-[""]  after:relative  after:h-8 after:inset-0 
       after:bg-[#22867a59] after:mt-[-29px] after:flex animated-throwColor' >{name}</p>
    </div>
  )

}

export default Title