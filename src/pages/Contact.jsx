import React from "react";
const Contact = () => {
  const contact = [
    {
      id: 1,
      name: "NR.TEL",
      value: "123 456 789"
    },
    {
      id: 2,
      name: "ADRES",
      value: "ul. Przykładowa 1/2, 00-000 Warszawa"
    },
    {
      id: 3,
      name: "EMAIL",
      value: "przyklad@gmail.com"
    },

  ];

  return (
    <>
      <div className=" grid grid-row-2 md:grid-cols-2 text-white ">
        <div className="border">
          {contact.map((item) => (
            <div key={item.id} className="md:pt-16">
              <p className="text-xl md:text-2xl">{item.name} :</p><p className="md:text-xl"> {item.value}</p>
            </div>
          ))}
        </div>
        <div>
          <img src="/img/mapa.png" alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Contact;