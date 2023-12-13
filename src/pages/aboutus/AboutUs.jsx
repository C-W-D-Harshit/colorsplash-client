import styles from "./aboutus.module.css"











//                 <div>
//                     <strong> Shop with Confidence</strong>
//                     <p>With <span>Color Splash</span>, you can shop with confidence, knowing that  {"you're"} choosing more than just clothing;{"you're"} choosing a brand that celebrates your individuality and values your impact on the world.
//                     </p>
//                 </div>


//                 <div className={styles.last}>


//                     <h2>Thank you for choosing Color Splash </h2>

//                     <span>
//                         We look forward to being a part of your style journey.</span>
//                 </div>
//             </div>
//         </div>



const AboutUs = () => {
    return (

        <div className='mb-4'>
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className={styles.headingContainer} >
                    <h1 className={styles.h1}>About Us</h1>
                </div>

                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl font-medium ">
                                Our Mission
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                    alt="Party"
                                    src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">
                                    <p> At  <span>Color Splash</span>, our mission is to provide high-quality, sustainable, and stylish clothing for people who embrace individuality. We believe that what you wear should be a reflection of your personality and values. {"We're"} committed to delivering fashion that not only makes you look good but also feel confident and true to yourself.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl font-medium ">
                                Quality and Sustainability
                            </h2>
                        </div>

                        <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">
                                    <p> We take pride in the craftsmanship of our products. Every piece in our collection is designed with meticulous attention to detail, ensuring comfort, durability, and timeless style. {"We're"} also dedicated to sustainability, using eco-friendly materials and ethical production practices whenever possible.</p>
                                </article>
                            </div>
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                    alt="Party"
                                    src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl font-medium ">
                                Our Team
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                    alt="Party"
                                    src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">
                                    <p>Our team consists of fashion enthusiasts, designers, and artisans who share a common vision for creating clothing that transcends trends and fosters self-expression.{"We're"} constantly exploring new ideas and pushing the boundaries of fashion to bring you innovative and unique designs.</p>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl font-medium ">
                                Community Engagement
                            </h2>
                        </div>

                        <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">
                                    <p>Beyond our commitment to fashion, we believe in giving back to the community. We actively support various social and environmental causes, and {"we're"} dedicated to making a positive impact on the world.</p>
                                </article>
                            </div>
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                    alt="Party"
                                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl font-medium ">
                                Customer-Centric Approach
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                    alt="Party"
                                    src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">

                                    <p>Our customers are at the heart of everything we do. {"We're"} here to listen to your needs, answer your questions, and provide you with the best shopping experience. Your feedback helps us grow and improve, and we value your trust in us</p>

                                </article>
                            </div>
                        </div>
                    </div>


                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl font-medium ">
                                Connect with Us
                            </h2>
                        </div>

                        <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">
                                    <p>We invite you to be a part of our journey. Connect with us on social media, subscribe to our newsletter, and join the <span>Color Splash</span> community. {"We're"} excited to share our latest collections, fashion tips, and stories with you.</p>
                                </article>
                            </div>
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                    alt="Party"
                                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl font-medium ">
                                Shop with Confidence
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                    alt="Party"
                                    src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">
                                    <p>With <span>Color Splash</span>, you can shop with confidence, knowing that  {"you're"} choosing more than just clothing;{"you're"} choosing a brand that celebrates your individuality and values your impact on the world.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>

    )
}

export default AboutUs