export interface Account {
  accountID: string;
  accountName: string;
  accountNumber: string;
  accountType: string;
  currentDayBalance: number;
  currentDayAvailableBalance: number;
}

export interface TransactionStatus {
  status: string;
  timestamp: string;
  userID?: string;
}

export interface Transaction {
  transactionID: string;
  refID: string;
  fundingAccount: string;
  recipientAccount: string;
  amount: number;
  valueDate: string;
  type: string;
  statusHistory: TransactionStatus[];
}

export interface ThirdParty {
  thirdPartyID: string;
  thirdPartyName: string;
  thirdPartyNumber: string;
}

export interface User {
  userId: string;
  name: string;
  role: string;
  email: string;
  avatarURL: string;
}

export interface Data {
  accounts: Account[];
  transactions: Transaction[];
  users: User[];
  thirdParties: ThirdParty[];
}
