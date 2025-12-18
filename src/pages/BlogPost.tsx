import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../constants/blogPosts';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find((p) => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">찾으시는 사건 일지가 없습니다.</h2>
                <Link to="/blog" className="text-detective-navy underline hover:text-amber-600">
                    목록으로 돌아가기
                </Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | 주휴탐정 블로그</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta name="author" content={post.author} />
            </Helmet>

            <div className="container mx-auto px-4 py-10 max-w-3xl">
                <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-detective-navy mb-6 text-sm transition-colors">
                    <ArrowLeft size={16} className="mr-1" />
                    목록으로
                </Link>

                <article className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <header className="mb-8 border-b border-slate-100 pb-8">
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                            <Tag size={12} />
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-slate-500 text-sm">
                            <span className="flex items-center gap-1">
                                <User size={16} />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar size={16} />
                                {post.date}
                            </span>
                        </div>
                    </header>

                    <div
                        className="prose prose-slate max-w-none prose-headings:text-detective-navy prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-blockquote:not-italic prose-blockquote:text-slate-600"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Navigation to other posts could go here */}
                <div className="mt-12 text-center">
                    <Link to="/calculator" className="inline-block bg-detective-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        내 주휴수당 계산하러 가기
                    </Link>
                </div>
            </div>
        </>
    );
}
