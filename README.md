# saloodo-aws-lambda-whatsapp-integration
This AWS Lambda function acts as incoming webhook for incoming whatsapp messages.

<h3>Installation</h3>
<code>$ git clone git@github.com:NishaMurthy/saloodo-aws-lambda-whatsapp-integration.git</code>

<h3>Install Dependencies</h3>
<code>npm i</code>

<h4>Deploy the lambda function</h4>
 We can deploy AWS lambda functions with:

   1. Serverless application
   2. AWS dashboard

Steps to deploy through Serverless application

Install and setup serverless - https://www.serverless.com/framework/docs/providers/aws/cli-reference/install/

<code>serverless install --url git@github.com:NishaMurthy/saloodo-aws-lambda-whatsapp-integration.git</code>

<code>serverless deploy</code>

https://www.serverless.com/framework/docs/providers/aws/cli-reference/deploy/

Steps to deploy through AWS Dashboard

a. upload the application zip folder to aws lambda function and save it.

b. create post API from api gateway and stage the api.
