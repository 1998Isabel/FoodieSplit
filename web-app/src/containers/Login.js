import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setLoginUser } from '../actions/shopActions';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Avatar from '../components/Avatar';

function Login(props) {
    const { user } = props;

    return (
        <Container className="container-home">
            <Row>
                <Avatar src={user.profile} style={{width: "30vw"}}/>
            </Row>
            <Row className="mt-2">
                <h4>{user.name}</h4>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.shop.user
});

export default connect(mapStateToProps, { setLoginUser })(Login);