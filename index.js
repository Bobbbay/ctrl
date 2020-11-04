/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = (app) => {
  /*
  module.exports = (app) => {
    app.on("*", async (context) => {
      context.log.info({
        event: context.event,
        action: context.payload.action,
      });
    });
  };
  */
  // Your code here
  app.log.info("Yay, the app was loaded!");

  const { exec } = require("child_process");

  app.on("issues.opened", async (context) => {
    app.log.info(context);
    const issueComment = context.issue({
      body: `Thanks for opening this issue! Here's some context: ${context}`,
    });
    return context.github.issues.createComment(issueComment);
  });

  app.on("pull_request.opened", async (context) => {
    app.log.info(context);
    let branch = context.payload["pull_request"]["head"]["label"].split(":");
    let repo = context.payload["pull_request"]["head"]["repo"]["name"];
    let link = `https://github.com/${branch[0]}/${repo}/tree/${branch[1]}`;

    exec("ls -la", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });

    const issueComment = context.issue({
      body: `Thank you for opening PR ${context["number"]}.`,
    });

    return context.github.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
