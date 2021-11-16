import axios from 'axios';

import React, { useState, useEffect } from "react";
import RenderCardPosts from "./renderPosts"


async function getBlogPosts(){
    let base = (process.env.ALLOWED_HOSTS === undefined ? "" : process.env.ALLOWED_HOSTS)
    console.log("Trying to get posts in " + base);
    let posts = [];
    try {
        const response = await axios({
            method: 'GET',
            url: base + "/blog",
        });
        console.log("Response GET Posts:" + JSON.stringify(response.data));
        return response;
    } catch(error) {
        console.log(error);
        console.error("Error getting posts..." + JSON.stringify(error));
    }
};

export default function BlogBody(props) {    
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        try {
            getBlogPosts().then(response => {
                if ( response.status === 200 ){
                    setPosts(response.data);
                } else {
                    console.error(JSON.stringify(response));
                    setPosts([]);
                }
            })
        } catch (error) {
            console.error(error);
            setPosts([]);
        }
    }, [])

    return (
        <div className="scrollbar scrollbar-black bordered-black square">
            <div className="force-overflow">  
                <RenderCardPosts posts={posts}/>
            </div>
        </div>
        
    );
}