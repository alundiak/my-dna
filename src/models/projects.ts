export interface GroupInfo {
  idGroup: string;
  idPublic: string;
  myMembership: boolean;
  admin: boolean;

  mtDnaResults?: boolean;
  resultsRequireLogin?: boolean;
  activityFeed?: boolean;
}

export interface GroupInfo2 {
  [key: PropertyKey]: string;
}
