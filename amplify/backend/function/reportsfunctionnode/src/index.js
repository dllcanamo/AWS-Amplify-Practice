/* Amplify Params - DO NOT EDIT
	API_REPORTSAPI_APIID
	API_REPORTSAPI_APINAME
	AUTH_AWSAMPLIFYPRACTICE8DCE617B_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName : 'reportsdb',
  /* Item properties will depend on your application concerns */
  Item: {
     uuid: 'sample-uuid',
     datetime: 'sample-date'
  }
}

exports.handler = async (event) => {
    try {
      await docClient.put(params).promise();
      return { body: 'Successfully created item!' }
    } catch (err) {
      
      return { error: err }
    }

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */

// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
};
