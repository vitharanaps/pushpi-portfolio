export interface infoTypes {
  // connectDesc: string | null;
  // created_at: string;
  // cursorText: string | null;
  // github: string | null;
  // id: number;
  // linkedIn: string | null;
  // myDesc: string | null;
  // myImage: string | null;
  // username: string;
  // textGenerator: string;
  cvLink: string | null;
  connectDesc: string | null;
  created_at: string;
  cursorText: string | null;
  github: string | null;
  id: number;
  linkedIn: string | null;
  myDesc: string | null;
  myImage: string | null;
  username: string;
  textGenerator: string;
}

export interface IconProps {
  size?: number;
  className?: string;
}

export interface cursorDataType {
  id: number;
  created_at: string;
  text: string;
}

// Skills

export interface technologyTypes {
  id: number;
  skill: string;
  icon_name: string;
  created_at: string;
}

// experiences

export interface experienceType {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  jobRole: string;
  location: string;
  img: string;
  companyName: string;
}

export interface educationTypes {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  location: string;
  img: string;
  instituteName: string;
  course: string;
}

// contact

export interface FormData {
  message: string;
  email: string;
  subject: string;
}
