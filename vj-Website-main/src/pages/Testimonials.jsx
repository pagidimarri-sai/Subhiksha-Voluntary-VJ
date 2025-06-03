import testimonials from "../data/testimonial.js";
import Reveal from "../components/Reveal.jsx";

export default function Testimonials() {
  return (
    <div className="w-full lg:w-[85%] mx-auto mt-[4.5rem] flex flex-col gap-8 p-8 mb-10">
      <h2 className="text-center text-4xl sm:text-5xl font-semibold">
        Testimonials
      </h2>
      {testimonials.map((t, index) => {
        return (
          <div key={index}>
            {index === 0 && (
              <h2 className="text-xl sm:text-2xl underline mb-6 pl-2 ">
                What our faculty coordinators say..
              </h2>
            )}
            {index === 3 && (
              <h2 className="text-xl sm:text-2xl underline mb-6 pl-2">
                What our alumni say..
              </h2>
            )}
            <Reveal>
              <div
                className={`p-4 md:p-12 flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 rounded-xl bg-[#1e4b5b] shadow-md hover:shadow-[16px_16px_20px] hover:shadow-black/80  transition-all duration-300 ease-in-out`}
              >
                <div className="w-full flex flex-col justify-center items-center text-center">
                  <img
                    src={t.image}
                    alt=""
                    className="w-[200px] h-[200px] !min-w-[200px] !min-h-[200px] border border-white rounded-full"
                  />
                </div>
                <div className="border-white border p-4 rounded-lg">
                  <p
                    className={
                      index >= 3
                        ? "px-1 overflow-y-scroll overflow-x-hidden text-white h-[10rem]"
                        : "text-white"
                    }
                  >
                    {t.statement}
                  </p>
                  <p className="text-white text-right mt-1 italic">
                    - {t.name} ({t.role})
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
