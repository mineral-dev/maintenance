import Image from "next/image"

export default function ThePage() {
  return (
    <div className="w-[100dvw] h-[100dvh] grid place-items-center">
      <div className="grid gap-y-4 place-items-center text-center">
        {process.env.NEXT_PUBLIC_LOGO && (
          <Image
            src={process.env.NEXT_PUBLIC_LOGO}
            width={200}
            height={200}
            alt={process.env.NEXT_PUBLIC_SITE_NAME}
          />
        )}
        <h1 className="text-xl font-bold mt-12">
          {process.env.NEXT_PUBLIC_HEADING || "Be right back."}
        </h1>
        <div className="text-sm leading-6">
          {process.env.NEXT_PUBLIC_BODY ? (
            <div
              className="space-y-2"
              dangerouslySetInnerHTML={{ __html: process.env.NEXT_PUBLIC_BODY }}
            />
          ) : (
            <p>
              We&apos;re making updates
              {process.env.NEXT_PUBLIC_SITE_NAME
                ? ` to ${process.env.NEXT_PUBLIC_SITE_NAME}.`
                : "."}
              <br />
              Check back soon.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
