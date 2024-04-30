import data from "./faq.json";
import Faq from "./Faq";

const Faqs = () => {
  console.log("data", data);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Faqs</h1>
      {data.map((faq) => (
        <Faq key={faq.id} {...faq} />
      ))}
    </div>
  );
};

export default Faqs;
