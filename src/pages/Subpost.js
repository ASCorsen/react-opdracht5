import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const Subpost = () => {
    const [posts, setPosts] = useState([])

    const history = useHistory()

    function handleClick() {
        history.push("/");
    }

    const { id } = useParams()
    // const subredditpost = posts.find ((post) => {
    //     return post.subreddit === id
    //
    // })




    useEffect(() => {


        async function fetchDataPosts() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`)
                setPosts(result.data.data)
                console.log(result.data.data)

            } catch (e) {
                console.error(e);
            }
        }

        // remember install npm axios to use get request.
        fetchDataPosts()

    }, [])
    return (
        <div>
            subreddit Hallo
            <h1>Titel</h1>
            {/*<p>{posts.title}</p>*/}
            <a href={`https://www.reddit.com/${posts.url}`}>{posts.title}</a>

            <h2>Description</h2>
            <p>{posts.public_description}</p>
            
            <h3>number of subscribers:</h3>
            <p>{posts.subscribers}</p>

            <h3>Banner</h3>
            <img src={posts.banner_img} alt=""/>


            <button onClick={handleClick}>Terug</button>



        </div>
    );
};

export default Subpost;