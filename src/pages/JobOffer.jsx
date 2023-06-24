

const JobOffer = () => {




  return (
    <div className="grid sm:grid-cols-2 items-center justify-center  py-5 px-2 gap-5">
      <div className="text-white flex flex-col items-center">
        <input type="text" name="Imie" placeholder="Imię" id="name" className="rounded-2xl text-white px-2 border-2 md:text-lg border-solid border-red-700 md:border-4 bg-white bg-opacity-65 w-full  md:w-1/2" />
        <br />
        <input type="text" placeholder="Nazwisko" name="Nazwisko" id="lastName" className="rounded-2xl text-white px-2 border-2 md:text-lg border-solid border-red-700 md:border-4 bg-white bg-opacity-65 w-full md:w-1/2" />
        <br />
        <input type="tel" placeholder="Telefon Kontaktowy" name="telefon" id="" className="rounded-2xl text-white px-2 border-2 md:text-lg border-solid border-red-700 md:border-4 bg-white bg-opacity-65 w-full md:w-1/2" />
        <br />
        <textarea name="Nazwisko" placeholder="Napisz coś o sobie" id="2" className="rounded-2xl text-white px-2 border-2 md:text-xl border-solid border-red-700 md:border-4 bg-white bg-opacity-65 textarea w-full h-32 md:w-1/2" />
        <br />
        <p className="text-sm md:text-xl">ZAŁĄCZ CV:</p>
        <input type="file" name="cv" id="upload" hidden className="text-white border-2 text-xs md:text-sm border-solid border-red-700 md:border-4 bg-white bg-opacity-65 rounded-full  w-full md:w-1/2" />
        <label for="upload" className="rounded-full text-white border-2 mt-4 text-xs md:text-sm border-solid border-red-700 md:border-4 bg-red-700 cursor-pointer bg-opacity65 px-10 py-3  md:w-1/2">Załącz plik</label>

        <input type="submit" value={'Wyślij'} className="rounded-full text-white border-2 mt-4 text-xs md:text-sm border-solid border-red-700 md:border-4 bg-red-700 cursor-pointer bg-opacity65 px-10 py-3  md:w-1/2" />


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