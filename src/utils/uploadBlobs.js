import {Storage} from 'aws-amplify'
import { saveDataToDynamo } from './reportsService'

export async function uploadBlobs(arrayOfBlobs) {
  arrayOfBlobs.forEach(async(blob, i)=>{
    const dateTime = new Date().toISOString()
    console.log(dateTime)
    const fileName = `test${dateTime}.jpg`
    const response = await Storage.put(fileName, blob,{
      'contentType':'img/jpeg'
    })
    console.log(response);
    // TODO: Upload to DynamoDB
    saveDataToDynamo(fileName);
  })
}
