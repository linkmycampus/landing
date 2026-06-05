interface SectionWatermarkProps {
  text?: string;
  variant?: 'light' | 'dark';
}

const SectionWatermark = ({ text = 'LinkMyCampus', variant = 'light' }: SectionWatermarkProps) => (
  <div className={`section-watermark section-watermark--${variant}`} aria-hidden="true">
    {text}
  </div>
);

export default SectionWatermark;
