#!/usr/bin/env bash
set +x #xtrace
set +v #verbose
set -e #errexit
set -u #nounset

region='us-east-1'
export AWS_DEFAULT_REGION=$region
export AWS_REGION=$region

s3_bucket_key='mkoelle-com-dev-website-content-bucket'

set -x

bucket=$(aws cloudformation list-exports --query "Exports[?Name=='${s3_bucket_key}'].Value" --output text)

pushd ..
  aws s3 sync public s3://${bucket}
popd