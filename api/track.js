export default async function handler(req, res) {

  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress;

  const geo = await fetch(
    `https://ipinfo.io/${ip}/json`
  ).then(r => r.json());

  res.status(200).send("Hello");
    region: geo.region,
    country: geo.country,
    isp: geo.org
  });
}
