import * as React from 'react';
import styles from './NovTable.module.scss';

export interface UserInfoProps {
    userInfo: any;
    showUserInfoPanel: boolean;
}

export class UserInfoPanel extends React.Component<UserInfoProps,{}> {
    constructor(props:UserInfoProps) {
        super(props);
    }
   
    public render(): React.ReactElement<any> {
        return(
            <div>
                
            </div>
        );
    }

    
    
}