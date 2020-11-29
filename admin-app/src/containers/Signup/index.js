import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from '../../components/layout';
import Input from '../../components/UI/Input/index';

function Signup(props){
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input 
                    label='First Name'
                    placeholder='Enter your first name'
                    value=''
                    type='text'
                    onChange={() => {}}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    label='Last Name'
                    placeholder='Enter your last name'
                    value=''
                    type='text'
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                label='Email'
                placeholder='Enter your email'
                value=''
                type='email'
                onChange={() => {}}
              />

              <Input
                label='Password'
                placeholder='Enter your password'
                value=''
                type='password'
                onChange={() => {}}
              />
              
              <Button variant='primary' type='submit'>
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
        
      </Container>
    </Layout>
  )
}

export default Signup;