const _ = require("lodash");
const core = require("@actions/core");
const github = require("@actions/github");
const linguist = require("linguist-js");

async function action () {
  await core.summary
    .addHeading('Analized', 2)
    .addDetails('context', core.summary.addCodeBlock(JSON.stringify(github.context, null, 2), 'json'))
    .addCodeBlock(`
graph event-push;
eventpush-->Analyze;
Analyze-->StaticAnalizys;
StaticAnalizys-->Test;
Test-->Release;`,'mermaid')
    .write()

  core.info(JSON.stringify(github.context, null, 2));
}

try {
  action()





  // let providers = [ Git, Run, Code ]
  // let output = {}
  // let args = github.context

  // output = providers
  //   .map(p => p.load(args, output))
  //   .reduce((acc, i) => _.merge(acc, i.data), {})

  // if (output.code.isNode) providers = [ Nodejs ]
  // if (output.code.isPython) providers = [ Python ]

  // output = providers
  //   .map(p => p.load(args, output))
  //   .reduce((acc, i) => _.merge(acc, i.data), output)

  // providers = [ Docker, Deploy ]

  // output = providers.map(p => p.load(args, output))
  //   .reduce((acc, i) => _.merge(acc, i.data), output)

  // core.setOutput("config", JSON.stringify(output));

  // const { languages } = linguist(process.cwd(), {
  //   categories: ["programming"],
  // });

  // console.log(`languages: ${JSON.stringify(languages, null, 2)}`);

  // core.setOutput("language", languages);
  // const payload = JSON.stringify(github.context, undefined, 2);

  // console.log(`The event payload: ${payload}`);
} catch (error) {

  core.setFailed(error.message);
}
