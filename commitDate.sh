#!/bin/bash
commitName=""

if [ "$1" != "" ]; then
    commitName=$1
else
currentDate=`date`
    commitName="Commit In $currentDate"
fi

# `&&` chained only add to commit, so a commit that FAILED — nothing staged, a
# rejecting hook — fell through to the push below and sent whatever older local
# commits happened to be sitting on main.
git add . && git commit -m "$commitName" || {
    echo "add/commit failed — nothing pushed" >&2
    exit 1
}

echo "**************************************** GITHUB : push to origin main : $commitName"
git push origin main || {
    echo "push failed" >&2
    exit 1
}
