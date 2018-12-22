import React from 'react';
import TabBar from '@/components/tabBar/tabBar';
import Header from '@/components/header/header';
import Search from '@/components/search/search';

import './index.global.sass';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <TabBar />
      </div>
    );
  }
}
