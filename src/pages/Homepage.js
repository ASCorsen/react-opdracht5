import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Homepage = () => {

    const [posts, setPost] = useState([])




    useEffect(() =>{
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15 `)
                console.log(result.data.data.children)
                setPost(result.data.data.children)


            } catch (e) {
                console.error(e);
            }
        }
        fetchData()

    },[])

    return (
        <div>
            <h1>Homepagina</h1>


            {posts.map((post)=> {
                return (
                    <>
                        <h2><Link to={`/subpost/${post.data.subreddit}`}>{post.data.title}</Link></h2>
                        <p>{post.data.subreddit_name_prefixed} | {post.data.num_comments} comments {post.data.ups} ups</p>
                    </>
                )

            })}
        </div>
    );
};

export default Homepage;