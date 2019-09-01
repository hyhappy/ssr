import React from 'react';
import { render, hydrate } from 'react-dom';
import Demo from './demo';

// 服务端将props数据挂载到window上，客户端重新渲染时直接传入该属性
const { props } = window.__SSR_DATA__

// hydrate会根据html中已有的标记进行对比，决定是否要重新渲染dom
hydrate(
  <Demo {...props} />,
  document.getElementById('root'),
);
