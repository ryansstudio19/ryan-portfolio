import { photoWidths } from '@/data/site';

/** Responsive WebP from the pre-built set in public/images (base path without "-{width}.webp"). */
export default function Img({
  src,
  alt,
  sizes = '(max-width: 900px) 100vw, 50vw',
  priority = false,
  className,
  style,
  width,
  height,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}) {
  const widths = photoWidths[src];
  if (!widths) {
    // single-size asset (e.g. sky mood images), src is a full path
    return (
      <img src={src} alt={alt} className={className} style={style} loading={priority ? 'eager' : 'lazy'} decoding="async" width={width} height={height} />
    );
  }
  const largest = widths[widths.length - 1];
  return (
    <img
      src={`${src}-${largest}.webp`}
      srcSet={widths.map((w) => `${src}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
