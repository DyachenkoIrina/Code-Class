import { Center, FormControl, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useState } from 'react';

import ProfileContainerSt from '../components/ProfileContainerSt';
import TopicContainerSt from '../components/TopicConteinerSt';
import CheckTopicContainerSt from '../components/CheckTopicConteinerSt';

export default function TeacherAccountFormSt(): JSX.Element {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Center>
      <Tabs  marginTop ='20px' align="center" position="relative" variant="soft-rounded" colorScheme="green" onChange={(index) => handleChange(index)} index={tabIndex}>
        <TabList>
          <Tab onClick={() => handleChange(0)}>Дать задание</Tab>
          <Tab onClick={() => handleChange(1)}>Проверить тему</Tab>
        </TabList>
        <TabPanels>
          {/* Вкладка "Дать задание" */}
          <TabPanel style={{ display: 'flex' }}>
            <ProfileContainerSt />
            <TopicContainerSt />
          </TabPanel>
          {/* Вкладка "Проверить тему" */}
          <TabPanel style={{ display: 'flex' }}>
            <ProfileContainerSt />
            {/* <CheckTopicContainerSt /> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
}