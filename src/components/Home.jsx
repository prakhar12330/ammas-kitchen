import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.webp';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};

const Home = () => {
    return (
      <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p="16">
          <Heading
            textTransform={'uppercase'}
            py="2"
            w={'fit-content'}
            borderBottom={'2px solid'}
            m="auto"
          >
            About Us
          </Heading>

          <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image src={img5} h={['40', '400']} />

            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Amma's Kadhai, a top-tier recipe website
              that is estimated to have over 25 million visitors each month.
              With a crisp and easily navigable site and backing of skilled and
              experienced culinary masters, this platform furnishes its visitors
              with thousands of recipes and meal preparation videos. It also
              features comprehensive how-to-do guides on absolutely everything
              food-related topics. The site also permits users to create
              pvideos and upload their secret recipes with others.
            </Text>
          </Stack>
        </Container>
      </Box>
    );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        "Food that Awaits you"
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        "Eat it your way"
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        "Chicken for your tastebuds"
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        "Adorn your Food Senses"
      </Heading>
    </Box>
  </Carousel>
);

export default Home;