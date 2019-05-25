import * as React from 'react';
import styles from './NovTable.module.scss';
import { INovTableProps } from './INovTableProps';
import { ISPListItem } from './ISPListItem';
import { SPHttpClient } from '@microsoft/sp-http';
import { DisplayTable } from './DisplayTable';
import { INovTableState } from './INovTableState';


export default class NovTable extends React.Component<INovTableProps, INovTableState> {
  constructor(props: INovTableProps) {
    super(props);

    this.state = {
      listItems: [] //Initially no items
    };
  }

  private _getListItems(): Promise<ISPListItem[]> { 
    const url = `${this.props.currentContext.pageContext.web.absoluteUrl}/_api/web/lists('${this.props.selectedList}')/items?$select=Title`;

    return this.props.currentContext.spHttpClient.get(url,SPHttpClient.configurations.v1) 
       .then(response => { 
          return response.json(); 
        }, (err: any): void => {
          //Display error
        }) 
      .then(jsonResponse => { 
        if(typeof(jsonResponse.error) !== 'undefined' && jsonResponse.error.message.length > 0) {
          //Display Error
        }
        return jsonResponse.value ? jsonResponse.value : []; 
      }, (err: any): void => {
        //Display Error
      }) as Promise<ISPListItem[]>; 
  } 

  //Initial load
  public componentDidMount(): void {
    this._getListItems()
      .then(response => {
        if(response.length > 0) {
          this.setState({
            listItems: response,
          });
        }
      });
  }

  public render(): React.ReactElement<INovTableProps> {
    let contents: JSX.Element;

    return (
      <div className={ styles.novTable }>
        <DisplayTable itemsToDisplay = {this.state.listItems} /> 
        <DisplayTable itemsToDisplay = {this.state.listItems} />
        <DisplayTable itemsToDisplay = {this.state.listItems} />
      </div>
    );
  }
}
