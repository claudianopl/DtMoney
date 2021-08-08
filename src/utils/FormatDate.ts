interface FormatNumberProps {
  currentDate: string;
}

export const FormatDate = ({ currentDate }: FormatNumberProps) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(currentDate))
};