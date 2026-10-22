export interface FilterOption {
  name: string;
  value: string;
  type: string;
}

export const sortbyOptions: FilterOption[] = [
  { name: "Nổi bật / Mặc định", value: "", type: "sort" },
  { name: "Giá: Thấp đến Cao", value: "price_asc", type: "sort" },
  { name: "Giá: Cao đến Thấp", value: "price_desc", type: "sort" },
  { name: "Đánh giá cao nhất", value: "rating_desc", type: "sort" },
  { name: "Đánh giá thấp nhất", value: "rating_asc", type: "sort" },
  { name: "Tên A → Z", value: "title_asc", type: "sort" },
  { name: "Tên Z → A", value: "title_desc", type: "sort" },
];
