import { Tabs, TabItem, Flex, MenuItem, Menu } from "@aws-amplify/ui-react";
import { logout } from "../utils/logout";

function TopNavbar() {
  return (
    <Flex justifyContent="space-between" alignContent="center">
      <Tabs>
        <TabItem title="Tab1"></TabItem>
      </Tabs>
      <Menu>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </Flex>
  );
}

export default TopNavbar;
