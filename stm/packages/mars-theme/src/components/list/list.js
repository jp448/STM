import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Table from "./table";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

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
  const page_content = [];
  if (urlParams['type'] !== 'list') {
    {/* Iterate over the items of the list. */}
    {data.items.map(({ type, id }) => {
      const item = state.source[type][id];
      // Render one Item component for each one.
      page_content.push(<Item key={item.id} item={item} />);
    })}
  } else {
    page_content.push(<Table items={data.items}/>);
  }

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      {page_content}
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
