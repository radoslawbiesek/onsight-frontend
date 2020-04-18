import React from 'react';

import styles from './Tags.module.css';

const Tags = ({ title, content }) => {
  return (
    <div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Tags;
