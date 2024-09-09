import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CreateUser = ({ username, email, onChange, onCreate }) => {

    // const { username, email, onChange, onCreate } = props;

    return (
        <div className='createName'>
            <Form>
              <Row className="align-items-center" style={{margin: '20px 20px 20px 33%'}}>
                <Col xs="auto">
                  <Form.Control
                    type="text" 
                    name='username' 
                    placeholder='이름' 
                    onChange={onChange}
                    value={username}
                  />
                </Col>
                <Col xs="auto">
                    <Form.Control 
                        type="text" 
                        name='email' 
                        placeholder='이메일' 
                        onChange={onChange}
                        value={email} 
                    />
                </Col>
                <Col xs="auto">
                  <Button type="submit" onClick={onCreate} >
                    Create
                  </Button>
                </Col>
              </Row>
            </Form>
            {/* <input 
            type="text" 
            name='username' 
            placeholder='이름' 
            onChange={onChange}
            value={username}
            />
            <input 
            type="text" 
            name='email' 
            placeholder='이메일' 
            onChange={onChange}
            value={email}
            /> */}
            {/* <button onClick={onCreate}>create</button> */}
        </div>
    );
};

export default CreateUser;
