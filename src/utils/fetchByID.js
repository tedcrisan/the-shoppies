import axios from "axios";

export default async function fetchByID(id) {
  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&type=movie&apikey=${API_KEY}`
    );
    return { movie: response.data, err: false };
  } catch (err) {
    return { movie: null, err: true };
  }
}
