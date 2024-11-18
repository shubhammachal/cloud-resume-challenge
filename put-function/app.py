import boto3
import json
import os
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume-challenge')

def lambda_handler(event, context):
    try:
        response = table.update_item(
            Key={'ID': 'visitors'},  # Match 'ID' key exactly as defined
            UpdateExpression="ADD #count :inc",  # Increment count attribute
            ExpressionAttributeNames={'#count': 'count'},
            ExpressionAttributeValues={':inc': 1},
            ReturnValues="UPDATED_NEW"  # Return updated values
        )
        updated_count = response['Attributes']['count']
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'count': updated_count})
        }
    except Exception as e:
        # If item doesn't exist, create it
        if 'ConditionalCheckFailedException' in str(e):
            table.put_item(
                Item={
                    'id': 'visitors',  # Match the Key used in update_item
                    'visitors': 1
                }
            )
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST'
                },
                'body': json.dumps({'count': 1})
            }
        
        # Handle other exceptions
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }