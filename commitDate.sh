#!/bin/bash
commitName=""

if [ "$1" != "" ]; then
    commitName=$1
else
currentDate=`date`
    commitName="Commit In $currentDate"
fi

git add . && git commit -m "$commitName"

echo "**************************************** GITHUB : push to origin main :" + $commitName
git push origin main
