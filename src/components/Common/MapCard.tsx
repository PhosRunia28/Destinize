type Props = {
  image: string;
  title: string;
  subtitle: string;
};
export default function MapCard({ image, title, subtitle }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-xs gap-4 sm:mx-0">
      <div className="h-full max-h-12 w-full max-w-12 rounded-full bg-black/5 p-3">
        <img src={image} alt={title} className="bg-cover bg-center" />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-lg font-black">{title}</h5>
        <p className="w-full text-sm font-medium leading-relaxed text-gray">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
