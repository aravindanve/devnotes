import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { Stage } from './components/Stage';
import { theme } from './theme';
import './styles.css';
import { TasksPage } from './pages/TasksPage';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Stage variant='styles.root'>
      <Router>
        <Switch>
          <Route path='/tasks' component={TasksPage} />
          <Route>
            <Redirect to='/tasks' />
          </Route>
        </Switch>
      </Router>
    </Stage>
  </ThemeProvider>
);
