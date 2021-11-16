export default async (req, res) => {
  console.log(req.body)
  if (req.method == "POST") {
    // POST request
    console.log(req.body)
    const res = await fetch("https://meritacademy.herokuapp.com/api/comments/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${process.env.APIKEY}`,
      },
      body: req.body,
    })
    return await res.json()
  } else {
    const res = await fetch("https://meritacademy.herokuapp.com/api/comments/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${process.env.APIKEY}`,
      }
    })
    return await res.json()
  }
}