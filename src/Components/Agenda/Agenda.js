import React, {useEffect, useState} from "react";
import axios from 'axios'

function Agenda() {
    const [dates, setDates] = useState([])
    const [loading, toggleLoading]  = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('')
        toggleLoading(true)

        async function fetchBanaan() {
            try {
                const response = await axios.get('http://localhost:8090/date/')
                setDates(response.data)
                console.log(response.data)
            } catch (error) {
                setError('something went wrong')
                console.error(error)
            }
            toggleLoading(false);
        }
     fetchBanaan();
    },[])

    return(
            <div>
                {error && <p>{error}</p>}
                {loading && <p>Data wordt geladen...</p>}
                {dates && dates.map((datum) => {
                    return <p key={datum.date}>{datum.date}</p>
                })}
            </div>

    )
};
export default Agenda