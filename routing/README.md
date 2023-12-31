Markup : 1.

- ### <ins>Exercise: Basic Routing in Next.js</ins>

#### Goal:

The goal of this exercise is to create a simple Next.js application with multiple pages and implement basic routing using Next.js's built-in routing system.

#### Instructions:

1. Create a new Next.js project.

2. Create two routes named "about" and "contact".

3. Verify that you can navigate between the "about," and "contact" pages.

Markup : 2.

- ### <ins> Exercise: Nested Routes in Next.js</ins>

#### Goal:

The goal of this exercise is to demonstrate understanding of how to create nested routes in a Next.js application.

#### Instructions:

1. Create a "products" route and inside that same folder create two more folders name "allproducts" & "specificproduct"
2. Inside the "allproducts" folder create a component which will show this text: "(1220) products in the store"
3. Inside the "specificproduct" folder create a component which will show this text: "Here is my one & only product"
4. Test all the routs.

Markup : 3.

- ### <ins> Exercise: Linking and Navigation in Next.js </ins>

#### Goal:

The goal of this exercise is to practice using Next.js's `<Link>` component for client-side navigation in a Next.js application.

#### Instructions:

1. Create two routes "home" and "dashboard"

2. In the "home" page, create a simple landing page with a welcoming message and some content.

3. In the "dashboard" page, create a dashboard with various components, such as a navigation menu, user profile, and other related information.

4. In the "dashboard" page, implement a navigation menu that includes links to the "home" page and other sections within the dashboard.

5. Use Next.js's `<Link>` component to create these navigation links. Ensure that clicking on these links navigates the user to the corresponding pages within the application without a full page refresh.

Markup : 4.

- ### <ins> Exercise: Using `useRouter` in Next.js </ins>

#### Goal:

The goal of this exercise is to practice using the `useRouter` hook in a Next.js application for programmatic navigation and accessing route information.

#### Instructions:

1. Create two routes: "page1" and "page2".

2. In the "page1" route, create a simple landing page with a message and a button.

3. In the "page2" route, create a second page with information or content.

4. Implement a programmatic navigation from "page1" to "page2" using the `useRouter` hook from Next. When the user clicks a button on "page1," they should be navigated to "page2."

5. Verify that programmatic navigation from "page1" to "page2" works as expected, and that the route information is displayed on "page2."

Markup : 5.

- ### <ins> Exercise: Route Organization and Ignoring Routes in Next.js </ins>

#### Goal:

The goal of this exercise is to practice organizing routes using folders and excluding certain folders from being treated as routes in a Next.js application.

#### Instructions:

1. Create the "users" folder (but it shouldn't be a route).
2. Inside the "users" folder create a "userinfo" route.
3. Inside the "app" directory create another folder name "auth" but it (shouldn't be a route).
4. Inside the "auth" folder create a login route which will only print (Please Login To See The Content)

Markup : 6.

- ### <ins> Exercise: Create Dynamic Route in Next.js </ins>

#### Goal:

The goal of this exercise is to practice to create dynamic route

Markup : 7.

- ### <ins> Exercise: Handling URL Segments in Next.js <ins>

#### Goal:

The goal of this exercise is to practice working with URL segments to create dynamic routes and access data from the URL in a Next.js application.

#### Instructions:

1. Create a route named "products."

2. Inside the "products" folder, create a folder named "[id]" This square bracket notation "[id]" indicates that this route will handle dynamic URL segments.

3. In the "[id]" file, create a page that displays information about a product based on the value of the "id" segment in the URL.

4. Use the Next.js `useRouter` hook to access the "id" segment from the URL.

5. When a user accesses a URL like "/products/123" (where "123" is a dynamic product ID), the page should display information about the product with the corresponding ID.

6. Verify that you can access dynamic product pages with different IDs in the URL, and the page displays information based on the ID from the URL segment.

Markup : 8.

- ### <ins> Exercise: Creating a Custom "Not Found" Page in Next.js <ins>

#### Goal:

The goal of this exercise is to practice creating a custom "Not Found" (404) page in a Next.js application to improve the user experience when accessing non-existing routes.

#### Instructions:

1. In your Next.js project, create a custom error page named "404.js" in the "pages" directory. This page will serve as the custom "Not Found" page for your application.

2. Customize the "404.js" page with a message or content to inform users that the page they are looking for does not exist.

3. Verify that when accessing a non-existing route, users are redirected to the custom "Not Found" page (404.js) and see the message you provided.

Markup : 9.

- ### <ins> Exercise: Implementing Redirects in Next.js <ins>

#### Goal:

The goal of this exercise is to practice setting up and managing redirects in a Next.js application to enhance user experience and ensure proper page navigation.

#### Instructions:

1. In your Next.js project, create a custom error page named "404.js" in the "app" directory. This page will serve as the custom 404 error page for your application.

2. Implement redirects for the following scenarios:

- Create a redirection rule that redirects users from the route "/old-page" to the new page "/new-page."
- Create a rule that redirects users from a non-existing route "/non-existing" to the custom 404 error page "404.js."

3. Verify that the redirection from "/old-page" to "/new-page" works as expected, and that accessing a non-existing route redirects users to the custom 404 error page.
