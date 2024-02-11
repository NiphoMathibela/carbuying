import React from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { BsFuelPump } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { BsPeopleFill } from 'react-icons/bs'
import MainButton from './MainButton'

const ForSaleMobile = (props) => {
  return (
    <div className=' w-full h-96 mb-6 bg-[#F6F7F9] rounded-md drop-shadow-md p-2 relative' onClick={() => navigate(`/car/${props.carId}`)}>
      <div className='flex flex-row items-center justify-between'>
        <p className='text-[#1A202C] font-semibold text-base'>{props.car}</p>
        <IoHeartOutline size={24} color='#90A3BF' />
      </div>
      <div className='text-left text-sm font-medium text-[#90A3BF]'>
        <p>{props.brand}</p>
      </div>

      <div className=''>
        <img src={props.img} />
      </div>

      <div className='w-11/12 m-auto flex flex-row items-center justify-between absolute bottom-12'>
        <p className='flex flex-row items-center text-xs text-[#90A3BF]'><BsFuelPump size={16} color='#90A3BF' /> {props.consumption}</p>
        <p className='flex flex-row items-center text-xs text-[#90A3BF]'><TbManualGearbox size={16} color='#90A3BF' /> {props.gearType}</p>
        <p className='flex flex-row items-center text-xs text-[#90A3BF]'><BsPeopleFill size={16} color='#90A3BF' /> {props.seats}</p>
      </div>

      <div className='flex flex-row items-center justify-between absolute bottom-2 w-11/12 m-auto'>
        <div className='text-[#1A202C] font-semibold text-lg'>
          <p>R {props.price}</p>
        </div>
        <div>
          <MainButton btnText="Enquire" />
        </div>
      </div>
    </div>
  )
}

export default ForSaleMobile