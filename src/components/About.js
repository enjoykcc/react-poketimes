import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laborum repellat, reprehenderit accusantium minus amet exercitationem, tempore ut expedita quis facere consequatur soluta recusandae in cumque omnis obcaecati officiis atque!</p>
        </div>
    )
}

export default Rainbow(About)