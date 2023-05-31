import { Button, Card, Checkbox, Form, Input, Space } from 'antd';
import React, { ChangeEvent, FormEvent, useState } from 'react'

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex', margin: '200px 500px', }}>
            <Card title="Login" size="default">
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={handleLogin}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}>
                        <Input
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            value={email} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            value={password} />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 4, span: 12 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 4,  span: 20 }}>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Space>
    )
}

export default LoginPage