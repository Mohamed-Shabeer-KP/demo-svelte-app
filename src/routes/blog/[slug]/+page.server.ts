import { error } from "@sveltejs/kit";
import { blogs } from "../data.js";

export function load( {params} ) {
    const post = blogs.find((blog) => blog.slug === params.slug);
    
    if(!post) throw error(404);
    
    return {
        summaries: {
            title: post.title,
            content: post.content
        }
    }

}