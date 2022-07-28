module.exports = {
  stub: `
# This file was autogenerated at <%= generatedAt %>.
FROM <%= image %>:<%= tag %>

LABEL <%= labels %>

ENV <%= environmentVariables %>

WORKDIR /svc
COPY . /svc

RUN <%= dependencyCommand %>

ENTRYPOINT ["<%= entrypoint %>"]
CMD ["<%= command %>"]
`,

  defaultValues: {
    image: "node",
    tag: "17-alpine",
    labels: "build=auto",
    environmentVariables: "OS=Alpine",
    dependencyCommand: "npm install",
    entrypoint: "npm",
    command: "start",
  },

  files: [],
};