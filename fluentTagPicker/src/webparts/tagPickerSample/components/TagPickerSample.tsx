import * as React from 'react';

import { escape } from '@microsoft/sp-lodash-subset';

import { TagPicker, ITag, IInputProps, IBasePicker, IBasePickerSuggestionsProps } from 'office-ui-fabric-react/lib/Pickers';

import styles from './TagPickerSample.module.scss';
import { ITagPickerSampleProps } from './ITagPickerSampleProps';


interface ITagPickerSampleState {
  itemSelected: string;
  itemSelectedRef: string;
}


export default class TagPickerSample extends React.Component<ITagPickerSampleProps, ITagPickerSampleState> {
  private tagPick: ITag[] = [];
  private pickRef = React.createRef<IBasePicker<ITag>>();

  constructor(props: ITagPickerSampleProps, context: any) {
    super(props, context);

    this.state = {
      itemSelected: ""
      , itemSelectedRef: ""
    };
  }

  //#region LifeCycle
	// Executed before node is added to the DOM - Deprecated
	public async componentWillMount(): Promise<void> {
		// console.log("componentWillMount-deprecated");
	}

	// Executed after node is added to the DOM
	public async componentDidMount(): Promise<void> {
		console.log("componentDidMount");

		// get tag items from property pane
    const tagPickerProps: any = JSON.parse(this.props.tagPickerProps);

		this.tagPick = tagPickerProps.propsPicker.map((item: any) => ({ key: item.value, name: item.name }));

		// select first tag in list
    this.onItemSelected(this.tagPick[0], 'ref');
		this.pickRef.current.items.push(this.tagPick[0]);

	}

	// Executed before component is rendered
	public async componentWillUpdate(): Promise<void> {
		// console.log("componentWillUpdate");
	}

	// Executed after component is rendered
	public async componentDidUpdate(): Promise<void> {
		// console.log("componentDidUpdate");
	}

	// Executed before node is removed from the DOM
	public async componentWillUnMount(): Promise<void> {
		// console.log("componentWillUnMount");
	}
	//#endregion


  public render(): React.ReactElement<ITagPickerSampleProps> {
    const pickerSuggestProps: IBasePickerSuggestionsProps = {
      suggestionsHeaderText: 'Suggested tags',
      noResultsFoundText: 'No Tags Found',
    };

    const inputProps: IInputProps = {
      onBlur: (ev: React.FocusEvent<HTMLInputElement>) => this.onBlurPicker(ev),
      onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called', ev),
      'aria-label': 'Tag picker',
    };

    return (
      <div className={ styles.tagPickerSample }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={`ms-Grid-col ms-md12 ${styles.title}`}>
              Fluent Tag Picker Sample
              <hr/>
            </div>
          </div>
          <div className={ styles.row }>
            <div className="ms-Grid-col ms-md6">
              <div className={ styles.subTitle }>Default Picker</div>
              <TagPicker
                itemLimit={1}
                getTextFromItem={this.getTextFromItem}
                onEmptyInputFocus={() => this.tagPick}
                onResolveSuggestions={this.onFilterChanged}
                onItemSelected={(selectedItem?: ITag)=>this.onItemSelected(selectedItem)}
                pickerSuggestionsProps={pickerSuggestProps}
                inputProps={inputProps}
              />
              <p className={ styles.description }>You selected:
                &#160;<span dangerouslySetInnerHTML={{__html: this.state.itemSelected}} />
              </p>
            </div>
            <div className="ms-Grid-col ms-md6">
              <div className={ styles.subTitle }>First item selected with "componentRef"</div>
              <TagPicker
                componentRef={this.pickRef}
                // styles={{ itemsWrapper: { display: "block" } }}
                itemLimit={1}
                getTextFromItem={this.getTextFromItem}
                onEmptyInputFocus={() => this.tagPick}
                onResolveSuggestions={this.onFilterChanged}
                onItemSelected={(selectedItem?: ITag)=>this.onItemSelected(selectedItem, 'ref')}
                pickerSuggestionsProps={pickerSuggestProps}
                inputProps={{
                  onBlur: (ev: React.FocusEvent<HTMLInputElement>) => this.onBlurPicker(ev, 'ref'),
                  onFocus: (ev: React.FocusEvent<HTMLInputElement>) => {},
                  'aria-label': 'Tag Picker'
                }}
              />
              <p className={ styles.description }>You selected:
                &#160;<span dangerouslySetInnerHTML={{__html: this.state.itemSelectedRef}} />
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }

  private getTextFromItem(item: ITag, currentValue: string): string {
		// console.log("getTextFromItem:", item, "\ncurrentValue:", currentValue);

    return item.name;
	}

	private onFilterChanged = (filterText: string, selectedItems: ITag[]): ITag[] => {
    // console.log('onFilterChanged', filterText, "\nselectedItems:", selectedItems);

    return filterText ? this.tagPick.filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0) : [];
  }

  private onItemSelected = (item: ITag, ref?: string): ITag | null => {
    // console.log("onItemSelected:", item);

    const itemMsg = `item name: <b>${item.name}</b> item key: <b>${item.key}</b>`;

    if (this.stringIsNullOrEmpty(ref)) {
      this.setState({ itemSelected: itemMsg });
    }
    else {
      this.setState({ itemSelectedRef: itemMsg });
    }

    return item;
	}

  private onBlurPicker = (ev: React.FocusEvent<HTMLInputElement>, ref?: string) => {
    // console.log('onBlur called', ev);

    this.stringIsNullOrEmpty(ref) ? this.setState({ itemSelected: null }) : this.setState({ itemSelectedRef: null });
  }

  // borrowed from @pnp/common
  private stringIsNullOrEmpty = (s: string | any[]) => {
    return s === undefined || s === null || s.length < 1;
  }
}
