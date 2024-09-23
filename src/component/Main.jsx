import React from 'react'
import Final from './Final'

function Main({data}) {
  return (
    <div>
        {
            data ? <Final data={data}/> :<h3>No Data</h3>
        }
       
        
      
    </div>
  )
}

export default Main
