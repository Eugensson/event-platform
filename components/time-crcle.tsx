interface TimeCircleProps {
  value: string | number;
  label: string;
}

export const TimeCircle = ({ value, label }: TimeCircleProps) => (
  <li className="size-25 mx-auto flex flex-col items-center justify-center text-center border-[3px] border-accent rounded-full">
    <p className="text-3xl font-semibold">{value}</p>
    <p className="text-sm font-medium uppercase">{label}</p>
  </li>
);
