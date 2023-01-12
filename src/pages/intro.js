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
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import styles from './index.module.css';


export default function Intro() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ChakraProvider>
      <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
    </ChakraProvider>
  );
}
