#!/usr/bin/env sh

set -e

yarn install
yarn build

cd docs/.vuepress/dist

git init
git config user.email "falseresync@gmail.com"
git config user.name "Mikhail Oleynikov"
git add -A
git commit -m 'deploy'

git push -f git@github.com:falseresync/Wiki.git master:gh-pages

cd -
