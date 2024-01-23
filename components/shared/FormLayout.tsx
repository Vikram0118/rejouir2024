"use client"

import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import EventForm from "../FormComponents/EventForm";
import PaymentForm from "../FormComponents/PaymentForm";
import { useData } from "../store/DataProvider";
import { InitialValuesType } from "@/interfaces";

const FormLayout = () => {

  const { state, payTab, activeTab } = useData() as { state:InitialValuesType, payTab:boolean, activeTab : "student" | "payment"};

  return (
    <Box w="100%">
      <Container maxW="1200px ">
        <p className="text-4xl font-normal mb-6"> Rejouir Event Registration </p>
        <Tabs isLazy index={activeTab == "student" ? 0 : 1 }>
          <TabList>
            <Tab>Student Details</Tab>
            <Tab isDisabled={!payTab}>Payment</Tab>
          </TabList>
          <Grid display="grid" gap="24px">
            <TabPanels>
              <TabPanel>
                <EventForm />
              </TabPanel>
              <TabPanel>
                <PaymentForm />
              </TabPanel>
            </TabPanels>
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default FormLayout;
  