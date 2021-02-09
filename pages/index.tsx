import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dopplr - Create beautiful dashboards from SQL queries</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900">
        <h1 className="mb-4 text-5xl font-bold text-white">Dopplr</h1>
        <div className="text-base font-normal text-gray-400">
          Create beautiful dashboards from SQL queries
        </div>
      </div>
    </>
  )
}
