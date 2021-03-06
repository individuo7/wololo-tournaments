import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useEffect, useState } from 'react';
import { routes } from '../../App';
import './Navbar.scss';

import { globalHistory } from '@reach/router';

export const useLocation = () => {
  const newState = {
    location: globalHistory.location,
    navigate: globalHistory.navigate
  };

  const [state, setState] = useState(newState);
  useEffect(() => setState(newState), [newState, newState.location]);

  return state;
};

const getActiveTab = (path: string) => {
  const regExpTabs = [/\/upcoming\/?/i, /\/tournaments\/?/i, /\/leaderboard\/?/i];

  const match = regExpTabs.findIndex(re => path.match(re));

  return match >= 0 ? match : 0;
};

interface IProps {
  excludes: string[];
}

const Navbar = ({ excludes }: IProps) => {
  const { location, navigate } = useLocation();
  const [value, setValue] = React.useState(getActiveTab(location.pathname));

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
    const links = [routes.upcoming(), routes.tournaments(), routes.leaderboard('global')];

    navigate(links[newValue]);
  };

  return excludes.indexOf(location.pathname) >= 0 ? (
    <div />
  ) : (
    <div id="Navbar">
      <AppBar position="static" color="default">
        <Tabs
          className="main-tabs wooden-bg"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Upcoming" />
          <Tab label="Tournaments" />
          <Tab label="Leaderboard" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export { Navbar };
