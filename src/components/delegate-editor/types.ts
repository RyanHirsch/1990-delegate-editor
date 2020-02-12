export interface DelegateEditorState {}
export interface DelegateEditorAttrs {
  data: PrimaryData;
}

export type PrimaryData = Record<string, CandidateData>;

export interface CandidateData {
  name: string;
  photo: string;
  suspended: string;
  projection: DelegateVotes[];
  delegates: DelegateVotes[];
}

export interface DelegateVotes {
  state: string;
  count: number;
}
