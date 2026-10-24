export interface FilterOption {
  name: string;
  value: string;
  type: string;
}

export const sortbyOptions: FilterOption[] = [
  { name: "Featured", value: "", type: "sort" },
  { name: "Price: Low to High", value: "price_asc", type: "sort" },
  { name: "Price: High to Low", value: "price_desc", type: "sort" },
  { name: "Highest Rated", value: "rating_desc", type: "sort" },
  { name: "Lowest Rated", value: "rating_asc", type: "sort" },
  { name: "Name: A to Z", value: "title_asc", type: "sort" },
  { name: "Name: Z to A", value: "title_desc", type: "sort" },
];
