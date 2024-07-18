type Props = {
  rating: 1 | 2 | 3 | 4 | 5;
};
export default function StarRating({ rating }: Props) {
  return Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < rating ? "./icon/starfill.svg" : "./icon/starnotfill.svg"}
      alt={`star ${index + 1}`}
      className="bg-cover bg-center"
    />
  ));
}
