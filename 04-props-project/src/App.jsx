import React from 'react'
import Template from './components/Template'

const App = () => {

  const arr = [
  {
    brandLogo: "https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/IY6sX2z-2a56kuoR7Ns5eVFJp172yjnPdlOJCbjwJW0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC13/aW5kb3ctbG9nby1l/bWJsZW0tMC5wbmc",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/9Z0JDBVEbi3x-LlIk2q5J2ZqJB0ROWLFq8xtZyNnmUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5ldGZsaXgtbG9n/by1pY29uLXN2Zy1k/b3dubG9hZC1wbmct/NzIyNzIzLnBuZz9m/PXdlYnAmdz0xMjg",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$35/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/RbdHp0YJBVVyaeK90qBK_XHzOFFMmtjaVaMq0KEJfAQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MzU1Lzc3My9zbWFs/bC9tZXRhLWxvZ28t/b24tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/CrJ0rDIL_Noj4pi_IfjkkGLkshPpgCT_9gInauxIQuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXNwb3RpZnktaWNv/bi1zdmctZG93bmxv/YWQtcG5nLTkwODk5/OTYucG5nP2Y9d2Vi/cCZ3PTEyOA",
    name: "Spotify",
    datePosted: "2 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/17Z08VaemRypEXW6ZoaC2OUFu3e5iT08tP7EURsEw9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    name: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/EQwdlPWngRsk7Bq-khWyiqTAAVKr-pWDWchdQruiJnE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2Rzb2Z0LmluL2Js/b2ctaW1hZ2VzLzIw/MTgvMTAvQ3VycmVu/dC1VYmVyLUxvZ28u/anBn",
    name: "Uber",
    datePosted: "4 weeks ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$32/hour",
    location: "Jaipur, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/DIks2Pgq-EmeOn_ma2tywF2ZhCMOflxT7OP4LJrIIco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n",
    name: "Airbnb",
    datePosted: "10 weeks ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/10v2O2sEeoynKw-uWrMv1IxsWxFPWXxzVnhi3kHNF6E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3Rlc2xhLWxv/Z28tNGstZjNrczBv/OW4xY2diYXpuaS5q/cGc",
    name: "Tesla",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Ahmedabad, India"
  }
];
  return (
    <div className='parent'>
      {
      arr.map(function(elem,idx) {
        
        return <div key={idx}>
         <Template 
        logo = {elem.brandLogo}
        name = {elem.name} datePosted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}
             />
             </div>
      })
    }

    </div>
  )
}

export default App
