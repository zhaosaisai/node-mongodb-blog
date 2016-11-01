export function $(attr){
  return document.querySelector(attr);
}

export function $all(attr){
  return document.querySelectorAll(attr);
}

export function formatDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  day = day < 10 ? '0' + day : day;

  return `${year}年${month}月${day}日`;
}

export function getId (){
  let query = location.search.slice(1);
  let querymap = {};

  query.split('&').forEach((v) => {
    let v2 = v.split('=');
    querymap[v2[0]] = v2[1];
  })
  return querymap;
}


export function getRanLength(str){
  return str.substring(0, Math.round(Math.random()*100 + 100));
}
