type Props = {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
};
export default function CardBlog({
  image,
  date,
  title,
  description,
  link,
}: Props) {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col rounded-lg border border-black/5 shadow-lg md:mx-0">
      <div className="h-[260px] w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-t-lg bg-cover bg-center"
        />
      </div>
      <div className="flex flex-col gap-4 px-6 pb-8 pt-6">
        <h5 className="text-sm font-semibold uppercase tracking-wider text-verylightgray opacity-80">
          {date}
        </h5>
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm font-semibold leading-relaxed text-gray">
          {description}
        </p>
        <a
          href={link}
          className="w-full max-w-fit text-sm font-semibold text-primary1"
        >
          Baca selengkapnya ..
        </a>
      </div>
    </div>
  );
}
