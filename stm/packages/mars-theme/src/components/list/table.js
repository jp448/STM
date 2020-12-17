import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { sortItems } from "./tablesorter"

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Table = ({ state, items }) => {

  const data = state.source.get(state.router.link);
  const [sortingState, setSortingState] = useState([false, false, false, false, false, false, false]);
  const [sort, setSort] = useState('');
  const [rowClicked, setRowClicked] = useState(-1);

  let tableitems = []; // create an item array
  // lets get the item info out of the ids
  data.items.forEach(function({type, id}) {
    tableitems.push(state.source[type][id]);
   });

  const tableheaders = ["projekt", "jahr", "ort", "programm", "inhalt", "wettbewerb", "gebaut"]; 

  const clickHeader = (header) => {
    setSort(header);
    const idx = tableheaders.indexOf(header);
    console.log(idx);
    let copyState = [...sortingState];
    copyState[idx] = !copyState[idx];
    setSortingState(copyState);
    setRowClicked(-1);
  }

  const clickRow = (idx) => {
    if (idx === rowClicked) {
        idx = -1;
    }
    setRowClicked(idx);
  }

  let headerdata = [];
  tableheaders.forEach((element) => {
    headerdata.push(<TableHeader onClick={() => clickHeader(element)}>{element}</TableHeader>);
  })

  if (sort.length !== 0) {
    const idx = tableheaders.indexOf(sort);
    tableitems = sortItems(tableitems, sort, sortingState[idx]);
  }
  
  let tabledata = [];
  {tableitems.map((item, idx) => {
    const hasImages = item.acf.gallery.length > 0 ? {cursor: "pointer"} : {};
    tabledata.push(<TableRow style={hasImages} onClick={() => clickRow(idx)}>
        <TableData>{item.title.rendered}</TableData>
        <TableData><Link link={item.link}>{item.acf.year}</Link></TableData>
        <TableData><Link link={item.link}>{item.acf.location}</Link></TableData>
        <TableData><Link link={item.link}>{item.acf.program}</Link></TableData>
        <TableData><Link link={item.link}>{item.acf.description}</Link></TableData>
        <TableData><Link link={item.link}>{item.acf.competition}</Link></TableData>
        <TableData><Link link={item.link}>{item.acf.built ? "x" : ""}</Link></TableData>
    </TableRow>);
    if (idx === rowClicked && item.acf.gallery.length > 0) {
        let images =  [];
        item.acf.gallery.forEach(image => {
            images.push(<Link link={item.link}>
                    <img src={image.sizes.thumbnail} alt={image.description} />
                </Link>);
        });
        tabledata.push(<TableRow><TableData colSpan='7'>{images}</TableData></TableRow>);
    }
  })}

  return (
    <Container>
        <TableElement>
            <TableHead>
                <TableRow>
                    {headerdata}
                </TableRow>
            </TableHead>
            <TableBody>
                {tabledata}
            </TableBody>
        </TableElement>
    </Container>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Table);

const Container = styled.div`
    margin-top: 80px;
    width: 100%;
`;

const TableElement = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const TableHead = styled.thead`
    & > tr:hover {
        border: none;
        cursor: pointer;
    } 
`;

const TableRow = styled.tr`
    color: grey;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;  
`;

const TableHeader = styled.th`
    text-align: left;
    color: #050401;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
`;

const TableBody = styled.tbody`
`;

const TableData = styled.td`
    text-align: center; 
    vertical-align: middle;
    font-family: 'Cutive Mono', monospace;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
    ${TableRow}:hover & {
        border-bottom: 1px solid #050401;
        border-top: 1px solid #050401;
        color: #050401;
    }
    
`;





