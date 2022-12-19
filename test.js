const data = [
  {
    amazoncojp: {
      webpage: "amazon.co.jp",
      title: "switchcojp",
      url: "outlined.com",
      assosiate_url: "outlinedasso.com",
      price: "30000",
      extra_fee: "1000",
      scheduled_year: "2022",
      scheduled_month: "12",
      scheduled_day: "15",
    },
    amazoncom: {
      webpage: "amazon.com",
      title: "switchcom",
      url: "outlined.com",
      assosiate_url: "outlinedasso.com",
      price: "35000",
      extra_fee: "1000",
      scheduled_year: "2022",
      scheduled_month: "12",
      scheduled_day: "18",
    },
    amazones: {
      webpage: "amazon.es",
      title: "switches",
      url: "outlined.es",
      assosiate_url: "outlinedasso.es",
      price: "36000",
      extra_fee: "1000",
      scheduled_year: "2022",
      scheduled_month: "12",
      scheduled_day: "22",
    },
  },
  {
    amazoncojp: {
      webpage: "amazon.co.jp",
      title: "switchprocojp",
      url: "outlined.com",
      assosiate_url: "outlinedasso.com",
      price: "20000",
      extra_fee: "1000",
      scheduled_year: "2022",
      scheduled_month: "12",
      scheduled_day: "10",
    },
    amazoncom: {
      webpage: "amazon.com",
      title: "switchprocom",
      url: "outlined.com",
      assosiate_url: "outlinedasso.com",
      price: "25000",
      extra_fee: "1000",
      scheduled_year: "2022",
      scheduled_month: "12",
      scheduled_day: "15",
    },
    amazones: {
      webpage: "amazon.es",
      title: "switchproes",
      url: "outlined.es",
      assosiate_url: "outlinedasso.es",
      price: "30000",
      extra_fee: "1000",
      scheduled_year: "2022",
      scheduled_month: "12",
      scheduled_day: "20",
    },
  },
];
var sortedByPrice: [] = [];
const sortByPrice = data.map((dataObject) => {
  // let sorted = {};
  // const sorted = Object.values(dataObject).sort(
  //   (a, b) => Number(a.price) - Number(b.price)
  // );
  // let sortable: {} = {};
  let sorted = Object.fromEntries(
    Object.entries(dataObject).sort(
      ([, a], [, b]) => Number(a.price) - Number(b.price)
    )
  );
  sortedByPrice.push(sorted);
  console.log(sortedByPrice);
  console.log(data);
});
