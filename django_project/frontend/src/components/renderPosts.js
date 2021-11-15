import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const RenderCardPosts = (props) => {
    console.log(props);
    return props.posts.map((post) => {
        const {name, text, image, citie} = post;
        console.log(name);
        return (
            <Container className="container pt-3" key={name+text+image+citie}>
                <Card>
                    <Card.Header>{name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {text}{' '}
                        </p>
                        <footer className="blockquote-footer">
                            from <cite title="Source Title">{citie}</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                    {image === "" ? 
                        (<Card.Img variant="top" src="https://www.w3schools.com/w3images/lights.jpg" />)
                    :
                        <></>}
                </Card>
            </Container>
        )
        }
    )
}

export default RenderCardPosts;