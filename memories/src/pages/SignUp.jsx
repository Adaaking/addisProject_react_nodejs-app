import React, { useState } from 'react'
import { Box, Text, Card, Button } from "rebass";
import { Input,Select } from "@rebass/forms";
const SignUp = () => {

    const [user,setUser] = useState({
        email:'',
        password:'',
        age:'',
        height:'',
        gender:''
      })
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
      }
    
      const handleChange = (e) => {
        e.preventDefault()
        setUser({...user,[e.target.id]:e.target.value})
      }
  return (
    <Box
    as="form"
    onSubmit={handleSubmit}
      sx={{
        mt:"3",
        p:"5",
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
        p:5,
        borderRadius:10
      }}
      >
      <Text
        sx={{
          textAlign: "center",
          mb: "3",
          fontSize: 20,
        }}
      >
        REGISTER
      </Text>
      <Card>
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="age"
          placeholder="age"
          onChange={handleChange}
        />
         <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="height"
          placeholder="height"
          onChange={handleChange}
        />
          <Select
            id='gender'
            sx={{
                mt: "3",
                py: "12px",
                alignItems:'center',
                borderRadius: 5,
            }}
            onChange={handleChange}
            >
            <option>select gender</option>
            <option>
                male
            </option>
            <option>
                female
            </option>

        </Select>
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
          width:230,
          cursor:'pointer'
        }}
      >
        Register
      </Button>
      </Box>
      </Box>
    </Box>
  )
}

export default SignUp