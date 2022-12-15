import React from "react";
import image from "../images/addis Sofware.png";
import { Box, Image, Button, Flex} from "rebass";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex
        p={3}
        maxWidth={1200}
        color="green"
        mx="auto"
        my="2"
        borderRadius="10"
        bg="#C0C2C9"
        alignItems="center"
      >
        <Link to='/'>
        <Image src={image} width={200} borderRadius="10" />
        </Link>
        <Box mx="auto" />
        <Button
          sx={{
            bg: "#0000FF",
            cursor:"pointer",
            py:'12px'
          }}
          variant="primary"
          mr={4}
        >
          <Link
          style={{
            textDecoration: "none",
              color:"white"
          }}
            to="/login"
          >
            signin
          </Link>
        </Button>
        <Button
          sx={{
            bg: "#0000FF",
            cursor:"pointer",
            py:'12px'
          }}
          variant="primary"
          mr={2}
        >
          <Link
            style={{
              textDecoration: "none",
                color:"white"
            }}
            to="/signup"
          >
            signup
          </Link>
        </Button>
      </Flex>
    </div>
  );
};

export default Navbar;
