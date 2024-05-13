import React,{useEffect, useState} from 'react';
import './App.css';
import {createBlog, getBlog} from './service/blog'
import {  blog } from './type'
import {Card }from './page/home/Card'

const MyProfileLink = 'https://master--manoj-frontend-engineer-portfolio.netlify.app/'
function App() {
 const [blog, setBlog] = useState<blog[]>([])

  useEffect(()=>{
     getBlogs()
  },[])
  const getBlogs = async () => {
    try {
      const data = await getBlog('blog');
   console.log('blog', data)
    setBlog(data)
      //onClose()
    } catch (err) {
      alert(err)
    }
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try {
      await createBlog('blog', {
        title: "reactjs",
        content: 'false'
      });
      getBlogs()
      //onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleSubmit}>Add</button>
        <p>
        knowledge sharing platform - (development In Progress)
        </p>
        <a
          className="App-link"
          href={MyProfileLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Profile ....
        </a>
      </header>
      <div className='sample-knowlege'>
{blog.map((item:blog)=>{
        return <Card data={item}/>       
})}
      </div>
    </div>
  );
}

export default App;
