
import Card from "@/components/Card";
import Feedback from "@/components/Feedback"
import Hero from "@/components/Hero";
import getCurrentUser from "../actions/getCurrentUser";

const page =async () => {

    const currentUser=await getCurrentUser();

  return (
    <>
    <Hero currentUser={currentUser}/>
    <hr/>
    <div className="container">
       <Card/>
    </div>
    <div>
      <Feedback/>
    </div>
    </>
  );
};

export default page;
