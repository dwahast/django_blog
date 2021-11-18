import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { v4 as uuidv4 } from 'uuid';

const options = { year: 'numeric', month: 'long', day: 'numeric', time: 'numeric'};

const RenderNoPost = () => {
    return (
        <Container className="container pt-3 mt-4" key={uuidv4()}>
            <Card border="warning" className="shadow-sm bg-white rounded">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}Nenhum post encontrado{' '}
                    </p>
                    <footer className="blockquote-footer">
                        from <cite title="Source Title">Server</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </Container>
    )
};

const RenderPost = (props) => {
    
    const {id, title, content, content_html, markdown, image, date, address, author} = props.post;
    let dateObj = new Date(date);
    let timeStr = dateObj.toLocaleTimeString('pt-BR');
    let dateStr = dateObj.toLocaleDateString('pt-BR', options);

    return (
        <Container className="container" key={uuidv4()}>
            <Card border="secondary" className="mt-5 shadow-sm bg-white rounded">
                <Card.Header><cite title="Source Title">{title}</cite></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    {markdown ? 
                        <div className=".img-wrap" dangerouslySetInnerHTML={{ __html: content_html}} /> 
                    : 
                        content
                    }

                    {image !== "" ? 
                        <Card.Img className="hover-overlay" src={image} />
                    :
                        <></>
                    }
                    <footer className="blockquote-footer m-4">
                        {author},  {address} <cite title="Source Title">{timeStr}, {dateStr}</cite> - 
                    </footer>
                    </blockquote>
                </Card.Body>
                
            </Card>
        </Container>
    )
};

export {RenderPost, RenderNoPost};