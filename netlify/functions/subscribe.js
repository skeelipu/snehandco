exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { email, source } = JSON.parse(event.body);

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY, // ← key lives here, server-side only
    },
    body: JSON.stringify({
      email,
      listIds: [parseInt(process.env.BREVO_LIST_ID)],
      updateEnabled: true,
      attributes: {
        SOURCE: source,
        SIGNUP_DATE: new Date().toISOString().split("T")[0],
      },
    }),
  });

  const ok = res.status === 201 || res.status === 204;
  return {
    statusCode: ok ? 200 : 500,
    body: JSON.stringify({ success: ok }),
  };
};
