"use client"

import Image from "next/image"

const Middle = () => {
  return (

    <div className="text-center" style={{maxWidth:'980px',margin:'0 auto',boxSizing:'border-box',display:'block',paddingTop:'50px',paddingBottom:'50px'}}>
    <h2 style={{color:'#1c1c1c',fontSize:'24px',fontWeight:'400',lineHeight:'1.25'}}>
      How are
      <strong style={{fontWeight:'600',boxSizing:'border-box',paddingLeft:'5px'}}>sellers rated</strong>
    </h2>
          <p className="subtitle" style={{margin:'0',padding:'10px 0 20px',color:'#999',fontSize:'16px',textAlign:'center'}}>
            We pick the best sellers for you who are best in class in various aspects
          </p>
          <div className="container" style={{margin:'60px 0 20px',textAlign:'center',boxSizing:'border-box',display:'block'}}>
            <div className="img-center-wrapper" style={{position:'relative',boxSizing:'border-box',display:'block'}}>
              <div style={{position:'relative',display:'inline-block',width:'100px',height:'120px',margin:'0 auto',textAlign:'center'}}>
                <Image alt="makan" src="/image/man.png" width={50} height={50} style={{width:'100%',maxHeight:'100%',border:'0',verticalAlign:'middle'}}/>
                <Image alt="makan1" src="/image/man2.png" width={50} height={50} style={{left:'0',opacity:'0',verticalAlign:'middle',animationName:'imgchange',animationTimingFunction:'ease-in-out',animationIterationCount:'infinite',animationDuration:'7s',animationDirection:'alternate',width:'100%',maxHeight:'100%'}}/>
              </div>
              <div style={{top:'0',left:'0',textAlign:'right',position:'absolute',width:'200px'}}>
                <h3 style={{fontSize:'18px',margin:'0',padding:'0',fontWeight:'400',lineHeight:'1'}}>
                 High Respone Rate
                 </h3>
                 <div className="text" style={{fontSize:'10px'}}>
                  We pick sellers for you who give you priority.over 90%of our top sellers
                  respond to enqueries within the first 24 hours!
                </div>
                
                </div>
    
                <div style={{top:'0',left:'0',textAlign:'right',position:'absolute',width:'200px',paddingTop:'100px'}}>
                <h3 style={{fontSize:'18px',margin:'0',padding:'0',fontWeight:'400',lineHeight:'1'}}>
                 Wide Coverage
                 </h3>
                 <div className="text" style={{fontSize:'10px'}}>
                  Sellers with wide variety ofproperties are more likely to satisfy your demands.More the opttions,
                  better is your decision.
                </div>
                </div>
    
                <div style={{top:'0',right:'0',textAlign:'left',position:'absolute',width:'200px'}}>
                <h3 style={{fontSize:'18px',margin:'0',padding:'0',fontWeight:'400',lineHeight:'1'}}>
                 Deals Closed
                 </h3>
                 <div className="text" style={{fontSize:'10px'}}>
                 We choose the sellers who have previously closed the deals with similar requirements as you have.They will
                 understand your needs better.
                </div>
                
                </div>
    
                <div style={{top:'0',right:'0',textAlign:'left',position:'absolute',width:'200px',paddingTop:'100px'}}>
                <h3 style={{fontSize:'18px',margin:'0',padding:'0',fontWeight:'400',lineHeight:'1'}}>
                 Rated & Reviewed
                 </h3>
                 <div className="text" style={{fontSize:'10px'}}>
                Tesimols from geninue buyers are the best way to jusgr a seller .Better the ratings,better will be experience.
                </div>
                
                </div>
            </div>
          </div>
        </div>

  )


}
export default Middle