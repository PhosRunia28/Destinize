type Props = {
  icon: string;
  title: string;
  subtitle: string;
};
export default function ReservationText({ icon, title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-full max-w-12 rounded-lg bg-[#EFE0B4] p-3 text-center">
        <p className="text-lg">{icon}</p>
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="font-bold">{title}</h5>
        <p className="w-full max-w-xs text-sm text-gray">{subtitle}</p>
      </div>
    </div>
  );
}
