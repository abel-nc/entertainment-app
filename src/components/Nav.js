import React from 'react'
import logo from '../assets/logo.svg'
import { AiFillHome } from 'react-icons/ai'
import { MdLocalMovies } from 'react-icons/md'
import { RiTvFill } from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom'
import avatar from '../assets/avatar.png'

const Nav = () => {
    const navigate = useNavigate()

    const NavLinks = () => {
        return (
            <div className='d-flex align-items-center flex-row flex-md-column'>
                <NavLink className='hover-accent-secondary color-secondary m-0 mb-md-5 me-5 me-md-0' to='/' exact='true'>
                    <AiFillHome className='fs-3' />
                </NavLink>
                <NavLink className='hover-accent-secondary color-secondary m-0 mb-md-5 me-5 me-md-0' to='/movies'>
                    <MdLocalMovies className='fs-3' />
                </NavLink>
                <NavLink className='hover-accent-secondary color-secondary' to='/series'>
                    <RiTvFill className='fs-3' />
                </NavLink>
            </div>
        )
    }

    return (
        <nav className='d-flex flex-row flex-md-column align-items-center justify-content-between p-4 
        back-secondary user-select-none position-fixed'
        >
            <img className='logo c-pointer' src={logo} alt="logo" onClick={() => navigate('/')} />
            <NavLinks />
            <img className='avatar border border-white rounded-5 c-pointer' src={avatar} alt="avatar" />
        </nav>
    )
}

export default Nav