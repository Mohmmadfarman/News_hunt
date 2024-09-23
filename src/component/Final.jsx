
import React from 'react'


function Final({data}) {
    console.log("fffffffffffffff");
    
    console.log(data.length);
    console.log(typeof(data));
    
    
   
    
    
  return (
    <div id='first'>
       {
        data.length>0 ?

        data.map((item,i)=>{
            return(
               <div  key={i}>

                <div id='second'>
                    <h4>{item.content}</h4>
                   
                   <img src={item.
                       urlToImage
                       } alt="" height={160} width={270} />
                   
                </div>
                




               </div>
            )
        })
        :<h4>Please enter valid country or city name</h4>
        
       }
    </div>
  )
}

export default Final;