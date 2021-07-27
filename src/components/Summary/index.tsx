import incomeImg from '../../assets/entradas.svg';
import outCome from '../../assets/saidas.svg';
import total from '../../assets/total.svg';

import { Container } from "./styles";


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          R$1000,00
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outCome} alt="Saídas" />
        </header>
        <strong>
          - R$1000,00
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          R$00,00
        </strong>
      </div>
    </Container>
  )
}