
import React, { useState } from "react";
import { Box, Text, Card, Button } from "rebass";
import { Input } from "@rebass/forms";
import { useDispatch } from "react-redux";
import { createMemories } from "../features/actions/memories";
const FormData = () => {
  const [memory,setMemory] = useState({
    title:'',
    tag:'',
    imageUrl:'',
    desc:'',
    year:''
  })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createMemories(memory))
  }

  const handleChange = (e) => {
    e.preventDefault()
    setMemory({...memory,[e.target.id]:e.target.value})
  }

  return (
    <Box
     as='form'
     onSubmit={handleSubmit}
      width={320}
      sx={{
        p: "4",
        bg: "white",
        height:460,
        border:"1px solid black",
        borderRadius: 5,
      }}
    >
      <Text
        sx={{
          textAlign: "center",
          mb: "3",
          fontSize: 20,
        }}
      >
        your memories
      </Text>
      <Card>
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="title"
          placeholder="title"
          onChange={handleChange}
        />
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="tag"
          placeholder="memory #tag"
          onChange={handleChange}
        />
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="imageUrl"
          placeholder="image url"
          onChange={handleChange}
        />
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="year"
          placeholder="year"
          onChange={handleChange}
        />
        <Input
          sx={{
            mt: "3",
            py: "12px",
            borderRadius: 5,
          }}
          id="desc"
          placeholder="description"
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
          width:230,
          cursor:'pointer'
        }}
        type='submit'
      >
        Add Memory
      </Button>
      </Box>
    </Box>
  );
};

export default FormData;
