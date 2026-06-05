import { Heart, MessageCircle, Send } from 'lucide-react';
import { images } from '../../assets/images';

export default function CampusPostVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[380px]">
      <div className="absolute -left-4 top-8 z-20 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md md:-left-8 md:top-12">
        Campus vibes only ✨
      </div>

      <div className="absolute -bottom-2 -right-2 z-20 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md md:-right-6">
        Early access 🔥
      </div>

      <div className="relative rotate-2 rounded-[1.75rem] bg-white px-3 pb-3 pt-2 shadow-2xl shadow-black/20">
        <div className="aspect-[9/12] overflow-hidden rounded-[1.25rem]">
          <img
            src={images.campusReelsPost}
            alt="Campus reels preview"
            className="block h-[112%] w-full -translate-y-[8%] object-cover object-top"
          />
        </div>

        <div className="mt-3 flex items-center justify-between px-1 text-ink">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              <Heart size={18} className="fill-red-500 text-red-500" />
              2.1k
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-ink/70">
              <MessageCircle size={18} />
              299
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-ink/70">
              <Send size={18} />
              89
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
