import React from 'react';
import useFireStore from '../Hooks/useFireStore';

let ImageGrid=()=>{
    const{docs}= useFireStore('images');
    console.log(docs);
    return(
        <div>
            {docs && docs.map(doc =>(
                <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt='alternate image' />
                </div>
            ))}
        </div>
    )
}


export default ImageGrid;

// Setup a connection between our application and fireStore. So that we can cycle through the
// document and output that in our react component. 