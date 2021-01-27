import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

let UploadForm=()=>{
    const [file, setFile]= useState(null);
    const [error, setError]= useState(null);
    const types=['image/jpeg','image/png','image/jpg'];

    let changeHandler=e=>{
        let selected= e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null)
            setError(`Select valid image type [${types}]`);
        }
    }

    return(
        <form>
            <input type='file' onChange={changeHandler}/>
            <div className='output'>
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;

// onChange- everytime there is any kind of change the changeHandler is going to fire.
// e.target.files[0]- target is the input, files(all the files that has been selected. But only gets the 1st one
// if(selected){
//     setFile(selected && types.includes(selected.type));
// }  -- setFile()- only set the value of the file if something is selected && checking the type as well
// else{
//     setFile(null)
// } -- resetting the value to null, cz if selected something other than image, is not taken
// setError- setting an error state, just to display the error in the console.
// <ProgressBar file={file} setFile={setFile}/> --pass the file to the ProgressBar component