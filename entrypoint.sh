#!/bin/sh -l

echo "Okareo: $1"
time=$(date)
echo "time=$time" >> $GITHUB_OUTPUT

curl -L https://github.com/okareo-ai/okareo-cli/releases/download/v0.0.8/okareo_0.0.8_linux_amd64.tar.gz > okareo.tar.gz
tar -xvf okareo.tar.gz
chmod 755 bin/okareo
./bin/okareo --help
