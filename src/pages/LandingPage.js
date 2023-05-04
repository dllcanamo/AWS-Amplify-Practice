import { LoginStatus } from "../utils/Auth"
import { useRef, useEffect } from "react"
import TopNavbar from "../components/TopNavbar"
import WebcamFaceDetection from "./WebcamFaceDetection"
import classes from "./landing-page.module.css"

function LandingPage() {

  let landingPageJSX
  let isLoggedIn = LoginStatus()

  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error", err);
      });
  };

  if (isLoggedIn !== true) {
    landingPageJSX = isLoggedIn
  } else {
    // edit the webpage from here
    landingPageJSX = <>
      <TopNavbar></TopNavbar>
      <WebcamFaceDetection></WebcamFaceDetection>
      {/* <div>
        <video ref={videoRef} />
        <canvas />
      </div> */}
      <h1>we are at the landing page!</h1>
    </>
  }

  return (
    <>
      {landingPageJSX}
    </>
  )

  }
  
export default LandingPage;