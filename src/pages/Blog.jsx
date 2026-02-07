import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import SEO from '../components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-950 text-white px-6 md:px-12 lg:px-24">
            <SEO
                title="Blog | Mohit Verma - Frontend & MERN Stack Insights"
                description="Read the latest insights on Frontend Development, MERN Stack, and Web Performance by Mohit Verma. Tutorials, guides, and career advice."
                keywords="Web Development Blog, React Tutorials, MERN Stack Guide, Frontend Development Tips, Mohit Verma Blog"
                url="https://mohitvermag.github.io/blog"
            />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                        Tech Insights & Thoughts
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Exploring the world of web development, one line of code at a time.
                        Here I share my experiences, tutorials, and best practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((blog) => (
                        <article key={blog.id} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-cyan-400 mb-4">
                                    <span className="bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20">
                                        {blog.category}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                    <Link to={`/blog/${blog.slug}`}>
                                        {blog.title}
                                    </Link>
                                </h2>

                                <p className="text-slate-400 mb-6 line-clamp-3 text-sm">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto border-t border-slate-800 pt-4">
                                    <div className="flex items-center gap-4 text-xs text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {blog.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            {blog.author}
                                        </div>
                                    </div>

                                    <Link
                                        to={`/blog/${blog.slug}`}
                                        className="flex items-center gap-1 text-cyan-400 text-sm font-medium hover:gap-2 transition-all"
                                    >
                                        Read <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
