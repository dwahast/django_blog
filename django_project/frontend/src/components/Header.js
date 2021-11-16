import React, { Component, useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric'};

export default function BlogHeader(props) {    
    return (
        <Navbar>
            <Container className="fixed-top bg-white rounded p-2">
                <Navbar.Brand href="/">Tech Blog</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    {new Date().toLocaleDateString('pt-BR', options)}
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}