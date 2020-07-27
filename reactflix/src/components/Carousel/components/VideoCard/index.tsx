import React from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL: string) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

type Props = {
  videoTitle: string,
  videoURL: string,
  categoryColor:string
}

const VideoCard = ({ videoTitle, videoURL, categoryColor }: Props) => {
  const image: string = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  )
}

export default VideoCard
