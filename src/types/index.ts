export interface Experience {
  num: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  stack: string[];
  link: string | null;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}
