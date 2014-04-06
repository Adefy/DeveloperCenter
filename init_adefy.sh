#! /bin/bash
#
# Builds adefy bower components
# In future versions, this will no longer be necessary
cd bower_components

cd adefyjs
npm install
grunt cdn
cd ..

cd adefyre
npm install
grunt cdn
cd ..

cd ..
