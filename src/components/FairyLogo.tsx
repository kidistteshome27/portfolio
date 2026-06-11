type FairyLogoProps = {
  size?: number
  className?: string
}

export default function FairyLogo({ size = 28, className }: FairyLogoProps) {
  return (
    <img
      src="/favicon.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    />
  )
}
