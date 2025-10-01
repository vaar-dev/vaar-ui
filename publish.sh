#!/bin/bash
npm run build
cp README.md dist/README.md
cp LICENSE dist/LICENSE
cp package.json dist/package.json
cd dist
npm publish
cd ..
