import React from 'react';
import { SearchBar, WingBlank } from 'antd-mobile';
import './index.global.sass';

export default class Search extends React.Component {
  render() {
    return (
      <div className="my-search">
        <WingBlank>
          <SearchBar
            placeholder="Search"
            onSubmit={value => console.log(value, 'onSubmit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            //   onCancel={() => console.log('onCancel')}
            onChange={this.onChange}
          />
        </WingBlank>
      </div>
    );
  }
}
