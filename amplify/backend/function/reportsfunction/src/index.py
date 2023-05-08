import json
import boto3

def handler(event, context):
    print('received event:')
    print(event)

    dynamodb = boto3.client('dynamodb')

    if event['httpMethod'] == 'POST':
        # save item to dynamoDB
        data = event['body']

        response = dynamodb.put_item(
            TableName='reportsdb-dev',
            Item={
                'uuid': {'S': 'sample-uuid'},
                'datetime': {'S': 'sample-date'},
                'description': {'S': 'sample-label'},
                'path_to_img': {'S': 'sample/path/to/img'}
            }
        )

        print(response)

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(response)
        }
    else:
        # get inputs from dynamoDB

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(event)
        }


