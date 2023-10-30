import React from 'react'

function Title({ name }) {


    // .title_container_::after{
    //     content: "";
    //     position: relative;
    //     height: 30px;
    //     display: flex;
    //     width: 51px;
    //     margin-top: -25px;
    //     background: #22867a59;
    //     animation: throwColor 4s infinite;
    //     inset: 0;
    //     box-shadow: rgba(93, 93, 93, 0.25) 0px 14px 28px, rgba(158, 157, 157, 0.22) 0px 10px 10px;
    // }
    
    // @keyframes throwColor {
    //     0%{
    //         content: '';
    //         transform: translate(-100%) skew(-16deg);
    //     }
    //     15%, 100% {
    //         content: "";
    //         transform: translate(300%) skew(-16deg);
    //     }
    // }
  return (
    <div className='w-full'>
      <p className='whitespace-nowrap  border borderColor bg-[#0c141b] px-5 py-1 overflow-hidden rounded-3xl absolute tracking-widest uppercase  after:content-[""]  after:relative  after:h-8 after:inset-0 
       after:bg-[#22867a59] after:mt-[-29px] after:flex animated-throwColor' >{name}</p>
    </div>
  )

}

export default Title