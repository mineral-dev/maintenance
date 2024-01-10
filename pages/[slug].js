import ThePage from "@/components/ThePage"
import Head from "next/head"

export default function Slug() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME || "Maintenance"}</title>
      </Head>
      <ThePage />
    </>
  )
}
