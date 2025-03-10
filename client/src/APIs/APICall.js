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

// Fetching all 2024 Members details from Sanity backend
export const getAll2024Member = async () => {
  const query = '*[_type == "members24"]';
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

// API to submit the contact form, ensuring the same email can't submit twice within a minute.
export const submitContactForm = async ({ name, email, subject, message }) => {
  try {
    // Fetch all emails from existing contact form submissions
    const query = '*[_type == "contactUs" && email == $email]{email}';
    const params = { email };
    const existingEmails = await client.fetch(query, params);

    //console.log(existingEmails)
    // Check if the email already exists
    if (existingEmails.length > 0) {
      return { error: true, message: "This email has already been used to submit the form." };
    }

    // Create new document if email is unique
    const newContact = {
      _type: "contactUs",
      name,
      email,
      subject,
      message,
    };

    await client.create(newContact);
    return { success: true, message: "Form submitted successfully." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { error: true, message: "An error occurred while submitting the form." };
  }
};
// API to submit the join us form, ensuring the same email can't submit twice within a minute.
export const submitJoinUsForm = async ({
  name,
  regNo,
  srmEmail,
  phoneNo,
  academicYear,
  branch,
  anyOtherClub,
  clubNameYouAreAPartOf,
  positionInThatClub,
  additionalContribution,
  linkedInProfile,
  githubProfile,
  leetcodeProfile,
  codechefProfile,
  codeForcesProfile,
  programingLanguage,
  introduceYourself,
  whyJoin,
  biggestAchievementTillDate,
  describeAnyProject
}) => {
  try {
    // Fetch all registrations from the 'joinUs' form to prevent duplicate registration numbers
    const regNoQuery = '*[_type == "joinUs" && regNo == $regNo]{regNo}';
    const params = { regNo };
    const existingRegNos = await client.fetch(regNoQuery, params);

    // Check if the registration number already exists
    if (existingRegNos.length > 0) {
      return { error: true, message: "This Registration Number has already been used to submit the form." };
    }

    // Fetch all submissions from the 'joinUs' form to prevent duplicate emails within the last 60 seconds
    const emailQuery = '*[_type == "joinUs" && srmEmail == $srmEmail]{srmEmail, _createdAt}';
    const emailParams = { srmEmail };
    const existingEmails = await client.fetch(emailQuery, emailParams);

    // Check if the email already exists
    if (existingEmails.length > 0) {
      const lastSubmissionTime = new Date(existingEmails[0]._createdAt);
      const currentTime = new Date();
      const timeDifference = (currentTime - lastSubmissionTime) / 1000; // difference in seconds

      // If the last submission was less than 60 seconds ago, prevent submission
      if (timeDifference < 60) {
        return { error: true, message: "You can only submit the form once every minute." };
      }
    }

    // Create new document if both regNo and email are unique
    const newJoinUs = {
      _type: "joinUs",
      name,
      regNo,
      srmEmail,
      phoneNo,
      academicYear,
      branch,
      anyOtherClub,
      clubNameYouAreAPartOf,
      positionInThatClub,
      additionalContribution,
      linkedInProfile,
      githubProfile,
      leetcodeProfile,
      codechefProfile,
      codeForcesProfile,
      programingLanguage,
      introduceYourself,
      whyJoin,
      biggestAchievementTillDate,
      describeAnyProject,
    };

    await client.create(newJoinUs);
    return { success: true, message: "Form submitted successfully." };
  } catch (error) {
    console.error("Error submitting join us form:", error);
    return { error: true, message: "An error occurred while submitting the form." };
  }
};
// *************************************************************************
