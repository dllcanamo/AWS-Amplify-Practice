import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl"; // set backend to webgl
import Loader from "../components/loader";
import { Loader as Load }from "@aws-amplify/ui-react";
import ButtonHandler from "../components/btn-handler";
import { detectImage, detectVideo } from "../utils/detect";
import classes from "./surveillance-page.module.css";
import { uploadBlobs } from "../utils/uploadBlobs";

function SurveillancePage() {
  const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  }); // init model & input shape
  const [uploadArray, setUploadArray] = useState([]);
  const [s3Upload, setS3Upload] = useState(false)

  // references
  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // model configs
  const modelName = "best";
  const classThreshold = 0.2;

  useEffect(() => {
    tf.ready().then(async () => {
      console.log(window.location.origin)
      const yolov5 = await tf.loadGraphModel(
        `${process.env.PUBLIC_URL}/${modelName}_web_model/model.json`,
        {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions }); // set loading fractions
          },
        }
      ); // load model

      // warming up model
      const dummyInput = tf.ones(yolov5.inputs[0].shape);
      const warmupResult = await yolov5.executeAsync(dummyInput);
      tf.dispose(warmupResult); // cleanup memory
      tf.dispose(dummyInput); // cleanup memory

      setLoading({ loading: false, progress: 1 });
      setModel({
        net: yolov5,
        inputShape: yolov5.inputs[0].shape,
      }); // set model & input shape
    });
  }, []);

  useEffect(() => {
    console.log(s3Upload)
    if (uploadArray.length > 0 && !s3Upload) {
      const test = async ()=>{
        setS3Upload(true)
        console.log('uploading to s3')
        console.log(uploadArray)
        const dateTime = new Date().toISOString()
        console.log(dateTime)
        const result = await uploadBlobs(uploadArray) // TODO: Upload logs to dynamodb in this function
        console.log(result)
        setUploadArray([]);
        setS3Upload(false)
      }
      try{
      test()
      } catch (err){
        console.error(err)
      }

      
    }
  }, [uploadArray]);

  return (
    <div className={classes.App}>
      {loading.loading && (
        <>
          <Load></Load>
          <Loader>Loading model... {(loading.progress * 100).toFixed(2)}%</Loader>
        </>
      )}
      <div className={classes.header}>
        <h1>Insert appname here</h1>
      </div>

      <div className={classes.content}>
        <img
          src="#"
          ref={imageRef}
          onLoad={() =>
            detectImage(
              imageRef.current,
              model,
              classThreshold,
              canvasRef.current
            )
          }
        />
        <video
          autoPlay
          muted
          ref={cameraRef}
          onPlay={() =>
            detectVideo(
              cameraRef.current,
              model,
              classThreshold,
              canvasRef.current,
              uploadArray,
              setUploadArray,
              s3Upload,
              setS3Upload
            )
          }
        />
        <video
          autoPlay
          muted
          ref={videoRef}
          onPlay={() =>
            detectVideo(
              videoRef.current,
              model,
              classThreshold,
              canvasRef.current,
              uploadArray,
              setUploadArray,
              s3Upload,
              setS3Upload
            )
          }
        />
        {/* <canvas width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} id='myCanvas'/> */}
        <canvas
          width={model.inputShape[1]}
          height={model.inputShape[2]}
          ref={canvasRef}
          id="myCanvas"
        />
        <a id="canvasDownload" href="#">
          download image
        </a>
      </div>

      <ButtonHandler
        imageRef={imageRef}
        cameraRef={cameraRef}
        videoRef={videoRef}
        canvasRef={canvasRef}
      />
    </div>
  );
}

export default SurveillancePage;
