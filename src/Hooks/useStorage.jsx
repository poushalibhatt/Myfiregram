import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timeStamp} from '../Firebase/index';

let useStorage=file=>{
    const[progress, setProgress]= useState(0);
    const[error, setError]= useState(null);
    const[url, setUrl]= useState('');

    useEffect(()=>{
        // reference to where the file should be saved 
        const storageRef= projectStorage.ref(file.name);
        const collectionRef= projectFirestore.collection('images');

        storageRef.put(file)
        .on('state_changed',(snap)=>{
            let perecntage= (snap.bytesTransferred/ snap.totalBytes)*100;
            setProgress(perecntage);
        },(err)=>{
            setError(err)
        },async ()=>{
            // url of the just uploaded image
            const url= await storageRef.getDownloadURL();
            const createdAt= timeStamp();
            collectionRef.add({url, createdAt});
            setUrl(url);
            console.log(collectionRef);
        })
    },[file])
    
    return {progress, error, url}
}


export default useStorage;

// progress- progress of the upload
// error- any error from the upload
// url- image url that we get back from the storage, after the image has fully uploaded.
// const storageRef= projectStorage.ref(file.name) -- 
// creating a reference to the file, inside the default firebase storage hook                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             the file 
// When we upload something using this reference, the file should have name (file.name)
// storageRef.put(file) --take the file/upload file and put it in the referenc. Is asynchronous.
// .on('state_changed',(snap)) --when ever the state changes(upload/progress), we fire a function
// 'state_changed'- event. (snap)-- is snapshot in time of the upload at that moment.
// The (snap) function maybe called several times during a single upload
// error=> --if there is eerror during upload
// It takes the storageRef and finds the file that is uploaded, get the getDownloadURL() and stores in const=Url
// const url= await storageRef.getDownloadURl(); --once we have the url of the uploaded image. Take the url and save it inside the database of firebase.
// Use this progress in another component to show the progress bar

// In order to get the images from the store and display we need the url inside the database. And use that data to show the images.
// projectFirestore --use it when we want to interact with the firestore database.
// With the collection we are sending the url and time of upload of the image.
// 