import {useState, useEffect} from 'react';
import {projectFirestore} from '../Firebase/index';

let useFireStore=(collection)=>{
    const[docs, setDocs]= useState([]);

    useEffect(()=>{
        const unsub= projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=>{
            let documents=[];
            snap.forEach(doc=>{
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        });

        return ()=> unsub();
    },[collection])
    return{docs};
}

export default useFireStore
// collection -- images collection
// communicate with the database in order to get the docs
