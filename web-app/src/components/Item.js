import React from 'react';
import { Accordion, Card, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Avatar from './Avatar';

const userss = [
    {
        "id": "u01",
        "name": "Isabel",
        "person_price": null,
        "profile": "png-avatar/005-woman.png"
    },
    {
        "id": "u02",
        "name": "Rose",
        "person_price": null,
        "profile": "png-avatar/039-boy.png"
    },
    {
        "id": "u03",
        "name": "Irene",
        "person_price": null,
        "profile": "png-avatar/024-woman.png"
    }
]

function Item(props) {
    const { pid, name, price, order, users, image, addfunc, removefunc } = props;
    const loginuser = "u01"

    const handleNew = (idx=-1) => {
        console.log("Add!", pid, loginuser, idx)
        addfunc(pid, loginuser, idx)
    }

    const handleRemove = (idx) => {
        console.log("Remove!", pid, loginuser, idx)
        removefunc(pid, loginuser, idx)
    }

    const orderItems = order.map((ele, idx) => {
        return (
            <ListGroup.Item>
                <Row className="ml-3">
                    <Col xs={1} style={{ padding: "unset" }}><span>{idx + 1}.</span></Col>
                    <Col style={{ padding: "unset" }}>
                        <span className="mr-1">{ele.length === 1 ? "獨享" : "分食"}：</span>
                        {ele.map(e => (
                            <Avatar src={users.find(u => u.id === e).profile} width={30} className="ml-1" />
                        ))}
                    </Col>
                    <Col xs={2} style={{ padding: "unset" }}>
                        {ele.includes(loginuser) ? (
                            <Button variant="secondary" size="sm" onClick={()=>handleRemove(idx)}>移除</Button>) : (
                            <Button size="sm" onClick={()=>handleNew(idx)}>加入</Button>)}
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    })

    return (
        <Accordion>
            <Card style={{ borderRadius: "unset" }}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Row>
                        <Col xs={2}>
                            <Image src={image} width={50}></Image>
                        </Col>
                        <Col>
                            <h5 style={{ margin: "unset" }}>{name}</h5>
                            <div className="pt-1">$ {price}</div>
                        </Col>
                        <Col xs={3} className="d-flex align-items-center">
                            <h5>
                                {order.length}份
                                <Button size="sm" variant="outline-primary" className="ml-1" onClick={()=>handleNew()}>＋</Button>
                            </h5>
                        </Col>
                    </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <ListGroup variant="flush">
                        {orderItems}
                    </ListGroup>
                    {/* <Card.Body>Hello! I'm the body</Card.Body> */}
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Item;