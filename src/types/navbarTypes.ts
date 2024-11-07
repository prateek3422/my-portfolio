export interface LinkType {
  data: {
    name: string;
    link: string;
  };
  index: number;
  Active: boolean;
  setSelectIndicator: {
    (value: string): void;
  };
}
