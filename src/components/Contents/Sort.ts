const SortByPrice = (data: any) => {
  const priceBeforeSort = {};
  for (const [key, value] of Object.entries(data)) {
    // for (let value of data) {
    console.log(key);
    let cost = {};
    try {
      cost.jp = Number(value.price_jp) + Number(value.extra_fee_jp);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.com = Number(value.price_com) + Number(value.extra_fee_com);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.uk = Number(value.price_uk) + Number(value.extra_fee_uk);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.fr = Number(value.price_fr) + Number(value.extra_fee_fr);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.es = Number(value.price_es) + Number(value.extra_fee_es);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.it = Number(value.price_it) + Number(value.extra_fee_it);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.de = Number(value.price_de) + Number(value.extra_fee_de);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.yodo =
        Number(value.price_yodobashi) + Number(value.extra_fee_yodobashi);
    } catch (error) {
      console.error(error);
    }
    // Object.keys(cost).sort((a, b) => a - b);
    const sortedCost = Object.fromEntries(
      Object.entries(cost).sort(([, a], [, b]) => a - b)
    );
    console.log(sortedCost);
  }
};

export default SortByPrice;
