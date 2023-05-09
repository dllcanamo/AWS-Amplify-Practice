import { SwitchField, Button, Alert } from '@aws-amplify/ui-react';
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';

function UserConfigPage() {
  const [userConfig, setUserConfig] = useState(() => {
    const savedConfig = sessionStorage.getItem('user-config');
    return savedConfig ? JSON.parse(savedConfig) : {
      gloves : false,
      goggles : false, 
      helmet: false,
      mask: false,
      no_glove: false,
      no_goggles: false,
      no_helmet: false,
      no_mask: false
    };
  });

  const [showSuccess, setShowSuccess] = useState(false)

  console.log(userConfig)
  let class_arr = ['gloves', 'goggles', 'helmet', 'mask', 'no_gloves', 'no_goggles', 'no_helmet', 'no_mask'];

  function saveChanges() {
    sessionStorage.setItem('user-config', JSON.stringify(userConfig))
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000);
  }

  return (
      <>
        <br></br>
        {
          showSuccess ?  <Alert variation="success" heading="Success">Your changes have been applied!</Alert> : null
        }
        <Table
          caption=""
          highlightOnHover={false}>
          <TableHead>
            <TableRow>
              <TableCell as="th">Class</TableCell>
              <TableCell as="th">Enable/Disable</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              class_arr.map((item, index) => {
                return(
                  <TableRow key={index}>
                    <TableCell>{item.charAt(0).toUpperCase() + item.slice(1)}</TableCell>
                    <TableCell>
                      <SwitchField
                        defaultChecked={userConfig[item]}
                        onChange={(e) => {
                          setUserConfig(prevState => ({
                            ...prevState,
                            [item]: e.target.checked
                          }))
                        }}
                      />
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
        <br></br>
        <Button
          loadingText=""
          onClick={saveChanges}
        >
          Apply Changes
        </Button>
      </>


    );
  }
  
export default UserConfigPage;