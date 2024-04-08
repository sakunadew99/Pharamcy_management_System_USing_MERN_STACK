import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsPersonCircle}
 from 'react-icons/bs'
 import { Navigate, useNavigate,Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsPersonCircle  className='icon_header'/> Administrator
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/" >
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/add" className="sidebar-link">
                    <BsFillArchiveFill className='icon'/> Add Users
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/view" className="sidebar-link">
                    <BsFillGrid3X3GapFill className='icon'/> View Users
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/update" className="sidebar-link">
                    <BsFillGrid3X3GapFill className='icon'/> Update Users
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/profile" className="sidebar-link">
                    <BsPeopleFill className='icon'/> Profile
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Logout
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar