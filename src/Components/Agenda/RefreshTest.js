import React,{useEffect,useState} from 'react'
import axios from 'axios'

const RefreshTest=()=> {
    const [posts, setPosts]=useState([])
    const getPosts = async () => {
        try {
            const userPosts = await axios.get("http://localhost:8090/desk")

            setPosts(userPosts.data.sort());  // set State

            console.log(userPosts.data);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(()=>{

        getPosts()
        const interval=setInterval(()=>{
            getPosts()
        },5000)


        return()=>clearInterval(interval)
    },[])


    function AgendaSubmit(dinges) {
        const data = {
            "id": `${dinges}`,
            "availability":"unAvailable"}

        axios.put(`http://localhost:8090/desk/${data.id}`,data)
            .then((data) => {

            })
            .catch((err) => {
                console.log(err);
            })
        getPosts()
    }

    function AgendaCancel(dinges) {
        const data = {
            "id": `${dinges}`,
            "availability":"Available"}

        axios.put(`http://localhost:8090/desk/${data.id}`,data)
            .then((data) => {

            })
            .catch((err) => {
                console.log(err);
            })
        getPosts()
    }



    return (
        <>
            <div>
                <h1>useEffect</h1>

                {posts.map(post=>(
                    <p key={post.id}>{post.id} {post.desk} {post.availability}
                        <button onClick={() => AgendaSubmit(post.id)} >Reserveren</button>
                        <button onClick={() => AgendaCancel(post.id)} >Cancel</button>
                    </p>

                ))}

            </div>

        </>


    );
}

export default RefreshTest