import React, { useState } from 'react'


function Nav({final_input,start,setdata}) {
const [input,setinput]=useState('')

function inn(e){
    setinput(e.target.value)
    
    


}

function fun(){
    console.log(input);

    if(input.length==0||input.length==null||input.length==''){
        
        setdata('')
        alert("Please Enter the Country Name")
       

       


    }
    else{
        
        final_input(input)
        setinput('')
        start(input)
        
        
    }
    

  }

  return (
    <div>
    <div id='nav'>
       <input id='in' onChange={inn} type="text" value={input} placeholder='Enter countery name here eg-india,america' />
       <button id='btn' onClick={fun}>Search</button>
       </div>
      
    </div>
    
  )
}

export default Nav

