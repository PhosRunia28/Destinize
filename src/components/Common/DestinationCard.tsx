type CardData = {
  image: string;
  destinationName: string;
  country: string;
};

type Props = {
  cards: CardData;
};
export default function DestinationCard({ cards }: Props) {
  return (
    <div className="group relative mx-auto h-[400px] w-full max-w-xs cursor-pointer rounded-lg shadow-xl transition duration-500 hover:scale-105 sm:mx-0">
      <img
        src={cards.image}
        alt={cards.destinationName}
        className="h-full w-full rounded-lg bg-cover bg-center shadow-xl"
      />
      <div className="absolute bottom-0 left-0 flex flex-col rounded-bl-lg rounded-tr-lg bg-white/30 px-10 py-4 font-sans backdrop-blur-md transition duration-300 group-hover:opacity-0">
        <h5 className="text-lg font-semibold">{cards.destinationName}</h5>
        <p className="text-sm font-medium text-white/70">{cards.country}</p>
      </div>
    </div>
  );
}
