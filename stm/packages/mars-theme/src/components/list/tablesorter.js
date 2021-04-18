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
            tableitems.sort((a, b) => {
                // ensure that empty or null fields are listed last
                if(getData(a.acf.competition) === "" || getData(a.acf.competition) === null) return 1;
                if(getData(b.acf.competition) === "" || getData(b.acf.competition) === null) return -1;
                if(getData(a.acf.competition) === getData(b.acf.competition)) return 0;
                return (getData(a.acf.competition) > getData(b.acf.competition) && getData(b.acf.competition).length > 0) ? 1 : -1;
            });
        } else {
            tableitems.sort((a, b) => (getData(a.acf.competition) < getData(b.acf.competition) ) ? 1 : -1);
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
    case 'auftraggeber':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.client) > getData(b.acf.client) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.acf.client)  < getData(b.acf.client) ) ? 1 : -1);
        }
    break;
    case 'verfahren':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.procedure) > getData(b.acf.procedure) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.acf.procedure)  < getData(b.acf.procedure) ) ? 1 : -1);
        }
        break;
    case 'leistung':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.achievement) > getData(b.acf.achievement) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.acf.achievement)  < getData(b.acf.achievement) ) ? 1 : -1);
        }
        break;
    case 'umfang':
        if (direction) {
            tableitems.sort((a, b) => (getData(a.acf.scope) > getData(b.acf.scope) ) ? 1 : -1);
        } else {
            tableitems.sort((a, b) => (getData(a.acf.scope)  < getData(b.acf.scope) ) ? 1 : -1);
        }
        break;
  }

  return tableitems;      
};