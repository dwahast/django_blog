import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { v4 as uuidv4 } from 'uuid';

const options = { year: 'numeric', month: 'long', day: 'numeric', time: 'numeric'};

const RenderCardPosts = (props) => {
    console.log("Render props.posts:" + JSON.stringify(props.posts));
    console.log("Qtd posts: "+ props.posts.length);
    if (props.posts === null || props.posts.length === 0 || props.posts === undefined) {
        return (
            <Container className="container pt-3 mt-4" key={uuidv4()}>
                <Card border="warning" className="shadow-sm bg-white rounded">
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
            const {id, title, content, content_html, markdown, image, date, address, author} = post;
            let dateObj = new Date(date);

            return (
                <Container className="container" key={id}>
                    <Card border="secondary" className="mt-5 shadow-sm bg-white rounded">
                        <Card.Header><cite title="Source Title">{title}</cite></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            {markdown ? 
                                <div className=".img-wrap" dangerouslySetInnerHTML={{ __html: content_html}} /> : 
                                content
                             }

                            {image !== "" ? 
                            (<Card.Img className="hover-overlay" style={{ maxWidth: '48p' }} src={image} />)
                                :
                            <></>}
                            <footer className="blockquote-footer m-4">
                                {author},  <cite title="Source Title">{dateObj.toLocaleTimeString('pt-BR')}, {dateObj.toLocaleDateString('pt-BR', options)}</cite>
                            </footer>
                            </blockquote>
                        </Card.Body>
                        
                    </Card>
                </Container>
            )
            }
        )
    }
    
}

export default RenderCardPosts;