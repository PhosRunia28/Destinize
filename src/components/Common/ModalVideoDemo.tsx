import { AspectRatio } from "@/components/ui/aspect-ratio";
type Props = {
  openVideo: boolean;
  setOpenVideo: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ModalVideoDemo({ openVideo, setOpenVideo }: Props) {
  return (
    <>
      {openVideo && (
        <div
          className="fixed inset-0 z-40 h-full w-full bg-black/80"
          onClick={() => setOpenVideo(false)}
        ></div>
      )}
      {openVideo && (
        <div className="fixed inset-x-0 inset-y-40 z-40 mx-auto flex w-full items-center justify-center sm:w-[80%] md:inset-40 md:w-[70%] lg:w-[60%]">
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=jPrBes_wUs1vgOz5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </div>
      )}
    </>
  );
}
