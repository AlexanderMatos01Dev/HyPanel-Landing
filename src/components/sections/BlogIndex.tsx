import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="px-6 pb-32 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#EDA333] text-[#0B0F19] font-bold shadow-lg shadow-[#EDA333]/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post (Vertical Layout as requested) */}
        {featuredPost && (
          <div className="relative group rounded-3xl overflow-hidden bg-[#151D2C]/40 backdrop-blur-xl border border-white/10 hover:border-[#EDA333]/30 transition-all duration-500">
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

                <a 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-[#EDA333] font-bold hover:gap-4 transition-all duration-300"
                >
                  Read Article <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
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
