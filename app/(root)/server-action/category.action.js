// "use server";

// import { connect_db } from "@/database/config/mongoose";
// import { Category } from "@/database/models/category/category.schema";

// export const getCategories = async () => {
//   "use cache";
//   await connect_db();

//   const categories = await Category.find();

//   if (categories) {
//     return {
//       message: "Find cateogories successfully",
//       data: JSON.parse(JSON.stringify(categories)),
//     };
//   } else {
//     return {
//       message: "category is empty",
//     };
//   }
// };
