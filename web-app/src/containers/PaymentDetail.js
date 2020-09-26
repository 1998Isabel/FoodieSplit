import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Avatar from '../components/Avatar';

function PaymentDetail(props) {
    const { users } = props;
    const { paidlist, notpaidlist } = props.payment;
    console.log(props)
    const paidUsers = (paidlist || []).map((ele,idx) => {
        let user = users.find(u => u.id === ele)
        return (
            <Avatar src={user.profile} width={40} className="mx-1"/>
        )
    })

    const notpaidUsers = (notpaidlist || []).map((ele,idx) => {
        let user = users.find(u => u.id === ele)
        return (
            <Avatar src={user.profile} width={40} className="mx-1" />
        )
    })

    return (
        <Container className="container-home">
            <h4>已付款</h4>
            <div className="my-3">
                {paidUsers}
            </div>
            <h4>未付款</h4>
            <div className="my-3">
                {notpaidUsers}
            </div>
            <h6 className="mt-3">趕快催他們去付款吧！</h6>
            <h6>訂單才能成功送出喔～</h6>
            <p>（可以關閉分頁，回到聊天頁面）</p>
        </Container>
    )
}

const mapStateToProps = state => ({
    payment: state.shop.payment,
    users: state.shop.users
});

export default connect(mapStateToProps, null)(PaymentDetail);