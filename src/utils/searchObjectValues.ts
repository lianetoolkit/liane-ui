function trimString(s: string) {
  var l = 0,
    r = s.length - 1;
  while (l < s.length && s[l] === ' ') l++;
  while (r > l && s[r] === ' ') r -= 1;
  return s.substring(l, r + 1);
}

function compareObjects(o1: Array<Object>, o2: Array<Object>) {
  var k = '';
  for (k in o1) if (o1[k] !== o2[k]) return false;
  for (k in o2) if (o1[k] !== o2[k]) return false;
  return true;
}

function itemExists(haystack: Array<Object[]>, needle: Object[]) {
  for (var i = 0; i < haystack.length; i++)
    if (compareObjects(haystack[i], needle)) return true;
  return false;
}

function searchFor(objects: any, toSearch: string) {
  var results = [];
  toSearch = trimString(toSearch); // trim it
  for (var i = 0; i < objects.length; i++) {
    for (var key in objects[i]) {
      if (objects[i][key].indexOf(toSearch) !== -1) {
        if (!itemExists(results, objects[i])) results.push(objects[i]);
      }
    }
  }
  return results;
}

//var options = [
//{
//"foo" : "bar",
//"bar" : "sit"
//},
//{
//"foo" : "lorem",
//"bar" : "ipsum"
//},
//{
//"foo" : "dolor blor",
//"bar" : "amet blo"
//}
//];

//const options = [
//{ value: 'chocolate', label: 'Chocolate' },
//{ value: 'strawberry', label: 'Strawberry' },
//{ value: 'vanilla', label: 'Vanilla' },
//{ value: 'vanilla', label: 'Vanilla' },
//];

//console.log(searchFor(options, 'choco'));

export default searchFor;
