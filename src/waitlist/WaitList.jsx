import { useEffect } from "react"; 
import $ from "jquery"; 
import bus from "../assets/images/bus.png"; 
import logo from "../assets/images/logo.png"; 

function WaitList() {
  // useEffect will run only once after the component mounts ([]) 
  useEffect(() => {
    // Submit handler function for the waitlist form
    const handleSubmit = function (e) {
      e.preventDefault(); // Prevent the default HTML form submission behavior (page reload)

      // Get values of input fields using jQuery selectors (corrected spacing)
      const name = $("input[name='name']").val().trim; 
      const email = $("input[name='email']").val().trim; 

      // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic validation
    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

      // Create a new FormData object to format the data like an HTML form
      const formData = new FormData();
      formData.append("name", name); // Add name to the form
      formData.append("email", email); // Add email to the form
      formData.append("_subject", "New ResQ-X Waitlist Signup!"); // Custom email subject

      // Send form data using fetch() to FormSubmit endpoint
      fetch("https://formsubmit.co/adebayotitilayo02@gmail.com", {
        method: "POST", // HTTP POST method means we are sending data
        body: formData, // We are sending FormData, not JSON
      })
        .then((res) => {
          if (res.ok) {
            // If submission is successful (status 200 OK)
            alert("Form submitted successfully!");
            $("#waitlistForm")[0].reset(); // Reset the form using jQuery
          } else {
            alert("Submission failed."); // If response is not OK
          }
        })
        .catch((err) => {
          // Catch any network errors or issues
          console.error("Error:", err);
          alert("Something went wrong.");
        });
    };

    // Attach the submit handler to the form
    $("#waitlistForm").on("submit", handleSubmit);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      $("#waitlistForm").off("submit", handleSubmit);
    };
  }, []); // Empty dependency array ensures this runs only once



    return(
        <>
            <div className="overflow-hidden">

                <div
                    style={{ backgroundColor: "#6D5E4E" }}
                    className="fixed text-white text-xl w-full sm:w-full md:w-full lg:w-full h-screen pt-16 "
                    >
                    <div className="flex justify-center">
                        <img
                        src={bus}
                        alt="Resqx fuel Tank"
                        className="w-full h-[calc(100vh-64px)] opacity-60  mask-gradient "
                        />
                    </div>
                </div>


                <div className="absolute inset-0" >
                    <div className="w-50 mt-5 mx-7">
                        <img src={logo} alt="Resqx logo " />
                    </div>

                

                    <div className="grid grid-cols-1  lg:grid-cols-2 m-7 font-['General Sans'] tracking-[0.01em] text-white gap-10 text-[18px]">
                        <div className="flex  flex-col sm:w:full md:w-[80%]  lg:w-full gap-5 m-0">
                            <div className="w-full">
                                <p
                                    className=" font-semibold text-[30px] leading-[100%]  "
                                >Fuel Delivered. Anytime, Anywhere.</p>
                            </div>

                            <div className="leading-[30px] w-full  ">
                                <p >
                                    Join the ResQ-X Waitlist 
                                </p>
                                <p className="w-[80%]">
                                    Skipthe fuel station. Get fuel delivered wherever you 
                                    are — instantly, later, or when it’s urgent.
                                </p>     
                            </div>

                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="flex items-center bg-[#FFFFFF12]  gap-3 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-[90%] hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
                                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.192 0.279976L0.231997 10.528C0.0639974 10.696 0.183998 10.96 0.399998 10.96H6.16C6.352 10.96 6.472 11.152 6.4 11.32L2.776 19.456C2.656 19.72 2.992 19.936 3.184 19.72L13.696 7.81598C13.84 7.64798 13.72 7.38398 13.504 7.38398H7.408C7.216 7.38398 7.096 7.19198 7.192 7.02398L10.576 0.567976C10.72 0.327976 10.384 0.087976 10.192 0.279976Z" fill="#FF8500"/>
                                    </svg>
                                    <div >
                                        <p>On-Demand Delivery</p>
                                        <p className="leading-[20px] text-[12px] font-normal">
                                            Fuel in Minutes
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center bg-[#FFFFFF12]  gap-3 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-[90%] hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 2.8999H18V1.8999C18 1.2999 17.6 0.899902 17 0.899902C16.4 0.899902 16 1.2999 16 1.8999V2.8999H8V1.8999C8 1.2999 7.6 0.899902 7 0.899902C6.4 0.899902 6 1.2999 6 1.8999V2.8999H5C3.3 2.8999 2 4.1999 2 5.8999V19.8999C2 21.5999 3.3 22.8999 5 22.8999H19C20.7 22.8999 22 21.5999 22 19.8999V5.8999C22 4.2999 20.7 2.8999 19 2.8999ZM7 18.8999C6.4 18.8999 6 18.4999 6 17.8999C6 17.2999 6.4 16.8999 7 16.8999C7.6 16.8999 8 17.2999 8 17.8999C8 18.4999 7.6 18.8999 7 18.8999ZM7 14.8999C6.4 14.8999 6 14.4999 6 13.8999C6 13.2999 6.4 12.8999 7 12.8999C7.6 12.8999 8 13.2999 8 13.8999C8 14.4999 7.6 14.8999 7 14.8999ZM12 18.8999C11.4 18.8999 11 18.4999 11 17.8999C11 17.2999 11.4 16.8999 12 16.8999C12.6 16.8999 13 17.2999 13 17.8999C13 18.4999 12.6 18.8999 12 18.8999ZM12 14.8999C11.4 14.8999 11 14.4999 11 13.8999C11 13.2999 11.4 12.8999 12 12.8999C12.6 12.8999 13 13.2999 13 13.8999C13 14.4999 12.6 14.8999 12 14.8999ZM17 18.8999C16.4 18.8999 16 18.4999 16 17.8999C16 17.2999 16.4 16.8999 17 16.8999C17.6 16.8999 18 17.2999 18 17.8999C18 18.4999 17.6 18.8999 17 18.8999ZM17 14.8999C16.4 14.8999 16 14.4999 16 13.8999C16 13.2999 16.4 12.8999 17 12.8999C17.6 12.8999 18 13.2999 18 13.8999C18 14.4999 17.6 14.8999 17 14.8999ZM20 8.8999H4V5.8999C4 5.2999 4.4 4.8999 5 4.8999H6V5.8999C6 6.4999 6.4 6.8999 7 6.8999C7.6 6.8999 8 6.4999 8 5.8999V4.8999H16V5.8999C16 6.4999 16.4 6.8999 17 6.8999C17.6 6.8999 18 6.4999 18 5.8999V4.8999H19C19.6 4.8999 20 5.2999 20 5.8999V8.8999Z" fill="#FF8500"/>
                                    </svg>

                                    <div >
                                        <p>Scheduled & Recurring</p>
                                        <p className="leading-[20px] text-[12px] font-normal">
                                            Plan ahead
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center bg-[#FFFFFF12]  gap-3 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-[90%] hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1703_56)">
                                        <path d="M15.375 13.875L17.4375 15.9375L15.9375 17.4375L13.875 15.375L15.375 13.875Z" fill="#FF8500"/>
                                        <path d="M17.8125 15.5625L23.25 21L21 23.25L15.5625 17.8125L17.8125 15.5625Z" fill="#B7946E"/>
                                        <path d="M9 17.25C13.5563 17.25 17.25 13.5563 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 13.5563 4.44365 17.25 9 17.25Z" fill="#B7946E"/>
                                        <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" fill="#FBBF80"/>
                                        <path d="M9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5 6.51472 11.4853 4.5 9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5Z" fill="#FF8500"/>
                                        <path d="M9.5625 8.625H8.4375C8.02387 8.625 7.6875 8.28863 7.6875 7.875C7.6875 7.46137 8.02387 7.125 8.4375 7.125H9.5625C9.97613 7.125 10.3125 7.46137 10.3125 7.875H11.0625C11.0625 7.04775 10.3898 6.375 9.5625 6.375H9.375V5.625H8.625V6.375H8.4375C7.61025 6.375 6.9375 7.04775 6.9375 7.875C6.9375 8.70225 7.61025 9.375 8.4375 9.375H9.5625C9.97613 9.375 10.3125 9.71137 10.3125 10.125C10.3125 10.5386 9.97613 10.875 9.5625 10.875H8.4375C8.02387 10.875 7.6875 10.5386 7.6875 10.125H6.9375C6.9375 10.9523 7.61025 11.625 8.4375 11.625H8.625V12.375H9.375V11.625H9.5625C10.3898 11.625 11.0625 10.9523 11.0625 10.125C11.0625 9.29775 10.3898 8.625 9.5625 8.625Z" fill="#B7946E"/>
                                        <path d="M13.2427 4.22705L13.773 4.75768L4.75687 13.7731L4.22662 13.2428L13.2427 4.22705Z" fill="#FFD6AA"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1703_56">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>


                                    <div >
                                        <p>No Hidden Charges </p>
                                        <p className="leading-[20px] text-[12px] font-normal">
                                            Transparent pricing
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center bg-[#FFFFFF12]  gap-3 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-[90%] hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1703_56)">
                                        <path d="M15.375 13.875L17.4375 15.9375L15.9375 17.4375L13.875 15.375L15.375 13.875Z" fill="#FF8500"/>
                                        <path d="M17.8125 15.5625L23.25 21L21 23.25L15.5625 17.8125L17.8125 15.5625Z" fill="#B7946E"/>
                                        <path d="M9 17.25C13.5563 17.25 17.25 13.5563 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 13.5563 4.44365 17.25 9 17.25Z" fill="#B7946E"/>
                                        <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" fill="#FBBF80"/>
                                        <path d="M9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5 6.51472 11.4853 4.5 9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5Z" fill="#FF8500"/>
                                        <path d="M9.5625 8.625H8.4375C8.02387 8.625 7.6875 8.28863 7.6875 7.875C7.6875 7.46137 8.02387 7.125 8.4375 7.125H9.5625C9.97613 7.125 10.3125 7.46137 10.3125 7.875H11.0625C11.0625 7.04775 10.3898 6.375 9.5625 6.375H9.375V5.625H8.625V6.375H8.4375C7.61025 6.375 6.9375 7.04775 6.9375 7.875C6.9375 8.70225 7.61025 9.375 8.4375 9.375H9.5625C9.97613 9.375 10.3125 9.71137 10.3125 10.125C10.3125 10.5386 9.97613 10.875 9.5625 10.875H8.4375C8.02387 10.875 7.6875 10.5386 7.6875 10.125H6.9375C6.9375 10.9523 7.61025 11.625 8.4375 11.625H8.625V12.375H9.375V11.625H9.5625C10.3898 11.625 11.0625 10.9523 11.0625 10.125C11.0625 9.29775 10.3898 8.625 9.5625 8.625Z" fill="#B7946E"/>
                                        <path d="M13.2427 4.22705L13.773 4.75768L4.75687 13.7731L4.22662 13.2428L13.2427 4.22705Z" fill="#FFD6AA"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1703_56">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <div >
                                        <p>Emergency Refills</p>
                                        <p className="leading-[20px] text-[12px] font-normal">
                                            Fast refills for urgent needs
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full gap-5">
                                <div>
                                    <p
                                        className=" font-semibold text-[30px] leading-[100%] w-[671px] "
                                        >Fueling Solutions For:
                                    </p>
                                </div>

                                <div className=" flex w-[80%] justify-between">
                                    <p
                                        className="border border-[#FF8500] bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg"
                                    >Everyday Drivers</p>

                                    <p
                                        className="border border-[#FF8500] bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg"
                                    >Busy Professionals</p>

                                    <p
                                        className="border border-[#FF8500] bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg"
                                    >Fleets and Business</p>
                                </div>
                            </div>
                        </div>



                        <div className="bg-white sm:w-full m-0 md:w-[80%] lg:w-[80%] rounded-4xl p-7 text-[#777777] flex flex-col items-center gap-5">
                            <div className="w-full flex flex-col items-center justify-center gap-3">
                                <p className="font-semibold text-[30px] leading-[100%] w-[90%] text-center">
                                    Be the first to fuel smarter with ResQ-X and get Early Access
                                </p>

                                <p className="w-[90%] text-center text-[18px] leading-[26px] tracking-[0.02em]">
                                    ResQ-X delivers fuel straight to your vehicle at home, at work, or on the road. Anytime you need it.
                                </p>
                            </div>

                            <form id="waitlistForm" className="w-[90%] flex flex-col items-center justify-center gap-3">
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Tell us your name " 
                                    className="border border-[#C6C6C6] w-full px-5 py-2 rounded-lg focus:outline-none focus:border-[#FF8500] transition duration-300" 
                                />

                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email address " 
                                    className="border border-[#C6C6C6] w-full px-5 py-2 rounded-lg focus:outline-none focus:border-[#FF8500] transition duration-300" 
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-[#FF8500] text-white text-sm py-2 border rounded-lg cursor-pointer"
                                >
                                    Join WaitList
                                </button>
                            </form>

                        </div>

                    </div>
                </div>
                
            </div>
        </>
    );
}

export default WaitList