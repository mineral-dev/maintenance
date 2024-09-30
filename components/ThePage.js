import Image from "next/image"
import { useEffect } from "react"

import LogoPotatoHead from "./LogoPotatoHead"

export default function ThePage() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DARKMODE) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <div className="w-[100dvw] h-[100dvh] grid place-items-center p-8">
      <div className="grid gap-y-4 place-items-center text-center">
        {process.env.NEXT_PUBLIC_USE_POTATOHEAD_LOGO && <LogoPotatoHead />}

        {!process.env.NEXT_PUBLIC_USE_POTATOHEAD_LOGO ? (
          process.env.NEXT_PUBLIC_LOGO ? (
            <Image
              src={process.env.NEXT_PUBLIC_LOGO}
              width={100}
              height={100}
              alt={process.env.NEXT_PUBLIC_SITE_NAME}
            />
          ) : (
            <h1 className="text-3xl font-bold">
              {process.env.NEXT_PUBLIC_SITE_NAME ?? "We Are Sorry."}
            </h1>
          )
        ) : (
          ""
        )}

        <h2 className="text-xl font-bold mt-12">
          {process.env.NEXT_PUBLIC_HEADING ?? "Be right back."}
        </h2>

        <div className="text-sm leading-6">
          {process.env.NEXT_PUBLIC_BODY ? (
            <article
              className="prose text-sm dark:prose-p:text-white dark:prose-a:text-white"
              dangerouslySetInnerHTML={{ __html: process.env.NEXT_PUBLIC_BODY }}
            />
          ) : (
            <article className="prose prose-p:mt-0 prose-p:mb-2 text-xs lg:text-sm dark:prose-p:text-white dark:prose-a:text-white">
              <p>
                We&apos;re doing some quick maintenance to improve your browsing experience.
              </p>
              <p>
                Don&apos;t worry, your transactions and account information are
                safe and won&apos;t be affected.
              </p>
              <p>
                We&apos;re sorry for any inconvenience and appreciate your patience.
              </p>
              <p>&nbsp;</p>
              <p>Terima kasih!</p>
            </article>
          )}
        </div>
      </div>
    </div>
  )
}
