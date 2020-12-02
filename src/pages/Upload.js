import React from 'react'
import Form from '../components/Form';

const Upload = ({data, setData}) => {
    return (
        <div>
          <Form 
          data={data} 
          setData={setData} />
        </div>
    )
}

export default Upload
