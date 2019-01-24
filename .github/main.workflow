workflow "New workflow" {
  on = "push"
  resolves = ["firebase deploy"]
}

action "npm install" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "install"
}

action "npm build" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "build"
  secrets = ["REACT_APP_FIREBASE_API_KEY", "REACT_APP_FIREBASE_AUTH_DOMAIN", "REACT_APP_FIREBASE_DATABASE_URL", "REACT_APP_FIREBASE_MESSAGING_SENDER_ID", "REACT_APP_FIREBASE_PROJECT_ID", "REACT_APP_FIREBASE_STORAGE_BUCKET", "REACT_APP_GOOGLE_MAP_API_KEY", "REACT_APP_MAPBOX_ACCESS_TOKEN"]
  needs = ["npm install"]
}

action "firebase deploy" {
  uses = "w9jds/firebase-action@master"
  args = "deploy --only hosting:dev"
  env = {
    PROJECT_ID = "tipper-1697e"
  }
  secrets = ["FIREBASE_TOKEN"]
  needs = ["npm build"]
}
