import {Storage} from 'aws-amplify'

export async function uploadBlobs(arrayOfBlobs) {
  arrayOfBlobs.forEach(async(blob, i)=>{
    const dateTime = new Date().toISOString()
    console.log(dateTime)
    const response = await Storage.put(`test${dateTime}.jpg`, blob,{
      'contentType':'img/jpeg'
    })
    // TODO: Upload to S3
  })
}
