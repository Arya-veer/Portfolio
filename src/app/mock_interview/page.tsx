import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/services/firebase-config";
import { redirect } from "next/navigation";



export default function MockInterviewForm(){

    async function addResponse(formData:FormData){
        "use server"
        try{
            const docRef = await addDoc(collection(db, "mockInterviewResponses"), {
                name: formData.get('name'),
                email: formData.get('email'),
                date: new Date().toISOString(),
                college: formData.get('college')
            });
        } catch (e){
            console.error("Error adding resume: ", e);
        }
        console.log("Response added");
        redirect(`/mock_interview/`);
    }

    return (
        <div className="p-10 flex flex-col gap-3">
            <p>
                Currently the mock interviews are free. However, if you want to contribute then spread the word about this initiative. Also currently I will take mock interviews of college students only for software development roles. If you are a college student and want to take a mock interview then fill the form below. I will contact you over email for the interview.
                Soon I will start with other roles and also for working professionals. Also we are working on a new platform for this initiative. Stay tuned for more updates.
            </p>
            <form className="mx-auto w-3/4 border border-three flex flex-col gap-2 p-2" action={addResponse}>
                <input type="text" name="name" className="w-full bg-one text-white p-2" placeholder="Name" />
                <input type="email" name="email" className="w-full bg-one text-white p-2" placeholder="Email" />
                <input type="text" name="college" className="w-full bg-one text-white p-2" placeholder="College" />
                <button className="w-fit mx-auto border-2 border-three rounded-lg my-3 bg-one text-white p-2 hover:text-one hover:bg-three hover:border-white hover:font-bold" type="submit">Submit</button>
            </form>
        </div>
    )
}
