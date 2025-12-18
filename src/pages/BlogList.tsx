import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/blogPosts';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogList() {
    return (
        <>
            <Helmet>
                <title>주휴탐정 블로그 | 알바생을 위한 임금 및 노동 상식</title>
                <meta name="description" content="주휴수당, 최저임금, 근로기준법 등 알바생과 사업주가 꼭 알아야 할 유용한 정보를 제공합니다." />
            </Helmet>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-detective-navy border-b-4 border-detective-yellow inline-block pb-2">
                    탐정 수사 일지
                </h1>
                <p className="text-gray-600 mb-10 -mt-6">
                    알쏭달쏭한 주휴수당과 노동법, 주휴탐정이 명쾌하게 풀어드립니다.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden flex flex-col h-full"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-detective-navy font-medium mb-3 bg-slate-100 w-fit px-2 py-1 rounded">
                                    {post.category}
                                </div>
                                <h2 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-slate-500 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <User size={14} /> {post.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {post.date}
                                        </span>
                                    </div>
                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
