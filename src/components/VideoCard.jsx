import styles from "./VideoCard.module.css";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img className={styles.image} src={thumbnails.medium.url} alt={title} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
        <p className={styles.publish}>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
