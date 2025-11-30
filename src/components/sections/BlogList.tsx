import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  data: {
    title: string;
    excerpt: string;
    date: Date;
    readTime: string;
    category: string;
    gradient: string;
    featured?: boolean;
    author?: string;
  };
}

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <section className="px-6 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col h-full bg-[#151D2C]/40 border border-white/5 rounded-2xl overflow-hidden hover:border-[#4DA6FF]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4DA6FF]/10"
            >
              {/* Gradient Header */}
              <div className={`h-2 w-full bg-gradient-to-r ${post.data.gradient}`}></div>
              
              <div className="p-8 flex flex-col flex-grow">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-6 text-xs font-medium uppercase tracking-wider">
                  <span className="text-[#4DA6FF] px-3 py-1 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/20">
                    {post.data.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={14} />
                    <time dateTime={post.data.date.toISOString()}>
                      {new Date(post.data.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#4DA6FF] transition-colors leading-tight">
                  {post.data.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-8 line-clamp-3 flex-grow leading-relaxed">
                  {post.data.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{post.data.readTime} read</span>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight size={16} className="text-[#4DA6FF]" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
