import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { FormatDate } from "../../utils/FormatDate";
import { FormatNumber } from "../../utils/FormatNumber";
import { Container } from "./styles";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const handleGetTransaction = useCallback(async () => {
    const response = await api.get('/transactions');

    setTransactions(response.data.transactions)
  }, [])

  useEffect(() => {
    handleGetTransaction()
  }, [handleGetTransaction])


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {FormatNumber({ currentNumber: transaction.amount })}
                </td>
                <td>{transaction.category}</td>
                <td>{FormatDate({ currentDate: transaction.createdAt })}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}