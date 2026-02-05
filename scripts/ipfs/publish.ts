#!/usr/bin/env bun
/**
 * Publish IPFS CID to IPNS
 * Usage: bun run scripts/ipfs/publish.ts <ipfs-cid>
 */

const IPNS_KEY_NAME = "portfolio";

async function execCommand(command: string): Promise<string> {
  const proc = Bun.spawn(["sh", "-c", command], {
    stdout: "pipe",
    stderr: "pipe",
  });

  const stdout = await new Response(proc.stdout).text();
  const stderr = await new Response(proc.stderr).text();
  const exitCode = await proc.exited;

  if (exitCode !== 0) {
    throw new Error(`Command failed: ${command}\n${stderr}`);
  }

  return stdout.trim();
}

async function publish(cid: string): Promise<void> {
  console.log(`Publishing /ipfs/${cid} to IPNS key '${IPNS_KEY_NAME}'...`);

  // Verify IPFS is running
  try {
    await execCommand("ipfs id");
  } catch {
    console.error("Error: IPFS daemon is not running");
    console.error("Start it with: sudo systemctl start ipfs");
    process.exit(1);
  }

  // Verify the key exists
  const keys = await execCommand("ipfs key list");
  if (!keys.includes(IPNS_KEY_NAME)) {
    console.error(`Error: IPNS key '${IPNS_KEY_NAME}' not found`);
    console.error("Generate it with: ipfs key gen portfolio");
    process.exit(1);
  }

  // Publish to IPNS
  const result = await execCommand(
    `ipfs name publish --key=${IPNS_KEY_NAME} /ipfs/${cid}`
  );

  console.log(result);
  console.log("\nIPNS updated successfully!");
}

// Main
const cid = process.argv[2];

if (!cid) {
  console.error("Usage: bun run scripts/ipfs/publish.ts <ipfs-cid>");
  console.error("Example: bun run scripts/ipfs/publish.ts QmXyz...");
  process.exit(1);
}

// Basic CID validation
if (!cid.startsWith("Qm") && !cid.startsWith("bafy")) {
  console.error(`Invalid CID format: ${cid}`);
  console.error("CID should start with 'Qm' (CIDv0) or 'bafy' (CIDv1)");
  process.exit(1);
}

publish(cid).catch((err) => {
  console.error("Failed to publish:", err.message);
  process.exit(1);
});
