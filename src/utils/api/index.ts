import { customerogin, googleLogin, signupCustomer } from "./auth/login";
import { getOtp } from "./auth/otp";
import {
  createBoking,
  getCruiseBookingAvailability,
} from "./bookings/bookings.api";
import { getResortDetails } from "./getResortDetails/getResortDetails";

export const api = {
  auth: {
    customerogin,
    signupCustomer,
    googleLogin,
    getOtp,
  },
  resort: {
    getResortDetails,
  },
  bookings: {
    createBoking,
    getCruiseBookingAvailability,
  },
};
