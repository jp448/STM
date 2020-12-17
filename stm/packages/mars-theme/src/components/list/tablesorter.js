export function sortItems(tableitems, header, direction) {
    const getData = (item) => {
        if (typeof item === 'string') {
            item = item.toLowerCase();
        }
        return item !== undefined ? item : '99999';
    }

  switch (header) {
      case 'jahr':
          if (direction) {
            tableitems.sort((a, b) => (parseInt(getData(a.acf.year)) > parseInt(getData(b.acf.year))) ? 1 : -1);
          } else {
            tableitems.sort((a, b) => (parseInt(getData(a.acf.year)) < parseInt(getData(b.acf.year))) ? 1 : -1);
          }
          break;
      case 'programm':
          if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.program) > getData(b.acf.program) ) ? 1 : -1);
          } else {
            tableitems.sort((a, b) => (getData(a.acf.program)  < getData(b.acf.program) ) ? 1 : -1);
          }
          break;
    case 'ort':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.location) > getData(b.acf.location) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.acf.location)  < getData(b.acf.location) ) ? 1 : -1);
        }
        break;
    case 'inhalt':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.description) > getData(b.acf.description) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.acf.description)  < getData(b.acf.description) ) ? 1 : -1);
        }
        break;
    case 'wettbewerb':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.competition) > getData(b.acf.competition) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.acf.competition)  < getData(b.acf.competition) ) ? 1 : -1);
        }
        break;
    case 'gebaut':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.built) > getData(b.acf.built) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.acf.built)  < getData(b.acf.built) ) ? 1 : -1);
        }
        break;
    case 'projekt':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.title.rendered) > getData(b.title.rendered) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.title.rendered)  < getData(b.title.rendered) ) ? 1 : -1);
        }
        break;
  }

  return tableitems;      
};