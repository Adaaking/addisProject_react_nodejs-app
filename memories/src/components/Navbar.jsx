import React from 'react'
import image from '../images/addis Sofware.png'
import { ThemeProvider } from '@emotion/react'
import preset from '@rebass/preset'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button,
    Flex,
    Link
  } from 'rebass'


const Navbar = () => {
  return (
<ThemeProvider theme={preset}>
      <Flex
        p={3}
        width = {1200}
        color='green'
        mx="auto"
        my="2"
        borderRadius="10"
        bg='#C0C2C9'
        alignItems='center'
        justifyItems="space-between"
        >
        
        <Image src = {image} width={200} borderRadius="10"/>
        <Box mx='auto' />
        <Button variant='primary' mr={4}>
        <Link style={{textDeconration:"none"}} variant='nav'  href='https://www.geeksforgeeks.org/'>
          signin
        </Link> 
        </Button>
        <Button variant='primary' mr={2}>
            <Link variant='nav'  href='https://www.geeksforgeeks.org/'>
            signup
            </Link> 
        </Button>
      </Flex>
    </ThemeProvider>
  )
}

export default Navbar