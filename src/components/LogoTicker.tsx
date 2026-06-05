
import { Activity, ShieldPlus, HeartPulse, Crosshair, Stethoscope } from 'lucide-react';

const LogoTicker = () => {
  return (
    <div className="w-full bg-[#121A28] py-8 overflow-hidden flex flex-col items-center justify-center border-t border-vora-dark/10">
      <div className="flex items-center justify-center gap-16 md:gap-32 text-white/50 w-full max-w-7xl px-8">
        <div className="flex items-center gap-2 font-medium"><HeartPulse size={24} /> HealthCore</div>
        <div className="flex items-center gap-2 font-medium"><ShieldPlus size={24} /> MedGuard</div>
        <div className="flex items-center gap-2 font-medium"><Activity size={24} /> VitalPartners</div>
        <div className="hidden md:flex items-center gap-2 font-medium"><Stethoscope size={24} /> PrimeCare</div>
        <div className="hidden lg:flex items-center gap-2 font-medium"><Crosshair size={24} /> PrecisionHealth</div>
      </div>
    </div>
  );
};

export default LogoTicker;
