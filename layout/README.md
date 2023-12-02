### Exercise: 1 Creating Basic Layouts in Next.js

#### Goal:

The goal of this exercise is to practice creating and applying basic layouts in a Next.js application to maintain consistency and structure across multiple pages.

#### Instructions:

1. In your Next.js project, create a new component named "layout.js." This component will serve as the basic layout structure that can be reused across multiple pages.

2. Design the "layout.js" component with a simple structure that includes a header, navigation menu, content area, and a footer. You can use standard HTML and CSS or a CSS framework like Tailwind CSS or styled-components to style the layout (if you want to).

3. Create a landing page in the "app" directory, This page will use the "Layout" component.

4. Implement a "Contact" route in the "app" directory, This page will also use the "Layout" component for consistent layout structure.

5. Customize the header, navigation menu, and footer in the "Layout" component to include links to the "Home" and "Contact" pages.

6. Test the application.

### Exercise:2 Implementing Conditional Layouts in Next.js

#### Goal:

The goal of this exercise is to practice creating conditional layouts in a Next.js application, allowing different pages to have distinct layouts based on specific conditions.

#### Instructions:

2. Create two distinct layout components: "StandardLayout.js" and "AlternateLayout.js." Each layout component should have a different structure, styling, or content.

3. Create a new page or modifiy the exisiting one in the "app" directory named "page.js." This page will serve as the landing page for your application.

4. Implement conditional layout selection for the root "page.js". If a specific condition is met (e.g., a user is logged in), use the "AlternateLayout" component; otherwise, use the "StandardLayout" component.

5. Design the "StandardLayout" and "AlternateLayout" components to make them visually distinct.

6. Test the application.

### Exercise: 3 Generating Metadata in a Next.js Application

#### Goal:

The goal of this exercise is to practice generating metadata for pages in a Next.js application. Metadata can be used for SEO (Search Engine Optimization) and to enhance the presentation of content when sharing links on social media.

#### Instructions:

1. In the "app" directory of your project, create a few routes, such as "about.js," and "contact.js."

2. For each page, implement the following:

- Define a unique title for the page. For example, the "page.js" page might have the title "Home," and the "about.js" page might have the title "About Us."
- Create a description for each page, which should be a short summary of the content.
- Specify image URLs for social media sharing (e.g., Open Graph images).

3. Create a custom `generateMetadata` function or module that generates metadata for each page based on the defined title, description, and image URL.

4. On each page, use the `generateMetadata` function to set the appropriate metadata, including the `<title>`, `<meta name="description">`, and Open Graph (OG) tags in the `<head>` section of the HTML.

5. Test the application.
