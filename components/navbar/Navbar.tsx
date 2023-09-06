"use client";


import { SafeUser } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"
import { FieldValues,SubmitHandler,useForm } from "react-hook-form";
import { useCallback,useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "../modals/Modal";
import Heading from "../Heading";
import Input from "../Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import {signIn} from 'next-auth/react'
import {useRouter} from "next/navigation"


interface NavbarProps{
  currentUser?: SafeUser | null;
}

const Navbar:React.FC<NavbarProps> = ({
  currentUser
}) => {

  const registerModal=useRegisterModal();
  const loginModal=useLoginModal();

  const router=useRouter();

    const [isLoading,setIsLoading]=useState(false);

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    }=useForm<FieldValues>({
        defaultValues:{
            email:'',
            password:''
        }
    })

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);

        signIn('credentials',{
            ...data,
            redirect:false
        })
        .then((callback)=>{
            setIsLoading(false);
            if(callback?.ok){
                toast.success('Logged In');
                router.refresh();
                loginModal.onClose();
            }

            if(callback?.error){
                toast.error(callback.error)
            }
        })
    }
    
    const toggle=useCallback(()=>{
        loginModal.onClose();
        registerModal.onOpen();
    },[loginModal,registerModal])

    const bodyContent=(
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome back"
                subtitle="Login to your Account"
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
        <div className="flex flex-col gap-4 mt-2">
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
                        First time using airbnb?
                    </div>
                    <div
                        onClick={toggle}
                        className="
                            hover:underline
                            text-neutral-800
                            cursor-pointer
                        "
                    >
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )

  return (
    <>
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link href='/'>
          <Image
            priority
            src="images/logo.svg"
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </Link>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <div onClick={registerModal.onOpen}>
          <Link href='/'>Sign Up</Link>
          </div>
          <span>/</span>
          <div onClick={loginModal.onOpen}>
          <Link href='/'>Sign In</Link>
          </div>
        </div>  
        <div className='hidden max-lg:block'>
          <Image priority src="images/hamburger.svg" alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
    <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    />
    </>
  )
}

export default Navbar