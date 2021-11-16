import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { v4 as uuidv4 } from 'uuid';

const options = { year: 'numeric', month: 'long', day: 'numeric', time: 'numeric'};

const RenderCardPosts = (props) => {
    console.log("Render props.posts:" + JSON.stringify(props.posts));
    console.log("Qtd posts: "+ props.posts.length);
    if (props.posts === null || props.posts.length === 0 || props.posts === undefined) {
        return (
            <Container className="container pt-3" key={uuidv4()}>
                <Card border="warning" className="mt-5 shadow-sm bg-white rounded">
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Nenhum post encontrado{' '}
                        </p>
                        <footer className="blockquote-footer">
                            from <cite title="Source Title">Server</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Container>
        )
    } else {
        return props.posts.map((post) => {
            const {id, title, content, image, date, address, author} = post;
            let dateObj = new Date(date);
            

            return (
                <Container className="container" key={id}>
                    <Card border="secondary" className="mt-5 shadow-sm bg-white rounded">
                        <Card.Header><cite title="Source Title">{author}</cite></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <h2>{title}</h2>
                            <p>
                                {' '}
                                {content}{' '}
                            </p>
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{dateObj.toLocaleTimeString('pt-BR')}, {dateObj.toLocaleDateString('pt-BR', options)}</cite>
                            </footer>
                            </blockquote>
                        </Card.Body>
                        {image !== "" ? 
                            (<Card.Img variant="top" src={image} />)
                        :
                            <></>}
                    </Card>
                </Container>
            )
            }
        )
    }
    
}

export default RenderCardPosts;