'use client';

import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import CategoryInput from "@/components/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImageUpload from "@/components/ImageUpload";
import Input from "../Input";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import {MdOutlineApartment} from "react-icons/md"
import  {GiFamilyHouse,GiIsland} from "react-icons/gi"
import { BiSolidHome } from "react-icons/bi";
import useSellModal from "@/app/hooks/useSellModal";

enum STEPS{
  CATEGORY=0,
  IMAGES=1,
  DESCRIPTION=2,
  PRICE=3,
  INFO=4,
}

const SellModal = () => {
    const sellModal=useSellModal();
    const router=useRouter();

    const [step,setStep]=useState(STEPS.CATEGORY);
    const [isLoading,setIsLoading]=useState(false);

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState:{
        errors,
      },
      reset
    }=useForm<FieldValues>({
      defaultValues: {
          title:'',
          description:'',
          imageSrc:'',
          category:'',
          minPrice:'',
          maxPrice:'',
          area:'',
          place:'',
      },
    })

    const categories = [
        {
          label: 'Flat/Apartment',
          icon: MdOutlineApartment,
          description: 'Modern city living'
        },
        {
          label: 'Independent House',
          icon: GiFamilyHouse,
          description: 'Spacious family homes'
        },
        {
          label: 'Land/Plots',
          icon: GiIsland,
          description: 'Opportunities to build your dream'
        },
        {
          label: 'FarmHouse',
          icon: BiSolidHome,
          description: 'Rural paradise'
        },
      ];
      

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
      if(step!==STEPS.INFO){
        return onNext();
      }
      
      setIsLoading(true);

      axios.post('/api/listings',data)
      .then(()=>{
        toast.success('Listing created!');
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        sellModal.onClose();
      })
      .catch(()=>{
        toast.error('Something went wrong')
      }).finally(()=>{
        setIsLoading(false);
      })
    }

    const category=watch('category');
    const imageSrc=watch('imageSrc');


    const setCustomValue=(id:string,value:any)=>{
      setValue(id,value,{
        shouldDirty:true,
        shouldTouch:true,
        shouldValidate:true
      })
    }

    const onBack=()=>{
      setStep((value)=>value-1)
    }

    const onNext=()=>{
      setStep((value)=>value+1)
    }

    const actionLabel=useMemo(()=>{
      if(step===STEPS.INFO){
        return 'Create'
      }
      return 'Next';
    },[step])

    const secondaryActionLabel=useMemo(()=>{
      if(step===STEPS.CATEGORY){
        return undefined;
      }
      
      return'Back';
    },[step])

    let bodyContent=(
      <div className="flex flex-col gap-8">
        <Heading
          title="Which of these best describes your property?"
          subtitle="Pick a category"
        />
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-3
            max-h-[50vh]
            overflow-y-auto
          "
        >
          {categories.map((item)=>(
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={(category:any)=> setCustomValue('category',category)}
                selected={category===item.label}
                label={item.label}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    )

    if(step===STEPS.DESCRIPTION){
        bodyContent=(
            <div className="flex flex-col gap-8">
              <Heading
                title="How would you describe your Property?"
                subtitle="Short and sweet works best"
              />
              <Input
                id="title"
                label="Title"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <hr />
              <Input
                id="title"
                label="Description"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
          )
    }

    if(step===STEPS.IMAGES){
      bodyContent=(
        <div className="flex flex-col gap-8">
          <Heading
            title="Add a photo of your Property"
            subtitle="Show buyers how your Property looks like!"
          />
          <ImageUpload
            value={imageSrc}
            onChange={(value)=> setCustomValue('imageSrc',value)}
          />
        </div>
      )
    }

    if(step===STEPS.INFO){
      bodyContent=(
        <div className="flex flex-col gap-8">
          <Heading
            title="Add some more details about your Property?"
          />
          <Input
            id="place"
            label="Locality"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="area"
            label="Area in Sq feet"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
      )
    }

    if(step===STEPS.PRICE){
      bodyContent=(
        <div className="flex flex-col gap-8">
          <Heading
            title="Now, set your price range"
            subtitle="How much do you charge?"
          />
          <Input
            id="price"
            label="Min Price"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="price"
            label="Max Price"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
      )
    }

  return (
    <Modal
        isOpen={sellModal.isOpen}
        onClose={sellModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step===STEPS.CATEGORY ? undefined : onBack}
        title="Pinnacle Park Estates!"
        body={bodyContent}
    />
  )
}

export default SellModal;