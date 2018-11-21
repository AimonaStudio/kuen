#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

echo 'www.himself65.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:himself65/kuen.git master:gh-pages

cd -

rm -rf docs/.vuepress/dist
