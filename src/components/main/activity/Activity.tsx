/* eslint-disable @typescript-eslint/no-explicit-any */
import { BentoGrid, BentoGridItem } from "../../ui/bentoGrid";
import fishimg from "../../../assets/activity/Fishing.jpeg";
import folkdnce from "../../../assets/activity/activities-folk-dance.jpg";

const Skeleton = ({ image }: any) => (
  <div
    className="flex shadow-lg flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-200"
    style={{
      backgroundImage: `url('${image}')`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    }}
  ></div>
);

export const BentoGridDemo = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-2xl mx-auto text-center">
        <img
          className="mx-auto"
          src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1"
          alt=""
        />
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Popular <span className="text-[#a97105]">Activities</span>
        </h2>
        <p className="max-w-lg mx-auto my-4 text-base leading-relaxed text-gray-600">
          Apart from your Nature tour, you can opt for additional activities at
          the Resort on request.
        </p>
      </div>
      <BentoGrid className="w-full mb-20 px-10 mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<Skeleton image={item.image} />}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const items = [
  {
    title: "Bonbibi Pala",
    description:
      "Bonbibi Pala is a dramatic performance tied to Bonbibi worship.",
    header: <Skeleton image={undefined} />,
    icon: "https://cdn-icons-gif.flaticon.com/9121/9121640.gif",
    image:
      "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845172/bono_bibi_pala_rpto8k.jpg",
  },
  {
    title: "Fishing in the beauty of sundarbans",
    description:
      "Experience fishing and the vibrant activities of fishermen on country boats.",
    header: <Skeleton image={undefined} />,
    icon: "https://cdn-icons-gif.flaticon.com/19008/19008872.gif",
    image: fishimg,
  },
  {
    title: "Boating On River",
    description:
      "Observe fishermen and Gangetic river dolphins on country boats.",
    header: <Skeleton image={undefined} />,
    icon: "https://cdn-icons-gif.flaticon.com/13890/13890921.gif",
    image:
      "https://images.pexels.com/photos/2666806/pexels-photo-2666806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "The Folk Dance",
    description:
      "Tribal people preserve their heritage with traditional songs and dances, performing on request.",
    header: <Skeleton image={undefined} />,
    icon: "https://cdn-icons-gif.flaticon.com/18124/18124724.gif",
    image: folkdnce,
  },

  {
    title: "The Adventure of Mudwalking",
    description: "Experience the thrill of mudwalking adventures.",
    header: <Skeleton image={undefined} />,
    icon: "https://cdn-icons-gif.flaticon.com/10306/10306546.gif",
    image:
      "https://img.freepik.com/free-photo/crop-legs-walking-near-sea-waves_23-2148021646.jpg?t=st=1729357038~exp=1729360638~hmac=7f1d6af0e091c3d361f18aa0dca0df70f47aa83dae45bbc62374221d74566e30&w=1060",
  },
];
