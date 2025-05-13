export const createSubscriber = async (formData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_KIT_API_URL}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": process.env.NEXT_PUBLIC_KIT_API_KEY,
        },
        body: JSON.stringify(formData),
      }
    );

    return response;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};

export const addSubscriberToForm = async (formId, email) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_KIT_API_URL}/forms/${formId}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": process.env.NEXT_PUBLIC_KIT_API_KEY,
        },
        body: JSON.stringify({
          email_address: email,
          referrer: "https://fejirogospel.com/5-days-email-landing-page-course",
        }),
      }
    );

    return response;
  } catch (error) {
    console.error("Error registering for course:", error);
    throw error;
  }
};
