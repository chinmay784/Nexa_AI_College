import React from "react";

function ContactForm() {
  return (
    <div id="contact">
      <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent text-start ml-10 mt-[100px] bg-gradient-to-b from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-100 lg:text-[80px] font-bold inter-var">
        Let's Talk
      </h1>
      <div class=" font-[sans-serif] p-4 mt-[50px]">
        <div class=" contact1 max-w-6xl mx-auto relative  shadow-[0_2px_10px_-3px_rgba(186,186,186,0.7)] rounded-3xl overflow-hidden">
          <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-400"></div>
          <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400"></div>

          <div class="grid md:grid-cols-2 gap-8 py-8 px-6">
            <div class="text-center flex flex-col items-center justify-center">
              <img
                src="https://readymadeui.com/signin-image.webp"
                class="shrink-0 aspect-[250/196] object-contain"
              />
            </div>

            <form class="rounded-tl-3xl rounded-bl-xl max-md:-order-1">
              <div class="max-w-md mx-auto space-y-3 relative">
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-100 focus:border-blue-600 focus:bg-gray transition-all
                  
                  
                  "
                />
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-100 focus:border-blue-600 focus:bg-white transition-all"
                />
                <input
                  type="email"
                  placeholder="Phone No."
                  class="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-100 focus:border-blue-600 focus:bg-white transition-all"
                />
                <textarea
                  placeholder="Message"
                  rows="6"
                  class="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-none border border-gray-100 focus:border-blue-600 focus:bg-white transition-all"
                ></textarea>

                <button
                  type="button"
                  class=" animate-bounce text-white w-full relative bg-pink-600 hover:bg-pink-600 rounded-md text-sm px-6 py-3 !mt-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    class="mr-2 inline"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clip-rule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
