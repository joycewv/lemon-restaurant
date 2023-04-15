import { ChakraProvider,
        Flex,
        Box,
        FormControl,
        FormLabel,
        Input,
        Checkbox,
        Stack,
        Link,
        Button,
        Heading,
        Text,
        useColorModeValue, } from '@chakra-ui/react';
import React from 'react';
import Nav from '../Nav';

const LoginPage =() => {

    return (
        <>
        <ChakraProvider>
           <Nav />
           <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'#495e57'}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                    <Heading fontSize={'4xl'} color={'#edefee'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'#edefee'}>
                        to get exclusive offers! ✌️
                    </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox colorScheme='yellow'>Remember me</Checkbox>
                                    <Link>Forgot password?</Link>
                                </Stack>
                                <Button
                                    bg={'#f4ce14'}
                                    color={'#333333'}
                                    _hover={{
                                    bg: 'yellow.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </ChakraProvider>
        </>
    )
}

export default LoginPage