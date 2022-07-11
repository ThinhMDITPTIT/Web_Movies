export default async function getMovies() {
  const data = await fetch(
    "https://run.mocky.io/v3/d03e0886-f5c8-4961-902d-51bfe8059a33"
  ).then((res) => res.json());

  const movies = data.map((item) => ({
    ...item,
    Genre: item.Genre?.split(",")
      ?.map((item) => item.trim())
      ?.filter((item) => item && item !== "" && item !== "N/A"),
  }));

  return movies;
}
