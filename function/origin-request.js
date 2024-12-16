exports.handler = async (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
  
    if (headers.cookie) {
      for (let i = 0; i < headers.cookie.length; i++) {
        if (headers.cookie[i].value.indexOf("X-Redirect-Flag=Pro") >= 0) {
          request.origin = {
            s3: {
              authMethod: "origin-access-identity",
              domainName: "terraform-s3-cloudfront-production.s3.amazonaws.com",
              region: "ap-southeast-2",
              path: "",
            },
          };
  
          headers["host"] = [
            {
              key: "host",
              value: "terrform-s3-cloudfront-production.s3.amazonaws.com",
            },
          ];
          break;
        }
  
        if (headers.cookie[i].value.indexOf("X-Redirect-Flag=Pre-Pro") >= 0) {
          request.origin = {
            s3: {
              authMethod: "origin-access-identity",
              domainName: "terraform-s3-cloudfront-pre-production.s3.amazonaws.com",
              region: "us-west-2",
              path: "",
            },
          };
  
          headers["host"] = [
            {
              key: "host",
              value: "terraform-s3-cloudfront-pre-production.s3.amazonaws.com",
            },
          ];
          break;
        }
      }
    }
  
    callback(null, request);
  };