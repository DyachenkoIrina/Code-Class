import React from 'react';

import '../index.css';

export default function Video(): JSX.Element {
  return (
    <>
      {/* <AspectRatio maxW="100%" ratio={2}> */}
      <video className="videoBackgraund" autoPlay loop muted src="/public/video.mp4" />
      {/* </AspectRatio> */}
    </>
  );
}
