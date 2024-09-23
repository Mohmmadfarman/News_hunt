import { useEffect, useState } from 'react'

import './App.css'
import Main from './component/Main';
import Nav from './component/Nav';
// import Nav from './component/Nav'
// import counterContext from './context/Context'
// https://newsapi.org/v2/everything?q=america&apiKey=68e1a3cef2364e42879dd1895c29a411
function App() {
  const [data,setdata]=useState(null)
  const [takeinput,settakeinput]=useState('')
 

  function final_input(e){
    console.log(e);
    settakeinput(e)
    
  }

  const start = async (p) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${p}&apiKey=68e1a3cef2364e42879dd1895c29a411`);
  
      if (response.ok) {
        const final = await response.json();
        console.log(final.articles); 
        setdata(final.articles)
        // Use or process the data as needed
        
      } 
     
      
      else {
        alert("Error: " + response.statusText); // Better error handling
      }
    } catch (error) {
      console.error("Fetch error: ", error); // Catch any network errors
      alert("Error fetching data");
    }
  };

  // useEffect(()=>{
  //   start(takeinput)
  // },[takeinput])


  return (
    <div>
      
        <>
        <div id='d'>
        <h2 id="new">Daily News</h2>
         </div>
         <Nav final_input={final_input} start={start} data={data} setdata={setdata}/>
          <div>
            
              <Main data={data}/>
              
            
          </div>
        
         </>

        
       
     

   
    
    </div>

  )
}

export default App

{/* <div id='d'>
<h2 id="new">Daily News</h2>
</div>
<Nav final_input={final_input} start={start} data={data} setdata={setdata} empty={empty}/>
<Main data={data}/> */}
