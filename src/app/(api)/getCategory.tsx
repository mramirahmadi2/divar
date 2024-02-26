export default async function getCategory() {
    const res = await fetch(`http://localhost:8000/category`, {
      cache: "force-cache",
    });
    return res.json();
  }