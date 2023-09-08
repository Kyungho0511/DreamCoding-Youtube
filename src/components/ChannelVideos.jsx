import styles from "./ChannelVideos.module.css";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function ChannelVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", id], () => youtube.channelVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul className={styles.list}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type={"list"} />
          ))}
        </ul>
      )}
    </>
  );
}
