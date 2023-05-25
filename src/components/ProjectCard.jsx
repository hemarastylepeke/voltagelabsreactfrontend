import React from 'react'

const ProjectCard = ({ content, title, img}) =>  (
    <div class="flex justify-between flex-col rounded-[20px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <a href="#">
            <img src={img} alt={title} class="rounded-t-lg" />
        </a>
    <div class="p-5">
        <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="font-barlow mb-3 font-normal text-dimWhite">{content}</p>
        <div class="flex flex-wrap">
            <a href="">
                <a href="https://www.guruwritershub.com/">
                    <button class="get-quote-btn-grad font-barlow rounded-md font-medium text-[18px] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white">Read More</button>
                </a>
            </a>
        </div>
    </div>
</div>
)
export default ProjectCard