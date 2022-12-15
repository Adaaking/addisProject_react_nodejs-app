import React from 'react'
import { Box, Flex } from 'rebass'
import FormData from '../components/FormData'
import MemoriesList from '../components/MemoriesList'

const Home = () => {
  return (
    <Flex sx={{
       mt:"5",
       maxWidth:1200,
       mx:'auto'
    }}>
       <MemoriesList/>
       <Box m="auto"/>
        <FormData/>
    </Flex>
  )
}

export default Home