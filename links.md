setup steps:

Deploying to s3
[tutorial](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)


### Commands - deploy to S3
```
// create a bucket
$ aws s3 mb s3://bucket-name
// list buckets
$ aws s3 ls
// build and deploy the app
$ npm run build && aws s3 sync build/ s3://digital-dept
```
