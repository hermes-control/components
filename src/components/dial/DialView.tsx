/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./DialView.css"

export interface DialViewProps {
	name: string;
	unit: string;
	min: number;
	value: number;
	max: number;
	decimalPlaces?: number;
	primaryColor?: string;
	secondaryColor?: string;
	radius?: number;
}

export interface DialViewState {

}

export class DialView extends React.Component<DialViewProps, DialViewState> {

	public constructor(props: DialViewProps) {

		super(props);

	}

	public render(): React.ReactElement {

		let value = this.props.value;
		if (value > this.props.max) value = this.props.max;
		if (value < this.props.min) value = this.props.min;

		const r = this.props.radius || 40;
		const p = (value - this.props.min) / (this.props.max - this.props.min);
		const c = r + 8;
		const s = r / 12;
		const container = c * 2;
		const circumference = r * 2 * Math.PI;

		return (<div className={"DialView"} style={{
			width: container,
			height: container
		}}>
			<div className={"textContainer"}>
				<span className={"name"} style={{
					fontSize: r / 5
				}}>{this.props.name}</span>
				<span className={"value"} style={{
					fontSize: r / 2,
					color: this.props.primaryColor
				}}>{this.props.value.toFixed(this.props.decimalPlaces === undefined ? 0 : this.props.decimalPlaces)}</span>
				<span className={"unit"} style={{
					fontSize: r / 4
				}}>{this.props.unit}</span>
			</div>
			<svg
				width={container}
				height={container}
				className={"circle"}>
				<circle
					cx={c}
					cy={c}
					r={r}
					stroke={this.props.secondaryColor || "grey"}
					fill={"transparent"}
					style={{
						strokeDashoffset: circumference - 0.75 * circumference,
						strokeDasharray: `${circumference} ${circumference}`,
						transform: 'rotate(135deg)',
						transformOrigin: "50% 50%"
					}}
					strokeWidth={s + (r/10)}/>
				<circle
					style={{
						strokeDashoffset: circumference - p * 0.75 * circumference,
						strokeDasharray: `${circumference} ${circumference}`,
						transform: 'rotate(135deg)',
						transformOrigin: "50% 50%"
					}}
					stroke={this.props.primaryColor || "white"}
					strokeWidth={s}
					fill="transparent"
					r={r}
					cx={c}
					cy={c}/>
			</svg>
		</div>);
	}

}
