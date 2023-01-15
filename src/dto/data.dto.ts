export interface pagesDTO {
  pages: Array<{
    pageId: string;
    pageName: string;
    pageImage: string;
    pageAuthor: string;
    pageLocation: string;
    pageDate: string;
    totalLikes: string;
    totalComments: string;
    comments: Array<{
      userName: string;
      profilePicture: string;
      comment: string;
      date: string;
      likes: string;
      responses: string;
    }>;
  }>;
}

export interface galleryDTO {
  gallery: {
    photos: Array<{ id: string; data: string }>;
    videos: Array<{ id: string; data: string }>;
  };
}
