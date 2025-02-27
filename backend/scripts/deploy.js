const { ethers } = require("hardhat");

async function main() {
  const Election = await ethers.getContractFactory("Election");
  const election = await Election.deploy();
  await election.deployed();
  console.log(`Election contract deployed at: ${election.address}`);

  const VoterRegistry = await ethers.getContractFactory("VoterRegistry");
  const voterRegistry = await VoterRegistry.deploy();
  await voterRegistry.deployed();
  console.log(`VoterRegistry contract deployed at: ${voterRegistry.address}`);

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(voterRegistry.address, election.address);
  await voting.deployed();
  console.log(`Voting contract deployed at: ${voting.address}`);

  const DPoS = await ethers.getContractFactory("DPoS");
  const dpos = await DPoS.deploy();
  await dpos.deployed();
  console.log(`DPoS contract deployed at: ${dpos.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
