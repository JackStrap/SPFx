import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

// import { sp } from '@pnp/sp';

import * as strings from 'TagPickerSampleWebPartStrings';
import TagPickerSample from './components/TagPickerSample';
import { ITagPickerSampleProps } from './components/ITagPickerSampleProps';

export interface ITagPickerSampleWebPartProps {
  description: string;
  tagPickerProps: string;
}

export default class TagPickerSampleWebPart extends BaseClientSideWebPart<ITagPickerSampleWebPartProps> {

  // protected async onInit(): Promise<void> {
	// 	const _ = await super.onInit();
	// 	sp.setup({
	// 		spfxContext: this.context
  //   });
  // }

  public render(): void {
    const element: React.ReactElement<ITagPickerSampleProps> = React.createElement(
      TagPickerSample,
      {
        description: this.properties.description,
        tagPickerProps: this.properties.tagPickerProps
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  // @ts-ignore
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
                }),
								PropertyPaneTextField('tagPickerProps', {
									label: strings.TagPickerPropsFieldLabel
									, multiline: true
									, rows: 15
								})
              ]
            }
          ]
        }
      ]
    };
  }
}
