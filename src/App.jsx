import React from 'react'
import Card from './assets/Components/Card.jsx'



export const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzf-mFSVPG0NB4zca3DW3zh0EEgYKyyjrmNg&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45, // dollars per hour
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Remote, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Noida, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
    companyName: "IBM",
    datePosted: "6 weeks ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt02Pvocmj2bC5dPEWVClHVw843KI_a6yNw&s",
    companyName: "Oracle",
    datePosted: "2 months ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 58,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/960px-Salesforce.com_logo.svg.png",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    post: "CRM Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 52,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvzsAEIR1wviJgcKy2z3wYOQMjKrdtgVRUw&s",
    companyName: "Tesla",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 68,
    location: "Remote, India"
  }
];

console.log(jobOpenings);

  return (

    <div className="parents">
{jobOpenings.map(function(elem){

return <Card company={elem.companyName} datepost={elem.datePosted} post={elem.post} tag11={elem.tag1} tag22={elem.tag2} 

paying ={elem.pay} location={elem.location} logo={elem.brandLogo}/>





})}
    
    

    </div>
  )
}
export default App;