import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import SEO from '../components/SEO';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();
    const blog = blogData.find(post => post.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-cyan-400 mb-4">404</h1>
                    <p className="mb-6 text-slate-400">Blog post not found.</p>
                    <Link to="/blog" className="text-cyan-400 hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    // Basic markdown-like rendering for the content structure
    const renderContent = (content) => {
        return content.split('\n').map((line, index) => {
            const trimmed = line.trim();
            if (!trimmed) return <br key={index} />;

            if (trimmed.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-cyan-100 mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold text-cyan-200 mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
            }
            if (trimmed.startsWith('- **')) {
                const parts = trimmed.split('**');
                return <li key={index} className="ml-6 mb-2 text-slate-300 list-disc"><strong className="text-cyan-400">{parts[1]}</strong> {parts[2]}</li>;
            }
            if (trimmed.startsWith('- ')) {
                return <li key={index} className="ml-6 mb-2 text-slate-300 list-disc">{trimmed.replace('- ', '')}</li>;
            }
            return <p key={index} className="mb-4 text-slate-300 leading-relaxed text-lg">{trimmed}</p>;
        });
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-950 text-white px-4 md:px-12 lg:px-24">
            <SEO
                title={`${blog.title} | Mohit Verma`}
                description={blog.excerpt}
                keywords={blog.keywords.join(', ')}
                url={`https://mohitvermag.github.io/blog/${blog.slug}`}
                type="article"
            />

            <article className="max-w-4xl mx-auto bg-slate-900/40 p-6 md:p-12 rounded-2xl border border-slate-800">
                <Link to="/blog" className="inline-flex items-center text-cyan-400 mb-8 hover:text-cyan-300 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Blog
                </Link>

                <header className="mb-10 border-b border-slate-800 pb-8">
                    <div className="flex flex-wrap gap-4 text-sm text-cyan-400 mb-6">
                        <span className="bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20">
                            {blog.category}
                        </span>
                        <div className="flex items-center gap-2 text-slate-400">
                            <Calendar size={16} />
                            {blog.date}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <User size={16} />
                            {blog.author}
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
                        {blog.title}
                    </h1>
                </header>

                <div className="prose prose-invert max-w-none">
                    {renderContent(blog.content)}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {blog.keywords.map(keyword => (
                            <span key={keyword} className="flex items-center bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm">
                                <Tag size={12} className="mr-2 text-cyan-500" />
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
