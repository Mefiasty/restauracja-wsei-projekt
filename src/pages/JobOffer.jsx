const JobOffer = () => {


  return (
    <div className="grid sm:grid-cols-2 items-center justify-center bg-slate-300 bg-opacity-10 py-5 px-2 gap-5">
      <div className="text-white">
        <p className="text-sm md:text-xl">IMIĘ:</p>
        <input type="text" name="Imie" id="name" className="text-white px-2 border-2 md:text-xl border-solid border-pink-700 md:border-2 bg-white bg-opacity-25 w-full" />
        <br />
        <p className="text-sm md:text-xl">NAZWISKO:</p>
        <input type="text" name="Nazwisko" id="lastName" className="text-white px-2 border-2 md:text-xl border-solid border-pink-700 md:border-2 bg-white bg-opacity-25 w-full" />
        <br />
        <p className="text-sm md:text-xl">TELEFON KONTAKTOWY:</p>
        <input type="tel" name="telefon" id="" className="text-white px-2 border-2 md:text-xl border-solid border-pink-700 md:border-2 bg-white bg-opacity-25 w-full" />
        <br />
        <p className="text-sm md:text-xl">NAPISZ COŚ O SOBIE:</p>
        <textarea name="Nazwisko" id="2" className="text-zinc-950 px-2 border-2 md:text-lg border-solid border-pink-700 md:border-2 bg-white bg-opacity-25 textarea w-full h-32" />
        <br />
        <p className="text-sm md:text-xl">WYŚLIJ CV:</p>
        <input type="file" name="cv" id="" className="text-white border-2 text-xs md:text-sm border-solid border-pink-700 md:border-2 bg-white bg-opacity-25  w-full" />

        <input type="submit" value={'Wyślij'} className="text-white border-2 mt-4 text-xs md:text-sm border-solid border-pink-700 md:border-2 bg-white bg-opacity-25 px-10 py-3 " />
      </div>

      <div className="text-white">
        <div>
          <img src="/img/cv.svg" alt="" srcset="" className="" />
        </div>
      </div>
    </div >

  );
};

export default JobOffer;