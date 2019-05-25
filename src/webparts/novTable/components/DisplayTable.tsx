import * as React from 'react';
import styles from './NovTable.module.scss';
import { ISPListItem } from './ISPListItem';


export interface TableData {
    itemsToDisplay: ISPListItem[];
}

export class DisplayTable extends React.Component<TableData,{}> {
    constructor(props:TableData) {
        super(props);
    }
   
    public render(): React.ReactElement<any> {
        return(
            <div>
                <h3>Table</h3>
                { 
                    this.props.itemsToDisplay &&
                    this.props.itemsToDisplay.map((listItem) => 
                        <div>
                             {/*
                                Display data in tabular format 
                                */}
                            <h2>{listItem.Title}</h2>
                        </div>
                    ) 
                }
            </div>
        );
    }
}