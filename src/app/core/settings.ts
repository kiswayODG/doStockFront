export interface AppSettings {
  navPos: 'side' | 'top';
  dir: 'ltr' | 'rtl';
  theme: 'light' | 'dark' | 'auto';
  showHeader: boolean;
  headerPos: 'fixed' | 'static' | 'above';
  language: string;
}

export const defaults: AppSettings = {
  navPos: 'top',
  dir: 'ltr',
  theme: 'auto',
  showHeader: true,
  headerPos: 'above',
  language: 'en-US',
};
