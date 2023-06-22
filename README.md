# Using blurDataURL in NextJs. ✍️

This is the code example for my article on [Improving Next.js app performance with BlurHash](https://blog.logrocket.com/improving-nextjs-app-performance-blurhash/) for [LogRocket](https://logrocket.com/). Here is the [live demo](https://using-blur-data-url-in-next-js.vercel.app/).

Visit my blog, [Timonwa's Notes](https://blog.timonwa.com), for awesome technical content like articles, code snippets, tech goodies, community projects, and more.
## Summary
Next.js is a flexible React framework that can be used to build fast web applications. We can use the Next.js configuration to create, develop, and ship products fast without spending days structuring the application. But, building a web app quickly and creating a fast-loading web app are two different things.

The time it takes a web app to load to the client depends on how long it takes to serve its application code, styles, and data to the client in the first initial load. For example, the application’s performance degrades if the server needs to send additional assets, such as images, during the first initial load.

There are numerous ways to optimize or improve the performance of your Next.js app to achieve a faster loading time. We’ll focus on one of these optimization strategies: using image placeholders for image optimization. Specifically, creatng image placeholders using the BlurHash algorithm.

### Breakdown
- What is an image placeholder?
- What is BlurHash?
- How does BlurHash work?
- How much does BlurHash impact page speed?
- How do you implement BlurHash in a Next.js app?
- Generating BlurHash placeholders for static images
- Generating BlurHash placeholders for dynamic images
- Converting a Base83 data URL to a Base64 data URL
- Adding the BlurHash URL to a Next.js app

Please give this repo a ⭐ if it was helpful to you.

![demo preview video](https://user-images.githubusercontent.com/63044364/194695799-96ce7f62-ea12-4660-ab2d-06c8c755d220.gif)
