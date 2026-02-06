import React, { useState, useEffect, useRef } from 'react';
import { storageService } from '../services/storageService';
import { Campaign, CarouselItemType } from '../types';
import {
  ChevronRight,
  ChevronLeft,
  Cpu,
  Globe,
  Leaf,
  Megaphone,
  Users,
  ShoppingBag,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

export const FuturisticCarousel: React.FC = () => {
  const [items, setItems] = useState<Campaign[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const campaignData = await storageService.getCampaigns();
        setItems(campaignData);
      } catch (e) {
        console.error('Transmission error:', e);
      }
      setLoading(false);
    };
    loadContent();
  }, []);

  useEffect(() => {
    if (loading || isPaused || items.length === 0) return;

    const duration = 5000;
    const startTime = Date.now();

    const animate = () => {
      if (isPaused) return;

      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setActiveIndex(prev => (prev + 1) % items.length);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [activeIndex, isPaused, loading, items.length]);

  const handleManualNav = (direction: 'next' | 'prev') => {
    if (progressRef.current) progressRef.current.style.width = '0%';

    setActiveIndex(prev => {
      if (direction === 'next') return (prev + 1) % items.length;
      return (prev - 1 + items.length) % items.length;
    });
  };

  const getTypeIcon = (type: CarouselItemType) => {
    switch (type) {
      case 'news':
        return <Globe size={14} />;
      case 'eco':
        return <Leaf size={14} />;
      case 'advert':
        return <Megaphone size={14} />;
      case 'product':
        return <ShoppingBag size={14} />;
      case 'customer':
        return <Users size={14} />;
      default:
        return <Sparkles size={14} />;
    }
  };

  const getTypeColor = (type: CarouselItemType) => {
    switch (type) {
      case 'news':
        return 'bg-blue-500';
      case 'eco':
        return 'bg-emerald-500';
      case 'advert':
        return 'bg-orange-500';
      case 'product':
        return 'bg-nova-500';
      case 'customer':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="w-full h-[550px] glass-panel rounded-[3rem] flex items-center justify-center">
        <Cpu className="text-nova-400 animate-spin" size={48} />
      </div>
    );
  }

  if (items.length === 0) return null;

  const currentItem = items[activeIndex];

  return (
    <div className="w-full">
      {/* ================= CAROUSEL ================= */}
      <div
        className="
          relative w-full
          h-[180px] sm:h-[240px] md:h-[350px] lg:h-[550px]
          overflow-hidden rounded-3xl
          bg-nova-900 border border-white/10 group
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0">
          {currentItem.image ? (
            <img
              src={currentItem.image}
              alt=""
              className="
                w-full h-full object-cover
                transition-transform duration-[5000ms]
                group-hover:scale-105
              "
              fetchPriority={activeIndex === 0 ? 'high' : 'low'}
            />
          ) : (
            <div className="w-full h-full bg-nova-900" />
          )}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 sm:h-1.5 bg-white/5 pointer-events-none z-10">
          <div
            ref={progressRef}
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: '0%' }}
          />
        </div>

        {/* Navigation */}
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-16 flex gap-3 z-20">
          <button
            onClick={() => handleManualNav('prev')}
            className="p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-90"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => handleManualNav('next')}
            className="p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-90"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <section className="mt-6 sm:mt-8 md:mt-10 max-w-5xl px-4">
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span
            className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white ${getTypeColor(
              currentItem.contextType as CarouselItemType
            )}`}
          >
            {getTypeIcon(currentItem.contextType as CarouselItemType)}
            {currentItem.tag}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
          {currentItem.headline}
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-5 sm:mb-6">
          {currentItem.summary}
        </p>

        {currentItem.url && (
          <button
            onClick={() => window.open(currentItem.url, '_blank')}
            className="inline-flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-lg sm:rounded-xl bg-white text-nova-900 font-bold uppercase tracking-widest text-[10px] sm:text-[11px] hover:bg-nova-400 hover:text-white transition-all active:scale-95"
          >
            Learn More
            <ArrowUpRight size={16} />
          </button>
        )}
      </section>
    </div>
  );
};
