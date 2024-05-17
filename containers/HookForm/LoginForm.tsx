import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';

import { useRouter } from 'next/router';
import { useAuth } from 'contexts/AuthContext';



type Props = any;



const LoginForm: React.FC<Props> = props => {
  const { register, handleSubmit, setValue, errors } = useForm();

  const { login,user,loading } = useAuth();


const router = useRouter()

  useEffect(() => {
    console.log(user)
    if (user) {
      router.push('/');
    }
  }, [user, router]);


  useEffect(() => {
    
    register({ name: 'email' });
    register({ name: 'password' });

  }, [register]);

  const onSubmit= async (data) => {

  
    const requestBody = {
      username: data.email,
      password: data["password"],
      osname: "linux"
    };

    try {
      console.log("here")
      await login(requestBody);
    } catch (error) {
      console.error('Error:', error);
    }

   
   // alert("ok");
  };






  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>


      <Block marginBottom="30px">
        <FormControl
          label="Your Email"
          caption="johndoe@demo.io"
          error={errors.email && 'Please enter a valid email address'}
        >
          <Input
            name="email"
            inputRef={register({
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            overrides={{
              InputContainer: {
                style: () => {
                  return { backgroundColor: 'transparent' };
                },
              },
            }}
          />
        </FormControl>
      </Block>

      <Block marginBottom="30px">
        <FormControl
          label="Password"
          caption="********"
          error={errors.name && 'This field is required'}
        >
          <Input
            type="password"
            name="password"
            inputRef={register({ required: true, maxLength: 32})}
            overrides={{
              InputContainer: {
                style: () => {
                  return { backgroundColor: 'transparent' };
                },
              },
            }}
          />
        </FormControl>
      </Block>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
