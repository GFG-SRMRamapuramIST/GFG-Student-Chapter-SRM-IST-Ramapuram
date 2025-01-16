import { client } from "./APIConfiguration";

// *************************** SANITY APIs *********************************

// Fetching all Testimonials from Sanity backend
export const getAllTestimonials = async () => {
  const query = '*[_type == "testimonials"]';
  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error("Error fetching testimonials: ", error);
    return {
      error:
        "Failed to fetch testimonials. Please check the logs for more details.",
    };
  }
};

// Fetching all Footer Courses from Sanity backend
export const getAllFootercourses = async () => {
  const query = '*[_type == "footercourses"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching courses: ", error);
    return {
      error: "Failed to fetch courses. Please check the logs for more details.",
    };
  }
};

// Fetching all Alumni Companies from Sanity backend
export const getAllAlumniCompanies = async () => {
  const query = '*[_type == "alumaniCompany"]';
  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error("Error fetching alumni companies: ", error);
    return {
      error:
        "Failed to fetch alumni companies. Please check the logs for more details.",
    };
  }
};

// Fetching all Blogs from Sanity backend (ordered by date)
export const getAllBlogs = async () => {
  const query = '*[_type == "blog"] | order(date desc)';
  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error("Error fetching blogs: ", error);
    return {
      error: "Failed to fetch blogs. Please check the logs for more details.",
    };
  }
};

// Fetching all GFG Courses from Sanity backend
export const getAllGFGCourses = async () => {
  const query = '*[_type == "gfgcourse"]';
  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error("Error fetching GFG courses: ", error);
    return {
      error:
        "Failed to fetch GFG courses. Please check the logs for more details.",
    };
  }
};

// Fetching all Domains from Sanity backend
export const getAllDomains = async () => {
  try {
    const query = '*[_type == "gfgdomains"]';

    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error("Error fetching domains:", error);
    return { error: true };
  }
};

// *************************************************************************
