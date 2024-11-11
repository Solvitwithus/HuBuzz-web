import React ,{useState} from 'react';
import Header from '../Components/Header';
import Body from '../Components/Body';

const Blog = () => {

  const [content, setContent] = useState("general");

  return (
    <div style={{color:"red"}}>
      <Header setCategory={setContent}/>
      <Body category={content}/>
    </div>
  );
}

export default Blog;
