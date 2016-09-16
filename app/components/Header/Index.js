import React from 'react';
import 'sanitize.css/sanitize.css';
import Img from 'components/Img';
import A from 'components/A';
import List from 'components/List';
import ListItem from 'components/ListItem';
import styles from './styles.css';

function Menu() {
  const aa = (
    <ListItem item={'hi'} />
  );
  return aa;
}

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <A href='/'>Pocket</A>
        <List component={Menu} />
      </div>
    </div>
  );
}

export default Header;
