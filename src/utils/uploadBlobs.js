import {Storage} from 'aws-amplify'
import { saveDataToDynamo } from './reportsService'

export async function uploadBlobs(arrayOfBlobs) {
  arrayOfBlobs.forEach(async(blob, i)=>{
    // const dateTime = new Date().toISOString()
    // console.log(dateTime)
    // const response = await Storage.put(`test${dateTime}.jpg`, blob,{
    //   'contentType':'img/jpeg'
    // })
    // TODO: Upload to DynamoDB
    saveDataToDynamo('hello');
  })
}
