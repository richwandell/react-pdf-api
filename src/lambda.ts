import app from "./index";
import serverless from "serverless-http";

const handler = serverless(app);

exports.handler = async (event, context) => {
  return await handler(event, context);
}
