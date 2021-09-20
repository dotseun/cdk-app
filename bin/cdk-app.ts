#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MybucketappStack } from '../lib/mybucketapp-stack';

const app = new cdk.App();
new MybucketappStack(app, 'MybucketappStack', {
  env: { account: '412554673201', region: 'eu-west-2' },
});
