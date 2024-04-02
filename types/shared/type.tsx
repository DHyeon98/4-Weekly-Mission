export interface SharedLink {
  createdAt: string;
  description: string;
  id?: number;
  imageSource?: string;
  image_source?: string;
  title: string;
  url: string;
}
export interface SharedTypes {
  count: number;
  id: number;
  links: SharedLink[];
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}
