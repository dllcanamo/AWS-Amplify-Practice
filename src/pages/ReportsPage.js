import { useRef, useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import { Image, View } from "@aws-amplify/ui-react";
import { getImageFromS3 } from "../utils/getImages";

function ReportRow({ fileName }) {
  const imageRef = useRef(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = images;
    }
  }, [images]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Storage.get(fileName, {
          contentType: "image/jpeg",
          download: true,
        });
        console.log(data.Body);
        const imgUrl = URL.createObjectURL(data.Body);
        setImages(imgUrl);
      } catch (err) {
        console.error(err)
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      {images !== null ? <img src="#" ref={imageRef} /> : <h1>loading</h1>}
    </View>
  );
}
function ReportsPage() {
  const testFileNames = [
    "test2023-05-09T05:50:16.502Z.jpg",
    "test2023-05-09T05:50:16.503Z.jpg",
    "test2023-05-09T05:50:16.505Z.jpg",
    "test2023-05-09T05:50:16.506Z.jpg",
  ];

  return (
    <>
      <h1>Reports Page</h1>
      {testFileNames.map((fileName) => (
        <ReportRow key={fileName} fileName={fileName} />
      ))}
    </>
  );
}

export default ReportsPage;
