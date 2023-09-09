"use client";


import { SafeUser } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiOutlineMenu } from "react-icons/ai";
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
import {signIn, signOut} from 'next-auth/react'
import {useRouter} from "next/navigation"
import { navLinks } from '@/app';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';


interface NavbarProps{
  currentUser?: SafeUser | null;
}

const Navbar:React.FC<NavbarProps> = ({
  currentUser
}) => {

  const registerModal=useRegisterModal();
  const loginModal=useLoginModal();
  const [isOpen,setIsOpen]=useState(false);

  const router=useRouter();

  const [isLoading,setIsLoading]=useState(false);

    const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value);
    }, []);

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
    <header className='padding-x md:py-8 py-1 absolute w-full'>
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
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className='font-montserrat leading-normal text-lg'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div 
        onClick={toggleOpen}
        className="
          md:py-1
          md:px-2
          sm:p-[8px] 
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
            <AiOutlineMenu size={25} />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
        {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            md:w-[200px]
            bg-white 
            overflow-hidden 
            md:right-[65px] 
            md:top-[81px]
            text-sm
            z-10
            sm:right-[30px]
            sm:top-[40px]
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
                <hr />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
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