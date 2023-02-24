import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginApi from '../api/login.api';

const ChangePassword = (props) => {

    const onFinish = async (values) => {
    };


    return (<div style={{ marginTop: 20 }}>
        <h1 style={{ fontSize: "1.4em", fontWeight: "600", marginBottom: 40 }}>Change Password</h1>
      
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}

            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            autoComplete="off"
        >
            <Form.Item
                label="Old Password"
                name="oldPassword"
                rules={[
                    {
                        required: true,
                        message: 'Please input your old password!',
                    },
                ]}
            >
                <Input.Password placeholder='Enter your old password' />
            </Form.Item>
            <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                    {
                        required: true,
                        message: 'Please input your new password!',
                    },
                ]}
            >
                <Input.Password placeholder='Enter your new password' />
            </Form.Item>
            <Form.Item
                label="Confirm Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input this field!',
                    },
                ]}
            >
                <Input.Password placeholder='Enter your chosen password' />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    span: 24,
                }}
            >
                <div >
                    <Button style={{ marginTop: 12, height: 40, backgroundColor: "#212121" }} type="primary" htmlType="submit">
                        Change Password
                    </Button>
                </div>
            </Form.Item>
        </Form>

    </div >)
};
export default ChangePassword;