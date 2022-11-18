// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogAvaterImg1 from "../images/michael.JPG";
import blogAvaterImg2 from "../images/blog/blog-avater/img-2.jpg";
import blogAvaterImg3 from "../images/blog/blog-avater/img-3.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'An Insight on Money Laundering in Kenya',
        screens: blogImg1,
        description: 'The United States of America state department in 2014 categorised Kenya as safe haven for money laundering in Africa. The actual words were “Kenya is categorised as a Jurisdiction/ country of primary concern in respect of money laundering and financial crimes .”',
        author: 'Michael Owano',
        authorTitle:'Managing Partner',
        authorImg:blogAvaterImg1,
        create_at: '15 NOV,22',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
        p1:'',
        p2:'',
        blockquote:'…One of the reasons for the wide ambit of the definition of “proceeds of crime” is, as the Supreme Court of Appeal noted, that sophisticated criminals will seek to avoid proceeds being confiscated by creating complex systems of “camouflage”',
        social:'https://www.linkedin.com/in/michael-owano-a7580a121/'
    },
    // {
    //     id: '2',
    //     title: 'Domestic Violence in London How a Lawyer Can Help',
    //     screens: blogImg2,
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
    //     author: 'Konal Biry',
    //     authorTitle:'Family Lawyer',
    //     authorImg:blogAvaterImg2,
    //     create_at: '16 AUG,21',
    //     blogSingleImg:blogSingleImg2, 
    //     comment:'80',
    //     blClass:'format-standard-image',
    // },
    // {
    //     id: '3',
    //     title: 'Best Tips First Time Founder When Starting a Business.',
    //     screens: blogImg3,
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
    //     author: 'Jenefer Willy',
    //     authorTitle:'Business Lawyer',
    //     authorImg:blogAvaterImg3,
    //     create_at: '18 AUG,21',
    //     blogSingleImg:blogSingleImg3,
    //     comment:'95',
    //     blClass:'format-video',
    // },
];
export default blogs;