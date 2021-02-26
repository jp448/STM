import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { sortItems } from "./tablesorter"
import chevronDown from "./../../img/chevron_down.svg";
import chevronUp from "./../../img/chevron_up.svg";

/**
 * Table Component
 *
 * It renders the table. The table contains
 * - Table headers: the info given for each project (year built etc), are clickable to sort data
 * - Table body: is filled with table rows
 * - Table rows: each row is a project, is clickable and then the images are shown
 */

const Table = ({ state, items }) => {
  const data = state.source.get(state.router.link);
  const [selectedHeader, setSelectedHeader] = useState('');
  const [rowClicked, setRowClicked] = useState(-1);

  let tableheaders = [];
  state.theme.menu.forEach(element =>  { 
      if (element.link === data.link) {
        tableheaders = element.tableheaders;
      } 
   });

  const [sortingState, setSortingState] = useState(new Array(tableheaders.length).fill(false));

  let tableitems = []; // create an item array
  // lets get the item info out of the ids
  data.items.forEach(function({type, id}) {
    tableitems.push(state.source[type][id]);
   });

  const clickHeader = (header) => {
    setSelectedHeader(header);
    const idx = tableheaders.findIndex(obj => { return obj.name === header });
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
      if (selectedHeader === element.name) {
        const idx = tableheaders.findIndex(obj => { return obj.name === selectedHeader });
        const chevron = sortingState[idx] ?  chevronUp : chevronDown; 
        headerdata.push(<TableHeader onClick={() => clickHeader(element.name)}>{element.name}<Chevron src={chevron} key={idx}/></TableHeader>);
      } else {
        headerdata.push(<TableHeader onClick={() => clickHeader(element.name)} key={element.name}>{element.name}</TableHeader>);
      }
  })

  if (selectedHeader.length !== 0) {
    const idx = tableheaders.findIndex(obj => { return obj.name === selectedHeader });
    tableitems = sortItems(tableitems, selectedHeader, sortingState[idx]);
  }

  const getTableElement = (content, hasImages) => {
    return hasImages ? <TableDataWithHover>{formatField(content)}</TableDataWithHover> : <TableData>{formatField(content)}</TableData>;
  }

  const formatField = (content) => {
      if (typeof content === "boolean") {
          return content ? 'x' : '';
      } else {
          return content;
      }
  }

  let tabledata = [];
  {tableitems.map((item, idx) => {
    let hasImage = {}
    let hasHover = false;

    if (idx === rowClicked && item.acf.gallery.length > 0) {
        hasImage = {fontWeight: "bold", color: "#050401"}
        hasHover = true;
    } else if (item.acf.gallery.length > 0) {
        hasHover = true;
    }

    let row_content = [];
    tableheaders.forEach(obj => {
        row_content.push(getTableElement(item[obj.path][obj.resource], hasHover))
    });

        tabledata.push(<TableRow style={hasImage} key={idx} onClick={() => clickRow(idx)}>
        {row_content}
        </TableRow>);

    if (idx === rowClicked && item.acf.gallery.length > 0) {
        let images =  [];
        item.acf.gallery.forEach(image => {
            images.push(<Link link={item.link}>
                    <ProjectImage src={image.sizes.thumbnail} alt={image.description} key={image.id} />
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

export default connect(Table);

const Container = styled.div`
    margin-top: 150px;
    width: 100%;
`;

const TableElement = styled.table`
    border-collapse: collapse;
    width: 100%;
    @media (min-width: 100px) and (max-width: 576px) {
        td:not(:nth-of-type(1)) {
          display: none;
        }
        th:not(:nth-of-type(1)) {
            display: none;
          }
    }
`;

const TableHead = styled.thead`
    border-bottom: 3px solid #050401;
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
    width: 104px;
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
`;

const TableDataWithHover = styled(TableData)`
    cursor: pointer;
    ${TableRow}:hover & {
        color: #050401;
        font-weight: bold;
    }
    @media (min-width: 100px) and (max-width: 576px) {
        font-weight: bold;
    }
`;

const Chevron = styled.img`
    width: 14px;
    display: inline;
    padding-left: 10px;
`;

const ProjectImage = styled.img`
    padding: 5px;
`;