import React, { useContext } from 'react'
import Navbar from './Navbar'
import Sidemenu from './Sidemenu'
import { UserContext } from '../../context/userContext'


const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext)
  return (
    <div className=''>
      <Navbar activeMenu={activeMenu} />
      {
        user && (
          <div className='flex'>
            <div className='max-[1080px]:hidden'>
              <Sidemenu activeMenu={activeMenu} />
            </div>

            <div className='grow mx-5'>{children}</div>
          </div>
        )
      }
    </div>
  )
}

export default DashboardLayout
