const Menu = () => {

  const pizzas = [
    {
      name: "MARGHARITA (sos,ser)",
      small: 19.50,
      medium: 22.50,
      large: 36.00
    },
    {
      name: "GRECKA (sos, ser feta, szpinak, pomidor, oliwki czarne, czosnek, cebula)",
      small: 23.00,
      medium: 27.00,
      large: 44.00
    },
    {
      name: "SALAMI (sos, ser, salami)",
      small: 20.50,
      medium: 24.50,
      large: 38.50
    },
    {
      name: "TONNO CIPOLA (sos, ser, tuńczyk, cebula)",
      small: 21.00,
      medium: 26.50,
      large: 43.50
    },
    {
      name: "TRADIZIONALE (sos, ser, pieczarki, szynka, kukurydza)",
      small: 21.50,
      medium: 27.00,
      large: 43.00
    },
    {
      name: "CAPRESE (sos, plastry mozzarelli, pomidor, pesto bazyliowe, bazylia)",
      small: 23.50,
      medium: 28.50,
      large: 46.00
    },
    {
      name: "VEGETARIANA (sos, ser, pieczarki, papryka, cebula, kukurydza, oliwki czarne)",
      small: 22.50,
      medium: 27.50,
      large: 45.00
    },
    {
      name: "HAWAJSKA (sos, ser, szynka, ananas)",
      small: 21.50,
      medium: 27.00,
      large: 43.00
    },
    {
      name: "SICILIANA (sos, ser, salami, pieczarki, cebula, oliwki czarne)",
      small: 22.50,
      medium: 27.50,
      large: 45.00
    },
    {
      name: "QUATTRO FORMAGGI (sos, ser, mozzarella, gorgonzola, parmezan)",
      small: 23.50,
      medium: 28.50,
      large: 46.00
    },
    {
      name: "QUATTRO STAGIONI (sos, ser, szynka, pieczarki, karczochy, oliwki czarne)",
      small: 23.50,
      medium: 28.50,
      large: 46.00
    },
    {
      name: "MEXICANA (sos, ser, szynka, pieczarki, papryka, kukurydza, cebula, jalapeno)",
      small: 23.50,
      medium: 28.50,
      large: 46.00
    },
    {
      name: "POLLO (sos, ser, kurczak, pieczarki, cebula, kukurydza, papryka)",
      small: 23.50,
      medium: 28.50,
      large: 46.00
    },


  ];

  const burger = [
    {
      name: "Burger z wołowiną (sos, wołowina ,ser, sałata, pomidor, ogórek, cebula, bekon, frytki, sos)",
      portion: "200g",
      price: 19.50
    },
    {
      name: "Burger z kurczakiem ( kurczak, sałata, pomidor, ogórek, cebula, bekon, frytki, sos)",
      portion: "150g",
      price: 20.50
    },
    {
      name: "Burger z łososiem (łosoś, sałata, pomidor, ogórek, cebula, bekon, frytki, sos)",
      portion: "250g",
      price: 21.50
    },
    {
      name: "Burger wegetariański (ser, sałata, pomidor, ogórek, cebula, bekon, frytki, sos)",
      portion: "150g",
      price: 18.50
    },
    {
      name: "Burger na ostro (mięso, sos pir piri, ser, sałata, pomidor, ogórek, cebula, bekon, frytki, sos)🌶",
      portion: "150g",
      price: 18.50
    },
    {
      name: "Buldag Burger (mięso, sos buldag 3x spicy, ser, sałata, pomidor, ogórek, cebula, bekon, frytki, sos)🌶🌶🌶",
      portion: "450g",
      price: 58.50
    },
  ];

  const pasta = [
    {
      name: "Carbonara (makaron, boczek, śmietana, parmezan, cebula, czosnek)",
      portion: "300g",
      price: 19.50
    },
    {
      name: "Bolognese (makaron, mięso mielone, pomidor, cebula, czosnek, bazylia)",
      portion: "300g",
      price: 19.50
    },
    {
      name: "Arrabiata (makaron, pomidor, cebula, czosnek, bazylia, chilli)",
      portion: "300g",
      price: 19.50
    },
    {
      name: "Pesto (makaron, sos pesto, pomidor, cebula, czosnek, bazylia)",
      portion: "300g",
      price: 19.50
    },
  ];

  return (
    <>
      <h1 className="text-6xl text-red-700 font-bold italic max-md:mt-2 mb-5 text-center">Menu</h1>
      <div className="flex text-white justify-center">
        <div>
          <table className="max-md:text-xs">
            <tr className="border-2 w-48"><td className="w-96 p-2">Pizza</td><td className="border-2 w-48 p-2">Mała 28cm</td><td className="border-2 w-48 ">Średnia 32cm</td><td className="border-2 w-48">Duża 45cm</td></tr>
            {pizzas.map((pizza) => (
              <tr className="p-2 border-b border-b-red-600 border-dashed"><td className="w-96">{pizza.name}</td><td>{pizza.small.toFixed(2)} zł</td><td>{pizza.medium.toFixed(2)} zł</td><td>{pizza.large.toFixed(2)} zł</td></tr>
            ))}
          </table>
          <table className="mt-6 max-md:text-xs">
            <tr className="border-2 w-48"><td className="w-96 p-2">Burgery</td><td className="border-2 w-48 p-2">Porcja</td><td className="border-2 w-96 p-2">Cena</td></tr>
            {burger.map((burger) => (
              <tr className="p-2 border-b border-b-red-600 border-dashed"><td className="w-96">{burger.name}</td><td>{burger.portion}</td><td>{burger.price.toFixed(2)} zł</td></tr>
            ))}
          </table>
          <table className="mt-6 max-md:text-xs">
            <tr className="border-2 w-48"><td className="w-96 p-2">Makarony</td><td className="border-2 w-48 p-2">Porcja</td><td className="border-2 w-96 p-2">Cena</td></tr>
            {pasta.map((pasta) => (
              <tr className="p-2 border-b border-b-red-600 border-dashed"><td className="w-96">{pasta.name}</td><td>{pasta.portion}</td><td>{pasta.price.toFixed(2)} zł</td></tr>
            ))}
          </table>
        </div>
      </div>
    </>
  )
};

export default Menu;