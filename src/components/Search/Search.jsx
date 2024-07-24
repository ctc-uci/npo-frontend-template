import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Flex,
  IconButton,
  Input,
  Button,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import classes from './Search.module.css';

function SearchDrawer({ isOpen, onClose }) {
  const [searchInput, setSearchInput] = useState('');
  const btnRef = React.useRef();
  const linkList = [
    { name: 'Login', page: '/login' },
    { name: 'Mission', page: '#mission' },
    { name: 'About', page: '#about' },
    { name: 'Featured Students', page: '#featured' },
    { name: 'Contact', page: '#contact' },
    { name: 'Products', page: '#products' },
    { name: 'Profile', page: '/profile' },
  ];

  const filteredLinks = linkList.filter(link =>
    link.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <>
      {/* <Drawer size="lg" placement="right" isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay/>
        <DrawerContent width="25%!important" className={classes.drawer}>
          <DrawerCloseButton onClick={() => {onClose(); console.log("hii");}} sx={{width: '3%'}}/>
          <Flex padding="24px">
            <Input
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {setSearchInput(e.target.value); console.log(e.target.value);}}
            />
          </Flex>
          <DrawerBody marginTop={2}>
            <VStack spacing={4} align="stretch">
              {searchInput !== "" && filteredLinks.map((link, index) => (
                <Box key={link.name} p={5} shadow="md" borderWidth="1px">
                  {link.name === "Login" || link.name === "Profile" ?
                  <Link to={link.page} className={classes.links}>{link.name}</Link>
                  : <a href={link.page} className={classes.links}>{link.name}</a>}
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> </DrawerHeader>

          <DrawerBody>
            <Input
              placeholder="Search"
              value={searchInput}
              onChange={e => {
                setSearchInput(e.target.value);
                console.log(e.target.value);
              }}
              margin="2% 0"
            />
            <VStack spacing={4} align="stretch">
              {searchInput !== '' &&
                filteredLinks.map((link, index) => (
                  <Box key={link.name} p={5} shadow="md" borderWidth="1px">
                    {link.name === 'Login' || link.name === 'Profile' ? (
                      <Link to={link.page} className={classes.links}>
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.page} className={classes.links}>
                        {link.name}
                      </a>
                    )}
                  </Box>
                ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

SearchDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchDrawer;
