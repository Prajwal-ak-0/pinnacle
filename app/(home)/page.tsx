
import Card from "@/components/BestSellerCard";
import Feedback from "@/components/Feedback"
import Hero from "@/components/Hero";
import getCurrentUser from "../actions/getCurrentUser";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const page =async () => {

    const currentUser=await getCurrentUser();
    console.log(currentUser)

    const userId=currentUser?.id || "";

  return (
    <>
    <Hero currentUser={currentUser}/>
  
    <Card/>
    <div className='p-8'>
      <Testimonials/>
    </div>
    <Feedback/>
    <Footer/>
    </>
  );
};

export default page;
