
import { BLOGS } from '../data';


interface BlogProps {
    params: {
        name: string;
    };
}

interface Blog {
    title: string;
    link: string;
    category: string;
    date: string;
    excerpt: string;
    active: boolean;
    component: any;
    name: string;

}

export default function Blog({params}: BlogProps){

    let blog:Blog = BLOGS.find(blog => blog.name === params.name ) || BLOGS[0];
    

    return (
        <div className='p-2 pt-6 h-full w-full '>
            {
                blog ? (blog.component ? <blog.component blog={blog}/> : <p>Blog not found</p>) : <p>Blog not found</p> 
            }
        </div>
    )
}