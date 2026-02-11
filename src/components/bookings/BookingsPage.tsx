/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import BookingsTab from "../main/bookingsTab/BookingsTab";
import CheckoutActivities from "../main/checkoutComponents/checkoutActivities/CheckoutActivities";
import ChekoutPayments from "../main/checkoutComponents/checkoutPayment/ChekoutPayments";
import ChecloutRooms from "../main/checkoutComponents/checkoutRooms/ChecloutRooms";
import Navbar from "../shared/navbar/Navbar";
import { Helmet } from "react-helmet-async";
import Calender from "../shared/calender/Calender";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";
const BookingsPage = () => {
  const [, setIsOpen] = useState(false);

  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [guestCount, setGuestCount] = useState(1);
  const [totaldates, setTotaldates] = useState(1);
  const [activityPrice, setActivityPrice] = useState<number>(0);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedActivityId, setSelectedActivityId] = useState<string[]>([]);

  const [bookingSelection, setBookingSelection] = useState<any>({
    checkInDate: null,
    checkOutDate: null,
    numberOfRooms: 1,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userInfo, setUserInfo] = useState<any>({
    name: "",
    phone: "",
    email: "",
    Comment: "",
  });

  const bookinApiPayload: any = {
    resortObjectId: "user?._id",
    roomObjectId: "roomCardId",
    activities: selectedActivities,
    user_name: userInfo?.name,
    user_phone: userInfo?.phone,
    user_mail: userInfo?.email,
    checkInDate: bookingSelection?.checkInDate,
    checkOutDate: bookingSelection?.checkOutDate,
    roomCount: bookingSelection?.numberOfRooms,
    totalPrice: 0,
    guestCount: guestCount,
    status: "PENDING",
    comment: userInfo?.Comment || "No Comment",
  };

  const EmailPayload: any = {
    activities: selectedActivities,
    user_name: userInfo?.name,
    user_phone: userInfo?.phone,
    user_mail: userInfo?.email,
    checkInDate: bookingSelection?.checkInDate,
    checkOutDate: bookingSelection?.checkOutDate,
    roomCount: bookingSelection?.numberOfRooms,
    guestCount: guestCount,
    comment: userInfo?.Comment || "No Comment",
  };

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/enquiry@hetalbon.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...EmailPayload,
            _cc: "prosenjit.kpa@gmail.com",
          }),
        }
      );

      if (response.ok) {
        navigate("/thanks-for-booking");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const bookRoom = async () => {
    try {
      if (bookinApiPayload.user_name && bookinApiPayload.user_phone) {
        const result = await api.bookings.createBoking(bookinApiPayload);
        console.log("=====>bookings", result);
        // alert("Success!,Your Bookings Confirmed");
        handleEmailSubmit();
        setIsOpen(true);
      } else {
        console.log(bookinApiPayload);
        alert("Please fill all the name and phone number");
      }
    } catch (error) {
      console.log("====> bookings error", error);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("===>Total dates", totaldates);
  }, [totaldates]);

  return (
    <Layout>
      <Helmet>
        <title>
          Book the Best Eco Resort in Sundarban, West Bengal | Hetalbon
        </title>
        <meta
          name="description"
          content="Book the best luxury resort in Sundarban, West Bengal for a peaceful and comfortable stay"
        />

        <script>
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NJDPL9HD');
    `}
        </script>
      </Helmet>
      <Navbar scrollEffectEnabled={false} />

      <div className="pb-20">
        <div className="pt-24 bg-gray-100 h-40">
          <BookingsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="flex-col md:flex-row flex w-full pl-2 md:pl-10 pr-2 md:pr-20">
          <div className="booking options w-full md:w-2/3 p-5">
            {activeTab === 0 && <ChecloutRooms setActiveTab={setActiveTab} />}
            {activeTab === 1 && (
              <CheckoutActivities
                selectedActivities={selectedActivities}
                setSelectedActivities={setSelectedActivities}
                selectedActivityId={selectedActivityId}
                setSelectedActivityId={setSelectedActivityId}
                totalPrice={activityPrice}
                setTotalPrice={setActivityPrice}
                setActiveTab={setActiveTab}
              />
            )}
            {activeTab === 2 && (
              <ChekoutPayments
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                setTotaldates={setTotaldates}
                bookRoom={bookRoom}
                setActiveTab={setActiveTab}
              />
            )}
          </div>
          <div className="w-full md:w-2/5 px-2 mt-2 md:-mt-16 rounded-2xl min-h-[30rem] gap-5 h-auto">
            <Calender
              bookingSelection={bookingSelection}
              setBookingSelection={setBookingSelection}
              selectedActivities={selectedActivities}
              guestCount={guestCount}
              setGuestCount={setGuestCount}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingsPage;
