import { Tabs, TabItem, Flex, MenuItem, Menu, Heading } from "@aws-amplify/ui-react";
import { logout } from "../utils/logout";

function TitleBar(props) {
  return (
    <Flex justifyContent="flex-end" alignContent="center">
      <Menu>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </Flex>
  );
}

export default TitleBar;
