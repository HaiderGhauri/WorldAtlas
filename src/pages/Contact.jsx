export function Contact () {
    return (
        <section>
            <div className="max-w-xl w-[90%] mx-auto my-15 flex flex-col gap-9">
                <h1 className="text-2xl sm:text-3xl">
                    Contact Us</h1>
                <hr />

                <div>
                    <form className="bg-neutral-800 px-8 py-6 flex flex-col gap-5"
                    action="">
                        <div className="flex flex-col gap-2">
                            <label>Name</label>
                            <input className="bg-neutral-700 outline-0 p-1"
                            type="text"
                            placeholder="Name"
                            name="name" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Email</label>
                            <input className="bg-neutral-700 outline-0 p-1" 
                            type="email"
                            placeholder="Email"
                            name="email" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Message</label>
                            <textarea
                             className="bg-neutral-700 outline-0 p-1 h-30" 
                            name="message">
                            </textarea>
                        </div>

                        <button className="bg-neutral-700 px-2 py-1 sm:px-4 sm:py-1.5 mt-5 rounded-lg border text-start"> 
                            Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};