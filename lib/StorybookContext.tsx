import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface StorybookContextType {
  showStorybook: boolean;
  setShowStorybook: (show: boolean) => void;
}

const StorybookContext = createContext<StorybookContextType | undefined>(undefined);

interface StorybookProviderProps {
  children: ReactNode;
}

export function StorybookProvider({ children }: StorybookProviderProps) {
  const [showStorybook, setShowStorybook] = useState(false);

  const contextValue = {
    showStorybook,
    setShowStorybook: useCallback((show: boolean) => {
      setShowStorybook(show);
    }, []),
  };

  return <StorybookContext.Provider value={contextValue}>{children}</StorybookContext.Provider>;
}

export function useStorybookToggle(): StorybookContextType {
  const context = useContext(StorybookContext);

  if (context === undefined) {
    return {
      showStorybook: false,
      setShowStorybook: () => {
        console.warn('useStorybookToggle must be used within StorybookProvider');
      },
    };
  }

  return context;
}
