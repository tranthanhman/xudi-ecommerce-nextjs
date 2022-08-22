import Link from 'next/link'
import Breadscrumb from '../components/Breadscrumb'
import Catagory from '../components/Catagory'
import Items from '../components/Items'
import NavBar from '../components/layouts/NavBar'
import MiniBanner from '../components/MiniBanner'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <>
      <div className='space-y-2.5'>
      <Catagory />
      <div className='flex gap-10 items-center w-full'>
        {Array(3).fill(0).map((_, i) => (
          <MiniBanner key={i} />
        ))}
      </div>
      <div className='relative flex flex-col gap-1 items-center w-full'>
        <div className='bg-white text-2xl px-4 py-2.5 w-full'>Gợi ý hôm nay</div>
        <div className='sticky grid grid-cols-7 gap-2 w-full'>
          {Array(7).fill(0).map((_, i) => (
            <div key={i} className='w-full border rounded-md'>
              <div className='w-auto h-28 bg-primary'></div>
              <div className='py-2 text-center'>Do gia dung</div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-6  gap-3 w-full'>
          {Array(12).fill(0).map((_, i) => (
            <Link href={'/[id]'} as={`${i}`} key={i}>
              <a>
                <Items key={i} name={'iphone'} rate={5} price={'200.000'} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
    
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
