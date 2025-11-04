export const hasSupport = (): boolean => {
  /**
   * Check if the `API` has support
   */
  return typeof window !== 'undefined' && 'IntersectionObserver' in window;
};

function init() {
  const images = document.querySelectorAll('img[data-src]');

  if (!hasSupport()) {
    console.log('IntersectionObserver API is Not Supported');
    return;
  }

  // Create an instance of IntersectionObserver API
  const observer = new IntersectionObserver(
    entries => {
      //you can addobserver herefor line 25
      entries.forEach(item => {
        if (item.isIntersecting) {
          let img = item.target as HTMLImageElement; // get each image
          img.src = img.dataset.src || ''; // change the image src
          img.style.width = '300px'; // added little bit animation
          // observer.unobserve(img); // if we don't want once
        } else {
          let img = item.target as HTMLImageElement;
          img.src = '';
          img.style.width = '100px';
        }
      });
    },
    {
      root: null,
      threshold: 0.9,
    }
  );

  // Observe all images
  images.forEach(img => {
    observer.observe(img);
  });
}

const run = {
  init,
};

export default run;
