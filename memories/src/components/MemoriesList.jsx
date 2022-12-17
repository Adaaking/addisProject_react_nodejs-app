import React from "react";
import { Box, Button, Card, Flex, Image, Text } from "rebass";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteMemory, getMemories, updateId } from "../features/actions/memories";

const MemoriesList = () => {
  const memories = useSelector((state) => state.memoriesReducer.memories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMemories());
  }, [dispatch]);
  return (
    <Flex
      sx={{
        flexWrap: "wrap",
        justifyContent: "start",
      }}
    >
      {memories &&
        memories.map((memory,indx) => (
          <Card
          key={indx}
            sx={{
              width: 255,
              bg: "whitesmoke",
              mr: "4",
              mb: "4",
              flex: "wrap",
              borderRadius: 10,
              height: 350,
            }}
          >
            <Image
              src={memory.imageUrl}
              sx={{
                height: 170,
                width: 255,
                objectFit: "cover",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: "2",
              }}
            >
              <Text
                sx={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                {memory.title}
              </Text>
              <Text>#{memory.tag}</Text>
            </Box>
            <Text
              sx={{
                p: "2",
              }}
            >
              pariatur debitis sunt neque consequatur iusto recusandae iure quam
              praesentium, ab ut architecto minima expedita!
            </Text>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: "2",
                alignItems: "baseline",
              }}
            >
              <Button
                sx={{
                  bg: "transparent",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(updateId(memory._id))}
              >
                {" "}
                edit
              </Button>
              <Button
                sx={{
                  bg: "transparent",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(deleteMemory(memory._id))}
              >
                delete
              </Button>
            </Box>
          </Card>
        ))}
      {!memories&& (
        <Box>
          <Text> no memories found</Text>
        </Box>
      )}
    </Flex>
  );
};

export default MemoriesList;
