import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order by: Relavance
    </MenuButton>
    <MenuList>
      <MenuItem>Relavance</MenuItem>
      <MenuItem>Date Added</MenuItem>
      <MenuItem>Name</MenuItem>
      <MenuItem>Release Date</MenuItem>
      <MenuItem>Popularity</MenuItem>
      <MenuItem>Average Rating</MenuItem>
    </MenuList>
  </Menu>
);

export default SortSelector;
