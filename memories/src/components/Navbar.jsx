import React, { useEffect, useState } from "react";
import image from "../images/addis Sofware.png";
import { Box, Image, Button, Flex, Text } from "rebass";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../features/actions/user";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

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
        <Link to="/">
          <Image src={image} width={200} borderRadius="10" />
        </Link>
        <Box mx="auto" />
        {!user && (
          <>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="/login"
            >
              <Button
                sx={{
                  bg: "#0000FF",
                  cursor: "pointer",
                  py: "12px",
                }}
                variant="primary"
                mr={4}
              >
                signin
              </Button>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="/signup"
            >
              <Button
                sx={{
                  bg: "#0000FF",
                  cursor: "pointer",
                  py: "12px",
                }}
                variant="primary"
                mr={2}
              >
                signup
              </Button>
            </Link>
          </>
        )}
        {user && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaUserCircle size={40} />
            <Button
              sx={{
                ml: "3",
                bg: "blue",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => dispatch(Logout())}
            >
              logout
            </Button>
          </Box>
        )}
      </Flex>
    </div>
  );
};

export default Navbar;
