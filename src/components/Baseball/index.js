import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Card, CardHeader, CardBody, CardFooter, Grid, GridItem } from '@chakra-ui/react'
import { SimpleGrid, Box, Stack, Heading, Divider, ButtonGroup, Button, Text, Image, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, } from '@chakra-ui/react'


  export default function Baseball() {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const apiKey = '538951581278876';
      const apiSecret = 'AoqEi0qCLLfh7L2Mp9Ad7KDNsxo';
      const auth = btoa(`${apiKey}:${apiSecret}`); // encode the API key and secret in base64
  
      // Fetch the list of images from the Cloudinary API
      fetch('https://api.cloudinary.com/v1_1/jeffreymc/resources/image/tags/brand', {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Access-Control-Allow-Origin': 'no-cors',
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
  