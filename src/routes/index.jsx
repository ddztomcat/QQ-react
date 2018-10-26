import React from 'react';
import Loading from '@/components/loading';
import Loadable from 'react-loadable';
import { Route, Switch, Redirect } from 'react-router-dom';
const LoadableHome = Loadable({
  loader: () => import('@/view/home/index'),
  loading: Loading
});
const routeWrapper = () => {
  return (
    <Switch>
      <Route exact path="/home" component={LoadableHome} />
      <Redirect to="/home" />
    </Switch>
  );
};
export default routeWrapper;
