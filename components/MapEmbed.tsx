interface Props {
  location?: string // lat,lng
}

export default function MapEmbed({ location = '37.7749,-122.4194' }: Props) {
  const [lat, lng] = location.split(',')
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border">
      <iframe src={src} className="w-full h-full" aria-label="Map embed" />
    </div>
  )
}
