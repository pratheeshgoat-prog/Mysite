export default async function handler(req, res) {

  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress;

  const geo = await fetch(
    `https://ipinfo.io/${ip}/json`
  ).then(r => r.json());

  console.log({
    ip,
    city: geo.city,
    region: geo.region,
    country: geo.country,
    isp: geo.org
  });

 res.status(204).end();
});

}
