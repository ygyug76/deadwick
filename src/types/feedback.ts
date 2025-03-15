
export interface Testimonial {
  name: string;
  role: string;
  message: string;
  rating: number;
}

export interface FeedbackData {
  name: string;
  message: string;
  user_id?: string | null;
  is_public: boolean;
  rating?: number;
}
