export interface Project {
    id: number;
    name: string;
    images: string[];
    shortDescription: string;
    longDescription: React.ReactNode;
    techStack: { name: string; icon: string }[];
    githubLinks: { type: string; link: string }[];
    liveLink: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "True Feedback",
        images: ["/projects/true-feedback/1.png", "/projects/true-feedback/2.png", "/projects/true-feedback/3.png", "/projects/true-feedback/4.png", "/projects/true-feedback/5.png"],
        shortDescription: "True Feedback is a platform where people can collect feedback from anonymous users.",
        longDescription: (
            <>
                <p>
                    Inspired by{" "}
                    <a href="https://www.youtube.com/@ChaiAurCode" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        <code>Chai Aur Code</code>
                    </a>{" "}
                    YouTube channel, I rebuilt this project with my own UI and tech stack.
                </p>

                <p>True Feedback is a platform where users can receive honest and anonymous feedback through a unique shareable link.</p>

                <p>Users can sign in with Google, share their profile link on platforms like WhatsApp or Instagram, and collect messages from anyone.</p>

                <p>It also gives full control to enable or disable messages and delete any unwanted feedback.</p>
            </>
        ),
        techStack: [
            { name: "JavaScript", icon: "/icons/js.svg" },
            { name: "Node.js", icon: "/icons/node.svg" },
            { name: "Next.js", icon: "/icons/next.svg" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
        ],
        githubLinks: [{ type: "frontend", link: "https://github.com/sumitdoescode/true-feedback" }],
        liveLink: "https://true-feedback.vercel.app/",
    },
    {
        id: 2,
        name: "Chatify",
        images: ["/projects/chatify/1.png", "/projects/chatify/2.png", "/projects/chatify/3.png", "/projects/chatify/4.png", "/projects/chatify/5.png"],
        shortDescription: "Chatify is a real-time messaging application.",
        longDescription: (
            <>
                <p>Chatify is a real-time messaging application where users can instantly send text messages and images to each other.</p>

                <p>
                    Real-time communication is implemented using <code>Socket.IO</code>, where WebSockets are configured from scratch to enable instant message delivery without requiring page refreshes.
                </p>

                <p>
                    Users can share images during conversations, which are stored using <code>Vercel Blob Storage</code> for reliable and scalable file handling.
                </p>

                <p>
                    The backend server is deployed on an <code>AWS EC2</code> instance to handle API requests and WebSocket connections, while the frontend is deployed on <code>Vercel</code> for fast global delivery.
                </p>

                <p>This architecture demonstrates building and deploying a full-stack real-time application using cloud infrastructure and modern web technologies.</p>
            </>
        ),
        techStack: [
            { name: "JavaScript", icon: "/icons/js.svg" },
            { name: "Bun", icon: "/icons/bun.svg" },
            { name: "Express", icon: "/icons/express.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
            { name: "Next.js", icon: "/icons/next.svg" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
        ],
        githubLinks: [
            { type: "frontend", link: "https://github.com/sumitdoescode/chatify-frontend" },
            { type: "backend", link: "https://github.com/sumitdoescode/chatify-backend" },
        ],
        liveLink: "https://chatify.page/",
    },
    {
        id: 3,
        name: "YouTube Backend",
        images: ["/projects/youtube-backend/1.jpg"],
        shortDescription: "YouTube Backend is a backend for a YouTube with tweets.",
        longDescription: (
            <>
                <p>A scalable YouTube-style backend built with Bun and Hono, designed to handle video content and user interactions efficiently.</p>

                <p>
                    The system uses <code>MongoDB</code> with <code>Mongoose</code> for data management, while media files are stored using <code>Cloudinary</code> and <code>Vercel Blob</code> for optimized storage and delivery.
                </p>

                <p>
                    Secure authentication is implemented using <code>Better Auth</code>, enabling session-based access control for protected routes.
                </p>

                <p>It includes core features like videos, playlists, tweets, comments, likes, subscriptions, and watch history, closely mimicking a real-world content platform.</p>

                <p>
                    Built around <strong>50+ production-grade APIs</strong>, covering complex real-world backend scenarios and scalable architecture patterns.
                </p>

                <p>Advanced querying with pagination, sorting, and filtering ensures efficient data retrieval across endpoints.</p>

                <p>
                    Input validation is handled using <code>Zod</code>, and global rate limiting improves API security and reliability.
                </p>

                <p>This project demonstrates a production-ready backend architecture for a modern content-driven platform.</p>
            </>
        ),
        techStack: [
            { name: "TypeScript", icon: "/icons/ts.svg" },
            { name: "Bun", icon: "/icons/bun.svg" },
            { name: "Hono", icon: "/icons/hono.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
            { name: "Cloudinary", icon: "/icons/cloudinary.svg" },
            { name: "AWS EC2", icon: "/icons/aws.svg" },
        ],
        githubLinks: [{ type: "backend", link: "https://github.com/sumitdoescode/youtube-backend" }],
        liveLink: "https://youtube-backend.sumitdoescode.me/",
    },
    {
        id: 4,
        name: "Strongly",
        images: ["/projects/strongly/1.png", "/projects/strongly/2.png", "/projects/strongly/3.png", "/projects/strongly/4.png", "/projects/strongly/5.png"],
        shortDescription: "Strongly is a platform where regular gym goers can track their attendance + admin can manage the gym members data",
        longDescription: (
            <>
                <p>Strongly is a gym management platform designed for both gym-goers and administrators.</p>

                <p>Users can track daily attendance by simply pressing a button when they visit the gym.</p>

                <p>Admin users can manage gym members, view attendance records, and handle memberships.</p>

                <p>
                    This project is built using Next.js with TypeScript and Tailwind CSS, deployed on Vercel, with database operations handled through <code>Mongodb Atlas</code>.
                </p>

                <p>
                    Secure authentication is implemented using <code>Better Auth</code> with <code>Google OAuth</code>, enabling session-based access control for protected routes.
                </p>

                <p>
                    Built around <strong>10+ production-grade APIs</strong>, covering complex real-world backend scenar ios and scalable architecture patterns.
                </p>

                <p>This project demonstrates a real world production-ready architecture for a modern gym management platform.</p>
            </>
        ),
        techStack: [
            { name: "TypeScript", icon: "/icons/ts.svg" },
            { name: "Next.js", icon: "/icons/next.svg" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
            { name: "Better Auth", icon: "/icons/better-auth.svg" },
            { name: "Vercel", icon: "/icons/vercel.svg" },
        ],
        githubLinks: [{ type: "fullstack", link: "https://github.com/sumitdoescode/strongly" }],
        liveLink: "https://strongly.sumitdoescode.me/",
    },
    {
        id: 5,
        name: "Fake API",
        images: ["/projects/fake-api/1.png"],

        shortDescription: "Mock REST API built with Hono, TypeScript, and Cloudflare Workers featuring 25+ endpoints for frontend practice and UI testing.",

        longDescription: (
            <>
                <p>
                    Fake API is a lightweight mock REST API built for frontend developers to test applications without creating a real backend. The API includes 25+ endpoints covering users, posts, comments, animals, health checks, delay simulation,
                    and IP detection.
                </p>

                <p>It supports common REST operations including GET, POST, PUT, and DELETE, along with features like pagination, search endpoints, nested routes, and configurable response delays for testing loaders and skeleton states.</p>

                <p>
                    Built using Hono, TypeScript, Cloudflare Workers, and Zod, the API is optimized for fast response times and scalable performance. Seed data is loaded from local JSON files, while runtime-created data is temporarily stored in
                    memory.
                </p>

                <p>The project is fully CORS-enabled and deployed on Cloudflare Workers, making it ideal for frontend prototyping, mock integrations, and testing real-world API flows.</p>
            </>
        ),

        techStack: [
            { name: "TypeScript", icon: "/icons/ts.svg" },
            { name: "Cloudflare Workers", icon: "/icons/cloudflare.svg" },
            { name: "Hono", icon: "/icons/hono.svg" },
            { name: "Zod", icon: "/icons/zod.svg" },
        ],

        githubLinks: [
            {
                type: "backend",
                link: "https://github.com/sumitdoescode/fake-api",
            },
        ],

        liveLink: "https://api.sumitdoescode.me/",
    },
    {
        id: 6,
        name: "URL Shortener",

        images: ["/projects/url-shortner/1.png"],

        shortDescription: "A simple URL shortener built with Hono, Bun, TypeScript, and Redis to learn backend architecture and caching concepts.",

        longDescription: (
            <>
                <p>URL Shortener is a backend-focused learning project built to understand how real-world URL shortening services work. The application allows users to generate short URLs and redirect users to the original destination links.</p>

                <p>The project was built using Hono, Bun, TypeScript, and Redis, with a strong focus on learning backend system design concepts such as routing, caching, and request handling.</p>

                <p>Instead of performing a database lookup on every redirect request, Redis caching is used to improve redirect performance and reduce repeated database operations.</p>

                <p>This project was created mainly for learning purposes and experimenting with backend architecture patterns. It is not currently deployed, but the complete source code is available on GitHub.</p>
            </>
        ),

        techStack: [
            { name: "TypeScript", icon: "/icons/ts.svg" },
            { name: "Redis", icon: "/icons/redis.svg" },
            { name: "Bun", icon: "/icons/bun.svg" },
            { name: "Hono", icon: "/icons/hono.svg" },
        ],

        githubLinks: [
            {
                type: "backend",
                link: "https://github.com/sumitdoescode/url-shortner",
            },
        ],

        liveLink: "",
    },
];
