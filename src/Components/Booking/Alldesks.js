import React, {useEffect, useState} from "react";
import axios from "axios";

function DeskOverview() {
    const [desks, setDesks] = useState([])
    const [loading, toggleLoading]  = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function deskGet() {
            try {
                const response = await axios.get('http://localhost:8090/desk/')
                setDesks(response.data)
                console.log(response.data)

            } catch (error) {
                setError('something went wrong')
                console.error(error)
            }
            toggleLoading(false);
        }
        deskGet()
    },[])

    function AgendaPut() {
        const data = {
            "id":2,
            "availability":"unAvailable"}

        axios.put(`http://localhost:8090/desk/${data.id}`,data)
            .then((data) => {

            })
            .catch((err) => {
                console.log(err);
            })

    }

        return (
            <>
                <h1>axios put test</h1>
                <div>
                    {error && <p>{error}</p>}
                    {loading && <p>Data wordt geladen...</p>}
                </div>
                <div>
                    <ul>

                    </ul>
                    {desks && desks.map((desks) => {
                        return <p key={desks.id}> {desks.desk} {desks.availability}</p>
                    })}

                    <button onClick={AgendaPut}>submit</button>

                </div>
            </>
        )

}
export default DeskOverview