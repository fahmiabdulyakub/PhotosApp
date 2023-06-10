export interface IPhoto {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections?: null[] | null;
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  promoted_at: string;
  slug: string;
  sponsorship?: null;
  updated_at: string;
  urls: Urls;
  user: User;
  width: number;
}
export interface Links {
  download: string;
  download_location: string;
  html: string;
  self: string;
}
export interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}
export interface User {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  links?: string[] | null;
  location: string;
  name: string;
  portfolio_url: string;
  profile_image?: string[] | null;
  social?: string[] | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username?: null;
  updated_at: string;
  username: string;
}
