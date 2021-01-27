import React,{useEffect} from 'react';
import useStorage from '../Hooks/useStorage';

let ProgressBar=({file, setFile})=>{
    const{url, progress}= useStorage(file);
    console.log(url, progress);

    useEffect(()=>{
        if(url){
            setFile(null)
        }
    }, [url, setFile])
    return(
        <div className='progress-bar' style={{width: progress+ '%'}}>

        </div>
    )
}

export default ProgressBar;

// const{url, progress}= useStorage(file) --
// the useStorage fires the file inside the useEffect. 
// It takes the file, create a reference and try to upload the file. Then we get the values back for progress and url.
// To remove the progress bar, we have to set the value back to null. The progress bar is only shown when
// the file has a value. When we can set the file to null by setFile(null). We do that only when we get the url.
// The url is got after the upload is complete.
// The useEffect runs only when the url changes.
//  if(url){
//     setFile(null)
// } --if there is url, setFile to null, and the bar will not show.