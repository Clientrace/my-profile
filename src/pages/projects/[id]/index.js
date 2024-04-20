import Head from "next/head";
import { useEffect } from "react";
import Banner from "../../components/banner";



const ProjectDescription = (props) => {
  const { id } = props;


  useEffect(()=>{

  },[])


  return <div className="w-full">
    <Banner/>
  </div>
}


ProjectDescription.getInitialProps = async (ctx) => {
  const d = {
    id: ctx.query.id
  }
  return d;
}

export default ProjectDescription;

