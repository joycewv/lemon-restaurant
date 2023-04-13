
import React from "react";
import { Heading, Stack, Text, Container,} from '@chakra-ui/react';
import Nav from "../Nav";
import { ChakraProvider } from '@chakra-ui/react';

  export default function AboutPage() {

  return (
    <>
    <ChakraProvider>
        <Nav />
        <Container maxW={'5xl'} id="">
        <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}>
            <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <Text
                as={'span'}
                position={'relative'}
                _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'yellow.400',
                zIndex: -1,
                }}>About Us</Text>
            </Heading>
            <Text as={'span'} color={'#495e57'} fontWeight={700} fontSize={{ base: 'xl', lg: '2xl' }}>
            a family owned Mediterranean restaurant
            located on Maldove Street in Chicago, Illionis 📍
            </Text>
            <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'md', lg: 'lg' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'md', lg: 'lg' }}>
            Scelerisque eu ultrices vitae auctor. Tristique senectus et netus et malesuada fames ac.
            Cras ornare arcu dui vivamus. Vulputate sapien nec sagittis aliquam malesuada bibendum.
            Quam adipiscing vitae proin sagittis. Ornare aenean euismod elementum nisi quis eleifend quam.
            Sed arcu non odio euismod lacinia. Tincidunt augue interdum velit euismod in pellentesque massa placerat.
            Egestas integer eget aliquet nibh praesent tristique. Id consectetur purus ut faucibus pulvinar elementum integer enim.
            Mattis pellentesque id nibh tortor id aliquet. Non sodales neque sodales ut etiam sit amet.
            Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Amet volutpat consequat mauris nunc congue nisi.
            Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eget est lorem ipsum dolor sit.
            Placerat duis ultricies lacus sed turpis. Praesent tristique magna sit amet purus.
            </Text>
        </Stack>
        </Container>
        </ChakraProvider>
    </>
  );
}


