import Image from "next/image";

const Mode = ({
  index,
  title,
  desc,
  imgSrc,
}: {
  index: number;
  title: string;
  desc: string;
  imgSrc: string;
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 text-h4">
          <div className="rounded-full bg-primary px-2 text-neutral-100">
            <h4 className="rounded-full bg-primary px-1 py-1 text-neutral-100 text-lg">
              {index}
            </h4>
          </div>
          <h4 className="text-secondary">{title}</h4>
        </div>

        <p className="text-sm">{desc}</p>
      </div>

      <div className="flex justify-center">
        <Image src={imgSrc} alt={imgSrc} height="300" width="300" />
      </div>
    </div>
  );
};

export default Mode;
