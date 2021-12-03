function getKW(url) {     //Takes a shopify listing url from search and returns the keyword search to enter the listing
  if (url.indexOf('surface_type=search') !== -1 && url.indexOf('surface_type=search_ad') == -1) {
    let snippet = url.slice(url.indexOf('surface_detail='), url.indexOf('&surface_inter_position=')+1)
    let KW = snippet.slice(snippet.indexOf('=')+1, snippet.indexOf('&')).replace(/\+/g,' ')

    return KW
  }
}

function getPosition(url){    //Takes a shopify listing url from search and returns the position in which your app appeared
  if (url.indexOf('surface_type=search') !== -1 ) {
    let short = url.slice(url.indexOf('surface_intra_position='), url.indexOf('&surface_type=search'))

    return parseInt(short.slice(short.indexOf('=')+1))
  }
}

function getCat(url) { //Cat is for category, it won't get you any felines, does the same thing as getKW() but for categories, obviously
  if (url.indexOf('surface_type=category') !== -1 ) {
    let cat = url.slice(url.indexOf('=')+1, url.indexOf('&')).replace(/\+/g,' ')

    return cat
  }
}

function getPositionCat(url){
  if (url.indexOf('surface_type=category') !== -1 ) {
    let short = url.slice(url.indexOf('surface_intra_position='), url.indexOf('&surface_type=category'))

    return parseInt(short.slice(short.indexOf('=')+1))
  }
}
