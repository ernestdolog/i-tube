import React from 'react';
import './Home.scss';
import VideoPreview from '../../components/VideoPreview/VideoPreview';

export class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
    )
  }
}

export default Home;