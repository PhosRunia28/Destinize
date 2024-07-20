type LocationData = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  info: string;
};
type Props = {
  location: LocationData;
};
export default function Locationinfo({ location }: Props) {
  const Icon = location.icon;
  return (
    <div className="flex items-center gap-3 text-sm text-verylightgray">
      <Icon className="h-5 w-5" />
      {location.info}
    </div>
  );
}
