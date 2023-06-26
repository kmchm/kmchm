import React from 'react';
import styles from './SectionElement.module.css';

const SectionElement: React.FC<any> = (props) => {
  return (
    <div className={props.className}>
      {props.items.map((item: any) => {
        return (
          <React.Fragment>
            <p className={styles.text}>{item.text}</p>
            <p className={styles['sub-text']}>{item.subText}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SectionElement;
