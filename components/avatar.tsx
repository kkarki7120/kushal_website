import { AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Avatar({ src, alt, className }: { src: string, alt: string, className?: string }) {
  return (
    <AvatarFallback className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt.charAt(0).toUpperCase()}</AvatarFallback>
    </AvatarFallback>
  )
}