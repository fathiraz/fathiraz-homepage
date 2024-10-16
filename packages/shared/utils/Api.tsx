import axios from 'axios';

// define the structure of your resume data
export interface ResumeDataApi {
  name: string;
  title: string;
  summary: string;
  work_preference: string;
  contact: {
    linkedin: string;
    github: string;
  };
  languages: Array<{
    language: string;
    proficiency: string;
  }>;
  tools: string[];
  technology_stack: string[];
  educations: Array<{
    university: string;
    location: string;
    degree: string;
    major: string;
    start: string;
    end: string;
    grade: string;
  }>;
  experiences: Array<{
    company: string;
    position: string;
    location: string;
    start_date: string;
    end_date: string;
    duration: string;
    summary: string;
    workarounds: string[];
    skills_used: string[];
  }>;
}

// define the structure of CSS frameworks
export interface CssFrameworkApi {
  name: string;
}

// define the structure of your config data
export interface ConfigDataApi {
  frameworks: {
    javascript: Array<{ name: string }>;
    css: Array<CssFrameworkApi>;
  };
}

// get base URL from environment variable
const BASE_URL = import.meta.env.VITE_API_URL

// fetch resume data
export async function fetchResumeData(): Promise<ResumeDataApi | null> {
  try {
    const response = await axios.get<ResumeDataApi>(`${BASE_URL}/api/resume?v=${Date.now()}`);
    if (response.status !== 200) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching resume data:', error);
    return null;
  }
}

// fetch config data
export async function fetchConfigData(): Promise<ConfigDataApi | null> {
  try {
    const response = await axios.get<ConfigDataApi>(`${BASE_URL}/api/config?v=${Date.now()}`);
    if (response.status !== 200) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching config data:', error);
    return null;
  }
}
