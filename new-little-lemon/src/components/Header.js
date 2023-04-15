import {Button, Heading, Stack, Text, Flex, Image, Container, Box} from "@chakra-ui/react";

const Header = () => {

    const handleClick =(button) => () => {
        const id = `${button}-form`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <>
        <Container maxW={'full'} isDarkBackground bg={'#495e57'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          bg={'#495e57'}
          >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              >
              <Text
                as={'span'}
                position={'relative'}
                color={'#edefee'}
                fontSize={'4xl'}
                fontWeight={700}
                >
                Little Memon
              </Text>
              <br />
              <Text as={'span'} color={'#edefee'} fontWeight={700} fontSize={'xl'}>
              Chicago
              </Text>
            </Heading>
            <Text color={'#edefee'} fontSize={'lg'}>
            We are a family owned Mediterranean restaurant, 
            located on Maldove Street in Chicago, Illionis. 
            We focus on traditional recipes, served with a modern twist.
            </Text>
            <Button
                px={6}
                colorScheme={'#333333'}
                onClick={handleClick("booking")}
                color={'#333333'}
                size={'lg'}
                bg={'#f4ce14'}
                _hover={{bg:'yellow.500'}}
                >
                Reserve a Table
            </Button>
          </Stack>
          
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'400px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'restaurant-food'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={require('../assets/Mario and Adrian A.jpg')}
              />
            </Box>
          </Flex>
        </Stack>
        </Container>
        </>
    )

    /*return (
        <>
        <Flex
         isDarkBackground
         bg={'#495e57'}
         alignItems={''}
         spacing={8}
         py={16}
         p={4}
        >
            <HStack
             p={10}
             py={4}
            >
                <VStack alignItems={'flex-start'} minWidth="max-content">
                    <Heading as="h1" color={'#edefee'} gap='4'>Little Memon</Heading>
                    <Spacer />
                    <Heading fontSize={'2xl'} color={'#edefee'}>Chicago</Heading>
                    <Spacer />
                    <Text fontSize={'lg'} color={'#edefee'}>We are a family owned Mediterranean restaurant, </Text>
                    <Text fontSize={'lg'} color={'#edefee'}>located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes</Text>
                    <Text fontSize={'lg'} color={'#edefee'}>served with a modern twist.</Text>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Button
                     onClick={handleClick("booking")}
                     color={'#333333'}
                     size={'lg'}
                     bg={'#f4ce14'}
                     _hover={{bg:'yellow.500'}}
                    >Reserve a Table</Button>
                </VStack>
            </HStack>
            <Spacer />
            <HStack p={10} py={40} spacing={8} minWidth="max-content" alignItems={'center'}>
                <Image
                 src={'/restaurantfood.jpg'}
                 alt={'Little Lemon restaurant cuisine'}
                 objectFit={'cover'}
                 boxSize="325px"
                 rounded={'lg'}
                 alignItems={'center'}
                 justifyContent={'center'}
                 />
            </HStack>
        </Flex>
        </>
    )*/
}

export default Header