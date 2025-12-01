import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';

interface BlogPost {
  slug: string;
  data: {
    title: string;
    excerpt: string;
    date: Date;
    readTime: string;
    category: string;
    gradient: string;
    image?: string;
    featured?: boolean;
    author?: string;
  };
}

interface BlogIndexProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 6;

export const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.data.category));
    return ['All', ...Array.from(cats)];
  }, [posts]);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter(p => p.data.category === activeCategory);
  }, [posts, activeCategory]);

  // Get featured post (first one in the filtered list, or a specific featured one)
  const featuredPost = filteredPosts[0];
  const listPosts = filteredPosts.slice(1);

  // Pagination logic for the list posts
  const totalPages = Math.ceil(listPosts.length / POSTS_PER_PAGE);
  const startRange = (currentPage - 1) * POSTS_PER_PAGE + 1;
  const endRange = Math.min(currentPage * POSTS_PER_PAGE, listPosts.length);
  const paginatedPosts = listPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <section className="px-6 pt-32 pb-32 min-h-screen relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg className="absolute top-10 right-20 w-16 h-16" viewBox="0 0 50 50">
          <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="#4DA6FF" strokeWidth="1"/>
        </svg>
        <svg className="absolute bottom-20 left-10 w-12 h-12" viewBox="0 0 50 50">
          <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="#EDA333" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Combined Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#2A3B4C] pb-8">
            <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A3A5A]/50 border border-[#2A3B4C] backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#4DA6FF] animate-pulse"></span>
                    <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">HyPanel Blog</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA6FF] to-[#EDA333]">Updates</span>
                </h1>
                <p className="text-lg text-[#8B9BB4] leading-relaxed">
                    News, development insights and announcements from the HyPanel team.
                </p>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col gap-4 w-full lg:w-auto">
                {/* Search Bar (Visual) */}
                 <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-500 group-focus-within:text-[#4DA6FF] transition-colors" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search articles..." 
                        className="block w-full lg:w-64 pl-10 pr-3 py-2.5 border border-[#2A3B4C] rounded-xl leading-5 bg-[#0F1623] text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-[#151D2C] focus:border-[#4DA6FF] focus:ring-1 focus:ring-[#4DA6FF] sm:text-sm transition-all"
                    />
                </div>

                {/* Categories as Tabs */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 border ${
                                activeCategory === cat
                                ? 'bg-[#EDA333]/10 border-[#EDA333] text-[#EDA333]'
                                : 'bg-[#151D2C] border-transparent text-gray-400 hover:bg-[#1A2633] hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Featured Post (Vertical Layout as requested) */}
        {featuredPost && (
          <a 
            href={`/blog/${featuredPost.slug}`}
            className="block relative group rounded-3xl overflow-hidden bg-[#151D2C]/40 backdrop-blur-xl border border-white/10 hover:border-[#EDA333]/30 transition-all duration-500"
          >
            <div className="flex flex-col">
              {/* Image Side - Full Width Top */}
              <div className="relative h-[250px] lg:h-[350px] overflow-hidden w-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredPost.data.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                {featuredPost.data.image ? (
                  <img 
                    src={featuredPost.data.image} 
                    alt={featuredPost.data.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${featuredPost.data.gradient} opacity-50`}></div>
                )}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[#EDA333] text-sm font-bold uppercase tracking-wider">
                    Featured in {featuredPost.data.category}
                  </span>
                </div>
              </div>

              {/* Content Side - Bottom */}
              <div className="p-8 lg:p-10 flex flex-col justify-center border-t border-white/5">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <time dateTime={featuredPost.data.date.toString()}>
                      {new Date(featuredPost.data.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{featuredPost.data.readTime} read</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-[#EDA333] transition-colors">
                  {featuredPost.data.title}
                </h2>

                <p className="text-base text-gray-400 mb-6 leading-relaxed max-w-4xl">
                  {featuredPost.data.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-[#EDA333] font-bold group-hover:gap-4 transition-all duration-300">
                  Read Article <ArrowRight size={20} />
                </span>
              </div>
            </div>
          </a>
        )}

        {/* Grid of Posts */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">
              Latest in {activeCategory}
            </h3>
            <span className="text-gray-400 text-sm">
              Showing {listPosts.length > 0 ? startRange : 0}-{endRange} of {listPosts.length} posts
            </span>
          </div>

          {/* Fixed Height Container to prevent jumping */}
          <div className="min-h-[800px]"> 
            {paginatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <a 
                    key={post.slug} 
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full bg-[#151D2C]/40 border border-white/5 rounded-2xl overflow-hidden hover:border-[#EDA333]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#EDA333]/10"
                  >
                    {/* Image Header */}
                    <div className="h-48 overflow-hidden relative">
                      {post.data.image ? (
                        <img 
                          src={post.data.image} 
                          alt={post.data.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${post.data.gradient} opacity-60`}></div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                          {post.data.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <Calendar size={12} />
                        <time dateTime={post.data.date.toString()}>
                          {new Date(post.data.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.data.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#EDA333] transition-colors line-clamp-2">
                        {post.data.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                        {post.data.excerpt}
                      </p>

                      <div className="flex items-center text-[#EDA333] text-sm font-bold mt-auto group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={14} className="ml-1" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <p>No more posts in this category.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 pt-8 border-t border-white/5">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <span className="text-sm text-gray-400 font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
