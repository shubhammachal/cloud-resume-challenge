# get-function/app.py
import json
import boto3
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume-challenge')

def lambda_handler(event, context):
    try:
        logger.info(f"Received event: {json.dumps(event)}")
        
        # Get the current count from DynamoDB
        response = table.get_item(
            Key={
                'ID': 'visitors'
            }
        )
        
        # Get count or default to 0 if not found
        count = response.get('Item', {}).get('count', 0)
        
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "count": str(count)
            })
        }
    
    except Exception as e:
        logger.error(f"Error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "error": "Internal Server Error",
                "details": str(e)
            })
        }


