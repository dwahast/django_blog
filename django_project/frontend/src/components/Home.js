import React, { Component, useState, useEffect } from "react";
import BlogHeader from "./Header"
import BlogBody from "./Body"
import BlogFooter from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props) {    
    return (
    <div>
        <BlogHeader/ >
        <BlogBody />
        <BlogFooter />
    </div>);
}
