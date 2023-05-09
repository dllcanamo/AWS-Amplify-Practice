import { Storage } from "aws-amplify";

export async function getImageFromS3(fileNames) {
  let imageArray = [];
  fileNames.forEach(async (element) => {
    const data = await Storage.get(element, {
      contentType: "image/jpeg",
      download: true,
    });
    console.log(data)
    imageArray.push(data.Body)
  });

  return imageArray
}
