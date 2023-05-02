import { useRef, useEffect } from "react";

function ProducerPage() {
  const videoRef = useRef(null);


  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () =>{
    navigator.mediaDevices
    .getUserMedia({video: {width: 300}})
    .then(stream => {
        let video = videoRef.current
        video.srcObject = stream;
        video.play()
      })
      .catch(err=>{
        console.error("error", err)
      })
  }
    return (
    <div>
      <video ref={videoRef} />
      <canvas />
    </div>
    );
  }
  
export {ProducerPage}
