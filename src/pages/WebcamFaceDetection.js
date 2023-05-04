import { InferenceSession } from 'onnxjs';
import { useState, useEffect, useRef } from 'react';
import classes from "./webcam-face-detection.module.css"

function WebcamFaceDetection() {
  const [output, setOutput] = useState(null);
  const videoRef = useRef(null);
  const canvas = useRef(null)

  useEffect(() => {
    // Load the ONNX model
    const session = new InferenceSession();
    // session.loadModel('../../public/models/best.onnx');

    // Capture video from the webcam
    if(videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
    }


    // Run the model on each frame of the video
    const runModel = async () => {
      const videoElement = videoRef.current;
      if (!videoElement) {
        console.error('Video element is not yet ready');
        return;
      }
  
      // const canvas = document.createElement('canvas');
      // const context = canvas.getContext('2d');
      // canvas.width = videoElement.videoWidth;
      // canvas.height = videoElement.videoHeight;
      // context.drawImage(videoElement, 0, 0);
      // const dataUrl = canvas.toDataURL();
      session.loadModel('../../public/models/best.onnx').then(() => {
        console.log('model loaded')
        // var canvas = document.createElement('canvas');
        // var ctx = canvas.getContext('2d');
        // // const imgData = ctx.drawImage(videoRef.current, 0, 0);
        // console.log(canvas)
        // ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        // const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
        // const inputTensor = new Float32Array(imgData.data);
        // session.run([inputTensor]).then(output => {
        //   console.log(output);
        // });
      });

      // var canvas = document.createElement('canvas');
      // var ctx = canvas.getContext('2d');
      // // const imgData = ctx.drawImage(videoRef.current, 0, 0);
      // console.log(canvas)
      // ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      // const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // const inputTensor = new Float32Array(imgData.data);
      // const outputTensor = await session.run([inputTensor]);
      // setOutput(outputTensor);
      // requestAnimationFrame(runModel);
      // console.log(outputTensor)
    }
    requestAnimationFrame(runModel);
  }, [videoRef]);

  return (
    <div>
      <video ref={videoRef}></video>
      <canvas id="myCanvas" ref={canvas} />
    </div>
  );
}

export default WebcamFaceDetection;