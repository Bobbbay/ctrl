/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = (app) => {
  app.log.info("App was loaded!");

  const { spawn } = require("child_process");

  app.on("pull_request.opened", async (context) => {
    app.log.info(context);
    let branch = context.payload["pull_request"]["head"]["label"].split(":");
    let repo = context.payload["pull_request"]["head"]["repo"]["name"];
    let link = `https://github.com/${branch[0]}/${repo}/tree/${branch[1]}`;
    let toClone = link.split("/tree/");

    const command = spawn("./build-sh", [toClone[0], toClone[1]]);
    let logs = "";

    command.stdout.on("data", (data) => {
      logs += data;
    });

    command.stderr.on("data", (data) => {
      logs += data;
    });

    command.on("error", (error) => {
      logs += data;
    });

    command.on("close", (code) => {
      logs += `process exited with code ${code}`;
      console.log(logs);

      if (!code) {
        const issueComment = context.issue({
          body: `Thank you for submitting your PR. It seems like this PR passes all checks. You can find the logfile attached below.`,
        });
        return context.github.issues.createComment(issueComment);
      } else {
        const issueComment = context.issue({
          body: `Thank you for submitting your PR. Sadly, it seems like some build(s) failed. The log file is attached below.
          <details>
<summary>Logs</summary>
<p>

\`\`\`
${logs}
\`\`\`

</p>
</details>  
          `,
        });
        return context.github.issues.createComment(issueComment);
      }
    });
  });
};
