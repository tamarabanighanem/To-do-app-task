import React from 'react'
import { Link } from 'react-router-dom';
import {
    Carousel,
    initTE,
} from "tw-elements";

initTE({ Carousel });


function Home() {
    return (
        <>
            {/* Slider of the page */}
            <div
                id="carouselExampleCaptions"
                className="relative"
                data-te-carousel-init=""
                data-te-carousel-slide=""
            >
                {/*Carousel indicators*/}
                <div
                    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators=""
                >
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to={0}
                        data-te-carousel-active=""
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to={1}
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to={2}
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 3"
                    />
                </div>
                {/*Carousel items*/}
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {/*First item*/}
                    <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-active=""
                        data-te-carousel-item=""
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            className="block w-full"
                            alt="an image"
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h4 className="text-xl">Organize your work and life, finally</h4>
                            <p>Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list</p>
                            <Link to="/Login" > <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
                              Log in to start
                            </button></Link>
                        </div>
                    </div>

                    {/*Second item*/}
                    <div
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item=""
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                            className="block w-full"
                            alt="an image"
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">Add your tasks.
                                Organize your life.
                                Achieve more every day</h5>
                            <p>Add tasks like “Read work emails every day at 10am” to fill your to-do list in seconds </p>
                        </div>
                    </div>
                    {/*Third item*/}
                    <div
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item=""
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1644329843283-640d00509d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRvJTIwZG8lMjBsaXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            className="block w-full"
                            alt="an image"
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">Todoist makes it easy to go as simple or as complex as you want</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                {/*Carousel controls - prev item*/}
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide="prev"
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Previous
                    </span>
                </button>
                {/*Carousel controls - next item*/}
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide="next"
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Next
                    </span>
                </button>
            </div>

            {/* End slider */}



    

            <>
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white text-center">-- Features --</h1>
                    <section className="bg-white dark:bg-gray-900">    <div className="container px-6 py-10 mx-auto">
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <span className="inline-block text-blue-500 dark:text-blue-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                                        />
                                    </svg>
                                </span>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                    Organize your tasks
                                </h1>
                                <p className="text-gray-500 dark:text-gray-300">
                                    Determine your tasks and their importance in terms of priorities the most important, then the important, and the least important."

                                </p>
                            </div>
                            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <span className="inline-block text-blue-500 dark:text-blue-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                        />
                                    </svg>
                                </span>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                    Easy access to tasks
                                </h1>
                                <p className="text-gray-500 dark:text-gray-300">
                                    Organizing the site and setting tasks in an easy and fast way that suits the user experience

                                </p>
                            </div>
                            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <span className="inline-block text-blue-500 dark:text-blue-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                </span>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                    Receive notifications to remind you to carry out tasks

                                </h1>
                                <p className="text-gray-500 dark:text-gray-300">
                                    A reminder of your tasks and their access to you according to their importance

                                </p>
                            </div>
                        </div>
                    </div>
                    </section>
                    {/* End this section */}

                    {/* Button to navigate to task */}
                    <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
                        <div className="lg:w-72 px-6 lg:px-0">
                            <div className="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
                                <div className="flex flex-wrap items-center justify-between">
                                    <Link
                                        target="_blank"
                                        to="Task"
                                        className="flex items-center flex-1 w-0"
                                    >
                                        <span className="flex p-2 bg-blue-800 rounded-lg">
                                            <svg
                                                className="h-6 w-6 text-white"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        <p className="ml-3 font-medium tracking-wide text-white truncate">
                                            Start to add task            </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <hr />
            {/* vedio section */}
            <div style={{ display: "flex", marginLeft: "45px", marginTop: "100px", marginBottom: "50px" }}>
                <div className="video-wrapper" style={{ aspectRatio: "16/9", width: "50%" }}>
                    <iframe
                        src="https://www.youtube.com/embed/lgyOc1XR2og"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        style={{ width: "100%", height: "100%" }}
                    ></iframe>
                </div>
                <div style={{ marginLeft: "25px", marginTop: "10px", width: "50%" }}>
                    <div className="font-light text-black-100 sm:text-lg dark:text-black-200">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-5">How do we organize our tasks and deal with them?</h2>
                        <p className="mb-4">And because organizing tasks and putting them in a list is important, we must clarify their writing to follow up on their implementation well and according to priorities.</p>
                        <p> In order to achieve the greatest possible achievement during our day, we must take advantage of it and empty all our tasks and arrange them correctly, and we are here to help you do that.</p>
                    </div>
                </div>
            </div>


        </>


    )
}

export default Home;