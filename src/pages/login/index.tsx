/* eslint-disable prettier/prettier */
import React, { FormEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Yup from 'settings/yup';
import { NextPage } from 'next';
/* import jwt_decode from "jwt-decode"; */

import { Button } from '../../components/Button';
import { Input } from '../../components/Input/index';

import LayoutGuest from 'components/LayoutGuest';

import * as s from './style';
import { useAuthDispatch } from 'contexts/auth/AuthContext';

const Login: NextPage = () => {
    /* Yup Config */
    const schema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required()
    });
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });

    /* States */    
    const { signIn } = useAuthDispatch();
    const [haveValidEmail, setHaveValidEmail] = useState(false);

    type Data = {
        email: string;
        password: string;
    };    

    const onContinue = () => {
        setHaveValidEmail(true);
    };
    /* @ts-ignore */
    const handleLogin: SubmitHandler<Data> = async data => {        
        signIn({
            email: data.email,
            password: data.password
        })
    };

    return (
        <LayoutGuest>
            <s.ContainerPage>
                <s.ContainerLogin onSubmit={handleSubmit(handleLogin)}>
                    <s.Title>
                        {!haveValidEmail ? 'Olá! Digite seu email' : 'Digite Sua senha'}
                    </s.Title>
                    <div style={{ display: `${haveValidEmail ? 'none' : ''}` }}>
                        <Input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="email"
                            control={control}
                        />
                    </div>
                    <div style={{ display: `${!haveValidEmail ? 'none' : ''}` }}>
                        <Input
                            typePassword
                            id="password"
                            name="password"
                            placeholder="senha"
                            control={control}
                        />
                    </div>
                    <div style={{ display: `${haveValidEmail ? 'none' : ''}` }}>
                        <Button variant="primary" onClick={() => onContinue()}>
                            Continuar
                        </Button>
                    </div>
                    <div style={{ display: `${!haveValidEmail ? 'none' : ''}` }}>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </div>
                </s.ContainerLogin>
            </s.ContainerPage>
        </LayoutGuest>
    );
};

export default Login;
