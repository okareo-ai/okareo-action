#!/bin/sh -l

echo "Hello $1"
time=$(date)
echo "time=$time" >> $GITHUB_OUTPUT

curl -L https://github.com/okareo-ai/okareo-cli/releases/download/v0.0.2/okareo-cli_0.0.2_linux_amd64.tar.gz > cli.tar.gz
tar -xvf cli.tar.gz
chmod 755 okareo-cli
./okareo-cli --help

