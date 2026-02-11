import { InfiniteMovingCards } from "../../ui/Infinite-moving-cards";
import { Testimonals } from "../../../constants/testimonialContent/testimonial";

export const Testimonials = () => {
  return (
    <>
      <div className="h-auto pt-10 mb-12 rounded-md flex flex-col antialiased bg-white dark-bg-black dark-bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="max-w-2xl mb-16 mx-auto text-center">
          <img
            className="mx-auto"
            src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1"
            alt=""
          />

          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our <span className="text-[#a97105]">Special</span> Visitors
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            We are very proud to say that we served very most famous persons not
            only in west bengal but in india. their trust and appreciation make
            use one of the best Eco Resorts in Sundarban
          </p>
        </div>
        <InfiniteMovingCards
          items={Testimonals}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
};
