import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../../../components/banner";
import Markdown from "react-markdown";
import Icon from "../../../components/icon/icon";
import Divider from "../../../components/divider/divider";
import dynamic from "next/dynamic";

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false })
const s3HostUrl = "https://clarence-webprofile-articles.s3.ap-southeast-1.amazonaws.com/projects";

const ProjectDescription = (props) => {
  const { id } = props;
  const [project, setProject] = useState({});
  const [mdText, setMdText] = useState();

  useEffect(() => {
    getArticle();
  }, [])

  const getArticle = async () => {
    fetch(`${s3HostUrl}/${id}/info.json`).then((data) => data.json().then(json => {
      setProject(json);
      fetch(`${s3HostUrl}/${id}/article.md`).then((data) => data.text().then(body => {
        setMdText(body)
      }));
    }));

  }

  if (!mdText || !project) {
    return <div className="flex w-screen h-screen text-white justify-center align-middle bg-black">
      L O A D I N G
    </div>
  }


  return <div className="w-full">
    <Head>
      <title>Project</title>
    </Head>
    <Banner route="<Project/>" />

    <div className="flex justify-center px-6 sm:px-40 md:px-40 py-4 sm:py-10 bg-white mt-20">
      <div className="max-w-2xl">
        <div className="flex w-full gap-x-4">
          <div>
            <Icon src="/assets/folder.svg" />
          </div>
          <div>
            <div>
              {project['title']}
            </div>
            <div className="text-xs text-gray-600">
              {project['platform']}
            </div>
          </div>
        </div>
        <Divider />
        <div className="w-full mt-4">
          <ReactMarkdown>
            {mdText}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  </div>
}


ProjectDescription.getInitialProps = async (ctx) => {
  const d = {
    id: ctx.query.id
  }


  return d;
}

export default ProjectDescription;

