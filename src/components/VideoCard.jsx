import styles from "./VideoCard.module.css";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const isList = type === "list";
  return (
    <li
      className={isList ? styles.flexContainer : ""}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video: video } });
      }}
    >
      <img
        className={isList ? styles.flexImage : styles.image}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
        <p className={styles.publish}>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
