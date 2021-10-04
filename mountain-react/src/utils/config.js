export const shopcartURL =
  process.env.REACT_APP_shopcartURL || 'http://localhost:3500/api/shopCart/';

export const shopcartPayURL =
  process.env.REACT_APP_shopcartPayURL ||
  'http://localhost:3500/api/shopCart/pay';

export const memberURL =
  process.env.REACT_APP_memberURL || 'http://localhost:3500/api/member/';

export const memberEditURL =
  process.env.REACT_APP_memberEditURL ||
  'http://localhost:3500/api/member/edit';

export const memberRouteURL =
  process.env.REACT_APP_memberRouteURL ||
  'http://localhost:3500/api/member/route';

// TODO: 建立路線地圖之路線星星評分
export const memberStarURL =
  process.env.REACT_APP_memberStarURL ||
  'http://localhost:3500/api/member/star';

export const memberProductURL =
  process.env.REACT_APP_memberProductURL ||
  'http://localhost:3500/api/member/product';

export const memberArticleURL =
  process.env.REACT_APP_memberArticleURL ||
  'http://localhost:3500/api/member/article';

export const memberCommentURL =
  process.env.REACT_APP_memberCommentURL ||
  'http://localhost:3500/api/member/comment';

export const memberOrderURL =
  process.env.REACT_APP_memberOrderURL ||
  'http://localhost:3500/api/member/order';

export const baseZipURL =
  process.env.REACT_APP_zipURL || 'http://localhost:3500/zip';

export const zipURL = baseZipURL + '/zip.json';

export const zipGroupURL = baseZipURL + '/group.json';

export const zipCodeURL = baseZipURL + '/code.json';

//=== recommend url star ===//
export const recommendURL =
  process.env.REACT_APP_recommendURL || 'http://localhost:3500/api/recommend';
//=== recommend url star ===//

//=== googlemap url star ===//
export const apiKey = process.env.REACT_APP_apiKey;
//=== googlemap url end ===//

//=== tag url star ===//
export const tagURL =
  process.env.REACT_APP_tagURL || 'http://localhost:3500/api/tag';
//=== tag url end ===//

//=== comment url star ===//
export const articlecommentURL =
  process.env.REACT_APP_commentURL || 'http://localhost:3500/api/comment';
//=== comment url end ===//

//=== log url star ===//
export const authURL =
  process.env.REACT_APP_authURL || 'http://localhost:3500/api/auth';
//=== log url end ===//

//=== home url star ===//
export const homeURL =
  process.env.REACT_APP_homeURL || 'http://localhost:3500/api/home/';
//=== home url end ===//

//=== comment url star ===//
export const commentURL =
  process.env.REACT_APP_commentURL || 'http://localhost:3500/api/home/comment';
//=== comment url end ===//
//=== comment url star ===//
export const productURL =
  process.env.REACT_APP_productURL || 'http://localhost:3500/api/home/product';
//=== comment url end ===//

//=== for all url star ===//
export const IMAGE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:3500';

export const weatherURL = process.env.REACT_APP_weatherURL;
//=== for all star ===//

//=== map url star ===//
export const mapURL =
  process.env.REACT_APP_mapURL || 'http://localhost:3500/api/map/';
//=== map url end ===//

//=== outfit url star ===//
export const outfitURL =
  process.env.REACT_APP_outfitURL || 'http://localhost:3500/api/outfit/';
//=== outfit url end ===//

//=== shop url star ===//
export const shopURL =
  process.env.REACT_APP_shopURL || 'http://localhost:3500/api/shop/';
//=== shop url end ===//
