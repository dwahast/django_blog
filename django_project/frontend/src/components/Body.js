import React, { Component, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function BlogBody(props) {    
    return (
        <div className="scrollbar scrollbar-black bordered-black square">
            <div className="force-overflow">  
            <Container className="container pt-3">
                <Card>
                    <Card.Header>Quote</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </Container>

            <Container className="container pt-3">
                <Card>
                    <Card.Header>Quote</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                    <Card.Img variant="top" src="https://www.w3schools.com/w3images/lights.jpg" />
                </Card>

            </Container>
            
            </div>
        </div>
        
    );
}