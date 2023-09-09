import styles from "./VideoDetail.module.css";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import ChannelVideos from "../components/ChannelVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className={styles.container}>
      <article className={styles.videoDetail}>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        ></iframe>
        <div className={styles.containerText}>
          <h2 className={styles.title}>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className={styles.description}>{description}</pre>
        </div>
      </article>
      <section className={styles.channelVideos}>
        <ChannelVideos id={channelId} />
      </section>
    </section>
  );
}
