workflow "New workflow" {
  on = "push"
  resolves = ["w9jds/firebase-action@master"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "install"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["GitHub Action for npm"]
  args = "build"
  secrets = ["GITHUB_TOKEN"]
}

action "w9jds/firebase-action@master" {
  uses = "w9jds/firebase-action@master"
  needs = ["GitHub Action for npm-1"]
  args = "deploy --only hosting:dev"
  secrets = ["FIREBASE_TOKEN"]
  env = {
    PROJECT_ID = "tipper-1697e"
  }
}
