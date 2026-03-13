# Multi-Signature Wallet (M-of-N)

A professional-grade Multi-Signature wallet designed for DAO treasury management or high-security personal fund storage. This contract ensures that no single private key can compromise the assets.

### Core Architecture
* **Configurable Quorum:** Set the number of required signatures (e.g., 2-of-3, 3-of-5).
* **Two-Step Execution:** Transactions are first "proposed" and then "confirmed" by other owners.
* **Gas Efficiency:** Utilizes internal mappings and indexed events for efficient off-chain tracking.
* **Security:** Prevents reentrancy and ensures owner uniqueness during deployment.

### Usage
1. **Submit:** An owner calls `submitTransaction` with destination, value, and data.
2. **Confirm:** Other owners call `confirmTransaction` using the `txIndex`.
3. **Execute:** Once the `numConfirmations` reaches the `required` threshold, any owner can call `executeTransaction`.

### Testing
Deploy with an array of addresses and the required confirmation count. Ensure the count does not exceed the number of owners.
