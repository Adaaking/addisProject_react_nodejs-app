import React, { useState } from 'react'
import { Box, Text, Card, Button } from "rebass";
import { Input,Select } from "@rebass/forms";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/actions/user';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [user,setUser] = useState({ email:'',password:'', age:'', height:'', gender:''})
    const success = useSelector(state => state.userReducer.user)

     const dispatch = useDispatch()
     const navigate = useNavigate() 

     const handleSubmit = async(e) => {
        e.preventDefault()
         await dispatch(registerUser(user))
         navigate('/')
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
          type="email"
          onChange={handleChange}
          required
        />
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="password"
          placeholder="password"
          type="password"
          onChange={handleChange}
          required
        />
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="age"
          placeholder="age"
          type="number"
          onChange={handleChange}
          required
        />
         <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="height"
          placeholder="height"
          type="number"
          onChange={handleChange}
          required
        />
          <Select
            id='gender'
            sx={{
                mt: "3",
                py: "12px",
                alignItems:'center',
                borderRadius: 5,
            }}
            type="text"
            onChange={handleChange}
            required
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