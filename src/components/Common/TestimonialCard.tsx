import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TestimonialData } from "@/type/TestimonialType";
import StarRating from "./StarRating";
type Props = {
  testimonial: TestimonialData;
};
export default function TestimonialCard({ testimonial }: Props) {
  return (
    <Card className="w-full max-w-xs space-y-5 rounded-lg border border-black/10 px-7 py-8 text-center shadow-xl md:shadow-2xl lg:max-w-full">
      <CardHeader className="pb-2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="mx-auto w-full max-w-[8rem] rounded-full bg-cover bg-center"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-0 lg:px-4">
        <CardTitle className="mx-auto w-full max-w-xs text-sm font-medium leading-relaxed text-gray">
          {testimonial.testimonial}
        </CardTitle>
        <div className="mx-auto flex w-full max-w-fit items-center gap-2">
          <StarRating rating={testimonial.rating} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 p-0">
        <h5 className="text-sm font-semibold text-primary1">
          {testimonial.name}
        </h5>
        <CardDescription className="text-sm font-semibold">
          {testimonial.description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
