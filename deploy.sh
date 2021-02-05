#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# use github pages CNAME file
cp CNAME dist/CNAME
# navigate into the build output directory
cd dist
# allow custom urls by overriding github's 404 page
cp index.html 404.html
# commit
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:DarioDomiDE/Softwerkstatt.io.git master:gh-pages