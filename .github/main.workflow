workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for AWS"]
}

workflow "New workflow 1" {
  on = "push"
}

action "npm" {
  uses = "actions/npm@e7aaefe"
  runs = "yutaroyoshikawa/tipper/react-app/"
  args = "install"
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefe"
  needs = ["npm"]
  runs = "/yutaroyoshikawa/tipper/react-app/"
  args = "build"
}

action "GitHub Action for AWS" {
  uses = "actions/aws/cli@8d31870"
  needs = ["GitHub Action for npm"]
  runs = "/yutaroyoshikawa/tipper/react-app/"
  args = "s3 sync ./build/ s3://heiseinoowari --delete"
  secrets = ["GITHUB_TOKEN"]
}
