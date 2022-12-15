import React from 'react'
import { Box, Button, Card, Flex, Image, Text } from 'rebass'
import bgimage from '../images/bg12.jpg'

const MemoriesList = () => {
  return (
    <Flex 
    sx={{
        flexWrap:'wrap',
        justifyContent:'center'
    }}
    >
        <Card 
        sx={{
            width:255,
            bg:"whitesmoke",
            mr:"4",
            mb:"4",
            flex:"wrap",
            borderRadius:10,
            height:350
        }}
        >
            <Image src={bgimage} sx={{
                height:170,
                width:255,
                objectFit:'cover',
                borderTopLeftRadius:10,
                borderTopRightRadius:10
            }}/>
            <Box 
            sx={{
                display:"flex",
                justifyContent:'space-between',
                p:"2"
            }}>
                <Text
                sx={{
                    fontWeight:"bold",
                    color:"blue"
                }}
                >my memory</Text>
                <Text>my memory</Text>
            </Box>
            <Text sx={{
                p:"2"
            }}>pariatur debitis sunt neque consequatur iusto recusandae iure quam praesentium, ab ut architecto minima expedita!</Text>
            <Box
             sx={{
                display:"flex",
                justifyContent:'space-between',
                p:"2",
                alignItems:"baseline"
            }}
            >
                <Button sx={{
                    bg:"transparent",
                    color:"blue",
                    cursor:'pointer'
                }}> edit</Button>
                <Button
                sx={{
                    bg:"transparent",
                    color:"red",
                    cursor:'pointer'
                }}
                >delete</Button>
            </Box>
        </Card>
        <Card 
        sx={{
            width:255,
            bg:"whitesmoke",
            mr:"4",
            mb:"4",
            flex:"wrap",
            borderRadius:10,
            height:350
        }}
        >
            <Image src={bgimage} sx={{
                height:170,
                width:255,
                objectFit:'cover',
                borderTopLeftRadius:10,
                borderTopRightRadius:10
            }}/>
            <Box 
            sx={{
                display:"flex",
                justifyContent:'space-between',
                p:"2"
            }}>
                <Text
                sx={{
                    fontWeight:"bold",
                    color:"blue"
                }}
                >my memory</Text>
                <Text>my memory</Text>
            </Box>
            <Text sx={{
                p:"2"
            }}>pariatur debitis sunt neque consequatur iusto recusandae iure quam praesentium, ab ut architecto minima expedita!</Text>
            <Box
             sx={{
                display:"flex",
                justifyContent:'space-between',
                p:"2",
                alignItems:"baseline"
            }}
            >
                <Button sx={{
                    bg:"transparent",
                    color:"blue",
                    cursor:'pointer'
                }}> edit</Button>
                <Button
                sx={{
                    bg:"transparent",
                    color:"red",
                    cursor:'pointer'
                }}
                >delete</Button>
            </Box>
        </Card>

             <Card 
        sx={{
            width:255,
            bg:"blanchedalmond",
            mr:"4",
            mb:"4",
            flex:"wrap",
            borderRadius:10,
            height:350
        }}
        >
            <Image src={bgimage} sx={{
                height:170,
                width:255,
                objectFit:'cover',
                borderTopLeftRadius:10,
                borderTopRightRadius:10
            }}/>
            <Box 
            sx={{
                display:"flex",
                justifyContent:'space-between',
                p:"2"
            }}>
                <Text
                sx={{
                    fontWeight:"bold",
                    color:"blue"
                }}
                >my memory</Text>
                <Text>my memory</Text>
            </Box>
            <Text sx={{
                p:"2"
            }}>pariatur debitis sunt neque consequatur iusto recusandae iure quam praesentium, ab ut architecto minima expedita!</Text>
            <Box
             sx={{
                display:"flex",
                justifyContent:'space-between',
                p:"2",
                alignItems:"baseline"
            }}
            >
                <Button sx={{
                    bg:"transparent",
                    color:"blue",
                    cursor:'pointer'
                }}> edit</Button>
                <Button
                sx={{
                    bg:"transparent",
                    color:"red",
                    cursor:'pointer'
                }}
                >delete</Button>
            </Box>
        </Card>
        
    </Flex>
  )
}

export default MemoriesList