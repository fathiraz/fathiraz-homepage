const BASE_URL = 'http://localhost:3001';

export async function fetchResumeData() {
  try {
    const response = await fetch(`${BASE_URL}/api/resume`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching resume data:', error);
    return null;
  }
}

export async function fetchConfigData() {
  try {
    const response = await fetch(`${BASE_URL}/api/config`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching config data:', error);
    return null;
  }
}
