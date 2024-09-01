import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../../../components/banner";
import Icon from "../../../components/icon/icon";
import Divider from "../../../components/divider/divider";
import dynamic from "next/dynamic";
import styles from "./markdown.module.scss";
import Navigator from "../../../components/navigator";
import Footer from "../../../components/footer";
import { GenericLoader } from "../../../components/genericLoader";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });
const s3HostUrl =
  "https://clarence-webprofile-articles.s3.ap-southeast-1.amazonaws.com/projects";

const ProjectDescription = (props) => {
  const { id } = props;
  const [project, setProject] = useState({});
  const [mdText, setMdText] = useState();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    fetch(`${s3HostUrl}/${id}/info.json`).then((data) =>
      data.json().then((json) => {
        setProject(json);
        fetch(`${s3HostUrl}/${id}/article.md`).then((data) =>
          data.text().then((body) => {
            setMdText(body);
          })
        );
      })
    );
  };

  if (!mdText || !project || true) {
    return (
      <div className="flex w-screen h-screen text-white justify-center align-middle items-center bg-black">
        <div className="w-max h-max -mt-20">
          <div className="w-fit h-fit">L O A D I N G</div>
          <div className="flex mt-2 h-12 w-24 items-center justify-center">
            <GenericLoader />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Head>
        <title>Project</title>
      </Head>
      <Banner route="<Project/>" />
      <div className="flex justify-center px-6 sm:px-40 md:px-40 py-4 sm:py-10 bg-white mt-20">
        <div className="max-w-2xl">
          <Navigator />
          <div className="flex w-full gap-x-4">
            <div>
              <Icon src="/assets/folder.svg" />
            </div>
            <div>
              <div>{project["title"]}</div>
              <div className="text-xs text-gray-600">{project["platform"]}</div>
            </div>
          </div>
          <Divider />
          <div className="w-full mt-4">
            <div className={styles["markdown"]}>
              <ReactMarkdown>{mdText}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

ProjectDescription.getInitialProps = async (ctx) => {
  const d = {
    id: ctx.query.id,
  };

  return d;
};

export default ProjectDescription;
