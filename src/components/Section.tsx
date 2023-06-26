import React from 'react';
import SectionElement from './SectionElement';
import styles from './Section.module.css';

const Section: React.FC<any> = (props) => {
  // props: title, text, subText
  
  return (
    <div className={styles.component}>
      <div className={styles['title-section']}>
        <p>{props.title}</p>
      </div>
      <div className="content-section">
        <SectionElement className={styles.component} items={props.items}/>
        {/* <p className="text">{props.text}</p>
        <p className="sub-text">{props.subText}</p> */}
      </div>
    </div>
  );
};

export default Section;
