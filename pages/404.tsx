import Link from 'next/link'

const NotFound: React.FunctionComponent = () => {
  return (
    <div className="mt-[24rem] flex flex-col justify-center">
      <div className="w-full p-4 mx-auto lg:w-3/4">
        <h4 className="mb-6 font-serif text-3xl font-semibold lg:text-4xl xl:text-5xl">
          404 - Page Not Found
        </h4>
        <div className="flex gap-x-2">
          <Link href="/">
            <a className="px-3 py-1 border border-black rounded-full">Home</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
