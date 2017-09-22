import Gitment from 'gitment';
import 'gitment/style/default.css';
import React from 'react';
import { gitment as config } from '../../config';
import styles from './index.scss';

export default class extends React.Component {
  componentDidMount() {
    const Config = {
      id: window.location.pathname,
      ...config,
    };
    const gitment = new Gitment(Config);
    gitment.renderComments('comments');
    gitment.renderEditor('editor');
  }

  render() {
    return (
      <div className={styles.command}>
        <div id="comments" className={styles.item} />
        <div id="editor" className={styles.item} />
      </div>
    );
  }
}
