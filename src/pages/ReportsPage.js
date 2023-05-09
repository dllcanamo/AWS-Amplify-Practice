import { useRef, useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import { getImageFromS3 } from "../utils/getImages";
import Modal from 'react-modal';
import { Image, View, useTheme, Grid, Loader, Button } from "@aws-amplify/ui-react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';
import "./reports-page.css"


Modal.setAppElement('#root');

function ReportsPage() {
  const { tokens } = useTheme();
  const testFileNames = [
    "test2023-05-09T05:50:16.502Z.jpg",
    "test2023-05-09T05:50:16.503Z.jpg",
    "test2023-05-09T05:50:16.505Z.jpg",
    "test0.jpg",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function openModal(jsx_img_component) {
    setIsModalOpen(true);
    setModalContent(jsx_img_component);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function ReportRow({ fileName, index }) {

    const imageRef = useRef(null);
    const [images, setImages] = useState(null);
  
    useEffect(() => {
      if (imageRef.current) {
        imageRef.current.src = images;
        console.log('uwu')
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
      <TableRow key={index}>
        <TableCell>Dummy Datetime</TableCell>
        <TableCell>
          <View>
            {/* {images !== null ? <img src="#" ref={imageRef} /> : <Loader></Loader>} */}
            {images !== null ? <Button onClick={() => openModal(<img src={images} ref={imageRef} />)}>View Image</Button> : <Loader></Loader>}
          </View>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <Button onClick={closeModal}>Close Modal</Button>
          <br></br>
          <br></br>
          <div className="image-container">
            {modalContent}
          </div>
        </Modal>
      </div>
      <br></br>
      <Grid
        gap={tokens.space.large}
        templateColumns={{ base:'1fr', large:'1fr 2fr'}}
      >
        <View 
          className="downloadSection"
        >
          hi
        </View>
        <View 
          className="reportsSection"
        >
          <Table
          caption=""
          highlightOnHover={true}>
            <TableHead>
              <TableRow>
                <TableCell as="th">Datetime</TableCell>
                <TableCell className='img-header' as="th">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testFileNames.map((fileName, index) => (
                <ReportRow key={fileName} fileName={fileName} />
              ))}
            </TableBody>
          </Table>
        </View>
      </Grid>
    </>
  );
}



export default ReportsPage;
