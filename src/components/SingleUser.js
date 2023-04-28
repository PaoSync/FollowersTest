import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SingleUser = ({user, position, setUsers, users}) => {   
    const [buttonText, setButtonText] = useState('Siguiendo'); 
    const [buttonClass, setButtonClass] = useState('outline-primary'); 

    useEffect(() => {
        if(!user.followed){
            setButtonText("Seguir")
            setButtonClass("primary")
        } else {
            setButtonText("Siguiendo")
            setButtonClass("outline-primary")
        }
    }, []);
    

    const updateFollow = () => {
        users[position].followed = user.followed ? false: true;
        setUsers([...users]);
    };

    const buttonRedHover = (isHover, isFollowed) => {
        if(isHover & isFollowed){ // Siguiendo & hover
            setButtonClass("danger")
            setButtonText("Dejar de Seguir")
        } else if (!isHover & isFollowed) { // Siguiendo & no hover
            setButtonClass("outline-primary")
            setButtonText("Siguiendo")
        } else { // Seguir
            setButtonClass("primary")
            setButtonText("Seguir")
        }
        
    }

    return (
        <div>         
                <Row className='user-row' >
                    <Col>
                        <Image src={user.userImage} roundedCircle className='users-image' />
                    </Col>
                    <Col xs={5}>
                        <h6>{user.fullName}</h6>
                        <p>@{user.userName}</p>
                    </Col>
                    <Col xs={4}>
                        <Button variant={buttonClass} onClick={updateFollow} 
                        onMouseEnter={() => buttonRedHover(true, user.followed)} 
                        onMouseLeave={() => buttonRedHover(false, user.followed)} >
                            {buttonText}
                        </Button>
                    </Col>
                </Row>
        </div>
    );
};

export default SingleUser;