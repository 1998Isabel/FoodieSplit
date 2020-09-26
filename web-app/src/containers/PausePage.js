import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PausePage() {
    return (
        <Container className="container-home">
            <h4>
                稍等一下～
            </h4>
            <h4>
                等大家完成點餐！
            </h4>
            <p>可以先關閉分頁，回到聊天頁面</p>
            <Link to="/checkout" className="text-white">
                <Button
                    // style={{ position: "fixed", bottom: "30px" }}
                    variant="primary"
                >
                    返回
            	</Button>
            </Link>
        </Container>
    )
}

export default PausePage;