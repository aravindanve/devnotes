import React from 'react';
import {
  TasksLayout,
  TasksLayoutItemNavbar,
  TasksLayoutItemSidebar,
  TasksLayoutItemMain,
} from './components/TasksLayout';
import { TasksNavbar } from './components/TasksNavbar';
import { TasksSidebar } from './components/TasksSidebar';
import { TasksMainKanban } from './components/TasksMainKanban';

export const TasksPage = () => (
  <TasksLayout>
    <TasksLayoutItemNavbar>
      <TasksNavbar />
    </TasksLayoutItemNavbar>
    <TasksLayoutItemSidebar>
      <TasksSidebar />
    </TasksLayoutItemSidebar>
    <TasksLayoutItemMain>
      <TasksMainKanban />
    </TasksLayoutItemMain>
  </TasksLayout>
);
