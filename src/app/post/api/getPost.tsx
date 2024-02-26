export default async function getPosts({url}:any) {
    const res = await fetch(`${url}`, {
      cache: "force-cache",
    });
    return res.json();
  }