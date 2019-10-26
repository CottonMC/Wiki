#!/usr/bin/env sh

set -e

yarn build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:cottonmc/Wiki.git master:gh-pages

cd -
