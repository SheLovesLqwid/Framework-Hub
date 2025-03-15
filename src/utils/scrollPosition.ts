// Create this new file
let scrollPosition = 0;

// Save scroll position when user scrolls
export function setupScrollPositionHandler() {
  window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
  });
  
  // Restore scroll position after any re-renders
  if (scrollPosition > 0) {
    window.scrollTo(0, scrollPosition);
  }
}