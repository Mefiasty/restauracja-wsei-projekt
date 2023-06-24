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
        <div className="flex flex-col p-6">
          {contact.map((item) => (
            <div key={item.id} className="md:flex md:flex-col">
              <p className="text-xl md:text-2xl">{item.name} :</p><p> {item.value}</p>
            </div>
          ))}
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3409712388943!2d21.02922304240699!3d52.23719012158728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc59d9e8ed0f%3A0x859c4b3f0909639c!2sDobra%208%2C%2000-388%20Warszawa!5e0!3m2!1spl!2spl!4v1687637925013!5m2!1spl!2spl" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-full p-10 md:p-6"></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;