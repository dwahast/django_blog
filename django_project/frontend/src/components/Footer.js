import React, { Component, useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric'};

export default function BlogHeader(props) {    
    return (
        <Navbar>
            <Container className=" bg-white rounded p-4">
            </Container>
        </Navbar>
    );
}