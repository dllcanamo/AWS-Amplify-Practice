import json
import boto3
import datetime
import uuid

def handler(event, context):
    print('received event:')
    print(event)

    dynamodb = boto3.client('dynamodb')
    data = json.loads(event['body'])

    if event['httpMethod'] == 'POST':
        # save item to dynamoDB
        PK = str(uuid.uuid1())

        today = datetime.date.today().strftime('%Y-%m-%d')
        data_object = data['data']
        

        response = dynamodb.put_item(
            TableName='aimlReportsDB2023-dev',
            Item={
                'uuid': {'S': PK},
                'datetime': {'S': today},
                'description': {'S': 'sample-label'},
                'path_to_img': {'S': str(data_object['path_to_img'])}
            }
        )

        # message = ''
        # if response:
        #     message = 'item/s successfully added to database'
        # else:
        #     message = 'an error occured with your request'

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Item/s saved successfully!')
        }
    elif event['httpMethod'] == 'GET':
        # table = dynamodb.Table('aimlReportsDB2023-dev')

        today = datetime.date.today().strftime('%Y-%m-%d')
        response = dynamodb.query(
            TableName='aimlReportsDB2023-dev',
            IndexName='datetime-index',
            KeyConditionExpression='#dt = :today',
            ExpressionAttributeNames={
                '#dt': 'datetime'
            },
            ExpressionAttributeValues={
                ':today': {'S': today}
            }
        )

        items = response['Items']
        obj_to_return = {'items': items}
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(obj_to_return)
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
