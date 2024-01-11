#!/bin/bash

set -eo pipefail

eval "$(ssh-agent -s)"

echo "SSH_AUTH_SOCK=$SSH_AUTH_SOCK" >> "$GITHUB_ENV"
echo "SSH_AGENT_PID=$SSH_AGENT_PID" >> "$GITHUB_ENV"

ssh-add - <<< "$SSH_PRIVATE_KEY"

echo "vps577063.ovh.net ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFuuDnpHPBfoW7jZjEqTVrbkQXdG42sAX4bDscc90utS" >> ~/.ssh/known_hosts
