import React from 'react';
import { Star, CheckCircle2, Globe2 } from 'lucide-react';
import { reviewsList, ReviewItem } from '../data/reviewsData';

const ReviewCard: React.FC<{ review: ReviewItem }> = ({ review }) => (
  <div className="w-[340px] sm:w-[400px] shrink-0 bg-slate-900 border border-slate-800 rounded-xl p-5 mx-2.5 flex flex-col justify-between select-none shadow-md">
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[11px] font-bold text-sky-300 bg-sky-950/70 border border-sky-800/60 px-2.5 py-0.5 rounded-md">
          {review.productGroup}
        </span>
      </div>

      <p className="text-slate-200 text-sm leading-relaxed mb-4">
        &ldquo;{review.content}&rdquo;
      </p>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-sky-500 text-slate-950 font-bold text-xs flex items-center justify-center">
          {review.avatarText}
        </div>
        <div>
          <div className="text-sm font-bold text-white flex items-center gap-1">
            {review.author}
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          </div>
          <div className="text-[11px] text-slate-400">{review.role}</div>
        </div>
      </div>
      {review.highlight && (
        <span className="text-[11px] font-semibold text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
          {review.highlight}
        </span>
      )}
    </div>
  </div>
);

export const ReviewRiver: React.FC = () => {
  const loopReviews = [...reviewsList, ...reviewsList];

  return (
    <section id="referanslar" className="py-14 md:py-20 bg-slate-950 border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sky-400 font-bold text-sm">
                Müşteri Memnuniyeti En İyi Referansımızdır
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Tekstil ve Hazır Giyim Sektörü Referanslarımız
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200 bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800 self-start md:self-auto">
            <Globe2 className="w-4 h-4 text-sky-400" />
            <span>Hollanda, Almanya, Belçika &amp; Türkiye Mağaza Zincirleri</span>
          </div>
        </div>
      </div>

      {/* Continuous River Flow */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="flex w-max animate-river-continuous">
          {loopReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};
