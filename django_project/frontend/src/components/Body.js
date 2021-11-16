import axios from 'axios';

import React, { useState, useEffect } from "react";
import RenderCardPosts from "./renderPosts"

if (process.env.ALLOWED_HOSTS.length === 0) {
    const URL = "http://127.0.0.1:8000" + "/blog";
} else {
    const URL = process.env.ALLOWED_HOSTS + "/blog";
}


async function getBlogPosts(){
    console.log("Trying to get posts");
    let posts = [];
    try {
        const response = await axios({
            method: 'GET',
            url: URL,
        });
        console.log("Response GET Posts:" + JSON.stringify(response.data));
        return response;
    } catch(error) {
        console.log(error);
        console.error("Error getting posts..." + JSON.stringify(error));
    }
};

export default function BlogBody(props) {    
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        getBlogPosts().then(response => {
            if ( response.status === 200 ){
                setPosts(response.data)
            } else {
                console.error(JSON.stringify(response))
                setPosts([])
            }
        })
    }, [])

    return (
        <div className="scrollbar scrollbar-black bordered-black square">
            <div className="force-overflow">  
                <RenderCardPosts posts={posts}/>
            </div>
        </div>
        
    );
}