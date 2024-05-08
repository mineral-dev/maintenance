import ThePage from "@/components/ThePage"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME || "Maintenance"}</title>
      </Head>
      <ThePage />
    </>
  )
}

export async function getServerSideProps(context) {
  // Your logic to determine the HTTP status code
  const statusCode = 503; // For example, setting 404 Not Found

  // Setting the status code
  context.res.statusCode = statusCode;

  // Returning props
  return {
      props: {
        // Your props here
      }
  };
}
