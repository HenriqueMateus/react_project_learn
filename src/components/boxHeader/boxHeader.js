import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function FixHeader() {
    return (
        <div class="jumbotron p-4 h-25 mb-0" id='colchang'>
            <div class="container text-center">
                <div>
                    <h1>LockeyDora</h1>
                    <p>Os melhores filmes para você e sua família</p>
                </div>
            </div>
        </div>
    )
}

export default FixHeader;