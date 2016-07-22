# sls-api-versioning

## Description
This is an example implementation of API versioning managed via Lambda redirects for the AWS API Gateway. There are different ways to manage service versioning, from url manipulation to custom version headers. When rolling out a new version of an API the provider has to decide how to manage a new version rollout. In general, API URLs should be left untouched. A resource should always point to the same resource. For that reason, I'm not a fan of URL manipulation.

## AWS gateway / Lambda / Serverless
This is an AWS specific solution to the versioning problem. The AWS gateway allows configuration as a proxy or to Lambda functions. This project sets up API endpoints to Serverless resources for version 1 and version 2 of a sample world API. The world endpoint is the arbiter of which version should be accessed. When it sees a query parameter "v" it uses the parameter value as the version number. Ideally you could perform deep inspection of the request in Lambda to determine which version to send the request.

## Install
This project uses the [Serverless](http://serverless.com/) framework to deploy the example services.

Make sure [Serverless](http://serverless.com/) is in stalled and you are using Node.js v4.0+.

    npm install serverless -g

Checkout this project from github and cd into the project directory.

    git clone git@github.com:jneyer/sls-api-versioning.git
    cd sls-api-versioning

Initialize the project to set up the Serverless meta settings

    serverless project init

Install project dependencies via npm

    npm install

Deploy the functions and endpoints

    serverless dash deploy

After deploy completes you will be given a URL to your API endpoints. Access the api resource at /world and provide a query parameter v=1.

    http://<AWS URL>/dev/world?v=1

You should receive a response from version one of the service. 
