import { Blog } from "../[name]/page";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/services/firebase-config";
import { redirect } from "next/navigation";

export function Comment({blog}:{blog:Blog}){

    async function addComment(formData:FormData){
        "use server"
        try{
            const docRef = await addDoc(collection(db, "comments"), {
                comment: formData.get('comment'),
                date: new Date().toISOString(),
                blog:blog.blogID
            });
            console.log("Document written with ID: ", docRef.id);
            redirect("/blogs")
        } catch (e){
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className="bg-gradient-to-r mt-2 rounded-lg from-gr1a to-gr1b p-[1px]">
            <form className="bg-one border-white rounded-lg flex flex-col gap-4" action={addComment}>
                <textarea name="comment" className="w-full bg-one rounded-t-lg border border-three text-white h-20 p-2" placeholder="Add your comment here" rows={10}></textarea>
                <button className="w-fit mx-auto border-2 border-three rounded-lg my-3 bg-one text-white p-2 hover:text-one hover:bg-three hover:border-white hover:font-bold" type="submit">Comment</button>
            </form>
        </div>
    )
}