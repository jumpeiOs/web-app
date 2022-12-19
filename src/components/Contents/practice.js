const searchedData = [
  {
    img_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPjllb8RKmrEHo2LE0JXBkzToaPuJOhRKxY_0ceylsmfbJBC2lURTq4tfq41IDWiNFRQ&usqp=CAU",
    category: "VideoGames",
    brand: "任天堂 Nintendo",
    title_jp:
      "Nintendo Switch(有機ELモデル) Joy-Con(L) ネオンブルー/(R) ネオンレッド",
    asin_jp: "B098B79SJL",
    url_jp:
      "https://www.amazon.co.jp/-/en/Nintendo-Switch-%E6%9C%89%E6%A9%9FEL%E3%83%A2%E3%83%87%E3%83%AB-%E3%83%8D%E3%82%AA%E3%83%B3%E3%83%96%E3%83%AB%E3%83%BC-%E3%83%8D%E3%82%AA%E3%83%B3%E3%83%AC%E3%83%83%E3%83%89/dp/B098B79SJL/ref=sr_1_2?keywords=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81&qid=1668648944&qu=eyJxc2MiOiI0LjgxIiwicXNhIjoiNC40MSIsInFzcCI6IjMuODkifQ%3D%3D&s=videogames&sr=1-2",
    url_associate_jp: "",
    title_com: "Nintendo Switch – OLED Model w/ Neon Red & Neon Blue Joy-Con",
    asin_com: "B098RL6SBJ",
    url_com:
      "https://www.amazon.com/Nintendo-Switch-OLED-Model-Neon-Joy/dp/B098RL6SBJ/ref=sr_1_2?keywords=Nintendo+Switch&qid=1668648998&sr=8-2",
    url_associate_: "",
    title_uk: "Nintendo Switch (OLED Model) - Neon Blue/Neon Red",
    asin_uk: "B098TNW7NM",
    url_uk:
      "https://www.amazon.co.uk/Nintendo-Switch-OLED-Model-Neon/dp/B098TNW7NM/ref=sr_1_3?crid=36ZL6RK5H7P1&keywords=Nintendo+Switch&qid=1668648970&sprefix=nintendo+switch%2Caps%2C307&sr=8-3",
    url_associate_uk: "",
    title_es:
      "Consola Nintendo Switch (modelo OLED) : Nueva versi�n, colores intensos, pantalla de 7 pulgadas - con un Joy-Con ne�n",
    asin_es: "B098BYN3X3",
    url_es:
      "https://www.amazon.es/Nintendo-Switch-versi%C3%B3n-OLED-Azul/dp/B098BYN3X3/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=Nintendo+Switch&qid=1668648986&qu=eyJxc2MiOiI1LjMzIiwicXNhIjoiNS43MyIsInFzcCI6IjUuMjEifQ%3D%3D&s=videogames&sr=1-1",
    url_associate_es: "",
    title_fr:
      "Console Nintendo Switch (Modèle OLED) avec Manettes Joy-Con Bleu Néon/Rouge Néon",
    asin_fr: "B098BYN3X3",
    url_fr:
      "https://www.amazon.fr/Console-Nintendo-Switch-Mod%C3%A8le-Manettes/dp/B098BYN3X3/ref=sr_1_7?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29CDRD5MGFKS6&keywords=Nintendo+Switch&qid=1668649004&qu=eyJxc2MiOiI0LjE4IiwicXNhIjoiMy43NyIsInFzcCI6IjMuMzYifQ%3D%3D&s=videogames&sprefix=nintendo+switch%2Cvideogames%2C320&sr=1-7",
    url_associate_fr: "",
  },
  {
    img_path:
      "https://encrypted-tbn0.gstatic.codata:image/jpeg;base64,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?q=tbn:ANd9GcTKPjllb8RKmrEHo2LE0JXBkzToaPuJOhRKxY_0ceylsmfbJBC2lURTq4tfq41IDWiNFRQ&usqp=CAU",
    category: "VideoGames",
    brand: "任天堂 Nintendo",
    title_jp:
      "Nintendo Switch(有機ELモデル) Joy-Con(L) ネオンブルー/(R) ネオンレッド",
    asin_jp: "B0FE349SJL",
    url_jp:
      "https://www.amazon.co.jp/-/en/Nintendo-Switch-%E6%9C%89%E6%A9%9FEL%E3%83%A2%E3%83%87%E3%83%AB-%E3%83%8D%E3%82%AA%E3%83%B3%E3%83%96%E3%83%AB%E3%83%BC-%E3%83%8D%E3%82%AA%E3%83%B3%E3%83%AC%E3%83%83%E3%83%89/dp/B098B79SJL/ref=sr_1_2?keywords=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81&qid=1668648944&qu=eyJxc2MiOiI0LjgxIiwicXNhIjoiNC40MSIsInFzcCI6IjMuODkifQ%3D%3D&s=videogames&sr=1-2",
    url_associate_jp: "",
    title_com: "Nintendo Switch – OLED Model w/ Neon Red & Neon Blue Joy-Con",
    asin_com: "B098RL6SBJ",
    url_com:
      "https://www.amazon.com/Nintendo-Switch-OLED-Model-Neon-Joy/dp/B098RL6SBJ/ref=sr_1_2?keywords=Nintendo+Switch&qid=1668648998&sr=8-2",
    url_associate_: "",
    title_uk: "Nintendo Switch (OLED Model) - Neon Blue/Neon Red",
    asin_uk: "B098TNW7NM",
    url_uk:
      "https://www.amazon.co.uk/Nintendo-Switch-OLED-Model-Neon/dp/B098TNW7NM/ref=sr_1_3?crid=36ZL6RK5H7P1&keywords=Nintendo+Switch&qid=1668648970&sprefix=nintendo+switch%2Caps%2C307&sr=8-3",
    url_associate_uk: "",
    title_es:
      "Consola Nintendo Switch (modelo OLED) : Nueva versi�n, colores intensos, pantalla de 7 pulgadas - con un Joy-Con ne�n",
    asin_es: "B098BYN3X3",
    url_es:
      "https://www.amazon.es/Nintendo-Switch-versi%C3%B3n-OLED-Azul/dp/B098BYN3X3/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=Nintendo+Switch&qid=1668648986&qu=eyJxc2MiOiI1LjMzIiwicXNhIjoiNS43MyIsInFzcCI6IjUuMjEifQ%3D%3D&s=videogames&sr=1-1",
    url_associate_es: "",
    title_fr:
      "Console Nintendo Switch (Modèle OLED) avec Manettes Joy-Con Bleu Néon/Rouge Néon",
    asin_fr: "B098BYN3X3",
    url_fr:
      "https://www.amazon.fr/Console-Nintendo-Switch-Mod%C3%A8le-Manettes/dp/B098BYN3X3/ref=sr_1_7?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29CDRD5MGFKS6&keywords=Nintendo+Switch&qid=1668649004&qu=eyJxc2MiOiI0LjE4IiwicXNhIjoiMy43NyIsInFzcCI6IjMuMzYifQ%3D%3D&s=videogames&sprefix=nintendo+switch%2Cvideogames%2C320&sr=1-7",
    url_associate_fr: "",
  },
  {
    img_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxq28YST6YioK-g6cRWwWRWCJ3KWc_BaDdQ&usqp=CAU",
    category: "VideoGames",
    brand: "任天堂 Nintendo",
    title_jp:
      "Nintendo Switch(有機ELモデル) Joy-Con(L) ネオンブルー/(R) ネオンレッド",
    asin_jp: "B0FE3I8D3L",
    url_jp:
      "https://www.amazon.co.jp/-/en/Nintendo-Switch-%E6%9C%89%E6%A9%9FEL%E3%83%A2%E3%83%87%E3%83%AB-%E3%83%8D%E3%82%AA%E3%83%B3%E3%83%96%E3%83%AB%E3%83%BC-%E3%83%8D%E3%82%AA%E3%83%B3%E3%83%AC%E3%83%83%E3%83%89/dp/B098B79SJL/ref=sr_1_2?keywords=%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BC%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81&qid=1668648944&qu=eyJxc2MiOiI0LjgxIiwicXNhIjoiNC40MSIsInFzcCI6IjMuODkifQ%3D%3D&s=videogames&sr=1-2",
    url_associate_jp: "",
    title_com: "Nintendo Switch – OLED Model w/ Neon Red & Neon Blue Joy-Con",
    asin_com: "B098RL6SBJ",
    url_com:
      "https://www.amazon.com/Nintendo-Switch-OLED-Model-Neon-Joy/dp/B098RL6SBJ/ref=sr_1_2?keywords=Nintendo+Switch&qid=1668648998&sr=8-2",
    url_associate_com: "",
    title_uk: "Nintendo Switch (OLED Model) - Neon Blue/Neon Red",
    asin_uk: "B098TNW7NM",
    url_uk:
      "https://www.amazon.co.uk/Nintendo-Switch-OLED-Model-Neon/dp/B098TNW7NM/ref=sr_1_3?crid=36ZL6RK5H7P1&keywords=Nintendo+Switch&qid=1668648970&sprefix=nintendo+switch%2Caps%2C307&sr=8-3",
    url_associate_uk: "",
    title_es:
      "Consola Nintendo Switch (modelo OLED) : Nueva versi�n, colores intensos, pantalla de 7 pulgadas - con un Joy-Con ne�n",
    asin_es: "B098BYN3X3",
    url_es:
      "https://www.amazon.es/Nintendo-Switch-versi%C3%B3n-OLED-Azul/dp/B098BYN3X3/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=Nintendo+Switch&qid=1668648986&qu=eyJxc2MiOiI1LjMzIiwicXNhIjoiNS43MyIsInFzcCI6IjUuMjEifQ%3D%3D&s=videogames&sr=1-1",
    url_associate_es: "",
    title_fr:
      "Console Nintendo Switch (Modèle OLED) avec Manettes Joy-Con Bleu Néon/Rouge Néon",
    asin_fr: "B098BYN3X3",
    url_fr:
      "https://www.amazon.fr/Console-Nintendo-Switch-Mod%C3%A8le-Manettes/dp/B098BYN3X3/ref=sr_1_7?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29CDRD5MGFKS6&keywords=Nintendo+Switch&qid=1668649004&qu=eyJxc2MiOiI0LjE4IiwicXNhIjoiMy43NyIsInFzcCI6IjMuMzYifQ%3D%3D&s=videogames&sprefix=nintendo+switch%2Cvideogames%2C320&sr=1-7",
    url_associate_fr: "",
  },
];

