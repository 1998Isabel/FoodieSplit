import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SuccessPage(props) {
    const [second, setSecond] = useState(3)

    useEffect(() => {setInterval(() => {
            setSecond(second - 1)
        }, 1000)
        setTimeout(() => {
            props.history.push('/payment/detail');
        }, 3000)
    })

    return (
        <Container className="container-home">
            <h4>
                LINE PAY 轉帳中～
            </h4>
            <h6>{second} 秒...</h6>
            {/* <p>可以先關閉分頁，回到聊天頁面</p> */}
        </Container>
    )
}

export default SuccessPage;