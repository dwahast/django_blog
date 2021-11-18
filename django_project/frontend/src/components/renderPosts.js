import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RenderPost, RenderNoPost } from "./Post";

const RenderCardPosts = (props) => {
    // console.log("Render props.posts:" + JSON.stringify(props.posts));
    console.log("Qtd posts: "+ props.posts.length);
    if (props.posts === null || props.posts.length === 0 || props.posts === undefined) {
        return (
            <RenderNoPost/>
        )
    } else {
        return props.posts.map((post) => {
            return (
                <RenderPost post={post} key={uuidv4()}/>
            )
        })
    }
    
}

export default RenderCardPosts;