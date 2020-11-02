import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({video}) => (
    <section className={styles.detail}>
        <iframe
        id="ytplayer"
        type="text/html"
        title="youtube video player"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullscreen
        ></iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
    );

export default VideoDetail;