interface FormatNumberProps {
  currentNumber: number;
}

export const FormatNumber = ({ currentNumber }: FormatNumberProps) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(currentNumber)
};