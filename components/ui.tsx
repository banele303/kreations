export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`card ${className || ""}`}>{children}</div>
)

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`card-content ${className || ""}`}>{children}</div>
)

export const Image = ({
  src,
  alt,
  ...props
}: { src: string; alt: string; width?: number; height?: number; className?: string }) => (
  <Image src={src || "/placeholder.svg"} alt={alt} {...props} />
)

