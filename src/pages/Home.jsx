import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div><h1>Bem Vindo ao SVL</h1>

            <nav>
                <Link to="/about">About</Link>{' '}
                <Link to="/user">User</Link>

            </nav>
        </div>
    )
}
