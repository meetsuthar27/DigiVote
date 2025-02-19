# DigiVote: Blockchain-Based Decentralized Voting System

## Project Overview

DigiVote is a blockchain-based decentralized online voting system designed to provide a **secure, transparent, and cost-efficient** election process. It ensures **tamper-proof and verifiable election results** while minimizing costs for organizers and voters.

The system initially supports **Ad Hoc voting**, allowing elections to be conducted anytime without a fixed schedule. Future updates will include **structured voting methods** to accommodate various election needs, ensuring scalability and adaptability.

## Group Members

- **Jay Raval**
- **Meet Suthar**
- **Meet Patel**
- **Jinil Savaj**

## Project Objectives

- Provide **secure and verifiable** elections using blockchain technology.
- Prevent **vote tampering and unauthorized access** through cryptographic security.
- Minimize the **costs of conducting elections** by eliminating intermediaries.
- Allow **real-time vote verification** for voters, ensuring transparency.
- Ensure **scalability** by introducing **Delegated Proof of Stake (DPoS)**.

---

## **Stakeholders & Their Roles**

- **Voters** - Cast their votes in an election.
- **Election Organizers** - Create and manage elections.
- **Candidates/Nominees** - Participate in elections and receive votes.
- **Government & Regulatory Bodies** - Ensure fair election processes.
- **Social Cause Organizations & NGOs** - Monitor election integrity.
- **Validators** - Verify votes and ensure correct vote counting.

---

## **Technology Stack**

### **Database (MongoDB Atlas)**

Stores temporary and persistent election data:

- **Voter Credentials**
- **Candidate Profiles**
- **Organizer Profiles**
- **Temporary Vote Logs**

### **Blockchain (Ethereum / Hyperledger)**

Stores **immutable** election records:

- **Vote Records**
- **Voter Validation Keys**
- **Candidate Validation Keys**
- **Organizer Unique Keys**

---

## **Core Transactions**

### **Voter Transactions**

1. **Register**
2. **Cast a Vote**
3. **Verify Vote**

### **Election Manager Transactions**

1. **Create an Election**
2. **Update Election Details**
3. **Start an Election**
4. **End an Election**
5. **Delete an Election**

### **Result Computation**

1. **Compute Results**
2. **Publish Results**
3. **Audit Election**

### **Security Mechanisms**

1. **Grant Access**
2. **Revoke Access**
3. **Blacklist a Voter**

---

## **Smart Contracts**

### **1. Election Management Smart Contract**

- Handles **election creation**, configuration, and management.
- Defines election rules (**one person, one vote**).
- Manages candidates, start/end times, and stores metadata on the blockchain.

### **2. Voter Registration & Verification Smart Contract**

- Registers voters with unique IDs (**wallet address, hashed identity proof**).
- Validates voter identity using **cryptographic proofs**.
- Prevents **duplicate or unauthorized voting**.

---

## **DPoS (Delegated Proof of Stake) Integration**

### **1️⃣ Roles in DPoS**

- **Voters (Stakeholders):** Hold voting power and delegate votes to **trusted validators**.
- **Delegates (Block Producers):** Validate votes, tally results, and ensure network security.
- **Smart Contracts:** Automate stake management, vote counting, and result verification.

### **2️⃣ Smart Contracts for DPoS**

#### **Stake Management Contract**

- Allows users to **stake tokens** and delegate votes to a representative.
- Defines vote weight based on **stake size**.

#### **Delegate Election Contract**

- Enables **voters to elect delegates** who validate votes.
- Updates **delegate rankings dynamically**.

#### **Voting & Verification Contract**

- Delegates verify and record **encrypted votes**.
- Uses **zero-knowledge proofs** or **multi-signature schemes** to prevent fraud.

#### **Rewards & Penalty Contract**

- Delegates **earn rewards** for correctly verifying votes.
- **Malicious delegates** (e.g., double voting attempts) are penalized.

---

## **Why Use DPoS?**

✅ **Enhanced Scalability & Speed**

- Only elected delegates validate transactions, making vote aggregation **faster**.

✅ **Increased Security & Trust**

- Validators are **elected by the community**, preventing **manipulation**.

✅ **Community-Driven Governance**

- Stakeholders have a **direct say** in the system's security.

✅ **Fair & Transparent Elections**

- **Votes are weighted** by stake, preventing fake votes.
- Delegates verify votes while maintaining **voter privacy**.
