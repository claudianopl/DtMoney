import { createContext, useContext } from 'react';
import { useCallback, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const handleGetTransaction = useCallback(async () => {
    const response = await api.get('/transactions');

    setTransactions(response.data.transactions)
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })

    const { transaction } = response.data;

    setTransactions(currentTransaction => [
      ...currentTransaction,
      transaction
    ])
  }

  useEffect(() => {
    handleGetTransaction()
  }, [handleGetTransaction])



  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction() {
  const context = useContext(TransactionsContext);

  return context;
}