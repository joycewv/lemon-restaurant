import Nav from "../Nav";
import { ChakraProvider, Spacer } from '@chakra-ui/react';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';

  // Replace test data with your own

  /*const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });*/
  

  const dishes =[
    {
      title: "Greek Salad",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with garlic and rosemary croutons.",
    },
    {
      title: "Falafel",
      description: "Made of a mixture of mashed chickpeas and various herbs and spices. Rolled into small patties then deep-fried.",
    },
    {
      title: "Ratatouille",
      description: "This ratatouille is built on a rich base of tomato stew. Slices of eggplant, bell peppers, and zucchini provide vibrant colors and fresh flavors.",
    },
    {
      title: "Pizza Margherita",
      description: "Iconic Mediterranean tastes. A wholesome wheat-bread base, with mozzarella cheese, tomatoes, and basil as the toppings.",
    },
    {
      title: "Fattoush Salad",
      description: "A classic Fattoush salad that utilize freshly chopped cucumbers, lettuce, tomatoes, onions, and radish. A little spring of mint and lemon add an extra layer to the warm dough and the crisp vegetables of the salad.",
    },
    {
      title: "Mezze",
      description: "A collection of small dishes and appetizers. It including tabbouleh, hummus, baba ganoush, fava beans and grilled cheeses.",
    },
    {
      title: "Shakshuka",
      description: "Served in an iron pan, this bubbling stew with poached eggs are planted. Eggs are heavily seasoned with spices to further intensify the flavor.",
    },
    {
      title: "Risotto",
      description: "Offers both meat-based and vegetarian options, parmesan cheese, onions, wine, and butter all cooked in the broth with rice.",
    },
  ]



  export default function menu() {
    return (
      <>
      <ChakraProvider>
        <Nav />
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Heading fontSize={'3xl'}>Our Menu</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
              We offer a wide rang of Mediterranean cuisines made with fresh vegetables, herbs and tender meats.
            </Text>
          </Stack>
          <Container maxW={'6xl'} mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {dishes.map((dish) => (
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon  />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>{dish.title}</Text>
                    <Text color={'gray.600'}>{dish.description}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </ChakraProvider>
      </>
    );
  }
