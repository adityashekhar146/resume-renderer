import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IContact, IEducation, IExperience, ILanguage, IPerson, IProfile, ISkillGroup } from "../types/profile";

interface ProfileState {
  profile: IProfile;
  updatePerson: (person: IPerson) => void;
  updateContact: (contact: IContact) => void;
  updateSummary: (value: string[]) => void;
  updateExperience: (value: IExperience[]) => void;
  updateEducation: (value: IEducation[]) => void;
  updateLanguages: (value: ILanguage[]) => void;
  updateSkillGroups: (value: ISkillGroup[]) => void;
  initialize: (newProfile: IProfile) => void;
  clear: () => void;
}

const initialState: IProfile = {
  personal: { firstName: "", lastName: "" },
  contactInfo: { email: "", phone: "", linkedin: "", city: "" },
  summary: [],
  experience: [],
  education: [],
  languages: [],
  skillGroups: [],
}

const useResumeStore = create<ProfileState, [["zustand/devtools", never], ["zustand/persist", ProfileState]]>(
  devtools(persist(
    (set) => ({
      profile: initialState,
      initialize: (newProfile) => (set(() => ({ profile: newProfile }))),
      updatePerson: (person) => (set(state => ({ profile: { ...state.profile, personal: person }}))),
      updateContact: (contact) => (set(state => ({ profile: { ...state.profile, contactInfo: contact }}))),
      updateSummary: summary => (set(state => ({ profile: { ...state.profile, summary }}))),
      updateExperience: experience => (set(state => ({ profile: {...state.profile, experience }}))),
      updateEducation: education => (set(state => ({ profile: {...state.profile, education }}))),
      updateLanguages: languages => (set(state => ({ profile: {...state.profile, languages }}))),
      updateSkillGroups: skillGroups => (set(state => ({ profile: {...state.profile, skillGroups }}))),
      clear: () => (set({ profile: initialState })),
    }),
    {
      name: "resume-storage"
    }
  ))
);

export default useResumeStore;
