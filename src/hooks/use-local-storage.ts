import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadValue() {
      if (typeof window === 'undefined') {
        setIsLoaded(true);
        return;
      }

      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          const parsed = JSON.parse(item);
          setStoredValue(parsed);
        }
        setError(null);
      } catch (err) {
        console.warn(`Error reading localStorage key "${key}":`, err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoaded(true);
      }
    }

    loadValue().catch(err => {
      console.error('Unexpected error in useLocalStorage:', err);
      setError(err instanceof Error ? err : new Error(String(err)));
      setIsLoaded(true);
    });
  }, [key]);

  const setValue = async (value: T | ((val: T) => T)) => {
    if (typeof window === 'undefined') return;

    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setError(null);
    } catch (err) {
      console.warn(`Error setting localStorage key "${key}":`, err);
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err; // Re-throw to allow error handling by caller
    }
  };

  return { value: storedValue, setValue, isLoaded, error };
}