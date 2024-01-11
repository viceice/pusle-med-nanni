#!/bin/bash

set -eo pipefail

eval "$(ssh-agent -s)"

echo "SSH_AUTH_SOCK=$SSH_AUTH_SOCK" >> "$GITHUB_ENV"
echo "SSH_AGENT_PID=$SSH_AGENT_PID" >> "$GITHUB_ENV"

echo "generating key"
ssh-keygen -t ed25519 -C "test" -f ~/.ssh/id_ed25519 -q -N ""
echo "loading generated key"
ssh-add - <  ~/.ssh/id_ed25519

echo "loading encrypted key"
ssh-add - <(sops -d .github/secrets/ssh-pk.enc.pem)

echo "vps577063.ovh.net ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFuuDnpHPBfoW7jZjEqTVrbkQXdG42sAX4bDscc90utS" >> ~/.ssh/known_hosts

ssh gitlab@vps577063.ovh.net ps

exit 1
