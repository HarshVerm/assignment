// @flow
import * as React from "react";
import styles from "./Commit.module.css";
import { Image } from "../../Components/Image/Image";

export function Commit(props) {
  return (
    <div className={styles.container}>
      <div className = {styles.header}>
        <div className={styles.containerWapper}>
          <Image img="https://avatars.githubusercontent.com/u/55134636?v=4" />
        </div>
        <div className={styles.spaceBetweenImageAndCommit}></div>
        <div className={styles.commitWrapper}>
          <div className={styles.commit}>Commit</div>
          <div>
            <div className={styles.commitAuthorAndTime}>
              <span className={styles.commitAuthorAndTimeLeft}>
                Authored by
              </span>
              <span className={styles.commitAuthorAndTimeMiddle}>
                author name
              </span>
              <spna className={styles.commitAuthorAndTimeRight}>time</spna>
            </div>
          </div>
          <div className={styles.commitDescription}>Description</div>
        </div>
      </div>
    </div>
  );
}
