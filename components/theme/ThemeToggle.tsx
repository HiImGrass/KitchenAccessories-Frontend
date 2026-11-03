'use client';

import { Moon, Sun } from 'lucide-react';
import { useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'ladle-theme';
const THEME_CHANGE_EVENT = 'ladle-theme-change';

function subscribeToThemeChange(callback: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, callback);
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function getServerThemeSnapshot(): Theme {
  return 'light';
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToThemeChange,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-outline-variant/50 bg-surface-container-low text-on-surface shadow-xs transition-colors hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {isDark ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
    </button>
  );
}
