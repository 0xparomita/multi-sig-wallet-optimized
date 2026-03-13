const hre = require("hardhat");

async function main() {
  const [deployer, addr1, addr2] = await hre.ethers.getSigners();
  const owners = [deployer.address, addr1.address, addr2.address];
  const required = 2;

  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSig.deploy(owners, required);

  console.log(`MultiSig Wallet deployed to: ${wallet.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
