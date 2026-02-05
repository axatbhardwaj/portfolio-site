#!/bin/bash
# IPFS Setup Script for Debian
# Run this once on your server to set up IPFS with IPNS

set -e

IPFS_VERSION="v0.32.1"
KEY_NAME="portfolio"

echo "==> Installing IPFS Kubo ${IPFS_VERSION}..."

# Download and install
cd /tmp
wget -q "https://dist.ipfs.tech/kubo/${IPFS_VERSION}/kubo_${IPFS_VERSION}_linux-amd64.tar.gz"
tar -xzf "kubo_${IPFS_VERSION}_linux-amd64.tar.gz"
sudo mv kubo/ipfs /usr/local/bin/
rm -rf kubo kubo_${IPFS_VERSION}_linux-amd64.tar.gz

echo "==> Initializing IPFS..."
ipfs init --profile server 2>/dev/null || echo "IPFS already initialized"

echo "==> Generating IPNS key '${KEY_NAME}'..."
IPNS_KEY=$(ipfs key gen ${KEY_NAME} 2>/dev/null || ipfs key list -l | grep ${KEY_NAME} | awk '{print $1}')

# Save to JSON file
KEYS_FILE="${HOME}/ipns-keys.json"
if [ -f "$KEYS_FILE" ]; then
  # Update existing file using basic tools (no jq dependency)
  TMP_FILE=$(mktemp)
  # Remove trailing } and add new key
  sed '$ d' "$KEYS_FILE" > "$TMP_FILE"
  if [ "$(wc -l < "$KEYS_FILE")" -gt 2 ]; then
    echo "," >> "$TMP_FILE"
  fi
  echo "  \"${KEY_NAME}\": \"${IPNS_KEY}\"" >> "$TMP_FILE"
  echo "}" >> "$TMP_FILE"
  mv "$TMP_FILE" "$KEYS_FILE"
else
  # Create new file
  cat > "$KEYS_FILE" <<EOJSON
{
  "${KEY_NAME}": "${IPNS_KEY}"
}
EOJSON
fi

echo ""
echo "=========================================="
echo "IPNS Key: ${IPNS_KEY}"
echo "Saved to: ${KEYS_FILE}"
echo "=========================================="
echo ""
echo "Set your ENS contenthash to:"
echo "  ipns://${IPNS_KEY}"
echo ""

echo "==> Creating systemd service..."
sudo tee /etc/systemd/system/ipfs.service > /dev/null <<EOF
[Unit]
Description=IPFS Daemon
After=network.target

[Service]
User=${USER}
Environment="IPFS_PATH=${HOME}/.ipfs"
ExecStart=/usr/local/bin/ipfs daemon --enable-namesys-pubsub
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

echo "==> Starting IPFS daemon..."
sudo systemctl daemon-reload
sudo systemctl enable ipfs
sudo systemctl start ipfs

echo "==> Waiting for IPFS to start..."
sleep 3

echo "==> Verifying installation..."
ipfs id > /dev/null && echo "IPFS is running!"

echo ""
echo "Setup complete! Next steps:"
echo "1. Set your ENS contenthash to: ipns://${IPNS_KEY}"
echo "2. Add SERVER_SSH_KEY, SERVER_HOST, SERVER_USER to GitHub secrets"
echo "3. Push to main branch to trigger deployment"
