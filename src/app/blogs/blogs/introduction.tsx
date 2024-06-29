


export default function Introduction({blog}:any){
    return (
        <div className="bg-two h-full w-full p-4">
            <h1 className="md:text-3xl text-2xl w-full text-center text-three font-bold">
                {blog.title}
            </h1>
            <div className="mt-3 p-2">
                <p className="md:text-md text-sm text-white">

                </p>
            </div>
        </div>
    )
}