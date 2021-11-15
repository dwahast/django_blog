import React, { Component, useState, useEffect } from "react";
import BlogHeader from "./Header"
import BlogBody from "./Body"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props) {    
    return (
    <div>
        <BlogHeader/ >
        <BlogBody className="asd" />
    </div>);
}
