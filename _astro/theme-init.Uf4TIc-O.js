// Apply a saved preference before the first paint; the CSS default follows the OS.
try {
  const theme = localStorage.getItem('site-theme');
  if (theme === 'light' || theme === 'dark')
    document.documentElement.dataset.theme = theme;
} catch {
  // Storage can be unavailable in restricted browsing contexts.
}
