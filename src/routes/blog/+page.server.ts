import { blogs } from "./data.js";

export function load() {
    return { 
        summaries : blogs.map((blog) => ({
            slug: blog.slug,
            title: blog.title
        }))
        }
}