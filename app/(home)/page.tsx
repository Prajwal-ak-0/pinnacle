
import Card from "@/components/BestSellerCard";
import Feedback from "@/components/Feedback"
import Hero from "@/components/Hero";
import getCurrentUser from "../actions/getCurrentUser";
import getProperties from "../actions/getProperties";
import Testimonials from "@/components/Testimonials";

const page =async () => {

    const currentUser=await getCurrentUser();

    const userId=currentUser?.id || "";
    const properties=await getProperties({userId});

  return (
    <>
    <Hero currentUser={currentUser}/>
  
    <Card/>
    <div className='p-8'>
      <Testimonials/>
    </div>
    <Feedback/>
    </>
  );
};

export default page;
