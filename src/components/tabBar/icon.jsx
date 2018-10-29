import React from 'react';
import cls from 'classnames';
import style from './icon.sass';

const Icon = ({ iconUrl }) => {
  return <div className={cls(style.icon, style[iconUrl])} />;
};
export default Icon;
