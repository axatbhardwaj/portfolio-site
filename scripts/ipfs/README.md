# IPFS + IPNS Setup

One-time IPFS setup for your server to enable automatic IPNS updates.

## Why IPNS?

- Set ENS contenthash once → `ipns://your-key`
- Update content anytime without gas fees
- GitHub Action publishes new CID to IPNS automatically

## Server Setup (One-time)

```bash
# On your Debian server
chmod +x scripts/ipfs/setup.sh
./scripts/ipfs/setup.sh
```

This will:
1. Install IPFS Kubo
2. Generate an IPNS key named `portfolio`
3. Save the key to `~/ipns-keys.json`
4. Create and start a systemd service

Your keys are saved at:
```bash
cat ~/ipns-keys.json
# {"portfolio": "k51qzi5uqu5d..."}

## GitHub Secrets Required

Add these to your repo (Settings → Secrets → Actions):

| Secret | Description |
|--------|-------------|
| `SERVER_SSH_KEY` | Private SSH key to access your server |
| `SERVER_HOST` | Your server hostname or IP |
| `SERVER_USER` | SSH username |

## ENS Setup (One-time)

1. Go to [app.ens.domains](https://app.ens.domains)
2. Navigate to your ENS name → Records
3. Set Content Hash to: `ipns://<your-key-from-setup>`
4. Sign the transaction

## Manual IPNS Publish

```bash
# On your server
bun run scripts/ipfs/publish.ts <ipfs-cid>
```

## Useful Commands

```bash
# Check IPFS status
sudo systemctl status ipfs

# View logs
journalctl -u ipfs -f

# List IPNS keys
ipfs key list -l

# Check current IPNS value
ipfs name resolve <your-ipns-key>
```
