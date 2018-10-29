import { TabBar } from 'antd-mobile';
import React from 'react';
import Icon from './icon';
import './index.global.sass';
import style from './tabBar.sass';

export default class MyTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTab: 'message'
    };
  }

  handlePress = (val) => {
    this.setState({selectTab: val});
  }

  render() {
    const {selectTab} = this.state;
    return (
      <div id="tab-bar" className={style.tabBar}>
        <TabBar
          unselectedTintColor="#999999"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="消息"
            key="Message"
            icon={<Icon iconUrl='message' />}
            selectedIcon={<Icon iconUrl='message-selected' />}
            selected={selectTab === 'message'}
            onPress={() => this.handlePress('message')}
            badge={111}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon iconUrl='contact' />}
            selectedIcon={<Icon iconUrl='contact-selected' />}
            title="联系人"
            key="Contact"
            selected={selectTab === 'contact'}
            onPress={() => this.handlePress('contact')}
            badge={'1'}
          >

          </TabBar.Item>
          <TabBar.Item
            title="动态"
            key="Trend"
            icon={<Icon iconUrl='trend' />}
            selectedIcon={<Icon iconUrl='trend-selected' />}
            selected={selectTab === 'trend'}
            onPress={() => this.handlePress('trend')}
            badge={1}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
