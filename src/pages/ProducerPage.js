import { useRef, useEffect, useState } from "react";
import { InferenceSession, Tensor } from "onnxruntime-web";

function ProducerPage() {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    // const response = await fetch("../../public/models/best.onnx");
    // const buffer = await response.arrayBuffer();
    // const tensor = new Tensor(new Uint8Array(buffer), "uint8");
    // await session.loadModel("../../public/models/best.onnx");
    const session = await InferenceSession.create("../../public/models/best.onnx");
    setModel(session);
    console.log(model)
  };

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = videoRef.current;
      video.srcObject = stream;
      await video.play();
      detectObjects();
    } catch (err) {
      console.error("error", err);
    }
  };

  const detectObjects = async () => {
    if (!model || !videoRef.current) {
      return;
    }

  };

  return (
    <div>
      <video ref={videoRef} />
      <button onClick={getVideo}>Start Video</button>
    </div>
  );
}

export { ProducerPage };
