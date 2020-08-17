export default function (doc) {
    if (doc.isBroken) {
      return '/';
    }
     
    if (doc.type === 'projects') {
      return '/projects/' + doc.uid;
    }
   
    return '/';
  };