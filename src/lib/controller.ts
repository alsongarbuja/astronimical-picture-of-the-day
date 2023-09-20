
export const getPictureToday = async (): Promise<Picture> => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`);
  const data = await response.json();
  return data;
}

// export const getThumbnail = async (date: string): Promise<string> => {
//   const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${date}&thumbs`);
//   const data = await response.json();
//   return data;
// }