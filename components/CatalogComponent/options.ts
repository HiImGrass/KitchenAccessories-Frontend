export interface FilterOption {
  name: string;
  value: string;
  type: string;
}

export const categoryOptions: FilterOption[] = [
  { name: "Tất cả danh mục", value: "", type: "category" },
  { name: "Làm đẹp (Beauty)", value: "beauty", type: "category" },
  { name: "Nước hoa (Fragrances)", value: "fragrances", type: "category" },
  { name: "Nội thất (Furniture)", value: "furniture", type: "category" },
  { name: "Thực phẩm (Groceries)", value: "groceries", type: "category" },
  { name: "Trang trí nhà cửa", value: "home-decoration", type: "category" },
  { name: "Dụng cụ bếp", value: "kitchen-accessories", type: "category" },
  { name: "Điện thoại thông minh", value: "smartphones", type: "category" },
  { name: "Máy tính xách tay", value: "laptops", type: "category" },
  { name: "Đồng hồ nữ", value: "womens-watches", type: "category" },
  { name: "Túi xách nữ", value: "womens-bags", type: "category" },
];

export const sortbyOptions: FilterOption[] = [
  { name: "Nổi bật / Mặc định", value: "", type: "sort" },
  { name: "Giá: Thấp đến Cao", value: "price_asc", type: "sort" },
  { name: "Giá: Cao đến Thấp", value: "price_desc", type: "sort" },
  { name: "Đánh giá cao nhất", value: "rating_desc", type: "sort" },
  { name: "Đánh giá thấp nhất", value: "rating_asc", type: "sort" },
  { name: "Tên A → Z", value: "title_asc", type: "sort" },
  { name: "Tên Z → A", value: "title_desc", type: "sort" },
];