import React from 'react';
import { Image } from 'react-bootstrap';

function Avatar(props) {
    return (
        <Image
            roundedCircle
            {...props}
        />
    )
}

export default Avatar;