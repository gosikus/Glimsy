export interface Photo {
  id: string;
  alt: string;
  description: string;
  likes: number;
  url: string;
}

export interface PhotoData {
  id: string;
  alt_description: string;
  description: string;
  likes: number;
  urls: { regular:string };
}
