export default async (req, res) => {
  console.log(req.body);
  if (req.method == "POST") {
    // POST request
    const comments = await fetch(
      "https://meritacademy.herokuapp.com/api/comments/",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Api-Key ${process.env.APIKEY}`,
        },
        body: req.body,
      }
    );
    res.status(201).json(await comments.json());
    res.end();
  } else {
    // GET request
    const comments = await fetch(
      "https://meritacademy.herokuapp.com/api/comments/",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Api-Key ${process.env.APIKEY}`,
        },
      }
    );
    res.status(200).json(await comments.json());
    res.end();
  }
};
