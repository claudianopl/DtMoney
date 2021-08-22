import incomeImg from '../../assets/entradas.svg';
import outCome from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { useTransaction } from '../../Hooks/UseTransactionsContext';
import { FormatNumber } from '../../utils/FormatNumber';

import { Container } from "./styles";


export function Summary() {
  const { transactions } = useTransaction()

  const { deposit, withdraws, amountTotal } = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount;
      acc.amountTotal += transaction.amount;
    } else {
      acc.withdraws += transaction.amount
      acc.amountTotal -= transaction.amount;
    }

    return acc;
  }, {
    deposit: 0,
    withdraws: 0,
    amountTotal: 0,
  })


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {FormatNumber({ currentNumber: deposit })}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outCome} alt="Saídas" />
        </header>
        <strong>
          - {FormatNumber({ currentNumber: withdraws })}
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          {FormatNumber({ currentNumber: amountTotal })}
        </strong>
      </div>
    </Container>
  )
}