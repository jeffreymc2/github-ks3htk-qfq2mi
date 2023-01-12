// import React, { useState, useEffect } from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import {
//   Flex,
//   Spacer,
//   Center,
//   SimpleGrid,
//   Square,
//   Box,
//   Text,
//   Image,
//   Stack,
//   Button,
//   ButtonGroup,
// } from '@chakra-ui/react';

// const ImageGallery = () => {
//   const [resources, setImages] = useState([]);


//   const requestOptions = {
//     method: 'GET',
//     headers: { 
//       'Content-Type': 'application/json', 
//       // 'Authorization': 'Basic ' + btoa('538951581278876:AoqEi0qCLLfh7L2Mp9Ad7KDNsxo'),
      
//     },
// };
//   useEffect(() => {
//     async function fetchImages() {
//       const response = await fetch('https://538951581278876:AoqEi0qCLLfh7L2Mp9Ad7KDNsxo@api.cloudinary.com/v1_1/jeffreymc/resources/image/tags/brand', requestOptions);
//       const data = await r.json();
//       setImages(data);
//     }
//     fetchImages();
//   }, []);

  
  
//   const handleDownload = async (url, name) => {
//     // Fetch the image as a blob
//     const response = await fetch(url);
//     const blob = await response.blob();
//     // Create a virtual link element
//     const link = document.createElement('a');
//     // Set the link's href to the image blob
//     link.href = window.URL.createObjectURL(blob);
//     // Set the link's download attribute to the image name
//     link.download = name;
//     // Append the link to the body
//     document.body.appendChild(link);
//     // Click the link to trigger the download
//     link.click();
//     // Remove the link from the body
//     document.body.removeChild(link);
//   };

//   return (
//     <SimpleGrid columns={[2, null, 3]} spacing='40px'>
//       {resources.map(resource => (
//         <div key={resource.asset_id}>
//           <img src={resource.url} alt={image.name} />
//               <Button colorScheme='blue' onClick={() => handleDownload(image.url, image.name)}>
//             Download
//           </Button>
//         </div>
//       ))}
//     </SimpleGrid>
//   );
// };

// export default ImageGallery;

// import { useRealtime } from 'react-supabase'

// const Todos = () => {
//   const [result, reexecute] = useRealtime('todos')

//   const { data, fetching, error } = result

//   if (fetching) return <p>Loading...</p>
//   if (error) return <p>Oh no... {error.message}</p>

//   return (
//     <ul>
//       {data.map((todo) => (
//         <li key={todo.id}>{todo.title}</li>
//       ))}
//     </ul>
//   )
// }

// export default Todos

// import { StorageClient } from '@supabase/storage-js'

// const STORAGE_URL = 'https://mswrgxsoijhmpqyepekf.supabase.co/storage/v1'
// const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zd3JneHNvaWpobXBxeWVwZWtmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDA5NDI4MCwiZXhwIjoxOTY5NjcwMjgwfQ.m_iV9DJN4zT3HiTAchh_CZ6-Z50x3BLlRHa4cxCbB_c' //! service key, not anon key

// const storageClient = new StorageClient(STORAGE_URL, {
//   apikey: SERVICE_KEY,
//   Authorization: `Bearer ${SERVICE_KEY}`,
// })

// const { data, error } = await storageClient.from('softball').getPublicUrl('path/to/file')


// export default storageClient


import React, { useState, useEffect } from 'react';
import { Supabase } from '@supabase/supabase-js';
// import { createClient } from '@supabase/supabase-js'


const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Initialize Supabase
    // const supabase = new Supabase('https://mswrgxsoijhmpqyepekf.supabase.co/storage/v1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zd3JneHNvaWpobXBxeWVwZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQwOTQyODAsImV4cCI6MTk2OTY3MDI4MH0.5tcv7-VyPiLWrwZ81bZ2k1aTI73Zk3CCEwALIfEbGvw')


    const supabase = new Supabase(process.env.REACT_APP_SUPABASE_URL);
    // Fetch files from Supabase storage
    supabase
      .storage
      .select()
      .from('softball')
      .then(res => {
        setFiles(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>File List</h1>
      <ul>
        {files.map(file => (
          <li key={file.id}>
            <img src={file.thumbnail_url} alt={file.name} />
            <p>{file.name}</p>
            <a href={file.url} download>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;