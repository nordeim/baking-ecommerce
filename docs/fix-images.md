✦ I have successfully identified the broken images on the landing page and updated their references to use the local files as requested.

  Summary of Changes:
   1. Analyzed the screenshot and located the data source in src/data/index.ts.
   2. Verified that the local images Sourdough_Mastery.webp and Patisserie_Fundamentals.avif exist in public/images/.
   3. Updated src/data/index.ts to replace the external Unsplash URLs with the local file paths:
       * Sourdough Mastery: https://images.unsplash.com/... -> /images/Sourdough_Mastery.webp
       * Pâtisserie Fundamentals: https://images.unsplash.com/... -> /images/Patisserie_Fundamentals.avif
   4. Confirmed that src/components/sections/featured-courses.tsx uses next/image with object-cover, ensuring the images will be properly scaled on the landing page.

  The landing page will now display the local images for these two courses correctly.

