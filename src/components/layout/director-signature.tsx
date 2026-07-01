import Image from "next/image"
import { Leaf } from "lucide-react"
import { siteConfig } from "@/lib/config"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

export function DirectorSignature() {
  const { owner } = siteConfig

  return (
    <section className="relative overflow-hidden bg-muted">
      <Leaf
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 text-primary/10"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        {owner.photo ? (
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-card shadow-md sm:h-32 sm:w-32">
            <Image
              src={owner.photo}
              alt={owner.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 112px, 128px"
            />
          </div>
        ) : (
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
            {getInitials(owner.name)}
          </div>
        )}

        <blockquote className="mt-6 text-lg italic text-foreground sm:text-xl">
          &ldquo;{owner.quote}&rdquo;
        </blockquote>

        <p className="mt-4 text-sm text-muted-foreground">{owner.bio}</p>

        <p className="mt-6 font-signature text-4xl text-primary">{owner.name}</p>
        <p className="mt-1 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {owner.title}, {siteConfig.name}
        </p>
      </div>
    </section>
  )
}
