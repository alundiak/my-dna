export interface GroupInfo {
  idGroup: string;
  idPublic: string;
  myMembership: boolean;
  admin?: boolean | null;

  mtDnaResults?: boolean | null;
  resultsRequireLogin?: boolean | null;
  activityFeed?: boolean | null;
}
