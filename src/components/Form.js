import React, {useState, useEffect, useRef} from 'react';
import {app} from '../base';
import { v4 as uuidv4 } from 'uuid';


const db = app.firestore();

const Form = ({data, setData}) => {
     
    const [fileUrl, setFileUrl] = useState();
    const [file, setFile] = useState(null);
    const [nameInput, setNameInput] = useState();

    const changeFileHandler = async (e) => {
        const inputFile = await e.target.files[0];
        setFile(inputFile);
    }
    
    const changeNameHandler = (e) => {
        setNameInput(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        const description = e.target.description.value;
        e.target.reset();
        setNameInput('');

        const storageRef = app.storage().ref(); //Storage Reference
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();

        setData({...data, 
            id: uuidv4(), 
            name: name, 
            description: description, 
            url: fileUrl
        });

        db.collection('uploads').doc(name).set(
            {   
                id: uuidv4(),
                name: name,
                description: description,
                url: fileUrl
            }
        );

       console.log('successful');

    }

    useEffect(() => {
        setNameInput(file ? file.name : '');
    }, [file])

    return(
        <div className="main-Form">
           <form onSubmit={submitHandler} action="#">
               <div className="form-Box">
                   <label className='button' htmlFor="upload"></label>
                   <input 
                   className='upload'
                   onChange={changeFileHandler} 
                   type="file" 
                   />
               </div>
               <br />
               <div className="form-Box">
                   <label htmlFor="name">Name: </label>
                   <br />
                   <input
                   value={nameInput}
                   onChange={changeNameHandler} 
                   id='name' 
                   required
                   type="text"
                   autoComplete
                   />
               </div>
               <div className="form-Box">
                   <label htmlFor="description">Description: </label>
                   <br />
                   <input 
                   id='description' 
                   type="text" 
                   autoComplete/>
               </div>
               <div id='submit' className="form-Box">
                   <button type='submit' className="submitButton">Submit</button>
               </div>
           </form>
        </div>
    )
}

export default Form;