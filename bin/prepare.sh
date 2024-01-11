#!/bin/bash

set -eo pipefail

echo starting ssh-agent
eval "$(ssh-agent -s)"

echo exporting ssh-agent variables
echo "SSH_AUTH_SOCK=$SSH_AUTH_SOCK" >> "$GITHUB_ENV"
echo "SSH_AGENT_PID=$SSH_AGENT_PID" >> "$GITHUB_ENV"

echo "loading encrypted key"
ssh-add - <(sops -d .github/secrets/ssh-pk.enc.pem)

echo preparing known_hosts
echo "vps577063.ovh.net ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFuuDnpHPBfoW7jZjEqTVrbkQXdG42sAX4bDscc90utS" >> ~/.ssh/known_hosts

echo testing connection
ssh gitlab@vps577063.ovh.net id

exit 1
