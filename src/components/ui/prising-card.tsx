type PrisingCardProps = {
  id: number;
  name: string;
  tag?: string;
  text: string;
  price: number;
  perks: string[];
};

function PrisingCard({ id, name, tag, text, price, perks }: PrisingCardProps) {
  return (
    <div className="group w-full md:w-1/3 p-6 rounded-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      {!tag ? (
        <h2 className="text-xl font-bold pt-3 pb-6">{name}</h2>
      ) : (
        <span className="text-lg font-bold flex justify-center gap-14 pt-3 pb-6">
          <span className="text-xl font-bold ">{name}</span>
          <span className="text-sm font-bold  text-green bg-bgGreen p-1 rounded-md">
            {tag}
          </span>
        </span>
      )}
      <p className="pb-7">{text}</p>
      <p className="pb-6">
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-gray-custom-200">/month</span>
      </p>
      <h2 className="text-white text-xl  font-semibold mb-2 group-hover:text-black"></h2>
      <button className=" w-full mx-auto bg-white text-black font-bold py-3 px-8 border border-gray rounded-lg hover:text-white hover:bg-accent">
        Try for Free
      </button>
      <p className="text-gray-custom-200 text-sm text-center pt-3">
        Free 14-day trial. No credit card required
      </p>
      <hr className="my-4 border-gray mt-8" />
      <div className="max-w-md mx-auto p-8 -mt-4">
        <ul className="list-disc space-y-2">
          {perks.map((item, index) => (
            <li key={index} className="flex items-center">
              <span
                className={`text-green mr-2 ${
                  name === "Starter" && index >= 5 ? "opacity-50" : ""
                } ${name === "Professional" && index >= 8 ? "opacity-50" : ""}`}
              >
                &#10003;
              </span>
              <span
                className={`text-left text-l ${
                  name === "Starter" && index >= 6
                    ? "opacity-50 line-through"
                    : ""
                } ${
                  name === "Professional" && index >= 8
                    ? "opacity-50 line-through"
                    : ""
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PrisingCard;
