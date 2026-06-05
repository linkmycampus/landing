import { Link2 } from 'lucide-react';

type BrandLogoProps = {
  size?: number;
  className?: string;
};

const BrandLogo = ({ size = 20, className = 'lmc-icon lmc-icon--brand' }: BrandLogoProps) => (
  <Link2 size={size} className={className} aria-hidden />
);

export default BrandLogo;
