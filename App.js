
import React from 'react';
import { Tab } from '@mui/material';
import {TabContext, TabList, TabPanel } from "@mui/lab";
import Box from '@mui/material/Box';
import FormTab from "./FormTab";
import SimpleTab from "./SimpleTab";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <TabList
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="Form tab"
          />
          <Tab value="two" label="Simple Tab" />
        </TabList>
        <TabPanel value="one"><FormTab /></TabPanel>
        <TabPanel value="two"><SimpleTab/></TabPanel>
      </TabContext>
    </Box>
  );
}
