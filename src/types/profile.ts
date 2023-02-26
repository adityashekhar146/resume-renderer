
export interface IPerson {
  firstName: string;
  lastName: string;
}

export interface IContact {
  email: string;
  phone: string;
  linkedin: string;
  city: string;
  github?: string;
  picture?: string;
  website?: string;
}

export interface IExperience {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  isCurrentJob: boolean;
  location: string;
  responsibilities: string[];
}

export interface IEducation {
  degree: string;
  institute: string;
  startDate: Date;
  endDate?: Date;
  score: string;
}

export interface ILanguage {
  name: string;
  fluency: "native" | "expert" | "advanced" | "novice";
}

interface ISkill {
  title: string;
  rating: "expert" | "advanced" | "intermediate" | "beginner";
}

export interface ISkillGroup {
  groupName: string;
  skills: ISkill[];
}

export interface IProfile {
  personal: IPerson;
  contactInfo: IContact;
  summary: string[];
  experience: IExperience[];
  education: IEducation[];
  languages: ILanguage[];
  skillGroups: ISkillGroup[];
}
