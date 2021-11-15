import React, { Component, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import RenderCardPosts from "./renderPosts"

export default function BlogBody(props) {    
    return (
        <div className="scrollbar scrollbar-black bordered-black square">
            <div className="force-overflow">  
                
                <RenderCardPosts posts={[{name: "zeca", text: "Meu texto", image:"", citie: "Pelotas"}, {}]}/>
               
            </div>
        </div>
        
    );
}