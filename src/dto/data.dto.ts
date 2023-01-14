export interface pagesDTO {
  pages: Array<{
    pageId: string;
    pageName: string;
    pageAuthor: string;
    pageLocation: string;
    likes: number;
    comments: Array<{
      userName: string;
      comment: string;
      date: string;
      likes: number;
      responses: number;
    }>;
  }>;
}

export interface galleryDTO {
  gallery: {
    photos: Array<{ id: string; data: string }>;
    videos: Array<{ id: string; data: string }>;
  };
}
