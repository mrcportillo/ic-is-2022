import { getTurnBorderColorByWaitingTime } from "../../libs/turn";
import styles from "../../styles/styles.module.css";

function Turn({ turn, loading }) {
  return (
    <div
      className={
        loading ? `${styles.turn_card} ${styles.loading}` : styles.turn_card
      }
      style={{
        borderColor: getTurnBorderColorByWaitingTime(turn?.estimated_minutes),
      }}
    >
      <div className={styles.turn_header}>
        <p>{turn?.type} TURN</p>
        <p># {turn?.position}</p>
      </div>
      <p>Date: {turn?.date && new Date(turn.date).toDateString()}</p>
      <p>People before: {turn?.positions_before}</p>
      <p>Waiting time: {turn?.estimated_minutes} minutes</p>
    </div>
  );
}

export default Turn;
