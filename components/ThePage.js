import Image from "next/image"

export default function ThePage() {
  return (
    <div className="w-[100dvw] h-[100dvh] grid place-items-center p-8">
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
            <article
              className="prose text-sm"
              dangerouslySetInnerHTML={{ __html: process.env.NEXT_PUBLIC_BODY }}
            />
          ) : (
            <article className="prose text-sm">
              <p>We're currently undergoing essential maintenance to enhance your browsing experience.</p>
              <p>Please bear with us as we work diligently to complete these upgrades.</p>
              <p>We apologize for any inconvenience this may cause and appreciate your patience.</p>
              <p>Thank you for your understanding.</p>
            </article>
          )}
        </div>
      </div>
    </div>
  )
}
