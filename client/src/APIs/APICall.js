import { client } from "./APIConfiguration";

// *************************** SANITY APIs *********************************

// Getting All Testimonials from sanity backend
export const getAllTestimonials = async () => {
  const query = '*[_type == "testimonials"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error fetching testimonials: ", error);
    return { error: "Failed to fetch testimonials" };
  }
};

// *************************************************************************
