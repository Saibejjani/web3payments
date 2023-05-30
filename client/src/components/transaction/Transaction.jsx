import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
const Transaction = () => {
  const { fetchTransaction } = useContext(TransactionContext);
  return <h1>hello</h1>;
};

export default Transaction;
