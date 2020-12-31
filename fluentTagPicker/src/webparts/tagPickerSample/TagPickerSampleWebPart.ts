import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TagPickerSampleWebPartStrings';
import TagPickerSample from './components/TagPickerSample';
import { ITagPickerSampleProps } from './components/ITagPickerSampleProps';

export interface ITagPickerSampleWebPartProps {
  description: string;
}

export default class TagPickerSampleWebPart extends BaseClientSideWebPart<ITagPickerSampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITagPickerSampleProps> = React.createElement(
      TagPickerSample,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
