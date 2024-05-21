import React from 'react'
import ModeContext from '../utils/ModeContext'
import { useContext } from 'react'

const Home = () => {
  const {mode} = useContext(ModeContext)

  return (
    <div className={`home ${mode}`}>
      <div className='dog-text-1'>DOG</div>
      <div className='dog-text-2'>DOG</div>
      <img src="./dog.png" alt="" />
    </div>
  )
}

export default Home
