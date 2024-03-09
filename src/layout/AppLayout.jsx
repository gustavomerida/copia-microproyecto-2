/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'
import Button from '../components/Button'
import { useUser } from '../context/user'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../controllers/auth'


export default function AppLayout(children) {
    const user = useUser();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/login', {replace : true})
        }
    }, [user, navigate]);


  return (
    <div>
      <nav>
        <div></div>
        <div>
            <Button onClick={logOut()}>Cerrar sesión</Button>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}

