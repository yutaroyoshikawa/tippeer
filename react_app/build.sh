#! /bin/sh
yarn run build-css
yarn run build
cp -r ./build/static/css ../public/static
cp -r ./build/static/js ../public/static
cp  ./build/index.html ../public/