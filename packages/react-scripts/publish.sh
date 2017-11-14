#!/bin/bash
if [ "$1" == "-h" ]; then
  echo "Usage: `basename $0` {beta|major|minor|patch}"
  echo "       default: patch "
  echo
  echo "       beta           Publish beta version - use cc-react-scripts@beta"
  echo "       major          Publish major release - 1.x.x -> 2.x.x"
  echo "       minor          Publish minor release - x.1.x -> x.2.x"
  echo "       patch          Publish patch release - x.x.1 -> x.x.1"
  echo
  exit 0
fi
if [ "$1" == "beta" ]; then
  npm version patch
  npm publish --tag beta
else
  npm version ${1:-patch}
  npm publish
fi

PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]');
git tag $PACKAGE_VERSION;
git push --tags;
git commit -am 'Version bumped'
