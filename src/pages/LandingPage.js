import { Grid, View, useTheme, Heading, Table } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import "./landing-page.css"

function LandingPage() {
  const { tokens } = useTheme();
  const navigate = useNavigate()

  function navigateToPage(page) {
    console.log(page);
    navigate(page);
  }

  return (
    <>
      <br></br>
      <Grid
        templateColumns={{base:'1fr', large: '1fr 1fr 1fr'}}
        templateRows={{ base:'5rem 10rem 5rem', large:'10rem'}}
        gap={tokens.space.large}
      >
        <View
          className="landing"
          borderRadius='6px'
          onClick={() => {navigateToPage('/user-config')}}
          border='1px solid var(--amplify-colors-neutral-60)'
          padding='10px'
          alignContent='center'
          alignItems='center'
        >
          <Heading level={3}>View/Edit Configuration</Heading>
        </View>
        <View>
          <Grid
            templateColumns={{base:'1fr', large: '1fr'}}
            templateRows={{ base:'4.25rem 4.25rem', large:'4.25rem 4.25rem'}}
            gap={tokens.space.large}
          >
            <View
              className="landing"
              borderRadius='6px'
              onClick={() => {navigateToPage('/user-config')}}
              border='1px solid var(--amplify-colors-neutral-60)'
              padding='10px'
              alignContent='center'
              alignItems='center'
            ><Heading level={3}>Start Monitoring</Heading></View>
            <View
              className="landing"
              borderRadius='6px'
              onClick={() => {navigateToPage('/surveillance')}}
              border='1px solid var(--amplify-colors-neutral-60)'
              padding='10px'
              alignContent='center'
              alignItems='center'
            ><Heading level={3}>View Surveillance</Heading></View>
          </Grid>
        </View>
        <View
          className="landing"
          borderRadius='6px'
          onClick={() => {navigateToPage('/reports')}}
          border='1px solid var(--amplify-colors-neutral-60)'
          padding='10px'
          alignContent='center'
          alignItems='center'
        >
          <Heading level={3}>View Reports List</Heading>
        </View>
      </Grid>
      <br></br>
      <br></br>
      <Heading level={4}>Non-Compliance Notifcations</Heading>
      <Table>
      </Table>
    </>

  );
}

export default LandingPage;
