import React, { useState, useEffect } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Table from "./list/table";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import reactCarouselStyles from 'pure-react-carousel/dist/react-carousel.es.css';
import wordpressPageElements from './../css/wordpressPageElements.css';
import Banner from "./banner.js";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions }) => {

  useEffect(() => {
    // if on homepage get content of frist menu link
    if (state.router.link === "/") {
      actions.router.set(state.theme.menu[0].link);
      actions.source.fetch(state.theme.menu[0].link);
    }
  }, []);

  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  
  /** turn off stm first page (false) turn on stm first page (true) */
  const [showIntro, setIntroState] = useState(true);

  function parseURLParams(link) {
    let paramsMap = {};
    const urlParams = link.split('?').filter(i => i.includes('='));
    if (urlParams.length > 0) {
      const urlParamsSeperate = urlParams[0].split('&');
      urlParamsSeperate.forEach(e => {
        let pair = e.split('=');
        if (pair.length > 1) {
          paramsMap[pair[0]] = pair[1];
        }
      });
    }
    return paramsMap;
  }

  const urlParams = parseURLParams(state.router.link);
  let content = [];
  if (showIntro) {
    content = <Main><Banner onClick= {setIntroState} /></Main>;
  } else {
    content = 
            <>
              <HeadContainer>
                <Switch>
                  <Header when={data.isPost} display_nav={false} />
                  <Header display_nav={true} />
                </Switch>
              </HeadContainer>

              {/* Add the main section. It renders a different component depending
              on the type of URL we are in. */}
              <Main>
                <Switch>
                  <Loading when={data.isFetching} />
                  <List when={data.isArchive && urlParams['type'] !== 'list'} />
                  <Table when={data.isArchive && urlParams['type'] === 'list'} />
                  <Post when={data.type === 'post'} />
                  <Page when={data.type === 'page'} />
                  <PageError when={data.isError} />
                </Switch>
              </Main>
            </>
  }

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="de" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      <Global styles={reactCarouselStyles} />
      <Global styles={wordpressPageElements} />

      {/* Add the header of the site. */}
      {content}
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif,
      'Cutive Mono', monospace,
      'Krona One', sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
`;