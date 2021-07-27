import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>asdasda</td>
            <td className='deposit'>R$1000.00</td>
            <td>dadsadasd</td>
            <td>27/07/2021</td>
          </tr>

          <tr>
            <td>asdasda</td>
            <td className='withdraw'>- R$1000.00</td>
            <td>dadsadasd</td>
            <td>27/07/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}