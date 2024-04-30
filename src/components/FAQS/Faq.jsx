import React, { useState } from "react";

import style from "./faq.module.css";

const Faq = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className={style.section}>
      <h4 className={style.title}>{title}</h4>
      {toggle && <p>{desc}</p>}
      <button className={style.btn} onClick={() => setToggle(!toggle)}>
        {toggle ? "-" : "+"}
      </button>
    </section>
  );
};

export default Faq;
