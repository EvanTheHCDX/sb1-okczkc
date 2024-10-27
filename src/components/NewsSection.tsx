import React from 'react';
import { Newspaper } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  source: string;
  url: string;
}

interface NewsSectionProps {
  sport: string;
  news: NewsItem[];
}

export default function NewsSection({ sport, news }: NewsSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <Newspaper className="w-6 h-6 mr-2 text-blue-600" />
          Latest {sport} News
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.summary}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{item.source}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}