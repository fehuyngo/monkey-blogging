import { useAuth } from 'contexts/auth-context';
import React from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthenticationPage from './AuthenticationPage';
import { useForm } from 'react-hook-form';
import { Field } from 'components/field';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { Button } from 'components/button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase-app/firebase-config';
import InputPasswordToggle from 'components/input/InputPasswordToggle';

const schema = yup.object({
    email: yup.string().email("Please enter valid email address").required("Please enter your email address"),
    password: yup.string().min(8, "Your password must be at least 8 characters or greater").required("Please enter your password"),
});

const SignInPage = () => {
    const {handleSubmit, 
        control,
        formState: { errors, isValid, isSubmitting}, 
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const {userInfo} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Login Page";
        if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
    const handleSignIn = async (values) => {
        if (!isValid) return;
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            navigate("/");
          } catch (error) {
            if (error.message.includes("wrong-password"))
              toast.error("It seems your password was wrong");
          }
    };
    useEffect(() => {
        const arrayErrors = Object.values(errors);
        if (arrayErrors.length > 0) {
            toast.error(arrayErrors[0]?.message, {
                pauseOnHover: false,
                delay: 0,
            });
        }
    }, [errors]);
    return (
        <AuthenticationPage>
            <form className='form' onSubmit={handleSubmit(handleSignIn)} autoComplete='off'>
                <Field>
                    <Label htmlFor='email'>Email address</Label>
                    <Input type='text' 
                    name='email'
                    placeholder='Enter your email address' 
                    control={control}
                    ></Input>
                </Field>
                <Field>
                    <Label htmlFor='password'>Password</Label>
                    <InputPasswordToggle control={control}></InputPasswordToggle>
                </Field>
                <div className='have-account'>
                    You have not had an account? <NavLink to={"/sign-up"}>Register an account</NavLink>{" "}
                </div>
                <Button type='submit' className="w-full max-w-[300px] mx-auto" isLoading={isSubmitting} disabled={isSubmitting}>
                    Login
                </Button>
            </form>
        </AuthenticationPage>
    );
};

export default SignInPage;