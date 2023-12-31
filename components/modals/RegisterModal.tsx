'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"
import { FieldValues,SubmitHandler,useForm } from "react-hook-form";
import { useCallback,useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
    const LoginModal=useLoginModal();
    const RegisterModal=useRegisterModal();
    const [isLoading,setIsLoading]=useState(false);

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    }=useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);

        axios.post('/api/register',data)
            .then(()=>{
                toast.success('Registered!');
                RegisterModal.onClose();
            })
            .catch((error)=>{
                toast.error('Something Went Wrong!')
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }

    const toggle=useCallback(()=>{
        LoginModal.onOpen();
        RegisterModal.onClose();
    },[LoginModal,RegisterModal])

    const bodyContent=(
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to Pinnacle Estates!"
                subtitle="Create an Account"
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent=(
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={()=>signIn('google')}
            />
            <div
                className="
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                "
            >
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-center
                        gap-2
                    "
                >
                    <div>
                        Already have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className="
                            hover:underline
                            text-neutral-800
                            cursor-pointer
                        "
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen={RegisterModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={RegisterModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    />
  )
}

export default RegisterModal