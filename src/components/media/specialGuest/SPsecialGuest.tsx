const SPsecialGuest = () => {
  const guests = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/79.jpg",
    "https://randomuser.me/api/portraits/men/30.jpg",
    "https://randomuser.me/api/portraits/women/48.jpg",
    "https://randomuser.me/api/portraits/men/36.jpg",
    "https://randomuser.me/api/portraits/women/64.jpg",
    "https://randomuser.me/api/portraits/men/27.jpg",
    "https://randomuser.me/api/portraits/women/54.jpg",
    "https://randomuser.me/api/portraits/men/39.jpg",
    "https://randomuser.me/api/portraits/women/43.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/women/37.jpg",
    "https://randomuser.me/api/portraits/men/19.jpg",
    "https://randomuser.me/api/portraits/women/62.jpg",
    "https://randomuser.me/api/portraits/men/15.jpg",
    "https://randomuser.me/api/portraits/women/72.jpg",
    "https://randomuser.me/api/portraits/men/25.jpg",
    "https://randomuser.me/api/portraits/women/40.jpg",
    "https://randomuser.me/api/portraits/men/50.jpg",
    "https://randomuser.me/api/portraits/women/55.jpg",
  ];

  // Split into rows of 7, 10, 7
  const row1 = guests.slice(0, 7);
  const row2 = guests.slice(7, 17);

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Image with Dark Overlay */}

      {/* <img
        className="mx-auto"
        src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1"
        alt="Special Guests Logo"
      /> */}
      <div className="font-semibold text-[#946405] text-4xl mx-auto text-center mb-10">
        Our Special Guests
      </div>

      {/* Row 1: 7 Guests */}
      <div className="flex justify-center gap-6 mb-10">
        {row1.map((guest, index) => (
          <div
            key={index}
            className="w-24 h-24 rounded-full overflow-hidden shadow-xl shadow-gray-400 bg-white flex items-center justify-center transform transition duration-500 hover:scale-110"
          >
            <img
              src={guest}
              alt={`Guest ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Row 2: 10 Guests */}
      <div className="flex justify-center gap-6 mb-10">
        {row2.map((guest, index) => (
          <div
            key={index}
            className="w-24 h-24 rounded-full overflow-hidden shadow-xl shadow-gray-400 bg-white flex items-center justify-center transform transition duration-500 hover:scale-110"
          >
            <img
              src={guest}
              alt={`Guest ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SPsecialGuest;
