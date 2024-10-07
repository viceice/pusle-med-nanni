#!/bin/bash

set -eo pipefail

echo starting ssh-agent
eval "$(ssh-agent -s)"

echo exporting ssh-agent variables
echo "SSH_AUTH_SOCK=$SSH_AUTH_SOCK" >> "$GITHUB_ENV"
echo "SSH_AGENT_PID=$SSH_AGENT_PID" >> "$GITHUB_ENV"

echo "loading encrypted key"
sops -d .github/secrets/ssh-pk.enc.pem | ssh-add -

echo preparing known_hosts
if [ ! -d ~/.ssh ]; then
  mkdir ~/.ssh
  touch ~/.ssh/known_hosts
fi
echo "vps577063.ovh.net ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIBrQnysJ/Dt/fUXnTDQhXqkQscdImiAFzpXgEp37Sa7" >> ~/.ssh/known_hosts

