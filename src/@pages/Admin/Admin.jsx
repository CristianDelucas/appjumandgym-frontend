import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Clients from "./Clients/Clients";
import Exercises from "./Exercises/Exercises";
import Routines from "./Routines/Routines";

const Admin = () => {
  return (
    <div className="c-admin">
      <Tabs>
        <TabList>
          <Tab>Clientes</Tab>
          <Tab>Ejercicios</Tab>
          <Tab>Rutinas</Tab>
        </TabList>

        <TabPanel>
          <Clients />
        </TabPanel>
        <TabPanel>
          <Exercises />
        </TabPanel>
        <TabPanel>
          <Routines />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Admin;
