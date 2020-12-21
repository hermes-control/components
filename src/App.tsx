/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {CardView} from "./components/card/CardView";
import {DialView} from "./components/dial/DialView";
import {ProgressBarView} from "./components/progress-bar/ProgressBarView";

export interface AppProps {

}

export interface AppState {
	i: number;
}

export class App extends React.Component<AppProps, AppState> {

	public constructor(props: AppProps) {

		super(props);
		this.state = {i: 0};
		this.increment = this.increment.bind(this);

	}

	private increment(): void {
		this.setState({i: this.state.i + 1});
	}

	public render(): React.ReactElement {
		return (<div>
			<CardView>
				<span>Hello</span>
				<span>World</span>
			</CardView>
			<DialView name={"Velocity"} unit={"m/s"} min={0} value={this.state.i} max={20} radius={60}/>
			<ProgressBarView min={0} value={this.state.i} max={20}/>
			<button onClick={this.increment}>click</button>
		</div>);
	}

}
