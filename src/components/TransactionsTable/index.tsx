import { useTransaction } from "../../Hooks/UseTransactionsContext";
import { FormatDate } from "../../utils/FormatDate";
import { FormatNumber } from "../../utils/FormatNumber";
import { Container } from "./styles";



export function TransactionsTable() {
  const { transactions } = useTransaction()

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