import {Storage} from 'aws-amplify'

export async function uploadBlobs(arrayOfBlobs) {
  arrayOfBlobs.forEach(async(blob, i)=>{
    await Storage.put(`test${i}.jpg`, blob,{
      'contentType':'img/jpeg'
    })
  })
}
