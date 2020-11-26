import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

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
  const tableheaders = ["Projekte", "Ort", "Zeit", "Kosten"];
  let headerdata = [];
  tableheaders.forEach((element) => {
    headerdata.push(<TableHeader>{element}</TableHeader>);
  })

  let tabledata = [];
  {data.items.map(({type, id }) => {
    const item = state.source[type][id];
    console.log(item)
    tabledata.push(<TableRow>
        <TableData> <Link link={item.link}>{item.title.rendered}</Link></TableData>
        <TableData><Link link={item.link}>{item.acf.location}</Link></TableData>
        <TableData><Link link={item.link}>{item.acf.time}</Link></TableData>
        <TableData><Link link={item.link}>{item.acf.cost}</Link></TableData>
    </TableRow>);
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
    padding-left: 50px;
    padding-right: 15px;
    text-align: left;
`;

const TableBody = styled.tbody`
`;

const TableData = styled.td`
    vertical-align: bottom;
    font-family: 'Cutive Mono', monospace;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 50px;
    padding-right: 15px;
    text-align: left;
    ${TableRow}:hover & {
        border-bottom: 1px solid #050401;
        border-top: 1px solid #050401;
        color: #050401;
        cursor: pointer;
    }
`;





