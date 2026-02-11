import { IconSparkles } from "@tabler/icons-react";

const HeaderChip = ({text}:any) => {
  return (
    <button className="bg-[#a97105] border-2 no-underline group cursor-pointer relative shadow-lg rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
      <div className="relative text-lg flex text-gray-50 space-x-2 items-center z-10 rounded-full px-7  py-0.5 px-4 ">
        <IconSparkles/>
        <span>{text || <>Why chose us ?</>}</span>
      </div>
      {/* <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" /> */}
    </button>
  );
};

export default HeaderChip;
