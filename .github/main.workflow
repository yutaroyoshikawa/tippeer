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
  secrets = ["REACT_APP_FIREBASE_API_KEY", "REACT_APP_FIREBASE_AUTH_DOMAIN", "REACT_APP_FIREBASE_DATABASE_URL", "REACT_APP_FIREBASE_MESSAGING_SENDER_ID", "REACT_APP_FIREBASE_PROJECT_ID", "REACT_APP_FIREBASE_STORAGE_BUCKET", "REACT_APP_GOOGLE_MAP_API_KEY", "REACT_APP_MAPBOX_ACCESS_TOKEN"]
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
