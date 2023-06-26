import React from 'react';
import './Wrapper.css';

const Wrapper: React.FC<any> = (props) => {
  return <div>{props.children}</div>;
};

export default Wrapper;
