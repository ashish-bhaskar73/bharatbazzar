import { useEffect, useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import HelpIcon from "@mui/icons-material/Help";
import paymentMethods from "../../../assets/images/payment-methods.svg";
import { useLocation } from "react-router-dom";
import logo from "../../../../src/assets/images/logo3.jpeg"

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "https://www.bharatbazzar.com/helpcentre",
      },
      {
        name: "About Us",
        redirect: "https://www.bharatbazzar.com/about-us",
      },
      // {
      //   name: "Careers",
      //   redirect: "https://www.bharatbazzarcareers.com",
      // },

      {
        name: "Bharat Wholesale",
        redirect: "https://www.bharatbazzarwholesale.com",
      },
    ],
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "https://www.bharatbazzar.com/pages/payments",
      },
      {
        name: "Shipping",
        redirect: "https://www.bharatbazzar.com/pages/shipping",
      },
      {
        name: "Cancellation & Returns",
        // redirect:
        //   "https://www.bharatbazzar.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "FAQ",
        redirect:
          "https://www.bharatbazzar.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      },
    ],
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "https://www.bharatbazzar.com/pages/returnpolicy",
      },
      {
        name: "Terms Of Use",
        redirect: "https://www.bharatbazzar.com/pages/terms",
      },
      {
        name: "Security",
        redirect: "https://www.bharatbazzar.com/pages/paymentsecurity",
      },
      {
        name: "Privacy",
        redirect: "https://www.bharatbazzar.com/pages/privacypolicy",
      },
    ],
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/bharatbazzar",
      },
    ],
  },
];

const Footer = () => {
  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"));
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-green-400 text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
              {footerLinks.map((el, i) => (
                <div
                  className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5"
                  key={i}
                >
                  <h2 className="text-black mb-2 uppercase">
                    {el.title}
                  </h2>
                  {el.links.map((item, i) => (
                    <a
                      href={item.redirect}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                      key={i}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-gray-600 h-36 w-1  mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-black">Mail Us:</h2>
                <p className="mt-2 leading-5">
                  Bharat Bazzar
                  <br />
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <img src={logo} alt="bharatbazzar"></img>{/* logo appear here */}</div>
            </div>
          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-green-600 hidden sm:flex justify-between items-center text-sm text-white">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-yellow-400">
                <WorkIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Sell On Bharat Bazzar
            </a>
            {/* <a href="https://brands.bharatbazzar.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Advertise
            </a> */}
            {/* <a href="https://www.bharatbazzar.com/the-gift-card-store" rel="noreferrer" target="_blank" className="flex items-center gap-2">
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Gift Cards
            </a> */}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-yellow-400">
                <HelpIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Help Center
            </a>

            <span>&copy; {new Date().getFullYear()} BharatBazzar.com</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
