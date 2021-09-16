export const shopcartURL =
  process.env.REACT_APP_shopcartURL || 'http://localhost:3500/api/shopCart/';

export const memberURL =
  process.env.REACT_APP_memberURL || 'http://localhost:3500/api/member/';

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

export const baseZipURL =
  process.env.REACT_APP_zipURL || 'http://localhost:3500/zip';

export const zipURL = baseZipURL + '/zip.json';

export const zipGroupURL = baseZipURL + '/group.json';

export const zipCodeURL = baseZipURL + '/code.json';
