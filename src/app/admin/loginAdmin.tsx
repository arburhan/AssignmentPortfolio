'use client'
import { Button, Form, Input } from '@heroui/react';
import { useState } from 'react';

const LoginAdmin = (): JSX.Element | null => {
    const [errors, setErrors] = useState({});


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        const newErrors: { email?: string } = {};

        if (data.email === "burhan190629@gmail.com") {
            newErrors.email = "Nice try!";
            setErrors(newErrors);
        }
        console.log(data);
    }

    return (
        <Form
            className="w-full justify-center items-center space-y-4"
            validationBehavior="native"
            validationErrors={errors}
            onSubmit={onSubmit}
        >
            <div className="flex flex-col gap-4 max-w-xl my-10">
                <Input
                    isRequired
                    errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing) {
                            return "Please enter your email";
                        }
                        if (validationDetails.typeMismatch) {
                            return "Please enter a valid email address";
                        }
                    }}
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    className='w-80'
                />

                <Input
                    isRequired
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                />

                <div className="flex gap-4">
                    <Button className="w-full" color="primary" type="submit">
                        Submit
                    </Button>

                </div>
            </div>
        </Form>
    );
};

export default LoginAdmin;