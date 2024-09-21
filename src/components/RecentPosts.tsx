import data from "../data/RecentPosts"
import EachRecentPost from "./EachRecentPost"



const RecentPosts = () => {
  return (
    <section className="secondary_color  ">
        <div className="max-w-5xl mx-auto  ">
            <div className="flex justify-between  p-2 "><h2 className="font-medium">Recent Posts</h2> <span style={{color:"#00A8CC"}}>View all</span></div>
            <div className="flex my-4 flex-col sm:flex-row space-x-2">
                {data.map((post,id)=>{
                    return <EachRecentPost {...post} key={id} />
                })}
            </div>
        </div>
    </section>
  )
}

export default RecentPosts