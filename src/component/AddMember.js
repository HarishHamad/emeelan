
  
import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    
  
  <main id="main">
  <section id="about" class="about">
  <br/>
 
  <div class="section-title">
      <h2>Add Member details</h2>
    </div >
  
  <div className='container-fluid'>
    <Row justify="center">
      <Col span={12}>
        <Form
          name="registration-form"
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: 'Please enter your first name' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: 'Please enter your last name' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
      
    </div>
</section>
 </main>
  );
};

export default RegistrationForm;
