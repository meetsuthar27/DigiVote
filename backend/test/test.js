const { expect } = require("chai");

describe("Election Contract", function () {
  let Election, election, owner;

  beforeEach(async function () {
    Election = await ethers.getContractFactory("Election");
    [owner] = await ethers.getSigners();
    election = await Election.deploy();
    await election.deployed();
  });

  it("Should allow admin to add candidates", async function () {
    await election.addCandidate("Alice");
    expect((await election.getCandidate(1)).name).to.equal("Alice");
  });

  it("Should allow users to vote", async function () {
    await election.addCandidate("Alice");
    await election.vote(1);
    expect((await election.getCandidate(1)).voteCount).to.equal(1);
  });
});
