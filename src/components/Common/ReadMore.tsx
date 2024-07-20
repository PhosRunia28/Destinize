import { useState } from "react";
type Props = {
  text: string;
  maxLength: number;
};
export default function ReadMore({ text, maxLength }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <p className="w-full max-w-xl text-sm leading-[1.8] text-verylightgray sm:max-w-lg">
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <span onClick={toggleReadMore} className="cursor-pointer text-blue-500">
        {isExpanded ? "" : " Baca selengkapnya"}
      </span>
    </p>
  );
}
