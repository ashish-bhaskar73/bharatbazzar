import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriceSidebar from "./PriceSidebar";
import Stepper from "./Stepper";
import { clearErrors } from "../../actions/orderAction";
import { useSnackbar } from "notistack";
import { post } from "../../utils/razorpayForm"; // Import your Razorpay form submission function
import MetaData from "../Layouts/MetaData";

const Payment = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [payDisable, setPayDisable] = useState(false);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const paymentData = {
    amount: Math.round(totalPrice),
    email: user.email,
    phoneNo: shippingInfo.phoneNo,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setPayDisable(true);

    try {
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let info = {
        action: "Razorpay endpoint URL", // Replace with your Razorpay endpoint URL
        params: data.razorpayParams, // Make sure your backend sends the required Razorpay parameters
      };

      post(info); // Submit the Razorpay form
    } catch (error) {
      setPayDisable(false);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      enqueueSnackbar(error, { variant: "error" });
    }
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="bharatbazzar: Secure Payment | Razorpay" />

      <main className="w-full mt-20">
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          <div className="flex-1">
            <Stepper activeStep={3}>
              <div className="w-full bg-white">
                <form
                  onSubmit={(e) => submitHandler(e)}
                  autoComplete="off"
                  className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden"
                >
                  <input
                    type="submit"
                    value={`Pay ₹${totalPrice.toLocaleString()}`}
                    disabled={payDisable}
                    className={`${
                      payDisable
                        ? "bg-primary-grey cursor-not-allowed"
                        : "bg-primary-orange cursor-pointer"
                    } w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`}
                  />
                </form>
              </div>
            </Stepper>
          </div>
          <PriceSidebar cartItems={cartItems} />
        </div>
      </main>
    </>
  );
};

export default Payment;
