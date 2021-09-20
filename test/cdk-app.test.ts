import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkApp from '../lib/cdk-app-stack';

/*

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkApp.CdkAppStack(app, 'PipelineStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

*/
