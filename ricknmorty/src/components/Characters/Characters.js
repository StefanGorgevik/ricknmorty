import React from 'react'
import './Characters.css'

import {useHttp } from '../../hooks/useHttp'

const Characters = () => {
    const url = 'https://rickandmortyapi.com/api/character'
    const [isLoading, fetchedData] = useHttp(url, [url])

    console.log(fetchedData)

    let content = <p>Loading...</p>

    if(!isLoading && fetchedData) {
        content = <div>{fetchedData.results[0].name}</div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Characters
