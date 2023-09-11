import { facebook, instagram, twitter, } from "../public/icons";
import prop1 from "../public/Properties/prop1.webp";
import prop2 from "../public/Properties/prop2.webp";
import prop3 from "../public/Properties/prop3.webp";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#buy", label: "Buy" },
    { href: "#sell", label: "Sell" },
    { href: "#rent", label: "Rent" },
    { href: "#contact-us", label: "Contact Us" },
];

export const footerLinks = [
  {
    title: "Partner Sites",
    links: [
        { name: "Proptiger", link: "/" },
        { name: "Makkan", link: "/" },
        { name: "realestate.com.au", link: "/" },
        { name: "realtor.com", link: "/" },
        { name: "99.c0", link: "/" },
    ],
},
    
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@pinnacle.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];


export const projects = [
    {
      name: "Prestige Elm Park",
      description:
        "Prestige Group has been in the realm of real estate since 1986. Prestige caters to the southern Indian real estate market, covering cities like Bangalore, Mangalore, Kochi, Hyderabad and Goa.",
      tags: [
        {
          name: "luxury",
          color: "text-red-600",
        },
        {
          name: "hospitality",
          color: "text-yellow-600",
        },
        {
          name: "residential",
          color: "pink-text-gradient",
        },
      ],
      image: prop2,
      source_code_link: "https://github.com/",
    },
    {
      name: "Buildiko Spring Woods",
      description:
        "Get ready to enjoy the beauty of nature at Buildiko Spring Woods, Bangalore.All the flats and apartments in the Buildiko Spring Woods project are contemporarily designed to offer residents an unmatched lifestyle.",
      tags: [
        {
          name: "nature",
          color: "text-neutral-700",
        },
        {
          name: "riverside",
          color: "text-rose-400",
        },
        {
          name: "woods",
          color: "text-indigo-400",
        },
      ],
      image: prop1,
      source_code_link: "",
    },
    {
      name: "Brigade Oasis",
      description:
        "Brigade Oasis is a well-planned and strategically located 307 units BHK project located in North Bangalore, Bangalore. The project is spread over acres of landscaped gardens and salubrious environs making living here truly iconic.",
      tags: [
        {
          name: "oasis",
          color: "text-blue-600",
        },
        {
          name: "residential",
          color: "text-neutral-700",
        },
        {
          name: "brigade",
          color: "text-rose-400",
        },
      ],
      image: prop3,
      source_code_link: "https://github.com/",
    },
  ];

  export const testimonials = [
    {
      testimonial:
        "I had a fantastic experience working with your team at Pinnacle Realty. Thanks to Pinnacle Realty, I found the perfect home for my family. Highly recommended!",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: '/image1.jpg',
    },
    {
      testimonial:
        "Working with Pinnacle Realty was a breeze. From the moment I contacted them, I knew I was in good hands. Their expertise in the local real estate market was evident, and their negotiation skills were impressive.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: '/image2.jpg',
    },
    {
      testimonial:
        "I cannot express how thankful I am for the outstanding service provided by this real estate agency. They understood my unique needs and preferences, ensuring that I found a home that matched my lifestyle perfectly.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image:'/image3.jpg' ,
    },
  ];