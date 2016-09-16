import React from 'react';
import Helmet from 'react-helmet';
import 'sanitize.css/sanitize.css';
import Img from 'components/Img';
import Header from 'components/Header';
import Footer from 'components/Footer';
import A from 'components/A';
import styles from './styles.css';


function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Pocket"
        defaultTitle="Pocket"
        meta={[
          { name: 'description', content: 'Pocket' },
        ]}
      />
      <Header />
      <div className={styles.wrapper}>
        {React.Children.toArray(props.children)}
      </div>
      <Footer />

    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
