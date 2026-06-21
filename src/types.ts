export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'favorites' | 'refreshers';
  tag?: string;
  isHotSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imgUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
