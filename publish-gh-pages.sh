#!/bin/bash
gradle build examples:generateIndexHtml

tmpdir=/tmp/pixi-kotlin-gh-pages-build
mkdir -p $tmpdir
rm -rf $tmpdir/*

for example in $(ls examples); do
    if [ ! -d examples/$example/web ]; then
        continue
    fi
    mkdir $tmpdir/$example
    cp -r examples/$example/web/* $tmpdir/$example/
done

cp examples/web/index.html $tmpdir/

git checkout gh-pages -f
rm -rf *
cp -r $tmpdir/* .
git add *
git commit * -m "Regenerated GH-Pages"
git push
git checkout master -f
