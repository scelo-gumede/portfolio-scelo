
interface PostProps{
    title:string,
    date:string,
    type:string,
    message:string,
}



const EachRecentPost = (props:PostProps) => {
    const {title,date,message,type}=props

  return (
    <article className="grow bg-white rounded-md border-2 border-red-600 border-solid my-8">
        <div className="m-4">
        <h2 className="text-3xl">{title}</h2>

        <div className="flex space-x-5"><p>{date}</p> <span>|</span> <p></p>{type}</div>

        <p className="pr-5">{message}</p>
        </div>
    </article>
  )
}

export default EachRecentPost