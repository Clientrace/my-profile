/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "my-profile",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      bucket: {
        bucketName: "clarence-webprofile-prod", 
      },
      cdk: {
        distribution: {
          distributionId: "E1X57TBRF98HT", 
        },
      },
    });
  },
});
