import { Model } from "mongoose";

export type TReview = {
  email: string;
  rating: number;
  comment: string;
};

export type TMovie = {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  reviews: [TReview];
  slug: string;
  viewCount: number;
  isDeleted?: boolean;
};

export type TMovieMethods = {
  createSlug(payload: TMovie) : string;
};

export type TMovieModel = Model<TMovie, Record<string, unknown>, TMovieMethods>
