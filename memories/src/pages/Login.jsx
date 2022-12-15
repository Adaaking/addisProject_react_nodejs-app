import React from 'react'
import { Box, Text, Card, Button } from "rebass";
import { Input } from "@rebass/forms";
const Login = () => {
  return (
    <Box
      sx={{
        mt:"3",
        py:"5",
        maxWidth:1200,
        mx:"auto",
        display:"flex",
        justifyContent:'center',
        alignItems:"center"
      }}
    >
      <Box
      sx={{
        border:"1px solid black",
        py:5,
        px:4,
        borderRadius:10
      }}
      >
      <Text
        sx={{
          textAlign: "center",
          mb: "4",
          fontSize: 20,
        }}
      >
        LOGIN
      </Text>
      <Card>
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="title"
          placeholder="email"
        />
        <Input
          sx={{
            mt: "20px",
            py: "12px",
            borderRadius: 5,
          }}
          id="title"
          placeholder="password"
        />

      </Card>
      <Box
        sx={{
            display:'flex',
            justifyContent:'center'
        }}
      >
      <Button
        sx={{
          mt: "4",
          bg: "green",
          p:3,
          width:230
        }}
      >
        Login
      </Button>
      </Box>
      </Box>
    </Box>
  )
}

export default Login