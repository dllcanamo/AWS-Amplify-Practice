import {
  Tabs,
  TabItem,
  Flex,
  MenuItem,
  Menu,
  Heading,
  Divider,
  View,
  Image
} from "@aws-amplify/ui-react";
import { logout } from "../utils/logout";

function TitleBar(props) {
  return (
    <Flex direction='column'>
      <Flex justifyContent="space-between" alignContent="center" height='2rem'>
        <Image alt='logo' src='/logo.png' width={'6rem'}/>
        <Menu>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Flex>
        <Divider />
    </Flex>
  );
}

export default TitleBar;
