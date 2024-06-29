import moment from "moment";

export const getPictureToday = async (): Promise<Picture> => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`, {
    next: {
      revalidate: 60 * 60,
    }
  });
  const data = await response.json();
  return data;
}

export const getRecentPictures = async (count: number): Promise<Picture[]> => {
  const startDate = moment().subtract(count, "days").format("YYYY-MM-DD");
  const endDate = moment().subtract(1, "days").format("YYYY-MM-DD");

  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}`, {
    next: {
      revalidate: 60 * 60,
    }
  });
  const data = await response.json();
  return data.reverse();
}

// export const getThumbnail = async (date: string): Promise<string> => {
//   const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${date}&thumbs`);
//   const data = await response.json();
//   return data;
// }