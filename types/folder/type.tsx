export interface AllFolder {
  created_at: string;
  createdAt: string;
  description: string;
  folder_id: string;
  id?: number;
  image_source?: string;
  imageSource?: string;
  title: string;
  updated_at?: string;
  url: string;
}

export interface FolderList {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}
