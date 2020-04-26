import {useState, useEffect} from 'react'

export const useHttp = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(true)
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsLoading(false)
                setFetchedData(data)
            })
            .catch( err => {
                console.log(err)
                setIsLoading(false)
            })
    }, dependencies)

    return [isLoading, fetchedData]
}
