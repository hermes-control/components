/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./CardView.css";

export type CardViewAlignment = "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "space-evenly";

export interface CardViewProps {
	className?: string;
	flexDirection?: "row" | "column";
	justifyContent?: CardViewAlignment
	alignItems?: CardViewAlignment;
}

export interface CardViewState {

}

export class CardView extends React.Component<CardViewProps, CardViewState> {

	public constructor(props: CardViewProps) {

		super(props);
		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"CardView" + (this.props.className ? (" " + this.props.className) : (""))}
		style={{
			flexDirection: (this.props.flexDirection === undefined) ? "column" : this.props.flexDirection,
			justifyContent: (this.props.justifyContent === undefined) ? "center" : this.props.justifyContent,
			alignContent: (this.props.alignItems === undefined) ? "center" : this.props.alignItems,
		}}>
			{this.props.children}
		</div>);
	}

}
