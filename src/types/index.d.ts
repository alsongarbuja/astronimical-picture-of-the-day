type Picture = {
  url: string;
  hdurl: string;
  title: string;
  explanation: string;
  date: string;
  media_type: "image" | "video";
  thumbnail_url: string;
}

type DateRange = {
  startDate: string;
  endDate: string;
}