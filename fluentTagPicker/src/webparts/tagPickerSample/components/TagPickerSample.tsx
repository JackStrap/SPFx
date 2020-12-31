import * as React from 'react';
import styles from './TagPickerSample.module.scss';
import { ITagPickerSampleProps } from './ITagPickerSampleProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TagPickerSample extends React.Component<ITagPickerSampleProps, {}> {
  public render(): React.ReactElement<ITagPickerSampleProps> {
    return (
      <div className={ styles.tagPickerSample }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
