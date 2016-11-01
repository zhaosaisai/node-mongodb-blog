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
