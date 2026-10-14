import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { reviewsList } from '../data/reviewsData';

const ReviewRiver: React.FC = () => {
  const repeatedReviews = [...reviewsList, ...reviewsList];

  return (
    <section id="yorumlar" className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full mb-3">
              MÜŞTERİ DENEYİMLERİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Samsun Volkswagen Sahiplerinin Yorumları
            </h2>
          </div>
          <a
            href="https://maps.app.goo.gl/kLAzCUYKyzsqo8X88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold text-white border border-white/15 transition-all self-start sm:self-auto"
          >
            <span>Google Haritalar’da İncele</span>
            <ExternalLink className="w-4 h-4 text-sky-400" />
          </a>
        </div>
      </div>

      {/* Continuous Single-Row River */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-river-continuous w-max px-4">
          {repeatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[340px] sm:w-[400px] shrink-0 rounded-2xl bg-slate-900/90 border border-white/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.role}</span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-5">"{review.content}"</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="font-bold text-sm text-white">{review.author}</span>
                <span className="text-xs font-medium text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md">
                  {review.productGroup}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewRiver;
