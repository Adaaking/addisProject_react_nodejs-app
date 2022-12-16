import React, { useState } from 'react'
import { Box, Text, Card, Button } from "rebass";
import { Input } from "@rebass/forms";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../features/actions/user';
const Login = () => {
  const [user,setUser] = useState({ email:'',password:''})
  const success = useSelector(state => state.userReducer.user)

  const dispatch = useDispatch()
  const navigate = useNavigate() 

  const handleSubmit = async (e) => {
     e.preventDefault()
     await dispatch(userLogin(user))
     { success && navigate('/')}
   }

   const handleChange = (e) => {
    e.preventDefault()
    setUser({[e.target.id]:e.target.value})
   }
  return (
    <Box
    as='form'
    onSubmit={handleSubmit}
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
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <Input
          sx={{
            mt: "20px",
            py: "12px",
            borderRadius: 5,
          }}
          id="password"
          placeholder="password"
          onChange={handleChange}
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