import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorMessage from './ErrorMessage';

const schema = yup.object().shape({
	username: yup.string().required('*Username required'),
	password: yup.string().required('*Password required').min(4, 'Minimum 4 characters')
});

export default function LoginForm(){
    const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema)
    });

    function onSubmit(data) {
		console.log('data', data);
	}

    return(
        <Form  className='bg-light rounded border border-info p-5' onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name='username' placeholder='Username' ref={register} />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' placeholder='Password' ref={register} />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </Form.Group>

            <Button className='bg-info' type='submit'>Login</Button>
        </Form>
    )
}