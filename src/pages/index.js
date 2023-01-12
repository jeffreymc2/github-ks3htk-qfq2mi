import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Flex,
  Spacer,
  Center,
  Square,
  Box,
  Text,
  Image,
  Stack,
  Grid, 
  GridItem,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'

import styles from './index.module.css';



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Grid
      h='200px'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
          <GridItem rowSpan={2} colSpan={1} bg='tomato' > 
          {/* <Image
              src="https://res.cloudinary.com/jeffreymc/image/upload/v1643384297/Perfect%20Game/Marketing%20Photos/PG_Game_52_f0ywkw.jpg"
              alt=""
              objectFit="cover"
            ></Image> */}
          </GridItem>
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={4} bg='tomato' />
    </Grid>
  );
}

const client = createClient('https://mswrgxsoijhmpqyepekf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zd3JneHNvaWpobXBxeWVwZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQwOTQyODAsImV4cCI6MTk2OTY3MDI4MH0.5tcv7-VyPiLWrwZ81bZ2k1aTI73Zk3CCEwALIfEbGvw')


export default function Home() {
  const { siteConfig } = useDocusaurusContext();


  return (

    <Provider value={client}>

    <ChakraProvider>
      <Layout
        title={` ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <Flex color="white">
          <Center w="50%" bg="blue.500">
            <Stack spacing={1}>
              <Text fontSize="5xl">Perfect Game</Text>
              <Text fontSize="2xl">2023 Brand Guide</Text>
              <Text fontSize="xs">Version: 12.7.2022 </Text>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro"
                >
                    Get Started              
                </Link>
            </Stack>
          </Center>

          <Box flex="1" >
            <Image
              src="https://res.cloudinary.com/jeffreymc/image/upload/v1643384297/Perfect%20Game/Marketing%20Photos/PG_Game_52_f0ywkw.jpg"
              alt=""
              objectFit="cover"
            ></Image>
          </Box>
        </Flex>
        
      </Layout>
    </ChakraProvider>
    </Provider>
  );
}
