type Props = {
  subtitle: string;
  title: string;
  description: string;
};
export default function TitleCenter({ subtitle, title, description }: Props) {
  return (
    <div className="flex flex-col gap-6 text-center">
      <h5 className="font-manrope text-sm font-black uppercase tracking-widest text-primary2 lg:text-base">
        {subtitle}
      </h5>
      <h3
        className="mx-auto max-w-3xl text-3xl font-black sm:text-4xl md:text-[2.5rem] lg:text-[2.7rem]"
        style={{ lineHeight: 1.3 }}
      >
        {title}
      </h3>
      <p className="mx-auto w-full max-w-2xl text-sm leading-[1.8]">
        {description}
      </p>
    </div>
  );
}
