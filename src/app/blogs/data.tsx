import  Introduction  from './blogs/introduction';
import Resume from './blogs/resume-section';
import DSA from './blogs/dsa-section';



export const BLOGS = [
    {
        "title": "Chapter 1: Introduce yourself",
        "link": "/blogs/introduce-yourself",
        "category": "SDE Interview tips",
        "date": "30/06/2024",
        "excerpt":"All of us prepare our DSA from Leetcode and other sources before our SI and placement season. But very few of us know the importance of Introduction. In this blog, I will be discussing the importance of a impactful introduction and how to prepare one.",
        "active":true,
        "component":Introduction,
        "name":"introduce-yourself",
        "blogID":1
    },
    {
        "title": "Chapter 2: Explain your Resume like a Pro",
        "link": "/blogs/resume-section",
        "category": "SDE Interview tips",
        "date": "04/07/2024",
        "excerpt":"Resume Section is the most important part of a technical interview. It explains your experience in the field through projects or internships. In this blog, I will be discussing about the correct way to explain the projects, what kind of questions you might be asked and how to prepare for this segment.",
        "active":true,
        "component":Resume,
        "name":"resume-section",
        "blogID":2
    },
    {
        "title": "Chapter 3: Prepare and Ace DSA section in Interviews",
        "link": "/blogs/dsa-section",
        "category": "SDE Interview tips",
        "date": "25/07/2024",
        "excerpt":"DSA is the most important part of any technical interview. In this blog, I will be discussing the importance of DSA, what kind of questions are asked in this section and how to prepare for the same.",
        "active":true,
        "component":DSA,
        "name":"dsa-section",
        "blogID":3
    }
]