
import React, { useState } from "react";
import { Box, Text, Card, Button } from "rebass";
import { Input } from "@rebass/forms";
import { useDispatch, useSelector } from "react-redux";
import { createMemories, getMemories, updateMemory } from "../features/actions/memories";
import { useEffect } from "react";
const FormData = () => {
  const [memory,setMemory] = useState({title:'',tag:'',imageUrl:'',desc:'', year:''})
  const updateid = useSelector(state => state.memoriesReducer.updateId)
  const memoryobj = useSelector(state => state.memoriesReducer.memories.find(memory=> memory._id === updateid))
  const dispatch = useDispatch()

  useEffect(() => {
    if(memoryobj){
      setMemory(memoryobj)
    }
  },[updateid])

  const clearForm = () => {
    setMemory({title:'',tag:'',imageUrl:'',desc:'',year:''})
    dispatch(getMemories())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(updateid){
        dispatch(updateMemory(memory))
      }else{
        dispatch(createMemories(memory))
      }
      clearForm()
    } catch (error) {
      console.log(error.message)
    }
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
          value = {memory.title}
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
          value={memory.tag}
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
          value={memory.imageUrl}
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
          value={memory.year}
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
          value={memory.desc}
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
