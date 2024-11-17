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
        
        # Use atomic counter to increment the count
        response = table.update_item(
            Key={
                'ID': 'visitors'
            },
            UpdateExpression='SET #count = if_not_exists(#count, :zero) + :inc',
            ExpressionAttributeNames={
                '#count': 'count'
            },
            ExpressionAttributeValues={
                ':inc': 1,
                ':zero': 0
            },
            ReturnValues='UPDATED_NEW'
        )
        
        # Get the new count from the response
        new_count = response['Attributes']['count']
        
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "count": str(new_count)
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