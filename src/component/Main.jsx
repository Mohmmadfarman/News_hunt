import React from 'react'
import Final from './Final'

function Main({data}) {
  return (
    <div>
        {
            data ? <Final data={data}/> :"NO Data"
        }
       
        
      
    </div>
  )
}

export default Main
