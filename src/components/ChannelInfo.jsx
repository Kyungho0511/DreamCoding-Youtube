import styles from "./ChannelInfo.module.css";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  return (
    <div className={styles.container}>
      {url && <img className={styles.image} src={url} alt={name} />}
      <p className={styles.text}>{name}</p>
    </div>
  );
}
