import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface INovTableProps {
  selectedList: string | string[];
  currentContext: WebPartContext;
}
