import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section className="min-h-screen py-10 grid place-items-center bg-[#edf2f8]">
        <div className="container mx-auto">
          <h1 className="head_text text-center mb-10">
            Take A Coffee & Chat With Me
          </h1>
          <div className="flex items-center md:flex-row flex-col md:gap-10 gap-6 justify-center ">
            <div className="flex items-center md:p-5 p-3  gap-5 rounded-xl bg-[#fef4f5] shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl cursor-pointer max-md:w-full">
              <div className="relative w-12 h-12">
                <Image src="/email.png" alt="email logo" fill />
              </div>
              <div>skhan282290@gmail.com</div>
            </div>
            <div className="flex items-center md:p-5 p-3 gap-5 rounded-xl bg-white shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl cursor-pointer max-md:w-full">
              <div className="relative w-12 h-12">
                <Image src="/mobile.png" alt="email logo" fill />
              </div>
              <div>+91 9760989370</div>
            </div>
          </div>
          <div className="grid place-items-center mt-10">
            <div className="max-w-xl  w-full">
              <form className="flex flex-col gap-8 w-full ">
                <input
                  type="text"
                  placeholder="Name"
                  className="py-2 px-4 outline-[#313bac] text-lg rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-4 outline-[#313bac] text-lg rounded-lg"
                />
                <textarea
                  name=""
                  placeholder="Message"
                  rows="3"
                  className="py-2 px-4 outline-[#313bac] text-lg rounded-lg"
                ></textarea>
                <button className="py-2 px-4 bg-[#313bac] text-lg rounded-lg text-white hover:bg-[#434db6]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
