import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [accountName, setAccountName] = useState({});
  const [transactionData, setTransactionData] = useState({});
  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
  const getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    provider.getBalance(currentAccount).then((bal) => {
      const balanceInEth = ethers.utils.formatEther(bal);
      setBalance(balanceInEth);
      console.log({ balance });
    });
  };

  const sendTransaction = async (tranInfo) => {
    try {
      setIsLoading(true);
      const { ethereum, localStorage } = window;
      if (ethereum) {
        const { amount } = tranInfo;

        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: address,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });

        let retrieved = JSON.parse(localStorage.getItem("bups_Payments"));
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
    setIsLoading(false);
  };

  const verify = async (receiverAddress) => {
    console.log(receiverAddress);
    const contract = createEthereumContract();
    if (receiverAddress.length <= 15) {
      console.log();

      const received = await contract.getAddress(receiverAddress);
      console.log(received);
      setUserName(await contract.getRecord(receiverAddress));
      setUserAddress(received);
      setAddress(received);
    } else {
      const received = await contract.getDomain(receiverAddress);
      setUserName(await contract.getRecord(received));
      setUserAddress(received);
      setAddress(receiverAddress);
    }
  };

  const register = async (domain, userName) => {
    setIsLoading(true);
    const contract = createEthereumContract();
    const response = await contract.register(domain, userName);
    response.wait();
    console.log(response);
    setIsLoading(false);
    window.location.reload();
  };
  const getAccountName = async (address) => {
    const contract = createEthereumContract();
    const received = await contract.getDomain(address);
    const record = await contract.getRecord(received);
    console.log({ received, record });
    setAccountName({ domain: received, name: record });
  };

  const fetchTransaction = async (walletAddress) => {
    console.log("hello");
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:8545"
    );

    const history = await provider.getHistory(walletAddress);
    console.log(history);
  };

  useEffect(() => {
    currentAccount && getBalance();
    currentAccount && getAccountName(currentAccount);
  }, [currentAccount]);
  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        balance,
        userName,
        userAddress,
        verify,
        accountName,
        register,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
