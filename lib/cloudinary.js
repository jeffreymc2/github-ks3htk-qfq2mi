// export async function search() {


// const CLOUDINARY_URL=`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/brand`
// // const login = '538951581278876'
// // const password = 'AoqEi0qCLLfh7L2Mp9Ad7KDNsxo'
// const requestOptions = {
//   method: 'GET',
//   headers: { 
//     'Authorization': `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//   },
// };
// useEffect(() => {
//   async function fetchImages() {
//     const response = await fetch(CLOUDINARY_URL, requestOptions);
//     const data = await response.json();
//     setImages(data);
//   }
//   fetchImages();
// }, []);


// const handleDownload = async (url, name) => {
//   // Fetch the image as a blob
//   const response = await fetch(url);
//   const blob = await response.blob();
//   // Create a virtual link element
//   const link = document.createElement('a');
//   // Set the link's href to the image blob
//   link.href = window.URL.createObjectURL(blob);
//   // Set the link's download attribute to the image name
//   link.download = name;
//   // Append the link to the body
//   document.body.appendChild(link);
//   // Click the link to trigger the download
//   link.click();
//   // Remove the link from the body
//   document.body.removeChild(link);
// };
// }

// const ImageGallery = () => {
//   const [images, setImages] = useState([]);
//    const CLOUDINARY_URL=`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/brand`
//   // const login = '538951581278876'
//   // const password = 'AoqEi0qCLLfh7L2Mp9Ad7KDNsxo'
//   const requestOptions = {
//     method: 'GET',
//     headers: { 
//       'Authorization': `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//     },
//   };
//   useEffect(() => {
//     async function fetchImages() {
//       const response = await fetch(CLOUDINARY_URL, requestOptions);
//       const data = await response.json();
//       const {resources} = response;
  
//       const images = resources.map(resource => {
  
//         return {
//           id: resource.asset_id,
//           title: resource.public_id,
//           image: resource.secure_url,
//           width,
//         }
//       })
  
//       setImages(data);
//     }
//     fetchImages();
//   }, []);

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Card, CardHeader, CardBody, CardFooter, Grid, GridItem } from '@chakra-ui/react'
import { SimpleGrid, Box, Stack, Heading, Divider, ButtonGroup, Button, Text, Image, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, } from '@chakra-ui/react'


  export async function Search() {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const apiKey = '538951581278876';
      const apiSecret = 'AoqEi0qCLLfh7L2Mp9Ad7KDNsxo';
      const auth = btoa(`${apiKey}:${apiSecret}`); // encode the API key and secret in base64
  
      // Fetch the list of images from the Cloudinary API
      fetch('https://api.cloudinary.com/v1_1/jeffreymc/resources/image/tags/brand', {
        headers: {
          'Authorization': `Basic ${auth}`,
        }
      })
        .then(response => response.json())
        .then(data => setImages(data.resources));
    }, []);
  

    return (
      <ul>
      {images.map(image => (
        <li key={image.public_id}>
          <img src={image.url} alt={image.public_id} />
          <a href={image.secure_url} download>
            <button>Download</button>
          </a>
        </li>
      ))}
    </ul>
    );
  }
  