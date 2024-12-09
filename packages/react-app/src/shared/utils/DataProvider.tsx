// this context provider is responsible for fetching and providing resume and configuration data
// to the components that require it. it manages the loading state to indicate whether the data
// is still being fetched and ensures that data is only set if the component is still mounted.
// this prevents potential memory leaks and state updates on unmounted components.

import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { fetchResumeData, fetchConfigData, ResumeDataApi, ConfigDataApi } from '../../../../shared/utils/Api';

// create a context for resume data
const DataContext = createContext<{
  resumeData: ResumeDataApi;
  configData: ConfigDataApi;
  loading: boolean;
} | undefined>(undefined);

// this provider is responsible for fetching and providing resume and configuration data
// to the components that require it. it manages the loading state to indicate whether the data
// is still being fetched and ensures that data is only set if the component is still mounted.
// this prevents potential memory leaks and state updates on unmounted components.
export function DataProvider({ children }: { children: React.ReactNode }) {

  // state to hold resume and configuration data
  const [data, setData] = useState<{ resumeData: any; configData: any }>({ resumeData: null, configData: null });

  // state to manage loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // track if the component is mounted
    let isMounted = true;

    const fetchData = async () => {
      try {

        // fetch both resume and configuration data concurrently
        const [resume, config] = await Promise.all([
          fetchResumeData(),
          fetchConfigData()
        ]);

        // only update state if the component is still mounted
        if (isMounted) {
          setData({ resumeData: resume, configData: config });
          setTimeout(() => {
            setLoading(false); // set loading to false after data is fetched
          }, 1000);
        }
      } catch (error) {
        console.error('Error fetching data:', error);

        // ensure loading state is updated even if an error occurs
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // call the fetch function
    fetchData();

    return () => {

      // cleanup function to set isMounted to false
      isMounted = false;
    };
  }, []);

  // memoize the value to prevent unnecessary re-renders
  const value = useMemo(() => ({ ...data, loading }), [data, loading]);

  return (
    // provide the fetched data and loading state to the context
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

// custom hook to use the resume data context
export function useResumeData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useResumeData must be used within a DataProvider');
  }
  return context;
}
