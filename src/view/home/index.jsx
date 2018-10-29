import React from 'react';
import TabBar from '@/components/tabBar/tabBar';
import Header from '@/components/header/header';
import './index.global.sass';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TabBar />
      </div>
    );
  }
}
