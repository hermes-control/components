/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./ProgressBarView.css";

export interface ProgressBarViewProps {
	min: number;
	value: number;
	max: number;
}

export interface ProgressBarViewState {

}

export class ProgressBarView extends React.Component<ProgressBarViewProps, ProgressBarViewState> {

	public constructor(props: ProgressBarViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {
		let val = ((this.props.value / (this.props.max - this.props.min))) * 100;
		if (val > 100) val = 100;
		if (val < 0) val = 0;
		return (<div className={"ProgressBarView"}>
			<div className={"inner"} style={{width: val + "%"}}/>
		</div>);
	}

}
