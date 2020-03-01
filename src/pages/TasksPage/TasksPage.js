import React from 'react';
import {
  Layout,
  LayoutItemNavbar,
  LayoutItemSidebar,
  LayoutItemMain,
} from './components/Layout';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MainKanban } from './components/MainKanban';

export const TasksPage = () => (
  <Layout>
    <LayoutItemNavbar>
      <Navbar />
    </LayoutItemNavbar>
    <LayoutItemSidebar>
      <Sidebar />
    </LayoutItemSidebar>
    <LayoutItemMain>
      <MainKanban />
    </LayoutItemMain>
  </Layout>
);