const priceBeforeSort = {};
for (let value of searchedData) {
  console.log("a");
  try {
    priceBeforeSort.jp =
      Number(data[value.asin_jp].price_jp) +
      Number(data[value.asin_jp].extra_fee_jp);
  } catch (error) {
    console.error(error);
  }
  try {
    priceBeforeSort.com =
      Number(data.value.asin_jp.price_com) +
      Number(data.value.asin_jp.extra_fee_com);
  } catch (error) {
    console.error(error);
  }
  try {
    priceBeforeSort.uk =
      Number(data.value.asin_jp.price_uk) +
      Number(data.value.asin_jp.extra_fee_uk);
  } catch (error) {
    console.error(error);
  }
  try {
    priceBeforeSort.fr =
      Number(data.value.asin_jp.price_fr) +
      Number(data.value.asin_jp.extra_fee_fr);
  } catch (error) {
    console.error(error);
  }
  try {
    priceBeforeSort.es =
      Number(data.value.asin_jp.price_es) +
      Number(data.value.asin_jp.extra_fee_es);
  } catch (error) {
    console.error(error);
  }
  try {
    priceBeforeSort.it =
      Number(data.value.asin_jp.price_it) +
      Number(data.value.asin_jp.extra_fee_it);
  } catch (error) {
    console.error(error);
  }
  try {
    priceBeforeSort.de =
      Number(data.value.asin_jp.price_de) +
      Number(data.value.asin_jp.extra_fee_de);
  } catch (error) {
    console.error(error);
  }
  try {
    priceBeforeSort.yodo =
      Number(data.value.asin_jp.price_yodobashi) +
      Number(data.value.asin_jp.extra_fee_yodobashi);
  } catch (error) {
    console.error(error);
  }
}

console.log(priceBeforeSort);
